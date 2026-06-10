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

console.log(`\n${passed} tests passed`);
