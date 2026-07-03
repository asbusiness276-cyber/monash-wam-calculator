/**
 * Smoke tests for calculator maths (mirrors src/utils/monashGrades.ts).
 * Run: npm run test:calculators
 */

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function getMonashGradeFromMark(mark) {
  const bands = [
    { grade: 'HD', min: 80, max: 100, gpa4: 4.0 },
    { grade: 'D', min: 70, max: 79, gpa4: 3.0 },
    { grade: 'C', min: 60, max: 69, gpa4: 2.0 },
    { grade: 'P', min: 50, max: 59, gpa4: 1.0 },
    { grade: 'N', min: 0, max: 49, gpa4: 0.0 },
  ];
  if (Number.isNaN(mark) || mark < 0 || mark > 100) return null;
  return bands.find(b => mark >= b.min && mark <= b.max) ?? null;
}

function mapGpaToMonashBand(gpa, scaleMax) {
  if (Number.isNaN(gpa) || gpa < 0 || gpa > scaleMax) return null;
  const thresholds =
    scaleMax === 4
      ? [
          { min: 3.5, grade: 'HD' },
          { min: 2.5, grade: 'D' },
          { min: 1.5, grade: 'C' },
          { min: 0.5, grade: 'P' },
          { min: 0, grade: 'N' },
        ]
      : [
          { min: 6.5, grade: 'HD' },
          { min: 5.5, grade: 'D' },
          { min: 4.5, grade: 'C' },
          { min: 3.5, grade: 'P' },
          { min: 0, grade: 'N' },
        ];
  return thresholds.find(e => gpa >= e.min)?.grade ?? null;
}

function getMonashYearLevelWeight(yearLevel) {
  return yearLevel === 1 ? 0.5 : 1.0;
}

function inferMonashYearLevelFromUnitCode(unitCode) {
  const match = unitCode.trim().match(/\d+/);
  if (!match) return null;
  const firstDigit = Number.parseInt(match[0][0] ?? '', 10);
  if (Number.isNaN(firstDigit) || firstDigit < 1) return null;
  return firstDigit;
}

function calculateMonashOfficialWam(units) {
  let weightedMarks = 0;
  let weightedCredits = 0;
  for (const unit of units) {
    if (Number.isNaN(unit.mark) || Number.isNaN(unit.credits) || unit.credits <= 0) continue;
    const levelWeight = getMonashYearLevelWeight(unit.yearLevel);
    weightedMarks += unit.mark * unit.credits * levelWeight;
    weightedCredits += unit.credits * levelWeight;
  }
  if (weightedCredits === 0) return null;
  return Math.round((weightedMarks / weightedCredits) * 100) / 100;
}

function calculateWeightedUnitMark(assessments) {
  let totalWeight = 0;
  let weightedSum = 0;
  for (const assessment of assessments) {
    if (Number.isNaN(assessment.mark) || Number.isNaN(assessment.weightPercent) || assessment.weightPercent < 0) {
      continue;
    }
    totalWeight += assessment.weightPercent;
    weightedSum += assessment.mark * (assessment.weightPercent / 100);
  }
  if (totalWeight === 0 || Math.abs(totalWeight - 100) > 0.5) return null;
  return Math.round(weightedSum * 100) / 100;
}

function calculateProjectedWam(currentWam, completedCredits, upcomingUnits) {
  if (Number.isNaN(currentWam) || Number.isNaN(completedCredits) || completedCredits <= 0) return null;
  const validUpcoming = upcomingUnits.filter(
    unit => !Number.isNaN(unit.mark) && !Number.isNaN(unit.credits) && unit.credits > 0
  );
  if (validUpcoming.length === 0) return null;
  const weightedDone = currentWam * completedCredits;
  let upcomingWeighted = 0;
  let upcomingCredits = 0;
  for (const unit of validUpcoming) {
    upcomingWeighted += unit.mark * unit.credits;
    upcomingCredits += unit.credits;
  }
  const totalCreditsAfter = completedCredits + upcomingCredits;
  const projectedWam = Math.round(((weightedDone + upcomingWeighted) / totalCreditsAfter) * 100) / 100;
  return {
    projectedWam,
    delta: Math.round((projectedWam - currentWam) * 100) / 100,
    totalCreditsAfter,
  };
}

