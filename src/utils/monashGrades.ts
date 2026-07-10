export interface MonashGradeResult {
  grade: string;
  label: string;
  color: string;
  gpa4: number;
  gpa7: number;
  min: number;
  max: number;
}

const gradeBands: MonashGradeResult[] = [
  {
    grade: 'HD',
    label: 'High Distinction',
    color: 'text-emerald-600 dark:text-emerald-400',
    gpa4: 4.0,
    gpa7: 7.0,
    min: 80,
    max: 100,
  },
  {
    grade: 'D',
    label: 'Distinction',
    color: 'text-blue-600 dark:text-blue-400',
    gpa4: 3.0,
    gpa7: 6.0,
    min: 70,
    max: 79,
  },
  {
    grade: 'C',
    label: 'Credit',
    color: 'text-sky-600 dark:text-sky-400',
    gpa4: 2.0,
    gpa7: 5.0,
    min: 60,
    max: 69,
  },
  {
    grade: 'P',
    label: 'Pass',
    color: 'text-amber-600 dark:text-amber-400',
    gpa4: 1.0,
    gpa7: 4.0,
    min: 50,
    max: 59,
  },
  {
    grade: 'N',
    label: 'Fail',
    color: 'text-red-600 dark:text-red-400',
    gpa4: 0.0,
    gpa7: 0.0,
    min: 0,
    max: 49,
  },
];

export function getMonashGradeFromMark(mark: number): MonashGradeResult | null {
  if (Number.isNaN(mark) || mark < 0 || mark > 100) return null;
  return gradeBands.find(band => mark >= band.min && mark <= band.max) ?? null;
}

export const monashGradeBands = gradeBands;

export interface GpaBandStep {
  gpa: number;
  wamMin: number;
  wamMax: number;
  grade: string;
  gradeLabel: string;
}

const gpa4Steps: GpaBandStep[] = [
  { gpa: 4.0, wamMin: 80, wamMax: 100, grade: 'HD', gradeLabel: 'High Distinction' },
  { gpa: 3.0, wamMin: 70, wamMax: 79, grade: 'D', gradeLabel: 'Distinction' },
  { gpa: 2.0, wamMin: 60, wamMax: 69, grade: 'C', gradeLabel: 'Credit' },
  { gpa: 1.0, wamMin: 50, wamMax: 59, grade: 'P', gradeLabel: 'Pass' },
  { gpa: 0.0, wamMin: 0, wamMax: 49, grade: 'N', gradeLabel: 'Fail' },
];

const gpa7Steps: GpaBandStep[] = [
  { gpa: 7.0, wamMin: 80, wamMax: 100, grade: 'HD', gradeLabel: 'High Distinction' },
  { gpa: 6.0, wamMin: 70, wamMax: 79, grade: 'D', gradeLabel: 'Distinction' },
  { gpa: 5.0, wamMin: 60, wamMax: 69, grade: 'C', gradeLabel: 'Credit' },
  { gpa: 4.0, wamMin: 50, wamMax: 59, grade: 'P', gradeLabel: 'Pass' },
  { gpa: 0.0, wamMin: 0, wamMax: 49, grade: 'N', gradeLabel: 'Fail' },
];

/** Monash GPA ↔ WAM band steps for conversion tables. */
export function getGpaConversionSteps(scaleMax: 4 | 7): readonly GpaBandStep[] {
  return scaleMax === 4 ? gpa4Steps : gpa7Steps;
}

/** Convert GPA on one scale to the equivalent Monash band GPA on the other scale. */
export function convertGpaBetweenScales(gpa: number, fromScale: 4 | 7, toScale: 4 | 7): number | null {
  if (Number.isNaN(gpa) || gpa < 0 || gpa > fromScale) return null;
  if (fromScale === toScale) return gpa;
  const band = mapGpaToMonashBand(gpa, fromScale);
  if (!band) return null;
  const gradeInfo = gradeBands.find(entry => entry.grade === band.grade);
  if (!gradeInfo) return null;
  return toScale === 4 ? gradeInfo.gpa4 : gradeInfo.gpa7;
}

/** Approximate percentage range for a GPA value on 4.0 or 7.0 scale. */
export function mapGpaToPercentageRange(
  gpa: number,
  scaleMax: 4 | 7
): { wamMin: number; wamMax: number; midpoint: number; grade: string; gradeLabel: string } | null {
  const band = mapGpaToMonashBand(gpa, scaleMax);
  if (!band) return null;
  return {
    wamMin: band.wamMin,
    wamMax: band.wamMax,
    midpoint: Math.round((band.wamMin + band.wamMax) / 2),
    grade: band.grade,
    gradeLabel: band.gradeLabel,
  };
}

/** Map overall WAM to Monash GPA bands on 4.0 and 7.0 scales. */
export function convertWamToGpaBands(wam: number): MonashGradeResult | null {
  return getMonashGradeFromMark(wam);
}

