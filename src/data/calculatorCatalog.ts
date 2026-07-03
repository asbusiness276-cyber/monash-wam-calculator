export interface CalculatorLink {
  href: string;
  title: string;
  description: string;
}

export interface CalculatorCategory {
  id: string;
  title: string;
  description: string;
  links: CalculatorLink[];
}

export const CALCULATOR_CATEGORIES: CalculatorCategory[] = [
  {
    id: 'wam',
    title: 'WAM & Semester Planning',
    description: 'Track and project your Weighted Average Mark across your degree or one semester.',
    links: [
      {
        href: '/',
        title: 'Monash WAM Calculator',
        description: 'Official-style credit-weighted WAM with Year 1 half-weighting.',
      },
      {
        href: '/semester-wam-calculator',
        title: 'Semester WAM Calculator',
        description: 'Credit-weighted average for one teaching period only.',
      },
      {
        href: '/wam-projection-calculator',
        title: 'WAM What-If Projection',
        description: 'Model how upcoming units change your cumulative WAM.',
      },
      {
        href: '/wam-target-calculator',
        title: 'WAM Target Calculator',
        description: 'Average needed on remaining units to hit your goal.',
      },
      {
        href: '/wam-milestones-calculator',
        title: 'WAM Milestones Checker',
        description: 'Check pass, exchange, distinction, HD, and merit WAM bands.',
      },
      {
        href: '/monash-official-wam-calculator',
        title: 'Official vs Simple WAM',
        description: 'Compare planning WAM with Year 1 half-weighted official WAM.',
      },
      {
        href: '/degree-progress-calculator',
        title: 'Degree Progress Tracker',
        description: 'Credit points completed and semesters remaining.',
      },
    ],
  },
  {
    id: 'gpa',
    title: 'GPA & Grade Conversion',
    description: 'Monash 4.0 GPA, CGPA, and scale conversion between WAM and GPA.',
    links: [
      {
        href: '/wam-to-gpa-calculator',
        title: 'WAM to GPA Calculator',
        description: 'Convert overall WAM to 4.0 and 7.0 GPA bands.',
      },
      {
        href: '/gpa-to-wam-calculator',
        title: 'GPA to WAM Calculator',
        description: 'Estimate Monash WAM range from 4.0 or 7.0 GPA.',
      },
      {
        href: '/monash-gpa-calculator',
        title: 'Monash GPA Calculator',
        description: 'Unit-by-unit GPA on the official 4.0 scale (fail = 0.3).',
      },
      {
        href: '/monash-cgpa-calculator',
        title: 'Monash CGPA Calculator',
        description: 'Update cumulative GPA after each semester.',
      },
      {
        href: '/monash-target-gpa-calculator',
        title: 'Monash Target GPA Calculator',
        description: 'Semester GPA needed to reach a cumulative GPA goal.',
      },
      {
        href: '/monash-grade-converter',
        title: 'Monash Grade Converter',
        description: 'Convert between percentage mark, letter grade, and GPA.',
      },
      {
        href: '/mark-to-grade-calculator',
        title: 'Mark to Grade Calculator',
        description: 'Map any percentage to HD, D, C, P, or N instantly.',
      },
    ],
  },
  {
    id: 'units',
    title: 'Unit Marks & Exams',
    description: 'Plan assessment marks, final exams, and per-unit targets.',
    links: [
      {
        href: '/final-grade-calculator',
        title: 'Final Grade Calculator',
        description: 'Exam mark required for HD, D, C, or pass target.',
      },
      {
        href: '/unit-mark-calculator',
        title: 'Unit Mark Calculator',
        description: 'Weighted mark from assignments, tests, and coursework.',
      },
      {
        href: '/unit-target-calculator',
        title: 'Unit Target Calculator',
        description: 'Mark needed on remaining assessments in a unit.',
      },
      {
        href: '/pass-mark-calculator',
        title: 'Pass Mark Calculator',
        description: 'Minimum exam mark needed to pass at 50% overall.',
      },
    ],
  },
  {
    id: 'merit',
    title: 'Merit, Honours & Recovery',
    description: 'Scholarships, distinction average, honours bands, and fail recovery.',
    links: [
      {
        href: '/monash-distinction-average-calculator',
        title: 'Distinction Average Calculator',
        description: 'Check WAM 70+ or GPA 3.0+ distinction status.',
      },
      {
        href: '/monash-scholarship-wam-calculator',
        title: 'Scholarship WAM Calculator',
        description: 'Merit WAM tiers — average needed on remaining units.',
      },
      {
        href: '/monash-honours-calculator',
        title: 'Monash Honours Calculator',
        description: 'H1, H2A, H2B classification from WAM.',
      },
      {
        href: '/monash-deans-honours-calculator',
        title: "Dean's Honours List Calculator",
        description: 'Faculty excellence planning bands from your WAM.',
      },
      {
        href: '/failed-unit-wam-calculator',
        title: 'Failed Unit WAM Impact',
        description: 'How a fail, supp pass, or recovery changes WAM.',
      },
      {
        href: '/withdrawn-fail-impact-calculator',
        title: 'Withdrawn Fail Impact',
        description: 'WN GPA value 0.0 plus WAM excluded vs worst-case scenarios.',
      },
      {
        href: '/supp-repeat-wam-calculator',
        title: 'Supp vs Repeat WAM',
        description: 'Compare supplementary pass at 50 vs repeating a unit.',
      },
      {
        href: '/monash-exchange-wam-calculator',
        title: 'Exchange WAM Calculator',
        description: 'SFR study abroad — WAM unchanged, credit progress.',
      },
    ],
  },
];

/** Flat list of all calculator tools (excludes /articles). */
export const ALL_CALCULATOR_LINKS: CalculatorLink[] = CALCULATOR_CATEGORIES.flatMap(c => c.links);

export const CALCULATOR_COUNT = ALL_CALCULATOR_LINKS.length;