function calculateSemesterWamSummary(units) {
  const valid = units.filter(
    unit => !Number.isNaN(unit.mark) && !Number.isNaN(unit.credits) && unit.credits > 0
  );
  if (valid.length === 0) return null;
  const weightedWam = calculateCreditWeightedWam(valid);
  if (weightedWam === null) return null;
  const simpleAverage =
    Math.round((valid.reduce((sum, unit) => sum + unit.mark, 0) / valid.length) * 100) / 100;
  const totalCredits = valid.reduce((sum, unit) => sum + unit.credits, 0);
  return { weightedWam, simpleAverage, totalCredits, unitCount: valid.length };
}

function calculateCreditWeightedWam(units) {
  let weighted = 0;
  let credits = 0;
  for (const unit of units) {
    if (Number.isNaN(unit.mark) || Number.isNaN(unit.credits) || unit.credits <= 0) continue;
    weighted += unit.mark * unit.credits;
    credits += unit.credits;
  }
  if (credits === 0) return null;
  return Math.round((weighted / credits) * 100) / 100;
}

function calculateRequiredFinalExamMark(cm, cw, ew, target) {
  if (Number.isNaN(cm) || Number.isNaN(cw) || Number.isNaN(ew) || Number.isNaN(target) || ew <= 0 || cw + ew > 1.001) {
    return null;
  }
  return Math.round(((target - cm * cw) / ew) * 100) / 100;
}

function calculateWamAfterReplacingUnitMark(currentWam, totalCredits, unitCredits, oldMark, newMark) {
  if (totalCredits <= 0 || unitCredits <= 0 || unitCredits > totalCredits) return null;
  const weighted = currentWam * totalCredits;
  return Math.round(((weighted - oldMark * unitCredits + newMark * unitCredits) / totalCredits) * 100) / 100;
}

function calculateWamAfterRepeatAttempt(currentWam, totalCredits, unitCredits, repeatMark) {
  if (totalCredits <= 0 || unitCredits <= 0) return null;
  const weighted = currentWam * totalCredits;
  return Math.round(((weighted + repeatMark * unitCredits) / (totalCredits + unitCredits)) * 100) / 100;
}

function calculateBreakevenRepeatMark(currentWam, totalCredits, unitCredits, failMark, suppPassMark = 50) {
  const suppWam = calculateWamAfterReplacingUnitMark(currentWam, totalCredits, unitCredits, failMark, suppPassMark);
  if (suppWam === null) return null;
  const weighted = currentWam * totalCredits;
  const newTotal = totalCredits + unitCredits;
  return Math.round(((suppWam * newTotal - weighted) / unitCredits) * 100) / 100;
}

function calculateRequiredRemainingAverage(currentWam, completedCredits, remainingCredits, targetWam) {
  if (
    Number.isNaN(currentWam) ||
    Number.isNaN(completedCredits) ||
    Number.isNaN(remainingCredits) ||
    Number.isNaN(targetWam) ||
    completedCredits < 0 ||
    remainingCredits <= 0
  ) {
    return null;
  }
  const weightedDone = currentWam * completedCredits;
  const totalCredits = completedCredits + remainingCredits;
  return Math.round(((targetWam * totalCredits - weightedDone) / remainingCredits) * 100) / 100;
}

const MONASH_DISTINCTION_WAM_THRESHOLD = 70;
const MONASH_DISTINCTION_GPA_THRESHOLD = 3.0;
const MONASH_EXCHANGE_MIN_WAM_THRESHOLD = 60;

function getMonashDistinctionStatus(wam, gpa) {
  const hasWam = wam !== null && !Number.isNaN(wam);
  const hasGpa = gpa !== null && !Number.isNaN(gpa);
  if (!hasWam && !hasGpa) return null;
  const qualifiesByWam = hasWam && wam >= MONASH_DISTINCTION_WAM_THRESHOLD;
  const qualifiesByGpa = hasGpa && gpa >= MONASH_DISTINCTION_GPA_THRESHOLD;
  return {
    qualifiesByWam,
    qualifiesByGpa,
    qualifies: qualifiesByWam || qualifiesByGpa,
    wamGap: hasWam ? Math.round((MONASH_DISTINCTION_WAM_THRESHOLD - wam) * 100) / 100 : null,
    gpaGap: hasGpa ? Math.round((MONASH_DISTINCTION_GPA_THRESHOLD - gpa) * 1000) / 1000 : null,
  };
}

