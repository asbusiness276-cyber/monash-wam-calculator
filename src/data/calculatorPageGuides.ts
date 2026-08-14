export interface GuideTable {
  headers: string[];
  rows: string[][];
}

export interface GuideCallout {
  variant: 'info' | 'warning' | 'tip';
  title?: string;
  text: string;
}

export interface GuideExample {
  title: string;
  paragraphs: string[];
  table?: GuideTable;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  steps?: string[];
  examples?: GuideExample[];
  table?: GuideTable;
  callouts?: GuideCallout[];
}

export interface CalculatorPageGuideData {
  sections: GuideSection[];
}

import { CALCULATOR_GUIDE_EXPANSIONS_PART1 } from './calculatorGuideExpansionsPart1';
import { CALCULATOR_GUIDE_EXPANSIONS_PART2 } from './calculatorGuideExpansionsPart2';
import { CALCULATOR_GUIDE_EXPANSIONS_PART3 } from './calculatorGuideExpansionsPart3';
import { CALCULATOR_GUIDE_EXPANSIONS_PART4 } from './calculatorGuideExpansionsPart4';

const EXPANDED_GUIDES: Record<string, CalculatorPageGuideData> = {
  ...CALCULATOR_GUIDE_EXPANSIONS_PART1,
  ...CALCULATOR_GUIDE_EXPANSIONS_PART2,
  ...CALCULATOR_GUIDE_EXPANSIONS_PART3,
  ...CALCULATOR_GUIDE_EXPANSIONS_PART4,
  '/student-budget-calculator': {
    sections: [
      {
        heading: 'How to use the Student Budget Calculator',
        paragraphs: [
          'Choose whether you want to budget weekly or monthly.',
          'Add all your income sources, such as your part-time job, allowances, or scholarships.',
          'Add your expenses, like rent, groceries, transportation, and entertainment.',
          'Check your net balance to see if you are saving money or spending more than you earn!'
        ]
      }
    ]
  },
  '/study-time-calculator': {
    sections: [
      {
        heading: 'How to use the Study Time Calculator',
        paragraphs: [
          'Enter your total credit points for the semester (e.g., 24 for a standard full-time load).',
          'The calculator will estimate your total recommended weekly workload.',
          'See the breakdown between contact hours (classes, lectures) and self-directed study hours so you can plan your schedule.'
        ]
      }
    ]
  },
  '/attendance-calculator': {
    sections: [
      {
        heading: 'How to use the Attendance Calculator',
        paragraphs: [
          'Enter the total number of classes in the semester.',
          'Enter how many classes you have missed so far.',
          'The calculator will tell you if you can afford to skip any more classes while staying above the 75% or 80% hurdle.'
        ]
      }
    ]
  },
  '/essay-word-count-allocator': {
    sections: [
      {
        heading: 'How to use the Essay Word Count Allocator',
        paragraphs: [
          'Enter your total required word count.',
          'Adjust the percentages for your introduction and conclusion (typically 10% each).',
          'The tool will split your total words into introduction, body paragraphs, and conclusion blocks.'
        ]
      }
    ]
  },
  '/reading-time-calculator': {
    sections: [
      {
        heading: 'How to use the Reading Time Calculator',
        paragraphs: [
          'Enter the word count of your reading material.',
          'Select your estimated reading speed (default is 200 words per minute for average readers).',
          'See how many hours and minutes you need to set aside to finish the text.'
        ]
      }
    ]
  },
  '/pomodoro-study-timer': {
    sections: [
      {
        heading: 'How to use the Pomodoro Study Timer',
        paragraphs: [
          'Click Start to begin a 25-minute study session without distractions.',
          'When the timer ends, take a 5-minute break by clicking the Break button.',
          'Repeat this cycle to maximize productivity without feeling burnt out.'
        ]
      }
    ]
  },
  '/typing-time-estimator': {
    sections: [
      {
        heading: 'How to use the Typing Time Estimator',
        paragraphs: [
          'Enter your essay word count.',
          'Select your typing speed (Words Per Minute).',
          'The tool will output the absolute minimum time required to physically hit the keys to write the essay.'
        ]
      }
    ]
  }
};