/** Map a GPA value to the closest Monash-style grade band for planning. */
export function mapGpaToMonashBand(gpa: number, scaleMax: 4 | 7): GpaBandStep | null {
  if (Number.isNaN(gpa) || gpa < 0 || gpa > scaleMax) return null;
  const steps = scaleMax === 4 ? gpa4Steps : gpa7Steps;
  const thresholds =
    scaleMax === 4
      ? [
          { min: 3.5, step: steps[0] },
          { min: 2.5, step: steps[1] },
          { min: 1.5, step: steps[2] },
          { min: 0.5, step: steps[3] },
          { min: 0, step: steps[4] },
        ]
      : [
          { min: 6.5, step: steps[0] },
          { min: 5.5, step: steps[1] },
          { min: 4.5, step: steps[2] },
          { min: 3.5, step: steps[3] },
          { min: 0, step: steps[4] },
        ];

  return thresholds.find(entry => gpa >= entry.min)?.step ?? null;
}

export function getMonashYearLevelWeight(yearLevel: number): number {
  return yearLevel === 1 ? 0.5 : 1.0;
}

/** First digit of the numeric portion of a Monash unit code (e.g. FIT1045 → 1). */
export function inferMonashYearLevelFromUnitCode(unitCode: string): number | null {
  const match = unitCode.trim().match(/\d+/);
  if (!match) return null;
  const firstDigit = Number.parseInt(match[0][0] ?? '', 10);
  if (Number.isNaN(firstDigit) || firstDigit < 1) return null;
  return firstDigit;
}