function calculateUnitMarkScenarios(currentWam, totalCredits, unitCredits, currentMark, scenarioMarks) {
  if (totalCredits <= 0 || unitCredits <= 0 || unitCredits > totalCredits) return null;
  return scenarioMarks.map(({ label, mark }) => {
    const wam =
      calculateWamAfterReplacingUnitMark(currentWam, totalCredits, unitCredits, currentMark, mark) ?? currentWam;
    return { label, mark, wam, wamDelta: Math.round((wam - currentWam) * 100) / 100 };
  });
}

function calculateScholarshipTierRequirements(currentWam, completedCredits, remainingCredits, tiers) {
  if (completedCredits < 0 || remainingCredits <= 0) return null;
  return tiers.map(({ label, wam: targetWam }) => {
    const requiredAverage = calculateRequiredRemainingAverage(
      currentWam,
      completedCredits,
      remainingCredits,
      targetWam
    );
    return {
      label,
      targetWam,
      requiredAverage,
      alreadyMet: currentWam >= targetWam,
      achievable: requiredAverage !== null && requiredAverage <= 100,
    };
  });
}

function getDeansHonoursStanding(wam) {
  if (Number.isNaN(wam)) return null;
  if (wam < 70) return { tier: 'below_distinction', distinctionAverage: false };
  if (wam < 80) return { tier: 'distinction_average', distinctionAverage: true };
  if (wam < 85) return { tier: 'high_distinction', distinctionAverage: true };
  return { tier: 'deans_list_stretch', distinctionAverage: true };
}

function calculateExchangeWamPlanning(currentWam, monashGradedCredits, exchangeCredits, minWamFloor = 60) {
  if (monashGradedCredits < 0 || exchangeCredits < 0) return null;
  return {
    currentWam,
    wamAfterExchange: currentWam,
    totalDegreeCredits: monashGradedCredits + exchangeCredits,
    meetsExchangeWamFloor: currentWam >= minWamFloor,
  };
}

const monashOfficialGpaGradeValues = {
  HD: 4.0,
  D: 3.0,
  C: 2.0,
  P: 1.0,
  NP: 0.7,
  N: 0.3,
  NH: 0.3,
  WN: 0.0,
};

function calculateMonashOfficialGpa(units) {
  let totalGradePoints = 0;
  let totalCredits = 0;
  for (const unit of units) {
    const gradeValue = monashOfficialGpaGradeValues[unit.grade];
    if (gradeValue === undefined || Number.isNaN(unit.credits) || unit.credits <= 0) continue;
    totalGradePoints += gradeValue * unit.credits;
    totalCredits += unit.credits;
  }
  if (totalCredits === 0) return null;
  return {
    gpa: Math.round((totalGradePoints / totalCredits) * 1000) / 1000,
    totalCredits,
    totalGradePoints: Math.round(totalGradePoints * 1000) / 1000,
  };
}

function calculateMonashCgpa(priorGpa, priorCredits, semesterUnits) {
  if (Number.isNaN(priorGpa) || Number.isNaN(priorCredits) || priorCredits < 0) return null;
  const semester = calculateMonashOfficialGpa(semesterUnits);
  if (!semester) return null;
  const totalCredits = priorCredits + semester.totalCredits;
  if (totalCredits === 0) return null;
  const priorPoints = priorGpa * priorCredits;
  return {
    cgpa: Math.round(((priorPoints + semester.totalGradePoints) / totalCredits) * 1000) / 1000,
    semesterGpa: semester.gpa,
  };
}

function calculateRequiredTermGpa(currentGpa, creditsEarned, plannedCredits, targetGpa) {
  if (
    Number.isNaN(currentGpa) ||
    Number.isNaN(creditsEarned) ||
    Number.isNaN(plannedCredits) ||
    Number.isNaN(targetGpa) ||
    creditsEarned < 0 ||
    plannedCredits <= 0
  ) {
    return null;
  }
  const weightedDone = currentGpa * creditsEarned;
  const totalCredits = creditsEarned + plannedCredits;
  return Math.round(((targetGpa * totalCredits - weightedDone) / plannedCredits) * 1000) / 1000;
}

