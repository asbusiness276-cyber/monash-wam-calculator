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