export function calculateMonashOfficialWam(
  units: Array<{ mark: number; credits: number; yearLevel: number }>
): number | null {
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

export interface SemesterWamSummary {
  weightedWam: number;
  simpleAverage: number;
  totalCredits: number;
  unitCount: number;
}

export interface WeightedAssessmentInput {
  mark: number;
  weightPercent: number;
}

export interface AssessmentRowInput {
  mark: number | null;
  weightPercent: number;
}

/** Mark needed on remaining (unmarked) assessments to reach target unit %. */
export function calculateRequiredRemainingAssessmentMark(
  assessments: AssessmentRowInput[],
  targetUnitMark: number
): number | null {
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

  const needed = (targetUnitMark - completedContribution) / (remainingWeight / 100);
  return Math.round(needed * 100) / 100;
}

/** Simple arithmetic mean of percentage marks (equal weight per entry). */
export function calculateSimpleMarkAverage(marks: number[]): number | null {
  const valid = marks.filter(mark => !Number.isNaN(mark) && mark >= 0 && mark <= 100);
  if (valid.length === 0) return null;
  return Math.round((valid.reduce((sum, mark) => sum + mark, 0) / valid.length) * 100) / 100;
}

/** Convert raw marks obtained ÷ total into a percentage (0–100). */
export function percentageFromMarks(obtained: number, total: number): number | null {
  if (Number.isNaN(obtained) || Number.isNaN(total) || total <= 0 || obtained < 0) return null;
  const percentage = (obtained / total) * 100;
  if (percentage > 100) return null;
  return Math.round(percentage * 100) / 100;
}

export function calculateWeightedUnitMark(
  assessments: WeightedAssessmentInput[]
): number | null {
  let totalWeight = 0;
  let weightedSum = 0;

  for (const assessment of assessments) {
    if (
      Number.isNaN(assessment.mark) ||
      Number.isNaN(assessment.weightPercent) ||
      assessment.weightPercent < 0
    ) {
      continue;
    }
    totalWeight += assessment.weightPercent;
    weightedSum += assessment.mark * (assessment.weightPercent / 100);
  }

  if (totalWeight === 0 || Math.abs(totalWeight - 100) > 0.5) return null;
  return Math.round(weightedSum * 100) / 100;
}

export function calculateSemesterWamSummary(
  units: Array<{ mark: number; credits: number }>
): SemesterWamSummary | null {
  const valid = units.filter(
    unit => !Number.isNaN(unit.mark) && !Number.isNaN(unit.credits) && unit.credits > 0
  );
  if (valid.length === 0) return null;

  const weightedWam = calculateCreditWeightedWam(valid);
  if (weightedWam === null) return null;

  const simpleAverage =
    Math.round((valid.reduce((sum, unit) => sum + unit.mark, 0) / valid.length) * 100) / 100;
  const totalCredits = valid.reduce((sum, unit) => sum + unit.credits, 0);

  return {
    weightedWam,
    simpleAverage,
    totalCredits,
    unitCount: valid.length,
  };
}

export interface ProjectedWamResult {
  projectedWam: number;
  currentWam: number;
  delta: number;
  completedCredits: number;
  upcomingCredits: number;
  totalCreditsAfter: number;
}

/** Project cumulative WAM after adding upcoming unit marks (credit-weighted planning). */
export function calculateProjectedWam(
  currentWam: number,
  completedCredits: number,
  upcomingUnits: Array<{ mark: number; credits: number }>
): ProjectedWamResult | null {
  if (Number.isNaN(currentWam) || Number.isNaN(completedCredits) || completedCredits <= 0) {
    return null;
  }

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
  const projectedWam =
    Math.round(((weightedDone + upcomingWeighted) / totalCreditsAfter) * 100) / 100;

  return {
    projectedWam,
    currentWam: Math.round(currentWam * 100) / 100,
    delta: Math.round((projectedWam - currentWam) * 100) / 100,
    completedCredits,
    upcomingCredits,
    totalCreditsAfter,
  };
}

export function calculateCreditWeightedWam(
  units: Array<{ mark: number; credits: number }>
): number | null {
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

export interface WamComparisonResult {
  simpleWam: number;
  officialWam: number;
  difference: number;
  totalCredits: number;
}

/** Side-by-side planning WAM (credit-weighted) vs official Monash WAM (year-level weighting). */
export function compareSimpleAndOfficialWam(
  units: Array<{ mark: number; credits: number; yearLevel: number }>
): WamComparisonResult | null {
  const simpleWam = calculateCreditWeightedWam(units);
  const officialWam = calculateMonashOfficialWam(units);
  if (simpleWam === null || officialWam === null) return null;

  const totalCredits = units
    .filter(u => !Number.isNaN(u.mark) && !Number.isNaN(u.credits) && u.credits > 0)
    .reduce((sum, u) => sum + u.credits, 0);

  return {
    simpleWam,
    officialWam,
    difference: Math.round((officialWam - simpleWam) * 100) / 100,
    totalCredits,
  };
}

export const MONASH_DEFAULT_DEGREE_CREDITS = 192;

export interface DegreeProgressResult {
  completedCredits: number;
  totalCredits: number;
  remainingCredits: number;
  percentComplete: number;
  semestersRemaining: number | null;
}

/** Degree completion progress from completed vs total credit points. */
export function calculateDegreeProgress(
  completedCredits: number,
  totalCredits: number,
  creditsPerSemester?: number
): DegreeProgressResult | null {
  if (
    Number.isNaN(completedCredits) ||
    Number.isNaN(totalCredits) ||
    completedCredits < 0 ||
    totalCredits <= 0 ||
    completedCredits > totalCredits
  ) {
    return null;
  }

  const remainingCredits = totalCredits - completedCredits;
  const percentComplete = Math.round((completedCredits / totalCredits) * 1000) / 10;
  const semestersRemaining =
    creditsPerSemester !== undefined &&
    !Number.isNaN(creditsPerSemester) &&
    creditsPerSemester > 0
      ? Math.ceil(remainingCredits / creditsPerSemester)
      : null;

  return {
    completedCredits,
    totalCredits,
    remainingCredits,
    percentComplete,
    semestersRemaining,
  };
}

export const MONASH_PASS_MARK = 50;

export function calculateRequiredFinalExamMark(
  currentMark: number,
  courseworkWeight: number,
  examWeight: number,
  targetMark: number
): number | null {
  if (
    Number.isNaN(currentMark) ||
    Number.isNaN(courseworkWeight) ||
    Number.isNaN(examWeight) ||
    Number.isNaN(targetMark) ||
    examWeight <= 0 ||
    courseworkWeight + examWeight > 1.001
  ) {
    return null;
  }
  const needed = (targetMark - currentMark * courseworkWeight) / examWeight;
  return Math.round(needed * 100) / 100;
}

const MONASH_SUPP_PASS_MARK = 50;

/** WAM after replacing one unit's mark (e.g. supplementary pass capped at 50). */
export function calculateWamAfterReplacingUnitMark(
  currentWam: number,
  totalCredits: number,
  unitCredits: number,
  oldMark: number,
  newMark: number
): number | null {
  if (
    Number.isNaN(currentWam) ||
    Number.isNaN(totalCredits) ||
    Number.isNaN(unitCredits) ||
    Number.isNaN(oldMark) ||
    Number.isNaN(newMark) ||
    totalCredits <= 0 ||
    unitCredits <= 0 ||
    unitCredits > totalCredits
  ) {
    return null;
  }

  const weighted = currentWam * totalCredits;
  const adjusted = weighted - oldMark * unitCredits + newMark * unitCredits;
  return Math.round((adjusted / totalCredits) * 100) / 100;
}

/** WAM when a repeat attempt is added (Monash includes failed and repeated units). */
export function calculateWamAfterRepeatAttempt(
  currentWam: number,
  totalCredits: number,
  unitCredits: number,
  repeatMark: number
): number | null {
  if (
    Number.isNaN(currentWam) ||
    Number.isNaN(totalCredits) ||
    Number.isNaN(unitCredits) ||
    Number.isNaN(repeatMark) ||
    totalCredits <= 0 ||
    unitCredits <= 0
  ) {
    return null;
  }

  const weighted = currentWam * totalCredits;
  const newTotal = totalCredits + unitCredits;
  return Math.round(((weighted + repeatMark * unitCredits) / newTotal) * 100) / 100;
}

/** Repeat mark needed to beat passing a supplementary assessment (capped at 50). */
export function calculateBreakevenRepeatMark(
  currentWam: number,
  totalCredits: number,
  unitCredits: number,
  failMark: number,
  suppPassMark: number = MONASH_SUPP_PASS_MARK
): number | null {
  const suppWam = calculateWamAfterReplacingUnitMark(
    currentWam,
    totalCredits,
    unitCredits,
    failMark,
    suppPassMark
  );
  if (suppWam === null) return null;

  const weighted = currentWam * totalCredits;
  const newTotal = totalCredits + unitCredits;
  const required = (suppWam * newTotal - weighted) / unitCredits;
  return Math.round(required * 100) / 100;
}

export const monashSupplementaryPassMark = MONASH_SUPP_PASS_MARK;

/** Required average mark on remaining credit points to reach target WAM. */
export function calculateRequiredRemainingAverage(
  currentWam: number,
  completedCredits: number,
  remainingCredits: number,
  targetWam: number
): number | null {
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
  const required = (targetWam * totalCredits - weightedDone) / remainingCredits;
  return Math.round(required * 100) / 100;
}

/** Monash official GPA letter codes (Grading Schema Procedure). */
export type MonashOfficialGpaGrade = 'HD' | 'D' | 'C' | 'P' | 'NP' | 'N' | 'NH' | 'WN';

/** Official Monash 4.0 GPA grade values — fail (N/NH) = 0.3, not 0.0. */
export const monashOfficialGpaGradeValues: Record<MonashOfficialGpaGrade, number> = {
  HD: 4.0,
  D: 3.0,
  C: 2.0,
  P: 1.0,
  NP: 0.7,
  N: 0.3,
  NH: 0.3,
  WN: 0.0,
};

export const monashOfficialGpaGradeOptions: Array<{
  grade: MonashOfficialGpaGrade;
  label: string;
  gpaValue: number;
  markRange: string;
}> = [
  { grade: 'HD', label: 'High Distinction', gpaValue: 4.0, markRange: '80–100' },
  { grade: 'D', label: 'Distinction', gpaValue: 3.0, markRange: '70–79' },
  { grade: 'C', label: 'Credit', gpaValue: 2.0, markRange: '60–69' },
  { grade: 'P', label: 'Pass', gpaValue: 1.0, markRange: '50–59' },
  { grade: 'NP', label: 'Near Pass', gpaValue: 0.7, markRange: 'Special grade' },
  { grade: 'N', label: 'Fail', gpaValue: 0.3, markRange: '0–49' },
  { grade: 'NH', label: 'Hurdle Fail', gpaValue: 0.3, markRange: 'Special grade' },
  { grade: 'WN', label: 'Withdrawn Fail', gpaValue: 0.0, markRange: 'Special grade' },
];

/** Map a percentage mark to the standard Monash coursework letter used in official GPA. */
export function getMonashOfficialGpaGradeFromMark(mark: number): MonashOfficialGpaGrade | null {
  if (Number.isNaN(mark) || mark < 0 || mark > 100) return null;
  if (mark >= 80) return 'HD';
  if (mark >= 70) return 'D';
  if (mark >= 60) return 'C';
  if (mark >= 50) return 'P';
  return 'N';
}

export interface MonashGpaUnitInput {
  grade: MonashOfficialGpaGrade;
  credits: number;
}

export interface MonashGpaResult {
  gpa: number;
  totalCredits: number;
  totalGradePoints: number;
  unitCount: number;
}

/**
 * Official Monash GPA: Σ(grade value × credit points) ÷ Σ(credit points), 3 decimal places.
 * @see https://www.monash.edu/students/admin/assessments/results/gpa
 */
export function calculateMonashOfficialGpa(units: MonashGpaUnitInput[]): MonashGpaResult | null {
  let totalGradePoints = 0;
  let totalCredits = 0;
  let unitCount = 0;

  for (const unit of units) {
    const gradeValue = monashOfficialGpaGradeValues[unit.grade];
    if (gradeValue === undefined || Number.isNaN(unit.credits) || unit.credits <= 0) continue;
    totalGradePoints += gradeValue * unit.credits;
    totalCredits += unit.credits;
    unitCount += 1;
  }

  if (totalCredits === 0) return null;

  return {
    gpa: Math.round((totalGradePoints / totalCredits) * 1000) / 1000,
    totalCredits,
    totalGradePoints: Math.round(totalGradePoints * 1000) / 1000,
    unitCount,
  };
}

export interface MonashCgpaResult {
  cgpa: number;
  semesterGpa: number;
  semesterCredits: number;
  totalCredits: number;
}

/** Cumulative GPA after combining prior GPA/credits with current semester units. */
export function calculateMonashCgpa(
  priorGpa: number,
  priorCredits: number,
  semesterUnits: MonashGpaUnitInput[]
): MonashCgpaResult | null {
  if (Number.isNaN(priorGpa) || Number.isNaN(priorCredits) || priorCredits < 0) return null;

  const semester = calculateMonashOfficialGpa(semesterUnits);
  if (!semester) return null;

  const totalCredits = priorCredits + semester.totalCredits;
  if (totalCredits === 0) return null;

  const priorPoints = priorGpa * priorCredits;
  const cgpa = Math.round(((priorPoints + semester.totalGradePoints) / totalCredits) * 1000) / 1000;

  return {
    cgpa,
    semesterGpa: semester.gpa,
    semesterCredits: semester.totalCredits,
    totalCredits,
  };
}

/** Combine prior CGPA with semester GPA using credit-weighted Monash maths. */
export function calculateCgpaFromSemesterGpa(
  priorCgpa: number,
  priorCredits: number,
  semesterGpa: number,
  semesterCredits: number
): number | null {
  if (
    Number.isNaN(priorCgpa) ||
    Number.isNaN(priorCredits) ||
    Number.isNaN(semesterGpa) ||
    Number.isNaN(semesterCredits) ||
    priorCgpa < 0 ||
    priorCgpa > 4 ||
    semesterGpa < 0 ||
    semesterGpa > 4 ||
    priorCredits < 0 ||
    semesterCredits <= 0
  ) {
    return null;
  }
  const totalCredits = priorCredits + semesterCredits;
  if (totalCredits === 0) return null;
  return (
    Math.round(
      ((priorCgpa * priorCredits + semesterGpa * semesterCredits) / totalCredits) * 1000
    ) / 1000
  );
}

/** Linear 10-point CGPA/GPA to Monash 4.0 GPA (common international planning). */
export function convert10PointCgpaToGpa4(cgpa10: number): number | null {
  if (Number.isNaN(cgpa10) || cgpa10 < 0 || cgpa10 > 10) return null;
  return Math.round((cgpa10 / 10) * 4 * 1000) / 1000;
}

/** Map 10-point GPA to indicative Monash WAM via percentage (GPA × 10). */
export function convert10PointGpaToWamBand(gpa10: number): MonashGradeResult | null {
  if (Number.isNaN(gpa10) || gpa10 < 0 || gpa10 > 10) return null;
  return getMonashGradeFromMark(gpa10 * 10);
}

export interface AtarPlanningBand {
  atarMin: number;
  atarMax: number;
  wamMin: number;
  wamMax: number;
  gpa4: number;
  gpa7: number;
  label: string;
}

export const atarPlanningBands: AtarPlanningBand[] = [
  { atarMin: 95, atarMax: 99.95, wamMin: 85, wamMax: 100, gpa4: 4.0, gpa7: 7.0, label: 'Elite ATAR' },
  { atarMin: 90, atarMax: 94.99, wamMin: 80, wamMax: 84, gpa4: 4.0, gpa7: 7.0, label: 'Very high ATAR' },
  { atarMin: 85, atarMax: 89.99, wamMin: 75, wamMax: 79, gpa4: 3.0, gpa7: 6.0, label: 'Strong ATAR' },
  { atarMin: 80, atarMax: 84.99, wamMin: 70, wamMax: 74, gpa4: 3.0, gpa7: 6.0, label: 'Solid ATAR' },
  { atarMin: 75, atarMax: 79.99, wamMin: 65, wamMax: 69, gpa4: 2.0, gpa7: 5.0, label: 'Good ATAR' },
  { atarMin: 70, atarMax: 74.99, wamMin: 60, wamMax: 64, gpa4: 2.0, gpa7: 5.0, label: 'Moderate ATAR' },
  { atarMin: 50, atarMax: 69.99, wamMin: 50, wamMax: 59, gpa4: 1.0, gpa7: 4.0, label: 'Entry-level ATAR' },
  { atarMin: 0, atarMax: 49.99, wamMin: 0, wamMax: 49, gpa4: 0.0, gpa7: 0.0, label: 'Below typical entry' },
];

/** Indicative ATAR → WAM/GPA bands for Australian university planning (not official UAC). */
export function convertAtarToPlanningBands(atar: number): AtarPlanningBand | null {
  if (Number.isNaN(atar) || atar < 0 || atar > 99.95) return null;
  return atarPlanningBands.find(band => atar >= band.atarMin && atar <= band.atarMax) ?? null;
}

/** Indicative WAM → ATAR range for planning (not official). */
export function convertWamToAtarRange(wam: number): { atarMin: number; atarMax: number; label: string } | null {
  if (Number.isNaN(wam) || wam < 0 || wam > 100) return null;
  const band = atarPlanningBands.find(entry => wam >= entry.wamMin && wam <= entry.wamMax);
  if (band) return { atarMin: band.atarMin, atarMax: band.atarMax, label: band.label };
  if (wam >= 85) return { atarMin: 95, atarMax: 99.95, label: 'Elite ATAR' };
  if (wam >= 80) return { atarMin: 90, atarMax: 94.99, label: 'Very high ATAR' };
  if (wam >= 75) return { atarMin: 85, atarMax: 89.99, label: 'Strong ATAR' };
  if (wam >= 70) return { atarMin: 80, atarMax: 84.99, label: 'Solid ATAR' };
  if (wam >= 65) return { atarMin: 75, atarMax: 79.99, label: 'Good ATAR' };
  if (wam >= 60) return { atarMin: 70, atarMax: 74.99, label: 'Moderate ATAR' };
  if (wam >= 50) return { atarMin: 50, atarMax: 69.99, label: 'Entry-level ATAR' };
  return { atarMin: 0, atarMax: 49.99, label: 'Below typical entry' };
}

export interface HighSchoolCourseInput {
  gradePoints: number;
  credits: number;
}

/** US-style high school GPA: Σ(grade points × credits) ÷ Σ(credits). */
export function calculateHighSchoolGpa(
  courses: HighSchoolCourseInput[],
  weighted: boolean
): { gpa: number; totalCredits: number; scaleMax: number } | null {
  let weightedSum = 0;
  let totalCredits = 0;
  for (const course of courses) {
    if (Number.isNaN(course.gradePoints) || Number.isNaN(course.credits) || course.credits <= 0) continue;
    const points = weighted ? Math.min(course.gradePoints + 1, 5) : course.gradePoints;
    if (points < 0 || points > (weighted ? 5 : 4)) continue;
    weightedSum += points * course.credits;
    totalCredits += course.credits;
  }
  if (totalCredits === 0) return null;
  return {
    gpa: Math.round((weightedSum / totalCredits) * 1000) / 1000,
    totalCredits,
    scaleMax: weighted ? 5 : 4,
  };
}

export function calculateRequiredTermGpa(
  currentGpa: number,
  creditsEarned: number,
  plannedCredits: number,
  targetGpa: number
): number | null {
  if (
    Number.isNaN(currentGpa) ||
    Number.isNaN(creditsEarned) ||
    Number.isNaN(plannedCredits) ||
    Number.isNaN(targetGpa) ||
    currentGpa < 0 ||
    currentGpa > 4 ||
    targetGpa < 0 ||
    targetGpa > 4 ||
    creditsEarned < 0 ||
    plannedCredits <= 0
  ) {
    return null;
  }

  const weightedDone = currentGpa * creditsEarned;
  const totalCredits = creditsEarned + plannedCredits;
  const required = (targetGpa * totalCredits - weightedDone) / plannedCredits;
  return Math.round(required * 1000) / 1000;
}

export interface MonashHonoursClassification {
  code: 'H1' | 'H2A' | 'H2B' | 'P' | 'BELOW';
  title: string;
  description: string;
  minWam: number;
  maxWam: number;
}

/**
 * Monash honours degree grading schema (course grade from WAM).
 * H2A starts at 70 — not 75 like some generic Australian calculators.
 */
export function getMonashHonoursFromWam(wam: number): MonashHonoursClassification | null {
  if (Number.isNaN(wam) || wam < 0 || wam > 100) return null;

  if (wam >= 80) {
    return {
      code: 'H1',
      title: 'First Class Honours (H1)',
      description: 'WAM 80 or above — highest honours classification at Monash.',
      minWam: 80,
      maxWam: 100,
    };
  }
  if (wam >= 70) {
    return {
      code: 'H2A',
      title: 'Second Class Honours Division A (H2A)',
      description: 'WAM 70 to below 80 — strong honours performance.',
      minWam: 70,
      maxWam: 79.999,
    };
  }
  if (wam >= 60) {
    return {
      code: 'H2B',
      title: 'Second Class Honours Division B (H2B)',
      description: 'WAM 60 to below 70 — satisfactory honours level.',
      minWam: 60,
      maxWam: 69.999,
    };
  }
  if (wam >= 50) {
    return {
      code: 'P',
      title: 'Pass (no honours classification)',
      description: 'WAM 50 to below 60 — degree pass without honours grade.',
      minWam: 50,
      maxWam: 59.999,
    };
  }
  return {
    code: 'BELOW',
    title: 'Below pass threshold',
    description: 'WAM below 50 — not a passing average for degree completion.',
    minWam: 0,
    maxWam: 49.999,
  };
}

/** Monash distinction average: WAM 70+ or GPA 3.0+ on the official 4.0 scale. */
export function isMonashDistinctionAverage(wam: number | null, gpa: number | null): boolean {
  if (wam !== null && !Number.isNaN(wam) && wam >= 70) return true;
  if (gpa !== null && !Number.isNaN(gpa) && gpa >= 3.0) return true;
  return false;
}

export type MonashGradeConverterField = 'mark' | 'letter' | 'gpa';

export interface MonashGradeConversionResult {
  mark: number;
  letter: MonashOfficialGpaGrade;
  gpa: number;
  label: string;
}

function monashGradeMidpointMark(grade: MonashOfficialGpaGrade): number {
  switch (grade) {
    case 'HD':
      return 90;
    case 'D':
      return 75;
    case 'C':
      return 65;
    case 'P':
      return 55;
    case 'NP':
      return 48;
    case 'N':
      return 25;
    case 'NH':
      return 45;
    case 'WN':
      return 0;
    default:
      return 0;
  }
}

/** Convert between Monash mark, letter grade, and official 4.0 GPA value. */
export function convertMonashGrade(
  value: number | MonashOfficialGpaGrade,
  from: MonashGradeConverterField
): MonashGradeConversionResult | null {
  let letter: MonashOfficialGpaGrade | null = null;

  if (from === 'letter') {
    if (typeof value !== 'string' || !(value in monashOfficialGpaGradeValues)) return null;
    letter = value;
  } else if (from === 'mark') {
    if (typeof value !== 'number' || Number.isNaN(value)) return null;
    letter = getMonashOfficialGpaGradeFromMark(value);
  } else if (from === 'gpa') {
    if (typeof value !== 'number' || Number.isNaN(value)) return null;
    if (value >= 3.5) letter = 'HD';
    else if (value >= 2.5) letter = 'D';
    else if (value >= 1.5) letter = 'C';
    else if (value >= 0.65) letter = 'P';
    else if (value >= 0.15) letter = 'N';
    else letter = 'WN';
  }

  if (!letter) return null;

  const option = monashOfficialGpaGradeOptions.find(o => o.grade === letter);
  const mark = from === 'mark' && typeof value === 'number' ? value : monashGradeMidpointMark(letter);

  return {
    mark,
    letter,
    gpa: monashOfficialGpaGradeValues[letter],
    label: option?.label ?? letter,
  };
}

export const MONASH_DISTINCTION_WAM_THRESHOLD = 70;
export const MONASH_DISTINCTION_GPA_THRESHOLD = 3.0;
export const MONASH_EXCHANGE_MIN_WAM_THRESHOLD = 60;

export interface MonashDistinctionStatus {
  qualifiesByWam: boolean;
  qualifiesByGpa: boolean;
  qualifies: boolean;
  wamGap: number | null;
  gpaGap: number | null;
}

/** Distinction average at Monash: WAM 70+ or GPA 3.0+ on the official 4.0 scale. */
export function getMonashDistinctionStatus(
  wam: number | null,
  gpa: number | null
): MonashDistinctionStatus | null {
  const hasWam = wam !== null && !Number.isNaN(wam);
  const hasGpa = gpa !== null && !Number.isNaN(gpa);
  if (!hasWam && !hasGpa) return null;

  const qualifiesByWam = hasWam && wam! >= MONASH_DISTINCTION_WAM_THRESHOLD;
  const qualifiesByGpa = hasGpa && gpa! >= MONASH_DISTINCTION_GPA_THRESHOLD;

  return {
    qualifiesByWam,
    qualifiesByGpa,
    qualifies: qualifiesByWam || qualifiesByGpa,
    wamGap: hasWam ? Math.round((MONASH_DISTINCTION_WAM_THRESHOLD - wam!) * 100) / 100 : null,
    gpaGap: hasGpa ? Math.round((MONASH_DISTINCTION_GPA_THRESHOLD - gpa!) * 1000) / 1000 : null,
  };
}

export interface WamMilestone {
  label: string;
  wam: number;
  status: 'met' | 'next' | 'future';
  gap: number;
  requiredAverage: number | null;
}

export const MONASH_WAM_MILESTONES: Array<{ label: string; wam: number }> = [
  { label: 'Pass / progression floor', wam: 50 },
  { label: 'Exchange planning floor', wam: MONASH_EXCHANGE_MIN_WAM_THRESHOLD },
  { label: 'Distinction average', wam: MONASH_DISTINCTION_WAM_THRESHOLD },
  { label: 'High distinction territory', wam: 80 },
  { label: 'Top merit stretch', wam: 85 },
];

/** Check common WAM milestones and optionally solve the remaining-average needed for each. */
export function calculateWamMilestones(
  currentWam: number,
  completedCredits?: number,
  remainingCredits?: number,
  milestones: Array<{ label: string; wam: number }> = MONASH_WAM_MILESTONES
): WamMilestone[] | null {
  if (Number.isNaN(currentWam) || currentWam < 0 || currentWam > 100) return null;

  const canProject =
    completedCredits !== undefined &&
    remainingCredits !== undefined &&
    !Number.isNaN(completedCredits) &&
    !Number.isNaN(remainingCredits) &&
    completedCredits >= 0 &&
    remainingCredits > 0;

  const firstUnmet = milestones.find(m => currentWam < m.wam)?.wam ?? null;

  return milestones.map(milestone => {
    const met = currentWam >= milestone.wam;
    return {
      ...milestone,
      status: met ? 'met' : firstUnmet === milestone.wam ? 'next' : 'future',
      gap: Math.round((milestone.wam - currentWam) * 100) / 100,
      requiredAverage: canProject
        ? calculateRequiredRemainingAverage(
            currentWam,
            completedCredits!,
            remainingCredits!,
            milestone.wam
          )
        : null,
    };
  });
}

export interface WithdrawnFailImpactResult {
  gpaAfterWn: number;
  gpaAfterStandardFail: number;
  gpaDeltaWn: number;
  gpaDeltaVsStandardFail: number;
  wamIfExcluded: number;
  wamIfZeroCounted: number | null;
  wamWorstCaseDelta: number | null;
}

/** WN has GPA value 0.0. WAM treatment can vary, so show excluded and worst-case counted-as-zero scenarios. */
export function calculateWithdrawnFailImpact(
  currentGpa: number,
  gpaCredits: number,
  unitCredits: number,
  currentWam?: number,
  wamCredits?: number
): WithdrawnFailImpactResult | null {
  if (
    Number.isNaN(currentGpa) ||
    Number.isNaN(gpaCredits) ||
    Number.isNaN(unitCredits) ||
    currentGpa < 0 ||
    currentGpa > 4 ||
    gpaCredits <= 0 ||
    unitCredits <= 0
  ) {
    return null;
  }

  const totalGpaCredits = gpaCredits + unitCredits;
  const gpaAfterWn =
    Math.round(((currentGpa * gpaCredits + monashOfficialGpaGradeValues.WN * unitCredits) / totalGpaCredits) * 1000) /
    1000;
  const gpaAfterStandardFail =
    Math.round(((currentGpa * gpaCredits + monashOfficialGpaGradeValues.N * unitCredits) / totalGpaCredits) * 1000) /
    1000;

  const hasWam =
    currentWam !== undefined &&
    wamCredits !== undefined &&
    !Number.isNaN(currentWam) &&
    !Number.isNaN(wamCredits) &&
    currentWam >= 0 &&
    currentWam <= 100 &&
    wamCredits > 0;

  const wamIfZeroCounted = hasWam
    ? Math.round(((currentWam! * wamCredits!) / (wamCredits! + unitCredits)) * 100) / 100
    : null;

  return {
    gpaAfterWn,
    gpaAfterStandardFail,
    gpaDeltaWn: Math.round((gpaAfterWn - currentGpa) * 1000) / 1000,
    gpaDeltaVsStandardFail: Math.round((gpaAfterWn - gpaAfterStandardFail) * 1000) / 1000,
    wamIfExcluded: hasWam ? currentWam! : NaN,
    wamIfZeroCounted,
    wamWorstCaseDelta:
      hasWam && wamIfZeroCounted !== null
        ? Math.round((wamIfZeroCounted - currentWam!) * 100) / 100
        : null,
  };
}

export interface UnitMarkScenario {
  label: string;
  mark: number;
  wam: number;
  wamDelta: number;
}

/** Compare WAM outcomes when one unit mark changes (fail, supp pass, recovery marks). */
export function calculateUnitMarkScenarios(
  currentWam: number,
  totalCredits: number,
  unitCredits: number,
  currentMark: number,
  scenarioMarks: Array<{ label: string; mark: number }>
): UnitMarkScenario[] | null {
  if (
    Number.isNaN(currentWam) ||
    Number.isNaN(totalCredits) ||
    Number.isNaN(unitCredits) ||
    Number.isNaN(currentMark) ||
    totalCredits <= 0 ||
    unitCredits <= 0 ||
    unitCredits > totalCredits
  ) {
    return null;
  }

  return scenarioMarks
    .map(({ label, mark }) => {
      const wam =
        calculateWamAfterReplacingUnitMark(currentWam, totalCredits, unitCredits, currentMark, mark) ??
        currentWam;
      return {
        label,
        mark,
        wam,
        wamDelta: Math.round((wam - currentWam) * 100) / 100,
      };
    })
    .filter(row => !Number.isNaN(row.wam));
}

export interface ScholarshipTierResult {
  label: string;
  targetWam: number;
  requiredAverage: number | null;
  alreadyMet: boolean;
  achievable: boolean;
}

export const MONASH_SCHOLARSHIP_WAM_TIERS: Array<{ label: string; wam: number }> = [
  { label: 'Solid credit', wam: 65 },
  { label: 'Distinction average', wam: 70 },
  { label: 'Strong distinction', wam: 75 },
  { label: 'High distinction', wam: 80 },
  { label: 'Top merit tier', wam: 85 },
];

/** Required remaining-unit averages for common scholarship WAM planning bands. */
export function calculateScholarshipTierRequirements(
  currentWam: number,
  completedCredits: number,
  remainingCredits: number,
  tiers: Array<{ label: string; wam: number }> = MONASH_SCHOLARSHIP_WAM_TIERS
): ScholarshipTierResult[] | null {
  if (
    Number.isNaN(currentWam) ||
    Number.isNaN(completedCredits) ||
    Number.isNaN(remainingCredits) ||
    completedCredits < 0 ||
    remainingCredits <= 0
  ) {
    return null;
  }

  return tiers.map(({ label, wam: targetWam }) => {
    const requiredAverage = calculateRequiredRemainingAverage(
      currentWam,
      completedCredits,
      remainingCredits,
      targetWam
    );
    const alreadyMet = currentWam >= targetWam;
    const achievable = requiredAverage !== null && requiredAverage <= 100;
    return { label, targetWam, requiredAverage, alreadyMet, achievable };
  });
}

export type DeansHonoursTierId =
  | 'below_distinction'
  | 'distinction_average'
  | 'high_distinction'
  | 'deans_list_stretch';

export interface DeansHonoursStanding {
  tier: DeansHonoursTierId;
  title: string;
  description: string;
  distinctionAverage: boolean;
}

/** Planning bands for dean's honours list / faculty excellence awards (not official selection). */
export function getDeansHonoursStanding(wam: number): DeansHonoursStanding | null {
  if (Number.isNaN(wam)) return null;

  const distinctionAverage = wam >= MONASH_DISTINCTION_WAM_THRESHOLD;

  if (wam < MONASH_DISTINCTION_WAM_THRESHOLD) {
    return {
      tier: 'below_distinction',
      title: 'Below distinction average',
      description:
        'Distinction average at Monash is WAM 70+ (GPA 3.0+). Many dean\'s commendation tiers start here — plan recovery on high-credit units.',
      distinctionAverage: false,
    };
  }

  if (wam < 80) {
    return {
      tier: 'distinction_average',
      title: 'Distinction average range',
      description:
        'WAM 70–79 meets distinction average. Dean\'s Commendation or faculty merit certificates may be possible — faculty rules vary.',
      distinctionAverage: true,
    };
  }

  if (wam < 85) {
    return {
      tier: 'high_distinction',
      title: 'High distinction territory',
      description:
        'WAM 80+ strengthens course awards and percentile-based dean\'s list positioning. Top-2% cohort cutoffs still float each year.',
      distinctionAverage: true,
    };
  }

  return {
    tier: 'deans_list_stretch',
    title: 'Dean\'s list stretch zone',
    description:
      'WAM 85+ is competitive for faculty dean\'s honours list-style awards in strong cohorts — confirm percentile rules with your faculty.',
    distinctionAverage: true,
  };
}

export interface ExchangeWamPlanning {
  currentWam: number;
  wamAfterExchange: number;
  monashGradedCredits: number;
  exchangeCredits: number;
  totalDegreeCredits: number;
  meetsExchangeWamFloor: boolean;
}

/** Exchange SFR units do not change WAM — only degree credit progress. */
export function calculateExchangeWamPlanning(
  currentWam: number,
  monashGradedCredits: number,
  exchangeCredits: number,
  minWamFloor: number = MONASH_EXCHANGE_MIN_WAM_THRESHOLD
): ExchangeWamPlanning | null {
  if (
    Number.isNaN(currentWam) ||
    Number.isNaN(monashGradedCredits) ||
    Number.isNaN(exchangeCredits) ||
    Number.isNaN(minWamFloor) ||
    monashGradedCredits < 0 ||
    exchangeCredits < 0
  ) {
    return null;
  }

  return {
    currentWam,
    wamAfterExchange: currentWam,
    monashGradedCredits,
    exchangeCredits,
    totalDegreeCredits: monashGradedCredits + exchangeCredits,
    meetsExchangeWamFloor: currentWam >= minWamFloor,
  };
}
