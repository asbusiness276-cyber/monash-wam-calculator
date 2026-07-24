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
        href: '/wam-to-4-0-gpa-calculator',
        title: 'WAM to 4.0 GPA Calculator',
        description: 'Map Monash WAM to the US-style 4.0 GPA scale.',
      },
      {
        href: '/wam-to-7-0-gpa-calculator',
        title: 'WAM to 7.0 GPA Calculator',
        description: 'Map Monash WAM to the Australian 7-point GPA scale.',
      },
      {
        href: '/wam-to-cgpa-calculator',
        title: 'WAM to CGPA Calculator',
        description: 'Estimate cumulative 4.0 CGPA band from overall WAM.',
      },
      {
        href: '/gpa-to-wam-calculator',
        title: 'GPA to WAM Calculator',
        description: 'Estimate Monash WAM range from 4.0 or 7.0 GPA.',
      },
      {
        href: '/4-0-gpa-to-wam-calculator',
        title: '4.0 GPA to WAM Calculator',
        description: 'Convert 4.0 GPA to approximate Monash WAM ranges.',
      },
      {
        href: '/7-0-gpa-to-wam-calculator',
        title: '7.0 GPA to WAM Calculator',
        description: 'Convert 7-point GPA to approximate Monash WAM ranges.',
      },
      {
        href: '/cgpa-to-wam-calculator',
        title: 'CGPA to WAM Calculator',
        description: 'Convert cumulative 4.0 CGPA to WAM planning ranges.',
      },
      {
        href: '/gpa-to-percentage-calculator',
        title: 'GPA to Percentage Calculator',
        description: 'Map 4.0 or 7.0 GPA to Monash percentage bands.',
      },
      {
        href: '/4-0-to-7-0-gpa-calculator',
        title: '4.0 to 7.0 GPA Calculator',
        description: 'Convert US-style 4.0 GPA to Australian 7.0 scale.',
      },
      {
        href: '/7-0-to-4-0-gpa-calculator',
        title: '7.0 to 4.0 GPA Calculator',
        description: 'Convert Australian 7.0 GPA to Monash 4.0 scale.',
      },
      {
        href: '/gpa-calculator',
        title: 'GPA Calculator (Australia)',
        description: 'Free 4.0 GPA calculator for Australian university students.',
      },
      {
        href: '/4-0-gpa-calculator',
        title: '4.0 GPA Calculator',
        description: 'Compute GPA out of 4.0 from grades and credit points.',
      },
      {
        href: '/semester-gpa-calculator',
        title: 'Semester GPA Calculator',
        description: 'SGPA for one teaching period on the Monash 4.0 scale.',
      },
      {
        href: '/gpa-to-cgpa-calculator',
        title: 'GPA to CGPA Calculator',
        description: 'Add semester GPA to prior CGPA with credit weighting.',
      },
      {
        href: '/cgpa-to-gpa-calculator',
        title: 'CGPA to GPA Calculator',
        description: 'Convert 10-point CGPA to 4.0 GPA or confirm Monash CGPA.',
      },
      {
        href: '/10-point-gpa-to-wam-calculator',
        title: '10-Point GPA to WAM',
        description: 'Map 10.0 scale GPA/CGPA to Monash WAM bands.',
      },
      {
        href: '/atar-to-gpa-wam-calculator',
        title: 'ATAR to GPA & WAM',
        description: 'Indicative ATAR ↔ WAM ↔ GPA planning bands.',
      },
      {
        href: '/high-school-gpa-calculator',
        title: 'High School GPA Calculator',
        description: 'Weighted and unweighted US-style school GPA.',
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
      {
        href: '/percentage-to-gpa-calculator',
        title: 'Percentage to GPA Calculator',
        description: 'Convert a percentage mark to Monash 4.0 and 7.0 GPA bands.',
      },
      {
        href: '/7-0-scale-gpa-calculator',
        title: '7.0 Scale GPA Calculator',
        description: 'Australian 7-point GPA from Monash percentage marks.',
      },
    ],
  },
  {
    id: 'averages',
    title: 'Grade & Weighted Averages',
    description: 'Simple means and credit-weighted averages for semester planning.',
    links: [
      {
        href: '/grade-average-calculator',
        title: 'Grade Average Calculator',
        description: 'Simple mean of marks plus optional credit-weighted average.',
      },
      {
        href: '/weighted-average-calculator',
        title: 'Weighted Average Calculator',
        description: 'Credit-weighted average from unit marks and credit points.',
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

/** Category-first related tools for internal linking (excludes current path). */
export function getRelatedCalculatorHrefs(currentPath: string, maxItems = 6): string[] {
  const path = currentPath === '' ? '/' : currentPath;
  const category = CALCULATOR_CATEGORIES.find(c => c.links.some(link => link.href === path));
  const related: string[] = [];

  if (category) {
    for (const link of category.links) {
      if (link.href !== path) related.push(link.href);
      if (related.length >= maxItems) return related;
    }
  }

  for (const link of ALL_CALCULATOR_LINKS) {
    if (link.href === path || related.includes(link.href)) continue;
    related.push(link.href);
    if (related.length >= maxItems) break;
  }

  return related;
}