function getMonashHonoursFromWam(wam) {
  if (Number.isNaN(wam) || wam < 0 || wam > 100) return null;
  if (wam >= 80) return 'H1';
  if (wam >= 70) return 'H2A';
  if (wam >= 60) return 'H2B';
  if (wam >= 50) return 'P';
  return 'BELOW';
}

function getMonashOfficialGpaGradeFromMark(mark) {
  if (Number.isNaN(mark) || mark < 0 || mark > 100) return null;
  if (mark >= 80) return 'HD';
  if (mark >= 70) return 'D';
  if (mark >= 60) return 'C';
  if (mark >= 50) return 'P';
  return 'N';
}

let passed = 0;

function test(name, fn) {
  fn();
  passed++;
  console.log(`  ✓ ${name}`);
}

console.log('Calculator maths tests\n');

test('WAM: credit-weighted average', () => {
  const wam = calculateCreditWeightedWam([
    { mark: 80, credits: 6 },
    { mark: 70, credits: 6 },
    { mark: 60, credits: 6 },
  ]);
  assert(wam === 70, `expected 70, got ${wam}`);
});

test('WAM: high-credit unit weighs more', () => {
  const wam = calculateCreditWeightedWam([
    { mark: 90, credits: 12 },
    { mark: 50, credits: 6 },
  ]);
  assert(wam === 76.67, `expected 76.67, got ${wam}`);
});

test('Mark → Grade: band boundaries', () => {
  assert(getMonashGradeFromMark(80).grade === 'HD', '80 = HD');
  assert(getMonashGradeFromMark(79).grade === 'D', '79 = D');
  assert(getMonashGradeFromMark(50).grade === 'P', '50 = P');
  assert(getMonashGradeFromMark(49).grade === 'N', '49 = N');
});

test('GPA → WAM: 3.5 maps to HD not D (bug fix)', () => {
  assert(mapGpaToMonashBand(3.5, 4) === 'HD', '3.5 should be HD');
  assert(mapGpaToMonashBand(3.0, 4) === 'D', '3.0 should be D');
  assert(mapGpaToMonashBand(2.5, 4) === 'D', '2.5 should be D');
  assert(mapGpaToMonashBand(2.4, 4) === 'C', '2.4 should be C');
});

test('GPA → WAM: 7.0 scale', () => {
  assert(mapGpaToMonashBand(6.5, 7) === 'HD', '6.5 = HD');
  assert(mapGpaToMonashBand(5.5, 7) === 'D', '5.5 = D');
  assert(mapGpaToMonashBand(3.4, 7) === 'N', '3.4 = N');
});

test('Final grade: standard split', () => {
  // 60% coursework at 70%, 40% exam, target 75 → need 82.5% exam
  const needed = calculateRequiredFinalExamMark(70, 0.6, 0.4, 75);
  assert(needed === 82.5, `expected 82.5, got ${needed}`);
});

test('Final grade: zero exam weight returns null', () => {
  assert(calculateRequiredFinalExamMark(70, 1, 0, 75) === null, 'ew=0 should be null');
});

test('WAM target: remaining average', () => {
  // WAM 72, 96 cp done, 24 left, target 75 → need 87%
  const req = calculateRequiredRemainingAverage(72, 96, 24, 75);
  assert(req === 87, `expected 87, got ${req}`);
});

test('WAM target: target below current WAM', () => {
  const req = calculateRequiredRemainingAverage(80, 96, 24, 60);
  assert(req === -20, `expected -20, got ${req}`);
});

test('Supp pass: replaces fail with 50', () => {
  const wam = calculateWamAfterReplacingUnitMark(68.25, 24, 6, 48, 50);
  assert(wam === 68.75, `expected 68.75, got ${wam}`);
});

test('Repeat: both attempts count in WAM', () => {
  const wam = calculateWamAfterRepeatAttempt(68.25, 24, 6, 75);
  assert(wam === 69.6, `expected 69.6, got ${wam}`);
});

test('Breakeven repeat mark vs supplementary pass', () => {
  const mark = calculateBreakevenRepeatMark(68.25, 24, 6, 48);
  assert(mark === 70.75, `expected 70.75, got ${mark}`);
});

test('Year level inference from unit code', () => {
  assert(inferMonashYearLevelFromUnitCode('FIT1045') === 1, 'FIT1045 = year 1');
  assert(inferMonashYearLevelFromUnitCode('ENG2005') === 2, 'ENG2005 = year 2');
});