export const CALCULATOR_PAGE_GUIDES: Record<string, CalculatorPageGuideData> = {
  '/atar-course-checker': {
    sections: [
      {
        heading: 'How to use the ATAR Course Checker',
        paragraphs: [
          'This tool helps Victorian high school students map their expected or final ATAR to Monash University undergraduate degrees.',
          'Simply enter your ATAR and the tool will highlight courses where you meet or exceed the published ATAR cut-off.',
          'If you are eligible for the Special Entry Access Scheme (SEAS) through VTAC, check the SEAS box to see the lowered ATAR requirements for eligible students.'
        ]
      }
    ]
  },
  '/monash-distinction-average-calculator': {
    sections: [
      {
        heading: 'What Is Distinction Average at Monash?',
        paragraphs: [
          'Distinction average is a Monash University benchmark for strong academic standing. Students and employers often treat it as WAM 70 or above, or GPA 3.0 or above on the official 4.0 GPA scale. It is not the same as earning a D grade on one unit — distinction average describes your overall course performance across all completed units.',
          'Faculties reference distinction average for merit certificates, some scholarship renewals, dean\'s commendation tiers, and progression conversations. The exact rules depend on your course and award year, so always confirm with Monash policy pages before relying on a calculator result for formal decisions.',
        ],
        bullets: [
          'WAM 70+ typically meets distinction average on the percentage scale.',
          'GPA 3.0+ on Monash official 4.0 scale can also qualify.',
          'One strong unit does not guarantee distinction average — your cumulative result matters.',
        ],
      },
      {
        heading: 'How to Use This Calculator',
        paragraphs: [
          'Enter your current WAM from WES or the main Monash WAM calculator. If you also track GPA, enter your official 4.0 GPA — the tool checks both pathways. A positive gap means you still need that many points to reach the distinction floor; a negative gap means you are already above it.',
          'If you are below 70 WAM with limited credit points remaining, pair this tool with the WAM target calculator to see whether distinction average is still mathematically reachable on your remaining enrolment load.',
        ],
      },
      {
        heading: 'Distinction Average vs Other Monash Benchmarks',
        table: {
          headers: ['Benchmark', 'Typical threshold', 'What it measures'],
          rows: [
            ['Distinction average', 'WAM 70+ or GPA 3.0+', 'Overall course standing'],
            ['Honours H2A grade', 'WAM 70–79.99', 'Honours degree classification band'],
            ['Honours H1 grade', 'WAM 80+', 'First class honours course grade'],
            ['Dean\'s list (example)', 'Percentile-based', 'Faculty graduation excellence award'],
          ],
        },
        paragraphs: [
          'Students often confuse these terms. Distinction average is a general merit floor; honours classifications and dean\'s list awards use separate policies. Read our honours WAM requirements guide and dean\'s honours list article for faculty-specific planning.',
        ],
      },
    ],
  },
  '/monash-scholarship-wam-calculator': {
    sections: [
      {
        heading: 'How Scholarships Use WAM at Monash',
        paragraphs: [
          'Merit scholarships at Monash University often consider academic performance, but no single WAM applies to every award. Equity scholarships weigh financial need and personal circumstances. Faculty scholarships may set different floors for domestic and international students. This calculator shows planning bands — not guaranteed eligibility.',
          'Use the tier table to see what average you would need on remaining units to reach common merit targets (65 through 85 WAM). If a tier shows "not achievable," your remaining credit load cannot reach that WAM without adding more performance later — adjust your goal or timeline.',
        ],
      },
      {
        heading: 'Reading the Tier Table',
        paragraphs: [
          'Each row uses credit-weighted maths: (target WAM × total cp − current WAM × completed cp) ÷ remaining cp. Enter completed credit points only for units already on your transcript. Planned future units belong in "remaining" only when you know their credit value.',
          'A required average of 78% on remaining units means you need distinction-level marks across future enrolments — realistic for some students, demanding for others. Focus effort on high-credit units where improvement moves WAM the most.',
        ],
        bullets: [
          'Check each scholarship\'s official page for equity vs merit rules.',
          'Renewal scholarships may require maintaining a minimum WAM each year.',
          'Some awards use GPA or distinction average language instead of raw WAM.',
        ],
      },
      {
        heading: 'Scholarship Planning Workflow',
        paragraphs: [
          'Step 1: Confirm current WAM on WES. Step 2: Sum completed and remaining credit points realistically. Step 3: Run this calculator for tier targets. Step 4: Cross-check distinction average status. Step 5: Read our monash scholarship wam requirements article for award-specific deadlines and criteria.',
        ],
      },
    ],
  },
  '/failed-unit-wam-calculator': {
    sections: [
      {
        heading: 'Why Failed Units Matter for Monash WAM',
        paragraphs: [
          'At Monash University, failed units normally remain in your WAM calculation under standard coursework rules. A fail drags your weighted average down in proportion to the unit\'s credit points — a 12-credit fail hurts twice as much as a 6-credit fail at the same mark.',
          'This calculator shows how your WAM would change if the failed unit mark stayed the same, improved through a supplementary pass (capped at 50%), or recovered to credit or distinction levels. It helps you understand recovery options before speaking with faculty advisers.',
        ],
      },
      {
        heading: 'Supplementary Pass vs Higher Recovery',
        paragraphs: [
          'A supplementary assessment passed at 50% replaces the fail mark in WAM maths for planning purposes, lifting your average compared to keeping a mark in the 40s. Recovering to 65% or 75% moves WAM further, but may require repeating the unit or other faculty pathways — not only a supp exam.',
          'For a full comparison between supplementary pass and repeating the unit (where both attempts may count), use the supp vs repeat WAM calculator alongside this tool.',
        ],
        table: {
          headers: ['Scenario', 'Typical mark', 'WAM effect'],
          rows: [
            ['Keep fail', '0–49%', 'Lowest WAM — fail stays on record'],
            ['Supplementary pass', '50% (capped)', 'Moderate recovery'],
            ['Credit recovery', '65%', 'Stronger lift if permitted'],
            ['Distinction recovery', '75%+', 'Best WAM outcome if achievable'],
          ],
        },
      },
      {
        heading: 'Recovery Planning Tips',
        bullets: [
          'Enter WAM with the fail already included — match your WES snapshot.',
          'Prioritise high-credit units where future distinction marks can offset the fail.',
          'Speak with Monash Connect or your faculty about supp eligibility and repeat rules.',
          'Track progress each semester with the WAM projection calculator.',
        ],
        paragraphs: [
          'One failed unit rarely ends honours or scholarship hopes if enough credit points remain. The key is knowing the maths early and choosing the recovery path that fits your timetable and faculty policy.',
        ],
      },
    ],
  },
  '/monash-deans-honours-calculator': {
    sections: [
      {
        heading: 'Dean\'s Honours List vs Honours Degree',
        paragraphs: [
          'Monash students often mix up two different ideas. An honours research degree uses H1, H2A, and H2B classifications from WAM. A dean\'s honours list award is a faculty graduation excellence recognition — often percentile-based, not a fixed WAM for every faculty.',
          'Monash Business School publicly describes dean\'s honours list as top two percentile by WAM within a graduating cohort. Other faculties may use distinction average language, dean\'s commendation certificates, or course awards with different selection logic.',
        ],
      },
      {
        heading: 'Planning Bands Explained',
        paragraphs: [
          'This calculator shows educational planning bands, not official selection outcomes. WAM below 70 sits below distinction average — a common floor for merit conversations. WAM 70–79 is distinction territory where commendation-style awards may be possible. WAM 80+ strengthens course award and percentile positioning. WAM 85+ is competitive for top-percentile dean\'s list-style recognition in strong cohorts.',
          'Because percentile cutoffs float each year, a fixed number like 85 WAM does not guarantee dean\'s list everywhere. Use the WAM target calculator to model whether final-year units can lift your average enough for your personal stretch goal.',
        ],
      },
      {
        heading: 'When WAM Locks In for Graduation Awards',
        bullets: [
          'Awards use certified WAM at degree completion — not mid-degree estimates.',
          'Exchange SFR units do not add marks to WAM.',
          'Failed units and repeats both count under normal Monash WAM rules.',
          'List dean\'s honours list on applications only after faculty confirmation.',
        ],
        paragraphs: [
          'Read our dean\'s honours list guide for resume wording, faculty examples, and common mistakes students make when reporting achievements.',
        ],
      },
    ],
  },
  '/monash-exchange-wam-calculator': {
    sections: [
      {
        heading: 'Do Exchange Grades Affect Monash WAM?',
        paragraphs: [
          'Successfully completed outbound exchange units at Monash University normally transfer as SFR — Satisfied Faculty Requirement. Host university percentage marks do not appear as numeric grades on your Monash transcript and do not enter WAM, GPA, or CGPA calculations.',
          'That surprises many students who expect a strong semester abroad to boost their average. Exchange advances degree progress through credit points without mark risk to WAM — assuming you pass and faculty credit is approved.',
        ],
      },
      {
        heading: 'What This Calculator Shows',
        paragraphs: [
          'Enter your Monash-graded WAM and credit points, then add planned exchange credit as SFR. Your WAM after exchange equals your current WAM — unchanged. Total degree credit points increase, showing progress toward completion.',
          'The exchange WAM floor check uses a typical 60% planning benchmark referenced in Monash standing guidance. Faculty rules vary; confirm eligibility with Monash Abroad and your managing faculty before applying.',
        ],
        bullets: [
          'Keep host transcripts and unit outlines for credit approval.',
          'Failed exchange units may appear as Fail if credit is not granted.',
          'Recalculate WAM after return using only Monash-graded units.',
        ],
      },
      {
        heading: 'Exchange and Long-Term Planning',
        paragraphs: [
          'Strong pre-exchange WAM still matters for scholarships, honours planning, and standing reviews even though exchange itself does not add marks. Use the distinction average calculator and scholarship WAM tool on your Monash-graded baseline before you depart.',
          'Read our exchange grades and WAM guide for SFR definitions, application standing rules, and post-return checklist steps.',
        ],
      },
    ],
  },
  '/monash-honours-calculator': {
    sections: [
      {
        heading: 'Monash Honours Degree Classifications',
        paragraphs: [
          'Monash honours course grades map from WAM using official thresholds: H1 (First Class Honours) from 80, H2A (Second Class Division A) from 70 to below 80, H2B from 60 to below 70, and pass band from 50 to below 60. Below 50 is not a passing honours course average.',
          'These classifications describe the honours degree outcome — different from honours entry cut-offs, which faculties set separately each year and may label "competitive" without publishing a fixed minimum.',
        ],
        table: {
          headers: ['Code', 'WAM range', 'Title'],
          rows: [
            ['H1', '80 – 100', 'First Class Honours'],
            ['H2A', '70 – 79.99', 'Second Class Honours Division A'],
            ['H2B', '60 – 69.99', 'Second Class Honours Division B'],
            ['P', '50 – 59.99', 'Pass (no honours grade)'],
          ],
        },
      },
      {
        heading: 'H2A Starts at 70 — Not 75',
        paragraphs: [
          'Generic Australian calculators sometimes show H2A from 75 WAM. Monash official honours schema uses 70 as the H2A floor. A WAM of 79.5 is H2A; H1 begins at exactly 80.00. Small differences matter on transcripts and employer reporting.',
          'Calculate your WAM with year-level weighting (Year 1 at 0.5) using the main Monash WAM calculator before entering your result here.',
        ],
      },
      {
        heading: 'Honours Entry vs Honours Classification',
        bullets: [
          'Entry requirements are faculty-specific and may change annually.',
          'Thesis-weighted honours years may use different unit weighting — check your handbook.',
          'Pair this tool with our honours WAM requirements article for admission planning.',
        ],
        paragraphs: [
          'Use the WAM target calculator to model whether remaining units can lift you into competitive entry bands before applications close.',
        ],
      },
    ],
  },
  '/monash-gpa-calculator': {
    sections: [
      {
        heading: 'Monash Official 4.0 GPA Scale',
        paragraphs: [
          'Monash University reports GPA on a 4.0 scale where High Distinction = 4.0, Distinction = 3.0, Credit = 2.0, Pass = 1.0, and Fail (N) = 0.3 — not zero. Withdrawn fail (WN) = 0.0. This fail value surprises students migrating from institutions that use 0.0 fails.',
          'GPA = sum of (grade value × credit points) ÷ sum of credit points, rounded to three decimal places on official records. Enter each unit by letter grade or percentage mark; the calculator maps marks to standard Monash bands before computing.',
        ],
      },
      {
        heading: 'GPA vs WAM — When to Use Each',
        paragraphs: [
          'WAM preserves exact percentage differences inside a grade band — two students at 71 and 79 WAM both map to D for GPA but have different WAM. Employers and Monash faculties often prefer WAM for fine comparisons; some international forms request GPA.',
          'Use the Monash CGPA calculator to combine prior GPA with a new semester. Use WAM to GPA when applications need scale conversion from your weighted average.',
        ],
        bullets: [
          'Distinction average is often stated as GPA 3.0+ or WAM 70+.',
          'Include failed units — they count at 0.3 per credit point.',
          'Verify official GPA on WES before formal submissions.',
        ],
      },
    ],
  },
  '/monash-cgpa-calculator': {
    sections: [
      {
        heading: 'What Is CGPA at Monash?',
        paragraphs: [
          'Cumulative GPA (CGPA) combines your GPA from completed study with new semester results, weighted by credit points. It answers: "What is my overall GPA after this teaching period?" — useful after each results release.',
          'Enter your prior CGPA and completed credit points, then add this semester\'s units by grade or mark. The calculator computes semester GPA and updated cumulative GPA using Monash official grade values.',
        ],
      },
      {
        heading: 'Worked Example',
        paragraphs: [
          'Suppose your CGPA is 2.75 after 96 credit points. This semester you complete three 6-credit units at HD, HD, and D. Semester GPA = (4.0×6 + 4.0×6 + 3.0×6) ÷ 18 = 3.667. New CGPA = (2.75×96 + 3.667×18) ÷ 114 ≈ 2.90. CGPA moves slowly when many credit points are already behind you.',
        ],
      },
      {
        heading: 'CGPA Planning Tips',
        bullets: [
          'Update after every official results release.',
          'Use target GPA calculator for next-semester goals.',
          'Cross-check with WAM when faculties reference distinction average.',
          'Malaysia campus students should confirm local reporting rules with Monash.',
        ],
        paragraphs: [
          'Read our CGPA explained guide for transcript reading and renewal scholarship contexts.',
        ],
      },
    ],
  },
  '/monash-target-gpa-calculator': {
    sections: [
      {
        heading: 'Target GPA Planning at Monash',
        paragraphs: [
          'This calculator answers: what semester GPA do I need on my next enrolment load to reach a cumulative GPA target? It uses your current CGPA, completed credit points, planned semester credit points, and goal GPA.',
          'Results above 4.0 mean the target is not achievable in one semester on the official scale — you may need multiple strong semesters or a longer timeline.',
        ],
      },
      {
        heading: 'How It Differs from WAM Target',
        paragraphs: [
          'WAM target tools work in percentage marks with credit weighting. GPA target tools work in grade-point space where marks compress into bands. A student aiming for distinction average might track both: WAM 70+ and GPA 3.0+.',
          'Pair with the Monash GPA calculator to verify semester inputs and with the distinction average calculator for merit benchmarks.',
        ],
      },
    ],
  },
  '/monash-grade-converter': {
    sections: [
      {
        heading: 'Converting Monash Marks, Grades, and GPA',
        paragraphs: [
          'Monash coursework uses percentage marks mapped to letter grades with official GPA values. This converter lets you move between mark, letter, and GPA on the 4.0 scale — useful when a form asks for a different field than your transcript shows.',
          'Special grades (NP, NH, WN) have distinct GPA values. Standard HD/D/C/P/N bands follow the published grading schema procedure.',
        ],
        table: {
          headers: ['Grade', 'Mark range', 'GPA value'],
          rows: [
            ['HD', '80–100', '4.0'],
            ['D', '70–79', '3.0'],
            ['C', '60–69', '2.0'],
            ['P', '50–59', '1.0'],
            ['N (fail)', '0–49', '0.3'],
          ],
        },
      },
      {
        heading: 'When to Use This Tool',
        bullets: [
          'Translating a single unit result for an application form.',
          'Checking approximate GPA value before entering units in the GPA calculator.',
          'Understanding why fail counts as 0.3, not 0.0, on Monash records.',
        ],
        paragraphs: [
          'For overall course performance, use the Monash GPA or WAM calculators — this tool handles single-value conversion, not cumulative averages.',
        ],
      },
    ],
  },
  '/supp-repeat-wam-calculator': {
    sections: [
      {
        heading: 'Supplementary vs Repeat at Monash',
        paragraphs: [
          'When you fail a unit, Monash may offer a supplementary assessment. Passing at 50% replaces the fail mark in WAM for that unit without adding extra credit points. Repeating the unit adds a second attempt — and under normal rules both the fail and repeat marks can count toward WAM, increasing total credit points.',
          'This calculator compares WAM after a supplementary pass at 50 versus WAM after a repeat attempt at a mark you choose. It also estimates the repeat mark needed to beat the supplementary outcome.',
        ],
      },
      {
        heading: 'Which Path Is Better?',
        paragraphs: [
          'A supplementary pass is often better for WAM when you only need 50 and want to avoid carrying two attempts. A repeat can beat supp if you can score well above the breakeven mark — especially on high-credit units where a distinction repeat outweighs a capped 50.',
          'Timetable, progression rules, and faculty advice matter as much as maths. You cannot repeat during an exchange semester if it clashes with approved travel, for example.',
        ],
        bullets: [
          'Enter current WAM with the fail already included.',
          'Check supp eligibility on official Monash channels.',
          'Read our supplementary exam WAM guide and repeat unit guide.',
        ],
      },
    ],
  },
  '/wam-projection-calculator': {
    sections: [
      {
        heading: 'What-If WAM Projection',
        paragraphs: [
          'The WAM projection calculator models how upcoming units — with estimated marks — will change your cumulative WAM. Enter your confirmed WAM and completed credit points, then add planned units with expected marks and credit values.',
          'Use conservative and optimistic scenarios before enrolment decisions. A semester of distinction marks lifts WAM slowly if you already have 150+ credit points behind you; the same marks matter more early in your degree.',
        ],
      },
      {
        heading: 'Planning Scenarios',
        bullets: [
          'Model HD-heavy vs credit-level outcomes before census date.',
          'See whether one weak 12-credit unit disproportionately drags projection.',
          'Compare projection results with WAM target goals for honours or scholarships.',
        ],
        paragraphs: [
          'Label estimated marks clearly — only confirmed transcript marks belong in official planning documents. Update projections after every results release. For a full walkthrough with worked examples, read the monash wam projection guide.',
        ],
      },
    ],
  },
  '/unit-mark-calculator': {
    sections: [
      {
        heading: 'Weighted Unit Mark Calculator',
        paragraphs: [
          'Most Monash units split assessment across tasks — assignments, tests, participation, exams — each with a weight totalling 100%. This calculator computes your current unit mark from weighted components before the final exam.',
          'Enter each assessment mark and its weight percentage. Weights must sum to 100% for a valid result. Use the output with the final grade calculator to see what exam mark you need for HD, D, or pass targets.',
        ],
      },
      {
        heading: 'Example',
        paragraphs: [
          'Assignment 80% at weight 30%, mid-semester test 65% at weight 20%, participation 100% at weight 10% → weighted mark = 80×0.30 + 65×0.20 + 100×0.10 = 51%. With 40% exam weight remaining, you need a higher exam score to reach distinction overall.',
        ],
      },
    ],
  },
  '/unit-target-calculator': {
    sections: [
      {
        heading: 'Target Mark on Remaining Assessments',
        paragraphs: [
          'Unlike the final grade calculator (coursework vs one exam), this tool handles multiple remaining assessments with individual weights. Enter marks and weights for completed tasks, then set a target overall unit percentage.',
          'The calculator solves for the minimum average required on remaining assessment weight — useful when several tasks are still open in the same unit.',
        ],
      },
      {
        heading: 'When to Use Unit Target vs Final Grade',
        bullets: [
          'Unit target: several remaining tasks with different weights.',
          'Final grade: simple coursework % + final exam % split.',
          'Unit mark calculator: current standing from all released tasks.',
        ],
        paragraphs: [
          'Read our final exam mark calculator guide for exam-heavy units and faculty hurdle rules.',
        ],
      },
    ],
  },
  '/mark-to-grade-calculator': {
    sections: [
      {
        heading: 'Monash Percentage to Letter Grade',
        paragraphs: [
          'Monash standard coursework bands: HD 80–100, D 70–79, C 60–69, P 50–59, N below 50. Boundary marks matter — 79% is Distinction while 80% is High Distinction. One percentage point can change scholarship eligibility perceptions and employer screening.',
          'This tool converts a single mark instantly. For cumulative performance across your degree, use the Monash WAM calculator.',
        ],
      },
      {
        heading: 'GPA Band Reference',
        paragraphs: [
          'Each letter grade maps to an official Monash GPA value on the 4.0 scale. HD = 4.0, D = 3.0, C = 2.0, P = 1.0, N = 0.3. Use the Monash GPA calculator for multi-unit cumulative GPA.',
        ],
      },
    ],
  },
  '/wam-to-gpa-calculator': {
    sections: [
      {
        heading: 'Converting Monash WAM to GPA',
        paragraphs: [
          'Monash reports WAM as a percentage (0–100). Many scholarship bodies, visa forms, and overseas universities request GPA on a 4.0 or 7.0 scale instead. This converter maps your WAM to Monash grade bands and estimated GPA values for planning.',
          'Conversion is approximate — official GPA on your transcript uses letter-grade maths per unit, not a single WAM snapshot. Two students with the same WAM can have slightly different GPA if their marks cluster differently inside bands.',
        ],
      },
      {
        heading: 'Which Scale to Report',
        bullets: [
          'Use 4.0 when US-style forms or Monash official GPA are requested.',
          'Use 7.0 when Australian HDR or some international schemas ask for it.',
          'Lead with WAM when the form allows — it is Monash native metric.',
        ],
        paragraphs: [
          'Read our WAM vs GPA postgraduate guide when coursework applications ask which metric to emphasise.',
        ],
      },
    ],
  },
  '/gpa-to-wam-calculator': {
    sections: [
      {
        heading: 'GPA to WAM Estimation',
        paragraphs: [
          'Converting GPA back to WAM produces a range, not one exact number, because grade bands span several percentage points. A GPA of 3.0 on the 4.0 scale maps to roughly 70–79% WAM at Monash — the Distinction band.',
          'Use this when transferring from another institution, comparing scholarship cut-offs, or estimating Monash-equivalent standing from a host university GPA.',
        ],
      },
      {
        heading: 'Limitations',
        bullets: [
          'Cross-university GPA scales differ — always note source institution.',
          'Ranges are more honest than false-precision single values.',
          'Verify with official Monash WAM once you have transcript marks.',
        ],
        paragraphs: [
          'After estimating, enter real unit marks in the Monash WAM calculator for accurate cumulative results.',
        ],
      },
    ],
  },
  '/final-grade-calculator': {
    sections: [
      {
        heading: 'Final Exam Mark Formula',
        paragraphs: [
          'Required exam mark = (target overall − coursework mark × coursework weight) ÷ exam weight. Weights are decimals summing to 1 (e.g. 60% coursework = 0.60). A negative result means your target is already secured from coursework; above 100% means the target is not achievable without adjustment.',
          'Always confirm assessment weights in the unit guide — some units include hurdle tasks or non-standard splits.',
        ],
      },
      {
        heading: 'Study Planning with Targets',
        bullets: [
          'Run scenarios for pass (50), credit (65), distinction (75), and HD (85).',
          'Update after each released assessment mark.',
          'Discuss impossible targets early with your unit coordinator.',
        ],
        paragraphs: [
          'Semester-wide results feed your Monash WAM. Use the WAM target calculator to connect unit goals with degree-level averages.',
        ],
      },
    ],
  },
  '/semester-wam-calculator': {
    sections: [
      {
        heading: 'Semester vs Degree WAM',
        paragraphs: [
          'Semester WAM measures one teaching period only. Degree WAM on your transcript includes every completed unit with Monash year-level weighting (Year 1 at 0.5). A single strong semester lifts cumulative WAM gradually when many credit points already count toward your average.',
          'Use semester WAM after results to review how the current period went. Use the main WAM calculator for official-style cumulative tracking.',
        ],
      },
      {
        heading: 'Credit Weighting Reminder',
        paragraphs: [
          'Never simple-average unit percentages when credit points differ. A 12-credit unit at 85% and a 6-credit unit at 70% yield weighted average 80%, not 77.5%. This calculator applies credit weighting automatically.',
        ],
      },
    ],
  },
  '/wam-target-calculator': {
    sections: [
      {
        heading: 'Credit-Weighted Target Maths',
        paragraphs: [
          'Required average on remaining units = (target WAM × total cp − current WAM × completed cp) ÷ remaining cp. High-credit future units move this average more than low-credit electives when they complete.',
          'If the result exceeds 100%, the target is unreachable with that remaining load unless you add more credit-bearing performance later or adjust the goal.',
        ],
      },
      {
        heading: 'Common Monash Goals',
        table: {
          headers: ['Goal', 'WAM band', 'Notes'],
          rows: [
            ['Distinction average', '70+', 'Merit baseline'],
            ['Competitive honours', '75–80+', 'Faculty-specific'],
            ['High distinction positioning', '80+', 'Strong scholarship / awards'],
          ],
        },
        paragraphs: [
          'Pair with distinction average and scholarship WAM calculators for layered planning. Read what is a good WAM for benchmark context.',
        ],
      },
    ],
  },
  '/monash-official-wam-calculator': {
    sections: [
      {
        heading: 'Official Monash WAM Formula',
        paragraphs: [
          'Monash University calculates WAM with year-level weighting: Year 1 units multiply by 0.5, Year 2 and above multiply by 1.0. The formula is sum(mark × cp × year weight) ÷ sum(cp × year weight).',
          'A simple planning average — sum(mark × cp) ÷ sum(cp) — ignores year level. That is useful for quick estimates but does not match WES when Year 1 units are in the mix.',
        ],
      },
      {
        heading: 'When the Two Numbers Diverge',
        bullets: [
          'Strong Year 1 marks lift official WAM less than a simple average suggests.',
          'Weak Year 1 marks hurt official WAM less than a simple average suggests.',
          'Later-year-heavy transcripts show smaller gaps between the two methods.',
        ],
        paragraphs: [
          'Enter each unit with mark, credit points, and year level. Unit codes like FIT1045 auto-suggest Year 1 from the first digit — override if your handbook differs.',
        ],
      },
    ],
  },
  '/pass-mark-calculator': {
    sections: [
      {
        heading: 'Minimum Mark to Pass at Monash',
        paragraphs: [
          'A Pass (P) on standard Monash coursework requires 50% overall unless a unit specifies hurdles. This calculator solves for the final exam percentage needed when coursework is already complete.',
          'Formula: required exam = (50 − coursework × coursework weight) ÷ exam weight. Weights are percentages that should total 100% for typical units.',
        ],
      },
      {
        heading: 'Pass vs Higher Targets',
        paragraphs: [
          'Use the final grade calculator when aiming for credit (60+), distinction (70+), or HD (80+). This pass-only tool answers the most common anxiety question before exams: what is the minimum to pass?',
        ],
        bullets: [
          'Negative result = already at 50%+ from coursework alone.',
          'Above 100% = pass not achievable — contact your coordinator.',
          'Check unit guide for exam hurdles separate from overall 50%.',
        ],
      },
    ],
  },
  '/degree-progress-calculator': {
    sections: [
      {
        heading: 'Credit Points and Degree Completion',
        paragraphs: [
          'Monash bachelor degrees are measured in credit points (cp). Most courses require 192 cp. Double degrees and graduate-entry pathways differ — confirm your handbook total.',
          'Completed cp includes passed Monash-graded units and approved exchange SFR credit. In-progress units count only after results are final on WES.',
        ],
      },
      {
        heading: 'Planning with WAM',
        paragraphs: [
          'Degree progress and WAM are separate metrics. You can be 75% complete with a WAM of 68 or 90% complete with a WAM of 72. Use the WAM target calculator on remaining cp to plan academic goals for your final semesters.',
        ],
        table: {
          headers: ['Typical load', 'Credit points', 'Notes'],
          rows: [
            ['Standard full-time semester', '24 cp', '4 × 6 cp units common'],
            ['Light load', '18 cp', 'Part-time or reduced study'],
            ['Summer / intensive', '6–12 cp', 'Faculty rules vary'],
          ],
        },
      },
    ],
  },
  '/wam-milestones-calculator': {
    sections: [
      {
        heading: 'What Are WAM Milestones?',
        paragraphs: [
          'WAM milestones are practical planning bands students use to understand academic standing. They are not all official cutoffs, but they help translate one WAM number into common goals: pass progression, exchange readiness, distinction average, high distinction, and top merit positioning.',
          'This checker is deliberately broad. Use specialised tools for exact planning: WAM target for one target, scholarship WAM for merit tiers, and distinction average for the WAM 70 / GPA 3.0 benchmark.',
        ],
      },
      {
        heading: 'How to Use Remaining Credit Points',
        paragraphs: [
          'If you enter completed and remaining credit points, the calculator estimates the average needed on all remaining units to reach each milestone. This is useful before final-year enrolment or when deciding whether a target is realistic.',
        ],
        table: {
          headers: ['Milestone', 'Typical planning meaning', 'Related tool'],
          rows: [
            ['50 WAM', 'Pass / progression floor', 'Final grade and pass mark calculators'],
            ['60 WAM', 'Exchange or standing planning floor', 'Exchange WAM calculator'],
            ['70 WAM', 'Distinction average', 'Distinction average calculator'],
            ['80+ WAM', 'High distinction territory', 'Scholarship and dean\'s honours calculators'],
          ],
        },
      },
    ],
  },
  '/withdrawn-fail-impact-calculator': {
    sections: [
      {
        heading: 'WN vs Standard Fail at Monash',
        paragraphs: [
          'On the Monash 4.0 GPA scale, a standard fail (N or NH) has GPA value 0.3, while withdrawn fail (WN) has GPA value 0.0. That difference matters when GPA or CGPA is used for forms, international reporting, or internal progress checks.',
          'WAM treatment is more nuanced because Monash publishes exclusion rules for certain result codes. Instead of guessing, this tool shows a confirmed GPA scenario plus WAM excluded and worst-case counted-as-zero scenarios.',
        ],
      },
      {
        heading: 'How to Read the Result',
        bullets: [
          'GPA after WN assumes the WN unit contributes 0.0 grade points.',
          'Standard fail comparison shows how much harsher WN is than N on GPA.',
          'WAM excluded means your WAM stays unchanged if WN is excluded from WAM maths.',
          'Worst-case WAM counts a 0 mark, useful for conservative planning only.',
        ],
        paragraphs: [
          'Always check your WES record or ask your faculty before making enrolment or appeal decisions. Calculator outputs are planning estimates, not official academic advice.',
        ],
      },
    ],
  },
  '/weighted-average-calculator': {
    sections: [
      {
        heading: 'Credit-Weighted Average',
        paragraphs: [
          'A weighted average multiplies each mark by its credit points before dividing by total credit. This matches how Monash WAM planning works when all units count equally by level weighting.',
          'Enter unit marks and credit points for the set you want to average — one semester, a year, or any group of completed units.',
        ],
      },
      {
        heading: 'When to Use This Tool',
        bullets: [
          'Compare 6 cp vs 12 cp impact before results release.',
          'Check semester performance with credit weighting.',
          'Pair with the grade average calculator to see simple vs weighted means.',
        ],
        paragraphs: [
          'For cumulative degree WAM with Year 1 half-weighting, use the main Monash WAM calculator on the homepage.',
        ],
      },
      {
        heading: 'Formula Reminder',
        paragraphs: [
          'Credit-weighted average = Σ(mark × credit points) ÷ Σ(credit points). A 75 in a 12 cp unit contributes 900 weighted points; the same 75 in a 6 cp unit contributes 450. That is why students with identical simple means can have different official WAM when their credit loads differ.',
          'Semester-only groups exclude prior years — useful when reviewing one teaching period before full degree weighting applies. Export unit marks from WES or Moodle to populate the calculator accurately.',
        ],
      },
    ],
  },
  '/grade-average-calculator': {
    sections: [
      {
        heading: 'Simple vs Weighted Grade Average',
        paragraphs: [
          'A simple grade average treats every mark equally — add all percentages and divide by the number of units. Monash WAM does not work that way. Credit-weighted averaging gives more influence to 12-credit units than 6-credit electives, which is why a distinction in a core unit moves your degree average more than the same mark in a small breadth subject.',
          'This calculator shows both results side by side so you can see when a simple mean misleads you. If the weighted result is lower, your high-credit units are underperforming relative to lighter loads — a common pattern before students focus revision on core subjects.',
        ],
      },
      {
        heading: 'Worked Example',
        table: {
          headers: ['Unit', 'Mark', 'Credit points', 'Weighted contribution'],
          rows: [
            ['FIT1045', '78', '6', '468'],
            ['MAT1830', '72', '6', '432'],
            ['ACC1200', '85', '6', '510'],
          ],
        },
        paragraphs: [
          'Simple average = (78 + 72 + 85) ÷ 3 = 78.33%. Credit-weighted average with equal 6 cp units matches the simple mean here. When credit loads differ — for example one 12 cp core and two 6 cp electives — the weighted result diverges. Use the main Monash WAM calculator for official year-level weighting (Year 1 = 0.5).',
        ],
      },
      {
        heading: 'When to Use This Tool',
        bullets: [
          'Compare simple vs credit-weighted means before results release.',
          'Check whether a strong elective is masking a weak core unit.',
          'Pair with the weighted average calculator for semester-only groups.',
          'Read our how to calculate wam article for the full Monash formula.',
        ],
        paragraphs: [
          'For cumulative degree planning, always confirm final numbers on WES. Calculator outputs are for orientation, not official reporting.',
        ],
      },
    ],
  },
  '/percentage-to-gpa-calculator': {
    sections: [
      {
        heading: 'How Monash Maps Percentage to GPA',
        paragraphs: [
          'Monash coursework uses percentage marks on your transcript, but scholarships, exchange applications, and some employer forms ask for GPA instead. The university converts percentage bands to letter grades first — High Distinction (80%+), Distinction (70–79%), Credit (60–69%), Pass (50–59%) — then assigns official grade points on the 4.0 and 7.0 scales.',
          'This calculator applies those published band cut-offs so you can translate a single unit mark or an overall percentage snapshot into GPA values without guessing. It is especially useful when you have a raw exam percentage but need to know whether it sits in Distinction or Credit territory for planning.',
        ],
        table: {
          headers: ['Percentage band', 'Letter grade', 'GPA (4.0)', 'GPA (7.0)'],
          rows: [
            ['80–100%', 'HD', '4.0', '7.0'],
            ['70–79%', 'D', '3.0', '6.0'],
            ['60–69%', 'C', '2.0', '5.0'],
            ['50–59%', 'P', '1.0', '4.0'],
            ['0–49%', 'N', '0.0', '0.0'],
          ],
        },
      },
      {
        heading: 'Two Ways to Enter Your Mark',
        paragraphs: [
          'Enter a percentage directly if you already know your mark — for example 76% from a Moodle gradebook. Alternatively, enter marks obtained and marks total (such as 38 out of 50) and the tool derives the percentage before mapping to GPA. That second path mirrors how many assignments report partial scores.',
          'Remember that Monash transcript GPA is credit-weighted across all units, not a straight conversion of one percentage. Use this page for band lookup and single-unit planning; use the Monash CGPA calculator when you need cumulative GPA from a full unit list.',
        ],
        bullets: [
          'Single-unit percentage → instant 4.0 and 7.0 GPA equivalents.',
          'Partial marks (obtained ÷ total) supported for assignment-style scores.',
          'Pair with WAM to GPA calculator when you have a degree average, not one mark.',
          'See our WAM to GPA conversion article for cross-scale strategy.',
        ],
      },
      {
        heading: 'Common Student Questions',
        paragraphs: [
          'A 79% and an 80% are both strong marks, but the GPA step change at 80 can matter for merit cut-offs — this tool shows exactly which band you land in. Borderline marks are worth confirming on WES once results are final.',
          'International students comparing Monash bands to a home-country 10-point scale should also try the 10-point GPA to WAM calculator after getting the percentage equivalent.',
        ],
      },
    ],
  },
  '/7-0-scale-gpa-calculator': {
    sections: [
      {
        heading: 'Why Australia Uses a 7-Point GPA Scale',
        paragraphs: [
          'Australian universities often report GPA on a 7-point scale for HDR entry, graduate certificate comparisons, and cross-institution benchmarking. On this scale, High Distinction maps to 7, Distinction to 6, Credit to 5, Pass to 4, and Fail to 0 — a wider spread than the US-style 4.0 scale.',
          'Monash still publishes percentage WAM on official transcripts, but when a form asks for "GPA out of 7" you need band-accurate conversion, not a linear guess. This calculator takes your percentage mark and returns the standard Australian 7.0 value used in coursework planning.',
        ],
      },
      {
        heading: 'Percentage to 7.0 Mapping',
        table: {
          headers: ['Mark range', 'Grade', '7.0 GPA'],
          rows: [
            ['80%+', 'HD', '7.0'],
            ['70–79%', 'D', '6.0'],
            ['60–69%', 'C', '5.0'],
            ['50–59%', 'P', '4.0'],
            ['Below 50%', 'N', '0.0'],
          ],
        },
        paragraphs: [
          'The mapping is discrete — there is no 6.5 for a 75%. Your mark sits entirely within one band until it crosses the next threshold. That is why two students both "in Distinction" can have different percentages but the same 6.0 GPA on a 7-point summary.',
        ],
      },
      {
        heading: 'When to Use 7.0 vs 4.0',
        bullets: [
          'Postgraduate and research program forms often specify 7.0 GPA minimums.',
          'Compare Monash performance to other Australian universities on a like-for-like scale.',
          'Convert back to 4.0 with the 7.0 to 4.0 GPA calculator when US forms appear.',
          'For cumulative degree GPA, use semester or CGPA tools with every completed unit.',
        ],
        paragraphs: [
          'Always cite the scale you used on applications ("GPA 6.2 on a 7.0 scale") to avoid confusion with US 4.0 reporting.',
        ],
      },
    ],
  },
  '/wam-to-4-0-gpa-calculator': {
    sections: [
      {
        heading: 'Converting Overall WAM to 4.0 GPA',
        paragraphs: [
          'Your Monash WAM is a credit-weighted percentage average across completed coursework. Many scholarship panels, US exchange programs, and graduate school portals request GPA on a 4.0 scale instead. Monash maps WAM bands to GPA tiers: WAM 80+ aligns with HD (4.0), 70–79 with D (3.0), 60–69 with C (2.0), and 50–59 with P (1.0).',
          'This calculator gives the band-equivalent 4.0 GPA from your overall WAM snapshot — fast for form filling when you do not need to re-enter every unit. Official transcript GPA still comes from per-unit letter grades with credit weighting, which can differ slightly from a single WAM band mapping.',
        ],
      },
      {
        heading: 'WAM Band Reference',
        table: {
          headers: ['WAM range', 'Typical band', '4.0 GPA equivalent'],
          rows: [
            ['80–100', 'High Distinction', '4.0'],
            ['70–79', 'Distinction', '3.0'],
            ['60–69', 'Credit', '2.0'],
            ['50–59', 'Pass', '1.0'],
            ['Below 50', 'Fail', '0.0'],
          ],
        },
        paragraphs: [
          'A WAM of 76 sits in the Distinction band, so the planning equivalent is GPA 3.0 — even though your exact transcript GPA might be 3.1 or 2.9 depending on unit mix. Use the Monash CGPA calculator when precision to three decimals matters.',
        ],
      },
      {
        heading: 'Planning Tips',
        bullets: [
          'Scholarship cut-offs often cite WAM 70+ or GPA 3.0+ — check which metric your award uses.',
          'US-style forms may cap reporting at 4.0; do not inflate beyond Monash bands.',
          'Pair with WAM target calculator to see marks needed to cross the next GPA band.',
          'Read our WAM to GPA guide for employer and postgrad reporting context.',
        ],
        paragraphs: [
          'Verify final numbers on WES before submitting official applications. Calculator output is for orientation only.',
        ],
      },
    ],
  },
  '/wam-to-7-0-gpa-calculator': {
    sections: [
      {
        heading: 'WAM to Australian 7-Point GPA',
        paragraphs: [
          'Australian HDR programs, government scholarship schemes, and some faculty merit lists reference GPA on a 7-point scale. If you know your Monash WAM but the application form asks for "GPA /7", this tool maps your percentage average to the standard coursework bands: HD = 7, D = 6, CR = 5, P = 4.',
          'Unlike a linear formula (WAM ÷ 100 × 7), Monash uses discrete grade bands. A WAM of 78 and 72 both fall in Distinction and both plan as 6.0 on the 7-point scale, even though their percentages differ.',
        ],
      },
      {
        heading: 'Band Mapping Table',
        table: {
          headers: ['WAM', '7.0 GPA', 'Letter grade'],
          rows: [
            ['80+', '7.0', 'HD'],
            ['70–79', '6.0', 'D'],
            ['60–69', '5.0', 'C'],
            ['50–59', '4.0', 'P'],
            ['Below 50', '0.0', 'N'],
          ],
        },
        paragraphs: [
          'Students near band boundaries — for example WAM 79.5 vs 80.1 — should treat the result as sensitive to final unit marks. Small improvements in remaining subjects can shift both WAM and 7.0 GPA tier.',
        ],
      },
      {
        heading: 'Related Tools',
        bullets: [
          'Convert 7.0 back to WAM ranges with the 7.0 GPA to WAM calculator.',
          'Compare 4.0 and 7.0 reporting with the WAM to 4.0 GPA calculator.',
          'Build cumulative GPA from unit lists using the Monash CGPA calculator.',
          'Browse GPA conversion articles for cross-university comparisons.',
        ],
        paragraphs: [
          'When applying interstate, note that other universities may use slightly different band cut-offs — always read the target institution\'s policy.',
        ],
      },
    ],
  },
  '/wam-to-cgpa-calculator': {
    sections: [
      {
        heading: 'WAM vs CGPA at Monash',
        paragraphs: [
          'WAM (Weighted Average Mark) is your percentage-based degree average. CGPA (Cumulative Grade Point Average) is the credit-weighted mean of official 4.0 grade points across all completed units. They measure the same academic record but express it differently — WAM as %, CGPA as grade points.',
          'This calculator helps you benchmark WAM against CGPA bands for scholarship tiers, Dean\'s list thresholds, and postgrad cut-offs when you only have WAM visible on WES but the form asks for CGPA-style reporting.',
        ],
      },
      {
        heading: 'Approximate Band Alignment',
        table: {
          headers: ['WAM band', 'Typical CGPA range (4.0)', 'Standing'],
          rows: [
            ['80+', '3.7–4.0', 'High Distinction average'],
            ['70–79', '3.0–3.6', 'Distinction average'],
            ['60–69', '2.0–2.9', 'Credit average'],
            ['50–59', '1.0–1.9', 'Pass average'],
          ],
        },
        paragraphs: [
          'Exact CGPA depends on how many units sit at the top or bottom of each band — a WAM of 74 with many 79s plans differently from 74 with many 71s. For transcript-accurate CGPA, enter each unit in the Monash CGPA calculator.',
        ],
      },
      {
        heading: 'Best Practice',
        bullets: [
          'Use WAM-to-CGPA here for quick planning ranges before applications.',
          'Run full unit-by-unit maths when the form requires official CGPA.',
          'Track semester movement with the semester GPA calculator.',
          'See our CGPA article for how repeats and withdrawn fails affect cumulative GPA.',
        ],
        paragraphs: [
          'Monash may display both metrics on different screens — export your academic record if you need the authoritative CGPA figure.',
        ],
      },
    ],
  },
  '/4-0-gpa-to-wam-calculator': {
    sections: [
      {
        heading: 'What 4.0 GPA Means at Monash',
        paragraphs: [
          'On Monash official 4.0 scale, High Distinction = 4.0, Distinction = 3.0, Credit = 2.0, Pass = 1.0, and Fail = 0.0. When a scholarship brief or transfer guide cites "GPA 3.0 required", that typically maps to Distinction-level performance — roughly WAM 70–79% on the percentage scale.',
          'This reverse converter takes your 4.0 GPA input and returns the Monash WAM percentage band equivalent. Because each GPA step covers a 10-point WAM range, the result is a planning band, not a precise single percentage.',
        ],
      },
      {
        heading: 'GPA to WAM Band Table',
        table: {
          headers: ['4.0 GPA', 'Letter grade', 'WAM range'],
          rows: [
            ['4.0', 'HD', '80–100%'],
            ['3.0', 'D', '70–79%'],
            ['2.0', 'C', '60–69%'],
            ['1.0', 'P', '50–59%'],
            ['0.0', 'N', 'Below 50%'],
          ],
        },
        paragraphs: [
          'A GPA of 3.0 therefore plans as WAM 70–79. If you need a single midpoint for mental maths, many students use 75% as a Distinction anchor — but official comparisons should cite the full band.',
        ],
      },
      {
        heading: 'Use Cases',
        bullets: [
          'Translate US-style GPA requirements into Monash WAM targets.',
          'Check whether your transcript GPA meets a WAM 70 scholarship floor.',
          'Pair with WAM target calculator once you know your desired band.',
          'See our GPA to WAM article for employer and postgrad reporting.',
        ],
        paragraphs: [
          'Cumulative transcript GPA can sit between bands when units mix grades — confirm on WES before relying on a single band for competitive applications.',
        ],
      },
    ],
  },
  '/7-0-gpa-to-wam-calculator': {
    sections: [
      {
        heading: '7-Point GPA to Monash WAM',
        paragraphs: [
          'Australian institutions commonly describe strong standing as "GPA 6.0/7" (Distinction) or "GPA 7.0/7" (High Distinction). Monash expresses the same performance as WAM percentages on your academic record. This calculator maps 7.0 scale inputs to Monash WAM bands for quick comparison.',
          'The conversion is band-based, not linear. GPA 6.0 on a 7-point scale corresponds to Distinction — WAM 70–79 — regardless of whether your exact WAM is 71 or 78.',
        ],
      },
      {
        heading: 'Reference Mapping',
        table: {
          headers: ['7.0 GPA', 'Grade', 'WAM equivalent'],
          rows: [
            ['7.0', 'HD', '80%+'],
            ['6.0', 'D', '70–79%'],
            ['5.0', 'C', '60–69%'],
            ['4.0', 'P', '50–59%'],
            ['0.0', 'N', 'Below 50%'],
          ],
        },
        paragraphs: [
          'Students transferring from universities that report only 7-point GPA can use this tool to set Monash-style WAM goals for remaining semesters.',
        ],
      },
      {
        heading: 'Next Steps',
        bullets: [
          'Convert WAM back to 7.0 with the WAM to 7.0 GPA calculator.',
          'Model improvement with the WAM projection calculator.',
          'Compare 4.0 and 7.0 scales using the 4.0 to 7.0 GPA converter.',
          'Browse merit and honours articles for faculty-specific cut-offs.',
        ],
        paragraphs: [
          'Faculty honours classifications may use WAM directly rather than GPA — check your course map before planning solely on 7-point conversions.',
        ],
      },
    ],
  },
  '/cgpa-to-wam-calculator': {
    sections: [
      {
        heading: 'From Cumulative GPA to WAM Bands',
        paragraphs: [
          'CGPA summarises your entire completed enrolment as a single grade-point average — at Monash, on the official 4.0 scale. WAM is the parallel percentage average weighted by credit points. Employers and faculties may ask for either metric; this tool translates CGPA bands into Monash WAM ranges for planning.',
          'Because CGPA aggregates every unit, one failed subject or a string of high distinctions shifts the cumulative figure slowly. Use this converter for snapshot benchmarking, then drill into unit marks when you need to diagnose what moved your average.',
        ],
      },
      {
        heading: 'Typical CGPA to WAM Alignment',
        table: {
          headers: ['CGPA (4.0)', 'Planning WAM band', 'Standing label'],
          rows: [
            ['3.5–4.0', '80–100%', 'HD average'],
            ['3.0–3.4', '70–79%', 'Distinction average'],
            ['2.0–2.9', '60–69%', 'Credit average'],
            ['1.0–1.9', '50–59%', 'Pass average'],
          ],
        },
        paragraphs: [
          'Exact alignment varies with your unit mix. CGPA 3.2 might pair with WAM 74 or WAM 76 depending on whether your Distinction marks cluster high or low in the band.',
        ],
      },
      {
        heading: 'When Accuracy Matters',
        bullets: [
          'Quick planning: use CGPA input here for WAM band orientation.',
          'Official reporting: pull WAM from WES, not inferred from CGPA alone.',
          'Improvement modelling: combine with WAM target and projection tools.',
          'International CGPA: try the 10-point GPA to WAM calculator for non-Monash scales.',
        ],
        paragraphs: [
          'Scholarship renewal letters sometimes cite both metrics — always submit the figure the application explicitly requests.',
        ],
      },
    ],
  },
  '/gpa-to-percentage-calculator': {
    sections: [
      {
        heading: 'Why Convert GPA Back to Percentage?',
        paragraphs: [
          'GPA compresses your performance into discrete grade steps — useful for forms, but less intuitive when you think in exam marks. Converting GPA to percentage returns a Monash mark range so you can set realistic unit targets: GPA 3.0 plans as roughly 70–79%, GPA 4.0 as 80%+.',
          'This is especially helpful when a placement provider asks for "expected percentage average" but your mental model runs on transcript GPA from WES.',
        ],
      },
      {
        heading: 'Monash Band Midpoints',
        table: {
          headers: ['4.0 GPA', 'Grade', 'Percentage range', 'Planning midpoint'],
          rows: [
            ['4.0', 'HD', '80–100%', '~85%'],
            ['3.0', 'D', '70–79%', '~75%'],
            ['2.0', 'C', '60–69%', '~65%'],
            ['1.0', 'P', '50–59%', '~55%'],
          ],
        },
        paragraphs: [
          'Midpoints are illustrative only — Monash does not publish a single "official" percentage for each GPA step. Use ranges when setting targets, not the midpoint alone, if you are near a band boundary.',
        ],
      },
      {
        heading: 'Practical Uses',
        bullets: [
          'Translate scholarship GPA floors into semester mark targets.',
          'Explain Monash standing to employers used to percentage averages.',
          'Cross-check 7.0 GPA using the 7.0 scale calculator first, then convert.',
          'Read our GPA conversion articles for postgrad application tips.',
        ],
        paragraphs: [
          'For unit-level precision, enter actual marks in the Monash WAM calculator rather than inferring from GPA alone.',
        ],
      },
    ],
  },
  '/4-0-to-7-0-gpa-calculator': {
    sections: [
      {
        heading: 'Aligning 4.0 and 7.0 Scales',
        paragraphs: [
          'Monash coursework grade bands align across both common Australian reporting scales. High Distinction is 4.0 on the US-style scale and 7.0 on the Australian scale; Distinction is 3.0 and 6.0 respectively. This one-to-one band mapping means conversion is straightforward once you know which letter grade tier you occupy.',
          'Use this tool when one application asks for 4.0 GPA and another asks for 7.0 — you should report consistent band standing, not mathematically scaled values that do not exist in Monash policy.',
        ],
      },
      {
        heading: 'Cross-Scale Reference',
        table: {
          headers: ['Letter grade', '4.0 GPA', '7.0 GPA', 'WAM band'],
          rows: [
            ['HD', '4.0', '7.0', '80%+'],
            ['D', '3.0', '6.0', '70–79%'],
            ['C', '2.0', '5.0', '60–69%'],
            ['P', '1.0', '4.0', '50–59%'],
            ['N', '0.0', '0.0', 'Below 50%'],
          ],
        },
        paragraphs: [
          'Do not multiply 4.0 by 1.75 to get 7.0 — that linear approach misstates Pass and Credit tiers. Always use band mapping.',
        ],
      },
      {
        heading: 'Application Tips',
        bullets: [
          'Label which scale you report on every form ("GPA 3.0/4.0" vs "GPA 6.0/7.0").',
          'HDR programs often prefer 7.0 — convert from 4.0 here before submitting.',
          'US exchange forms typically want 4.0 — use the reverse 7.0 to 4.0 converter.',
          'Pair with percentage to GPA tools when you start from raw marks.',
        ],
        paragraphs: [
          'If your transcript shows only WAM, convert WAM to GPA first, then use this tool for scale switching.',
        ],
      },
    ],
  },
  '/7-0-to-4-0-gpa-calculator': {
    sections: [
      {
        heading: '7.0 to 4.0 GPA for International Forms',
        paragraphs: [
          'Many US graduate programs, LinkedIn profile templates, and global ranking sites default to the 4.0 GPA scale. Australian students with 7-point transcripts need band-accurate conversion — not a naive multiply-by-0.57 formula — to represent Monash standing honestly.',
          'Monash maps each 7.0 step to the equivalent 4.0 grade point: 7→4, 6→3, 5→2, 4→1, 0→0. This calculator applies that standard coursework alignment.',
        ],
      },
      {
        heading: 'Conversion Table',
        table: {
          headers: ['7.0 GPA', '4.0 GPA', 'Typical standing'],
          rows: [
            ['7.0', '4.0', 'High Distinction'],
            ['6.0', '3.0', 'Distinction'],
            ['5.0', '2.0', 'Credit'],
            ['4.0', '1.0', 'Pass'],
            ['0.0', '0.0', 'Fail'],
          ],
        },
        paragraphs: [
          'Partial values like 6.3 on a 7-point transcript usually mean your cumulative average sits between bands — check WES for the authoritative Monash 4.0 CGPA rather than inferring from a single converted number.',
        ],
      },
      {
        heading: 'Reporting Guidance',
        bullets: [
          'State both scales if unsure which the reader prefers.',
          'Attach Monash grading scale documentation to international applications when allowed.',
          'Use Monash CGPA calculator for cumulative 4.0 to three decimals.',
          'See our WAM to GPA articles for scholarship-specific reporting.',
        ],
        paragraphs: [
          'Never round Distinction (6.0/7) up to 4.0/4 unless your transcript band is genuinely High Distinction — misreporting can trigger verification issues.',
        ],
      },
    ],
  },
  '/semester-gpa-calculator': {
    sections: [
      {
        heading: 'Semester GPA (SGPA) Explained',
        paragraphs: [
          'Semester GPA measures one teaching period — Semester 1, Semester 2, or Summer — using Monash official 4.0 grade values weighted by credit points. It answers "how did I perform this semester?" rather than "how am I tracking overall?" Cumulative CGPA spans your entire degree and moves more slowly.',
          'Strong semester GPA with weak prior years lifts CGPA gradually; one bad semester after years of HDs barely dents a high cumulative average. Use SGPA to diagnose recent performance and CGPA for long-term standing.',
        ],
      },
      {
        heading: 'How SGPA Is Calculated',
        paragraphs: [
          'For each unit in the semester, multiply the official grade point (HD=4, D=3, C=2, P=1, N=0) by credit points. Sum those products, then divide by total semester credit points. A 12 cp HD contributes twice as much as a 6 cp Pass in the same semester.',
          'Example SGPA = (24 + 18 + 12) ÷ 18 = 3.0 — Distinction semester average on 18 credit points.',
        ],
        table: {
          headers: ['Unit', 'Grade', 'GP (4.0)', 'Credit pts', 'Weighted GP'],
          rows: [
            ['Unit A', 'HD', '4.0', '6', '24'],
            ['Unit B', 'D', '3.0', '6', '18'],
            ['Unit C', 'C', '2.0', '6', '12'],
          ],
        },
      },
      {
        heading: 'Related Planning Tools',
        bullets: [
          'Track percentage-based semester performance with the semester WAM calculator.',
          'Roll SGPA into degree CGPA using the GPA to CGPA calculator.',
          'Set next-semester targets with the Monash target GPA calculator.',
          'Read our semester average article for Monash credit load norms.',
        ],
        paragraphs: [
          'Withdrawn fails and incomplete grades follow Monash policy rules — confirm how WES treats them before calculating SGPA manually.',
        ],
      },
    ],
  },
  '/gpa-to-cgpa-calculator': {
    sections: [
      {
        heading: 'Updating CGPA After One Semester',
        paragraphs: [
          'When you finish a semester, your new CGPA blends prior cumulative performance with fresh semester GPA. The formula weights by credit points: CGPA_new = (CGPA_old × CP_old + SGPA × CP_semester) ÷ (CP_old + CP_semester). Higher-credit semesters pull CGPA more than light summer loads.',
          'This calculator lets you model that merge before results release — useful when asking "if I average Distinction this semester, where does my CGPA land?"',
        ],
      },
      {
        heading: 'Worked Example',
        paragraphs: [
          'Suppose CGPA 2.8 on 96 cp, and you expect SGPA 3.5 on 24 cp this semester. New CGPA = (2.8 × 96 + 3.5 × 24) ÷ 120 = 2.94. The jump looks modest because 96 cp of history anchors the result — realistic for mid-degree students.',
        ],
        bullets: [
          'Enter prior CGPA and completed credit points from WES.',
          'Add expected semester GPA and enrolled credit points.',
          'Run multiple scenarios (Credit vs Distinction semester) before exam period.',
          'Pair with WAM projection for percentage-based planning.',
        ],
      },
      {
        heading: 'Limitations',
        paragraphs: [
          'Repeated units, grade replacement policies, and withdrawn fails may adjust official CGPA differently from this generic formula. Export your academic record when precision matters for honours or scholarship renewal.',
          'For first-year students, semester GPA and CGPA are often identical until prior credit accumulates.',
        ],
      },
    ],
  },
  '/cgpa-to-gpa-calculator': {
    sections: [
      {
        heading: 'CGPA vs GPA Terminology',
        paragraphs: [
          'On Monash official transcripts, CGPA and cumulative GPA refer to the same 4.0 metric — the credit-weighted mean across all completed coursework units. Some international systems use "CGPA" for a 10-point scale instead. Context matters: always note which scale your figure uses.',
          'This calculator handles Monash-style 4.0 CGPA reporting and includes guidance when you hold a 10-point international CGPA that needs linear scaling for US-style 4.0 comparisons.',
        ],
      },
      {
        heading: '10-Point to 4.0 Linear Scale',
        table: {
          headers: ['10-point CGPA', 'Linear 4.0 equivalent', 'Monash planning note'],
          rows: [
            ['9.0–10.0', '3.6–4.0', 'Near HD average'],
            ['8.0–8.9', '3.2–3.6', 'Strong Distinction'],
            ['7.0–7.9', '2.8–3.2', 'Distinction/Credit border'],
            ['6.0–6.9', '2.4–2.8', 'Credit range'],
          ],
        },
        paragraphs: [
          'Linear conversion (CGPA ÷ 10 × 4) is indicative for cross-country forms — Monash band mapping may differ. Use the 10-point GPA to WAM calculator when translating into Monash percentage bands.',
        ],
      },
      {
        heading: 'When to Use This Tool',
        bullets: [
          'Clarify Monash CGPA = cumulative 4.0 GPA on official records.',
          'Convert international 10-point CGPA for US application drafts.',
          'Cross-check WES CGPA before employer background checks.',
          'Browse GPA conversion articles for faculty-specific rules.',
        ],
        paragraphs: [
          'Semester GPA tools handle one teaching period; this page focuses on cumulative figures and scale translation.',
        ],
      },
    ],
  },
  '/4-0-gpa-calculator': {
    sections: [
      {
        heading: 'Monash 4.0 GPA Calculator',
        paragraphs: [
          'Monash assigns official grade points on a 4.0 scale: HD=4.0, D=3.0, C=2.0, P=1.0, N=0.0 (with marginal fail nuances per policy). This calculator computes credit-weighted GPA from your unit list — the same structure WES uses for cumulative reporting, simplified for planning.',
          'Enter each unit\'s letter grade or grade point and credit points. The tool outputs semester or custom-group GPA to three decimal places, matching how scholarship panels often display cut-offs.',
        ],
      },
      {
        heading: 'Credit Weighting Matters',
        table: {
          headers: ['Scenario', 'Units', 'Simple GPA', 'Weighted GPA'],
          rows: [
            ['Equal 6 cp', 'HD + D + C (6 cp each)', '3.0', '3.0'],
            ['Mixed load', 'HD (12 cp) + P (6 cp)', '2.5', '3.33'],
          ],
        },
        paragraphs: [
          'The mixed load row shows why credit weighting matters: a 12 cp HD paired with one 6 cp Pass yields weighted GPA 3.33, not the simple mean 2.5. Always weight by credit when mirroring Monash maths.',
        ],
      },
      {
        heading: 'Related Calculators',
        bullets: [
          'Cumulative degree GPA: Monash CGPA calculator.',
          'Single-semester snapshot: semester GPA calculator.',
          'Convert results to WAM bands with GPA to WAM tools.',
          'Set improvement targets with Monash target GPA calculator.',
        ],
        paragraphs: [
          'Verify final GPA on WES — grading policy updates and unit exclusions can adjust official figures.',
        ],
      },
    ],
  },
  '/gpa-calculator': {
    sections: [
      {
        heading: 'Australian University GPA Basics',
        paragraphs: [
          'Australian students encounter GPA on both 4.0 and 7.0 scales depending on faculty, scholarship, and destination country. Monash coursework standardises on official 4.0 grade points for transcript GPA while displaying WAM percentages alongside. This general GPA calculator uses Monash published values — the right default for Monash students and a reasonable benchmark for comparable Australian coursework.',
          'GPA differs from WAM: GPA steps in discrete bands tied to letter grades; WAM preserves percentage detail. A student with marks spread 71–78 may share GPA 3.0 but have different WAM than a peer scoring 78–79 consistently.',
        ],
      },
      {
        heading: 'Monash Grade Point Reference',
        table: {
          headers: ['Grade', 'Mark range', '4.0 GP', '7.0 GP'],
          rows: [
            ['HD', '80%+', '4.0', '7.0'],
            ['D', '70–79%', '3.0', '6.0'],
            ['C', '60–69%', '2.0', '5.0'],
            ['P', '50–59%', '1.0', '4.0'],
            ['N', '<50%', '0.0', '0.0'],
          ],
        },
        paragraphs: [
          'Enter your units with grades and credit points for weighted GPA. For a single mark conversion, use percentage to GPA or 7.0 scale calculators instead.',
        ],
      },
      {
        heading: 'Choose the Right Tool',
        bullets: [
          'Degree cumulative GPA → Monash CGPA calculator.',
          'One semester only → semester GPA calculator.',
          'WAM on WES, form wants GPA → WAM to 4.0 or 7.0 converters.',
          'Long-form strategy → GPA conversion articles in our library.',
        ],
        paragraphs: [
          'This site is independent of Monash University — always confirm official figures on WES before submitting transcripts or scholarship forms.',
        ],
      },
    ],
  },
  '/atar-to-gpa-wam-calculator': {
    sections: [
      {
        heading: 'ATAR vs University Grades',
        paragraphs: [
          'ATAR ranks Year 12 performance for university entry through UAC and VTAC — it is a percentile-style rank, not a university GPA. WAM and GPA measure coursework after enrolment. There is no official Monash or UAC formula converting ATAR to WAM because they describe different life stages and statistical models.',
          'This tool shows indicative bands only: high ATAR correlates with stronger first-year readiness on average, but many students with moderate ATAR achieve Distinction WAM through consistent semester work. Treat output as conversation starter, not prediction.',
        ],
      },
      {
        heading: 'What the Indicative Bands Mean',
        paragraphs: [
          'Planning bands group typical first-year WAM trajectories reported anecdotally by students — not regression models from Monash data. Use them to set initial semester goals, then replace with actual WAM from the homepage calculator once you have results.',
        ],
        bullets: [
          'ATAR reflects scaled school subjects; WAM reflects credit-weighted university units.',
          'First-year Monash units use 0.5 level weighting in official WAM — GPA tools may differ.',
          'Scholarships tied to entry rank differ from merit awards tied to university WAM.',
          'See our university pathways articles for course transfer context.',
        ],
      },
      {
        heading: 'Better Planning Signals',
        paragraphs: [
          'Once enrolled, ignore ATAR for grade planning and track semester WAM, unit targets, and final exam calculators instead. Employers and postgrad programs care about degree outcomes, not secondary school rank.',
          'If you hold offers from multiple universities, compare course structure and support services — not ATAR-to-WAM guesses alone.',
        ],
      },
    ],
  },
  '/high-school-gpa-calculator': {
    sections: [
      {
        heading: 'US-Style High School GPA',
        paragraphs: [
          'American high schools often report GPA from course credits and letter grades, sometimes with "weighted" bumps for Advanced Placement or honours subjects (up to 5.0 on a 4.0 scale). Australian secondary students typically receive ATAR instead — this calculator serves international students, dual-citizens, and Monash students comparing US application requirements.',
          'Enter course name, letter grade, credit weight, and whether the course is weighted. The tool computes unweighted and weighted GPA using common US conventions — verify against your school\'s exact policy if applying domestically in the US.',
        ],
      },
      {
        heading: 'Weighted vs Unweighted',
        table: {
          headers: ['Course type', 'Grade', 'Unweighted GP', 'Weighted bump'],
          rows: [
            ['Standard', 'A', '4.0', '—'],
            ['Honours/AP', 'A', '4.0', '+1.0 → 5.0 cap'],
            ['Standard', 'B', '3.0', '—'],
            ['Honours/AP', 'B', '3.0', '+1.0 → 4.0'],
          ],
        },
        paragraphs: [
          'Weighted GPA rewards rigour but caps vary by district — some schools use +0.5 instead of +1.0. Use this output for orientation; attach official school transcripts for applications.',
        ],
      },
      {
        heading: 'Australian Context',
        bullets: [
          'Monash entry uses ATAR/IB/diploma pathways — not high school GPA.',
          'US exchange or grad school may request US-style GPA — use this tool, then verify with registrar.',
          'University GPA uses different scales — switch to Monash GPA calculators after enrolment.',
          'Browse pathways articles for Monash orientation and adjustment tips.',
        ],
        paragraphs: [
          'Once at Monash, track WAM and official CGPA on WES — high school GPA rarely appears on Australian employment forms.',
        ],
      },
    ],
  },
  '/10-point-gpa-to-wam-calculator': {
    sections: [
      {
        heading: 'International 10-Point CGPA',
        paragraphs: [
          'Universities in India, parts of Europe, and other regions often report CGPA on a 10-point scale. Monash admissions and credit transfer teams frequently need those results expressed as percentage or WAM bands. A common planning step: multiply 10-point CGPA by 10 to estimate percentage (8.5 → 85%), then map to Monash HD/D/C/P bands.',
          'This is indicative — home institutions may use different curves. Always supply official transcripts and Monash grading scale notes when applying for credit assessment.',
        ],
      },
      {
        heading: '10-Point to Monash Bands',
        table: {
          headers: ['10-pt CGPA', 'Est. %', 'Monash band', '4.0 GP'],
          rows: [
            ['9.0–10.0', '90–100%', 'HD', '4.0'],
            ['8.0–8.9', '80–89%', 'HD/D border', '3.0–4.0'],
            ['7.0–7.9', '70–79%', 'D', '3.0'],
            ['6.0–6.9', '60–69%', 'C', '2.0'],
            ['5.0–5.9', '50–59%', 'P', '1.0'],
          ],
        },
        paragraphs: [
          'Borderline CGPA like 7.9 vs 8.0 can straddle Distinction and HD planning zones — use conservative estimates for scholarship applications until Monash confirms converted grades.',
        ],
      },
      {
        heading: 'Transfer and Postgrad Use',
        bullets: [
          'Estimate Monash WAM targets before starting at Clayton or Caulfield.',
          'Compare home CGPA to distinction average (WAM 70+) requirements.',
          'Cross-check with CGPA to WAM calculator for 4.0-scale transcripts.',
          'Read exchange and pathways articles for credit transfer workflow.',
        ],
        paragraphs: [
          'Monash makes final credit decisions — calculator output does not guarantee advanced standing or GPA recognition on your Australian transcript.',
        ],
      },
    ],
  },
  '/student-budget-calculator': {
    sections: [
      {
        heading: 'How to use the Student Budget Calculator',
        paragraphs: [
          'Choose whether you want to budget weekly or monthly.',
          'Add all your income sources, such as your part-time job, allowances, or scholarships.',
          'Add your expenses, like rent, groceries, transportation, and entertainment.',
          'Check your net balance to see if you are saving money or spending more than you earn!'
        ]
      }
    ]
  },
  '/study-time-calculator': {
    sections: [
      {
        heading: 'How to use the Study Time Calculator',
        paragraphs: [
          'Enter your total credit points for the semester (e.g., 24 for a standard full-time load).',
          'The calculator will estimate your total recommended weekly workload.',
          'See the breakdown between contact hours (classes, lectures) and self-directed study hours so you can plan your schedule.'
        ]
      }
    ]
  },
  '/attendance-calculator': {
    sections: [
      {
        heading: 'How to use the Attendance Calculator',
        paragraphs: [
          'Enter the total number of classes in the semester.',
          'Enter how many classes you have missed so far.',
          'The calculator will tell you if you can afford to skip any more classes while staying above the 75% or 80% hurdle.'
        ]
      }
    ]
  },
  '/essay-word-count-allocator': {
    sections: [
      {
        heading: 'How to use the Essay Word Count Allocator',
        paragraphs: [
          'Enter your total required word count.',
          'Adjust the percentages for your introduction and conclusion (typically 10% each).',
          'The tool will split your total words into introduction, body paragraphs, and conclusion blocks.'
        ]
      }
    ]
  },
  '/reading-time-calculator': {
    sections: [
      {
        heading: 'How to use the Reading Time Calculator',
        paragraphs: [
          'Enter the word count of your reading material.',
          'Select your estimated reading speed (default is 200 words per minute for average readers).',
          'See how many hours and minutes you need to set aside to finish the text.'
        ]
      }
    ]
  },
  '/pomodoro-study-timer': {
    sections: [
      {
        heading: 'How to use the Pomodoro Study Timer',
        paragraphs: [
          'Click Start to begin a 25-minute study session without distractions.',
          'When the timer ends, take a 5-minute break by clicking the Break button.',
          'Repeat this cycle to maximize productivity without feeling burnt out.'
        ]
      }
    ]
  },
  '/typing-time-estimator': {
    sections: [
      {
        heading: 'How to use the Typing Time Estimator',
        paragraphs: [
          'Enter your essay word count.',
          'Select your typing speed (Words Per Minute).',
          'The tool will output the absolute minimum time required to physically hit the keys to write the essay.'
        ]
      }
    ]
  }
};

export function getCalculatorPageGuide(path: string): CalculatorPageGuideData | undefined {
  if (path === '/') {
    return undefined;
  }
  return EXPANDED_GUIDES[path] ?? CALCULATOR_PAGE_GUIDES[path];
}
