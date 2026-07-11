export interface HomeImageAsset {
  src: string;
  width: number;
  height: number;
}

export const HOME_IMAGES = {
  hero: { src: '/home/hero.webp', width: 1024, height: 576 },
  searchWorkspace: { src: '/home/search-workspace.webp', width: 960, height: 639 },
  wamCalculator: { src: '/home/wam-calculator.webp', width: 960, height: 639 },
  steps: {
    enterMarks: { src: '/home/step-enter-marks.webp', width: 960, height: 540 },
    addSubjects: { src: '/home/step-add-subjects.webp', width: 960, height: 540 },
    instantWam: { src: '/home/step-instant-wam.webp', width: 960, height: 540 },
    viewResults: { src: '/home/step-view-results.webp', width: 960, height: 540 },
  },
  whyUse: {
    accurate: { src: '/home/why-accurate.webp', width: 640, height: 640 },
    fast: { src: '/home/why-fast.webp', width: 640, height: 640 },
    secure: { src: '/home/why-secure.webp', width: 640, height: 640 },
    free: { src: '/home/why-free.webp', width: 640, height: 426 },
  },
  featuredCalculators: {
    '/wam-to-gpa-calculator': { src: '/home/calc-wam-to-gpa.webp', width: 640, height: 426 },
    '/wam-target-calculator': { src: '/home/calc-target-wam.webp', width: 640, height: 426 },
    '/final-grade-calculator': { src: '/home/calc-grade-predictor.webp', width: 640, height: 468 },
    '/monash-distinction-average-calculator': { src: '/home/calc-gpa-to-wam.webp', width: 640, height: 426 },
    '/semester-wam-calculator': { src: '/home/calc-semester-wam.webp', width: 640, height: 426 },
    '/monash-honours-calculator': { src: '/home/calc-honours.webp', width: 640, height: 426 },
  },
} as const satisfies Record<string, unknown>;

export function getFeaturedCalculatorImage(href: string): HomeImageAsset | undefined {
  return HOME_IMAGES.featuredCalculators[href as keyof typeof HOME_IMAGES.featuredCalculators];
}