test('Official WAM: year 1 counts at half weight', () => {
  const official = calculateMonashOfficialWam([
    { mark: 60, credits: 6, yearLevel: 1 },
    { mark: 90, credits: 6, yearLevel: 2 },
  ]);
  const planning = calculateCreditWeightedWam([
    { mark: 60, credits: 6 },
    { mark: 90, credits: 6 },
  ]);
  assert(official === 80, `expected official 80, got ${official}`);
  assert(planning === 75, `expected planning 75, got ${planning}`);
});

function calculateRequiredRemainingAssessmentMark(assessments, targetUnitMark) {
  if (Number.isNaN(targetUnitMark) || targetUnitMark < 0 || targetUnitMark > 100) return null;
  let totalWeight = 0;
  let completedContribution = 0;
  let remainingWeight = 0;
  for (const assessment of assessments) {
    if (Number.isNaN(assessment.weightPercent) || assessment.weightPercent < 0) continue;
    totalWeight += assessment.weightPercent;
    if (assessment.mark === null || Number.isNaN(assessment.mark)) {
      remainingWeight += assessment.weightPercent;
      continue;
    }
    completedContribution += assessment.mark * (assessment.weightPercent / 100);
  }
  if (totalWeight === 0 || Math.abs(totalWeight - 100) > 0.5 || remainingWeight <= 0) return null;
  return Math.round(((targetUnitMark - completedContribution) / (remainingWeight / 100)) * 100) / 100;
}

test('Unit target: required mark on remaining assessments', () => {
  const needed = calculateRequiredRemainingAssessmentMark(
    [
      { mark: 75, weightPercent: 25 },
      { mark: 68, weightPercent: 25 },
      { mark: null, weightPercent: 50 },
    ],
    75
  );
  assert(needed === 78.5, `expected 78.5, got ${needed}`);
});

test('Unit target: target already secured on remaining', () => {
  const needed = calculateRequiredRemainingAssessmentMark(
    [
      { mark: 85, weightPercent: 50 },
      { mark: null, weightPercent: 50 },
    ],
    40
  );
  assert(needed === -5, `expected -5, got ${needed}`);
});

test('Unit target: not achievable above 100%', () => {
  const needed = calculateRequiredRemainingAssessmentMark(
    [
      { mark: 40, weightPercent: 50 },
      { mark: null, weightPercent: 50 },
    ],
    80
  );
  assert(needed === 120, `expected 120, got ${needed}`);
});

test('WAM projection: upcoming units increase WAM', () => {
  const result = calculateProjectedWam(72, 96, [
    { mark: 80, credits: 6 },
    { mark: 75, credits: 6 },
    { mark: 85, credits: 12 },
  ]);
  assert(result.projectedWam === 73.85, `expected 73.85, got ${result.projectedWam}`);
  assert(result.delta === 1.85, `expected delta 1.85, got ${result.delta}`);
  assert(result.totalCreditsAfter === 120, `expected 120 cp, got ${result.totalCreditsAfter}`);
});

test('WAM projection: weak upcoming marks lower WAM', () => {
  const result = calculateProjectedWam(75, 96, [{ mark: 45, credits: 24 }]);
  assert(result.projectedWam === 69, `expected 69, got ${result.projectedWam}`);
  assert(result.delta === -6, `expected -6, got ${result.delta}`);
});

test('WAM projection: rejects zero completed credits', () => {
  assert(calculateProjectedWam(72, 0, [{ mark: 80, credits: 6 }]) === null, 'should be null');
});

test('Unit mark: weighted assessments', () => {
  const mark = calculateWeightedUnitMark([
    { mark: 75, weightPercent: 25 },
    { mark: 68, weightPercent: 25 },
    { mark: 72, weightPercent: 50 },
  ]);
  assert(mark === 71.75, `expected 71.75, got ${mark}`);
});

test('Unit mark: rejects weights not totalling 100%', () => {
  const mark = calculateWeightedUnitMark([
    { mark: 80, weightPercent: 30 },
    { mark: 70, weightPercent: 30 },
  ]);
  assert(mark === null, 'should be null when weights sum to 60%');
});

