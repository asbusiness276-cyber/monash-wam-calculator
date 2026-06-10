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

/** Final exam mark required for unit target (weights as decimals 0–1). */
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