test('Semester WAM: equal 6 cp units', () => {
  const summary = calculateSemesterWamSummary([
    { mark: 78, credits: 6 },
    { mark: 72, credits: 6 },
    { mark: 81, credits: 6 },
    { mark: 69, credits: 6 },
  ]);
  assert(summary.weightedWam === 75, `expected 75, got ${summary.weightedWam}`);
  assert(summary.simpleAverage === 75, `expected simple 75, got ${summary.simpleAverage}`);
  assert(summary.totalCredits === 24, `expected 24 cp, got ${summary.totalCredits}`);
});

test('Semester WAM: 12 cp weighs more than 6 cp', () => {
  const summary = calculateSemesterWamSummary([
    { mark: 85, credits: 12 },
    { mark: 70, credits: 6 },
  ]);
  assert(summary.weightedWam === 80, `expected 80, got ${summary.weightedWam}`);
  assert(summary.simpleAverage === 77.5, `expected 77.5, got ${summary.simpleAverage}`);
});

test('Official WAM: Monash published example (incl. withdrawn fail credits)', () => {
  const wam = calculateMonashOfficialWam([
    { mark: 63, credits: 6, yearLevel: 1 },
    { mark: 80, credits: 12, yearLevel: 1 },
    { mark: 40, credits: 6, yearLevel: 1 },
    { mark: 85, credits: 6, yearLevel: 1 },
    { mark: 96, credits: 24, yearLevel: 2 },
    { mark: 0, credits: 6, yearLevel: 2 },
    { mark: 65, credits: 6, yearLevel: 3 },
    { mark: 77, credits: 6, yearLevel: 3 },
    { mark: 82, credits: 6, yearLevel: 4 },
  ]);
  assert(wam === 74.48, `expected 74.48, got ${wam}`);
});

test('Monash GPA: official published example (fail = 0.3)', () => {
  const result = calculateMonashOfficialGpa([
    { grade: 'C', credits: 6 },
    { grade: 'HD', credits: 12 },
    { grade: 'N', credits: 6 },
    { grade: 'HD', credits: 6 },
    { grade: 'HD', credits: 24 },
    { grade: 'WN', credits: 6 },
    { grade: 'P', credits: 6 },
    { grade: 'D', credits: 6 },
    { grade: 'HD', credits: 6 },
  ]);
  assert(result.gpa === 2.946, `expected 2.946, got ${result.gpa}`);
  assert(result.totalCredits === 78, `expected 78 cp, got ${result.totalCredits}`);
});

test('Monash CGPA: combines prior GPA with semester', () => {
  const result = calculateMonashCgpa(2.5, 60, [
    { grade: 'HD', credits: 6 },
    { grade: 'HD', credits: 6 },
    { grade: 'HD', credits: 6 },
  ]);
  assert(result.semesterGpa === 4.0, `expected semester 4.0, got ${result.semesterGpa}`);
  assert(result.cgpa === 2.846, `expected cgpa 2.846, got ${result.cgpa}`);
});

test('Target GPA: required next term GPA', () => {
  const req = calculateRequiredTermGpa(2.75, 96, 24, 3.0);
  assert(req === 4.0, `expected 4.0, got ${req}`);
});

test('Honours: Monash H2A starts at 70, H1 at 80', () => {
  assert(getMonashHonoursFromWam(80) === 'H1', '80 = H1');
  assert(getMonashHonoursFromWam(79.5) === 'H2A', '79.5 = H2A');
  assert(getMonashHonoursFromWam(70) === 'H2A', '70 = H2A');
  assert(getMonashHonoursFromWam(69) === 'H2B', '69 = H2B');
});

test('GPA grade from mark: fail maps to N (0.3 GPA value)', () => {
  assert(getMonashOfficialGpaGradeFromMark(45) === 'N', '45 = N');
  assert(getMonashOfficialGpaGradeFromMark(80) === 'HD', '80 = HD');
});

test('Distinction average: WAM 70+ qualifies', () => {
  const s = getMonashDistinctionStatus(72, null);
  assert(s.qualifiesByWam === true, '72 WAM qualifies');
  assert(s.wamGap <= 0, 'gap non-positive when above 70');
  const below = getMonashDistinctionStatus(68, null);
  assert(below.qualifies === false, '68 does not qualify');
  assert(below.wamGap === 2, `expected gap 2, got ${below.wamGap}`);
});

test('Distinction average: GPA 3.0+ qualifies', () => {
  const s = getMonashDistinctionStatus(null, 3.1);
  assert(s.qualifiesByGpa === true, '3.1 GPA qualifies');
});

test('Failed unit scenarios: supp pass raises WAM vs keeping fail', () => {
  const rows = calculateUnitMarkScenarios(68, 72, 6, 42, [
    { label: 'keep', mark: 42 },
    { label: 'supp', mark: 50 },
  ]);
  assert(rows[1].wam > rows[0].wam, 'supp pass should beat keeping fail');
  assert(rows[1].wamDelta > 0, 'positive delta on recovery');
});

test('Scholarship tiers: 70 WAM target from 68 with 96 done, 24 left', () => {
  const tiers = calculateScholarshipTierRequirements(68, 96, 24, [{ label: 'Distinction', wam: 70 }]);
  assert(tiers[0].requiredAverage === 78, `expected 78, got ${tiers[0].requiredAverage}`);
});

test('Deans honours standing: bands at 69, 75, 82, 86', () => {
  assert(getDeansHonoursStanding(69).tier === 'below_distinction', '69 below');
  assert(getDeansHonoursStanding(75).tier === 'distinction_average', '75 distinction');
  assert(getDeansHonoursStanding(82).tier === 'high_distinction', '82 HD');
  assert(getDeansHonoursStanding(86).tier === 'deans_list_stretch', '86 stretch');
});

test('Exchange WAM: SFR credit does not change WAM', () => {
  const p = calculateExchangeWamPlanning(74, 96, 24);
  assert(p.wamAfterExchange === 74, 'WAM unchanged');
  assert(p.totalDegreeCredits === 120, 'CP progress sums');
  assert(p.meetsExchangeWamFloor === true, '74 meets 60 floor');
});

function compareSimpleAndOfficialWam(units) {
  let simpleWeighted = 0;
  let simpleCredits = 0;
  let officialMarks = 0;
  let officialCredits = 0;
  for (const unit of units) {
    if (Number.isNaN(unit.mark) || Number.isNaN(unit.credits) || unit.credits <= 0) continue;
    simpleWeighted += unit.mark * unit.credits;
    simpleCredits += unit.credits;
    const lw = unit.yearLevel === 1 ? 0.5 : 1.0;
    officialMarks += unit.mark * unit.credits * lw;
    officialCredits += unit.credits * lw;
  }
  if (simpleCredits === 0 || officialCredits === 0) return null;
  const simpleWam = Math.round((simpleWeighted / simpleCredits) * 100) / 100;
  const officialWam = Math.round((officialMarks / officialCredits) * 100) / 100;
  return { simpleWam, officialWam, difference: Math.round((officialWam - simpleWam) * 100) / 100 };
}

function calculateDegreeProgress(completed, total, cpPerSemester) {
  if (completed < 0 || total <= 0 || completed > total) return null;
  const remaining = total - completed;
  const percent = Math.round((completed / total) * 1000) / 10;
  const semesters =
    cpPerSemester !== undefined && cpPerSemester > 0 ? Math.ceil(remaining / cpPerSemester) : null;
  return { remainingCredits: remaining, percentComplete: percent, semestersRemaining: semesters };
}

test('WAM compare: Year 1 half-weight lowers official vs simple when Y1 marks lower', () => {
  const r = compareSimpleAndOfficialWam([
    { mark: 60, credits: 6, yearLevel: 1 },
    { mark: 80, credits: 6, yearLevel: 2 },
  ]);
  assert(r.simpleWam === 70, `simple expected 70, got ${r.simpleWam}`);
  assert(r.officialWam > r.simpleWam, 'official should exceed simple when Y2 mark higher');
});

test('Degree progress: 96 of 192 cp is 50%', () => {
  const p = calculateDegreeProgress(96, 192, 24);
  assert(p.percentComplete === 50, `expected 50%, got ${p.percentComplete}`);
  assert(p.semestersRemaining === 4, `expected 4 semesters, got ${p.semestersRemaining}`);
});

test('Pass mark: 58 coursework at 60% weight needs 38% exam for 50 overall', () => {
  const needed = calculateRequiredFinalExamMark(58, 0.6, 0.4, 50);
  assert(needed === 38, `expected 38, got ${needed}`);
});

console.log(`\n${passed} tests passed`);
