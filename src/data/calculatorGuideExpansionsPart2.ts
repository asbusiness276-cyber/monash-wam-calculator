import type { CalculatorPageGuideData, GuideSection } from './calculatorPageGuides';
import { buildStandardCalculatorGuide } from '../utils/calculatorGuideBuilder';

const UNIT_MARK_LEGACY: GuideSection[] = [
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
];

const UNIT_TARGET_LEGACY: GuideSection[] = [
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
];

const MARK_TO_GRADE_LEGACY: GuideSection[] = [
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
];

const WAM_TO_GPA_LEGACY: GuideSection[] = [
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
];

const GPA_TO_WAM_LEGACY: GuideSection[] = [
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
];

const FINAL_GRADE_LEGACY: GuideSection[] = [
  {
    heading: 'Final Exam Mark Formula',
    paragraphs: [
      'Required exam mark = (target overall − coursework mark × coursework weight) ÷ exam weight. Weights are decimals summing to 1 (e.g. 60% coursework = 0.60). A negative result means your target is already secured from coursework alone; above 100% means the target is not achievable without adjustment.',
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
];

const SEMESTER_WAM_LEGACY: GuideSection[] = [
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
];

const WAM_TARGET_LEGACY: GuideSection[] = [
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
];

const OFFICIAL_WAM_LEGACY: GuideSection[] = [
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
];

const PASS_MARK_LEGACY: GuideSection[] = [
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
];

const DEGREE_PROGRESS_LEGACY: GuideSection[] = [
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
];

const WAM_MILESTONES_LEGACY: GuideSection[] = [
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
];

export const CALCULATOR_GUIDE_EXPANSIONS_PART2: Record<string, CalculatorPageGuideData> = {
  '/unit-mark-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The unit mark calculator combines every released assessment in a Monash unit — assignments, labs, quizzes, participation, and any early exam components — into one weighted percentage before the final result is certified.',
        'Monash unit guides publish assessment weights that must total 100%. Enter each task mark and its weight; the tool returns your current standing in the unit. That number feeds directly into the final grade calculator and pass mark calculator when one exam remains.',
      ],
      bullets: [
        'Supports any number of assessment tasks with individual weights.',
        'Weights must sum to 100% for a valid unit mark.',
        'Useful mid-semester before the exam period opens.',
        'Pairs with unit target calculator when multiple tasks are still open.',
      ],
      table: {
        headers: ['Assessment type', 'Typical Monash weight', 'Notes'],
        rows: [
          ['Assignment portfolio', '20–40%', 'Often multiple submissions combined'],
          ['Mid-semester test', '10–25%', 'May be online or in-person'],
          ['Participation / tutorial', '5–15%', 'Attendance or engagement marks'],
          ['Final exam', '40–60%', 'Usually the largest single weight'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'Unit mark = Σ (assessment mark × weight ÷ 100). Each mark is a percentage out of 100; each weight is the share of the final unit grade published in the unit guide.',
        'If you have three released tasks at 80%, 65%, and 100% weighted at 30%, 20%, and 10% respectively, the current unit mark is (80×0.30) + (65×0.20) + (100×0.10) = 51%. The remaining 40% belongs to the unreleased final exam.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'Weights vs marks',
          text: 'Enter marks as percentages (e.g. 38/50 → 76%). Enter weights exactly as printed in the Monash unit guide — not as decimals unless the guide uses decimals.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use this calculator after each assessment is returned on Moodle or WES. IT faculty units often release marks incrementally; law and business units may batch-release near census or exam period.',
        'Do not use it for degree-level WAM — that requires credit-weighted averaging across units on the main Monash WAM calculator.',
      ],
      bullets: [
        'After assignment or test marks are released mid-semester.',
        'Before deciding whether to apply for special consideration.',
        'When comparing performance across units with different assessment splits.',
        'To verify Moodle gradebook totals against manual calculation.',
      ],
    },
    steps: [
      'Open the Monash unit guide and list every assessment with its published weight.',
      'Collect released marks from Moodle — convert raw scores to percentages first.',
      'Enter each completed assessment mark and weight into the calculator.',
      'Confirm weights sum to 100%; add unreleased tasks only if you know their weights.',
      'Read the weighted unit mark and note how much weight remains unreleased.',
      'Open the final grade or unit target calculator to plan remaining work.',
    ],
    examples: [
      {
        title: 'FIT1045-style IT unit (assignment + MST + exam)',
        paragraphs: [
          'Assignment 1: 82% at 25%. Mid-semester test: 68% at 15%. Participation: 100% at 10%. Current unit mark = 82×0.25 + 68×0.15 + 100×0.10 = 40.7%. With 50% exam weight remaining, distinction overall requires a strong exam performance.',
        ],
        table: {
          headers: ['Task', 'Mark', 'Weight', 'Contribution'],
          rows: [
            ['Assignment 1', '82%', '25%', '20.5'],
            ['MST', '68%', '15%', '10.2'],
            ['Participation', '100%', '10%', '10.0'],
            ['Total released', '—', '50%', '40.7%'],
          ],
        },
      },
      {
        title: 'Law unit with heavy assignment load',
        paragraphs: [
          'Research essay 74% (35%), moot participation 88% (15%), take-home exam 71% (20%) → unit mark so far = 74×0.35 + 88×0.15 + 71×0.20 = 75.3%. Only the 30% final exam remains — you are already in distinction territory before the exam if you maintain performance.',
        ],
      },
      {
        title: '12-credit science lab unit',
        paragraphs: [
          'Lab reports average 79% (30%), practical test 85% (20%), quiz 62% (10%) → weighted = 79×0.30 + 85×0.20 + 62×0.10 = 44.9%. The 40% final exam must score roughly 88% for an HD overall — use the final grade calculator for exact targets.',
        ],
      },
      {
        title: 'Business unit with group project',
        paragraphs: [
          'Individual assignment 91% (15%), group presentation 78% (25%), online quizzes 83% (10%) → 91×0.15 + 78×0.25 + 83×0.10 = 36.95%. Group work pulled the average down despite a strong individual mark — focus revision on the 50% final exam.',
        ],
      },
      {
        title: 'Exam-heavy engineering unit',
        paragraphs: [
          'Only the 15% assignment (88%) is released before the 85% exam. Current unit mark = 13.2%. The exam dominates — a 55% exam yields 59.95% overall (credit), while 70% on the exam reaches 72.7% (distinction).',
        ],
      },
      {
        title: 'Breadth elective with participation hurdle',
        paragraphs: [
          'Tutorial participation 95% (10%), short essay 72% (30%), reading quiz 80% (10%) → 72.6% from 50% released weight. Even with a perfect exam, maximum achievable is roughly 86% — plan targets accordingly.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Entering raw marks (38/50) without converting to percentage first.',
        'Using weights that do not sum to 100% — double-check the unit guide.',
        'Including the final exam before it is sat or before a practice estimate is intended.',
        'Mixing decimal weights (0.30) with percentage weights (30) inconsistently.',
        'Treating tutorial marks out of 10 as percentages without scaling.',
      ],
      callout: {
        variant: 'warning',
        title: 'Unit guide overrides',
        text: 'Some Monash units cap assignment contributions or require exam hurdles. The calculator assumes standard linear weighting — read hurdle rules separately.',
      },
    },
    tips: {
      paragraphs: [
        'Track each assessment in a spreadsheet mirroring the unit guide weights. Update the calculator within 24 hours of each Moodle release so targets stay current.',
      ],
      bullets: [
        'Prioritise high-weight tasks — a 40% assignment matters more than a 5% quiz.',
        'If the unit mark is below 50% mid-semester, speak with your tutor before census where possible.',
        'Cross-check Moodle gradebook weighting against the official unit guide each semester.',
        'Save calculator outputs when applying for special consideration — show your standing at the time of disruption.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash does not publish unit marks on WES until results are finalised — this tool uses the same maths faculties apply internally during the teaching period. Special grades (SFR, WN, NH) follow different rules and are not unit-mark calculations.',
      ],
      bullets: [
        'Unit guides are legally binding for assessment weighting — Moodle labels must match.',
        'Supplementary assessments replace marks only after faculty certification, not mid-planning.',
        'Exchange units graded SFR do not produce percentage unit marks on your Monash record.',
      ],
    },
    legacySections: UNIT_MARK_LEGACY,
  }),

  '/unit-target-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The unit target calculator answers: given what I have already scored, what average do I need on all remaining assessments to hit my target unit percentage? It handles multiple unreleased tasks with different weights — unlike the final grade calculator, which assumes one exam block.',
        'Monash students use this when a unit has two assignments, a presentation, and an exam still open, and they want to know whether HD (80+) or distinction (70+) is still mathematically possible.',
      ],
      table: {
        headers: ['Tool', 'Best for', 'Remaining tasks'],
        rows: [
          ['Unit target calculator', 'Several weighted tasks left', '2 or more'],
          ['Final grade calculator', 'Coursework + one exam split', '1 exam only'],
          ['Unit mark calculator', 'Current standing', 'None — retrospective'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'Required average on remaining weight = (target − current weighted contribution) ÷ remaining weight × 100. Current contribution is the sum of (mark × weight) for every released task.',
        'If the result exceeds 100%, the target is impossible on remaining weight alone. If negative, you have already secured the target from completed work.',
      ],
      callouts: [
        {
          variant: 'tip',
          title: 'Uniform average assumption',
          text: 'The calculator assumes you score the same percentage on every remaining task. Real units differ — use the result as a floor, then allocate effort by individual task weight.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Reach for this tool during weeks 8–12 when multiple assessments remain and you are choosing between credit, distinction, or HD targets. It is especially valuable in Faculty of Arts and Business units with fragmented assessment calendars.',
      ],
      bullets: [
        'Two or more unreleased assessments with known weights.',
        'Deciding whether to aim for HD when coursework is already strong.',
        'Checking if pass is guaranteed before the exam period.',
        'Comparing target difficulty across concurrent units.',
      ],
    },
    steps: [
      'List completed assessments with marks and weights from the unit guide.',
      'Sum remaining assessment weights — this is your denominator.',
      'Enter your target overall percentage (50 pass, 70 distinction, 80 HD).',
      'Read the required average on remaining weight.',
      'If above 100%, lower the target or accept the best achievable band.',
      'Break the required average into per-task goals using individual weights.',
    ],
    examples: [
      {
        title: 'Three tasks left after strong assignment',
        paragraphs: [
          'Completed: assignment 85% (30%). Remaining: presentation 20%, quiz 10%, exam 40%. Target HD 80%. Current contribution = 25.5%. Required on 70% remaining = (80 − 25.5) ÷ 0.70 ≈ 77.9% average on remaining tasks — achievable with consistent distinction-level work.',
        ],
      },
      {
        title: 'Recovering from weak mid-semester test',
        paragraphs: [
          'Assignment 58% (25%), MST 45% (20%) released. Target pass 50%. Contribution = 23.5% from 45% weight. Need (50 − 23.5) ÷ 0.55 ≈ 48.2% on remaining 55% — pass still realistic if exam preparation improves.',
        ],
      },
      {
        title: 'HD locked out early',
        paragraphs: [
          'Group project 62% (40%), quiz 70% (10%) — only 50% released. Target 80%. Contribution = 31.8%. Required = (80 − 31.8) ÷ 0.50 = 96.4% on remaining work — effectively impossible; shift target to distinction (70%) requiring 76.4% instead.',
        ],
      },
      {
        title: 'Law unit with moot and exam',
        paragraphs: [
          'Essay 76% (35%), moot 82% (15%) done. Target distinction 75%. Contribution = 38.9%. Remaining 50% needs (75 − 38.9) ÷ 0.50 = 72.2% — align exam preparation with distinction band past papers.',
        ],
      },
      {
        title: 'Already secured credit from coursework',
        paragraphs: [
          'All coursework 74% average across 60% weight → 44.4% contribution. Target credit 65% needs (65 − 44.4) ÷ 0.40 = 51.5% on the exam — minimal exam pressure for credit, though higher targets need more.',
        ],
      },
      {
        title: 'Summer intensive with two assignments left',
        paragraphs: [
          'Online test 88% (20%) done. Assignments 40% + exam 40% remain. Target 70%. Need (70 − 17.6) ÷ 0.80 = 65.5% average — manageable across two assignments and exam if schedule is tight.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Forgetting to include all remaining weights in the denominator.',
        'Setting target 75 when Monash distinction starts at 70 — use official band floors.',
        'Assuming group project marks can be revised when they are already final.',
        'Using semester WAM as the target instead of unit percentage.',
        'Ignoring hurdle requirements that apply separately from overall percentage.',
      ],
    },
    tips: {
      bullets: [
        'Run three targets — pass, distinction, HD — in one planning session.',
        'Front-load effort on the highest-weight remaining task.',
        'If required average exceeds 90%, discuss options with the unit coordinator early.',
        'Update inputs within hours of each Moodle mark release.',
        'Pair results with the WAM projection calculator for degree-level impact.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash faculties may apply scaling or moderation after raw marks are computed — calculator outputs reflect published weights, not post-moderation adjustments. Special consideration outcomes can change final marks after you plan.',
      ],
      callout: {
        variant: 'info',
        title: 'Hurdle assessments',
        text: 'Some units require 40% on the exam regardless of overall mark. Passing the unit and hitting your target percentage are separate checks.',
      },
    },
    legacySections: UNIT_TARGET_LEGACY,
  }),

  '/mark-to-grade-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The mark-to-grade calculator maps a single Monash percentage to the official letter grade and GPA value. Monash coursework uses fixed bands: HD 80–100, D 70–79, C 60–69, P 50–59, N below 50.',
        'One percentage point at a boundary changes transcript reporting — 79% is Distinction (GPA 3.0) while 80% is High Distinction (GPA 4.0). Use this for instant band lookup; use the Monash WAM calculator for degree averages.',
      ],
      table: {
        headers: ['Letter grade', 'Mark range', '4.0 GPA', '7.0 GPA'],
        rows: [
          ['HD', '80–100%', '4.0', '7.0'],
          ['D', '70–79%', '3.0', '6.0'],
          ['C', '60–69%', '2.0', '5.0'],
          ['P', '50–59%', '1.0', '4.0'],
          ['N', '0–49%', '0.3', '0.0'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'The tool applies Monash published band cut-offs discretely — there is no interpolation. A mark of 76.4% is Distinction, not "3.64 GPA." Fail grades on official records use GPA 0.3 for N, not 0.0.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Boundary sensitivity',
          text: 'Marks of 79.5% and 80.0% sit in different bands. Confirm final marks on WES after moderation — Moodle provisional marks may differ.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when a single assignment or exam percentage needs translating to a letter grade for self-assessment, employer conversations, or form fields that ask for grade rather than percentage.',
      ],
      bullets: [
        'Checking which band a provisional Moodle mark falls into.',
        'Explaining Monash grades to international employers.',
        'Verifying GPA value before entering a unit in the Monash GPA calculator.',
        'Understanding why 79% and 80% are treated differently on transcripts.',
      ],
    },
    steps: [
      'Enter the percentage mark (0–100).',
      'Read the Monash letter grade band.',
      'Note the official 4.0 and 7.0 GPA equivalents.',
      'For cumulative performance, switch to the WAM or GPA calculators.',
      'Cross-check final results on WES after official release.',
    ],
    examples: [
      {
        title: 'HD boundary — 80% exactly',
        paragraphs: ['An 80% exam score maps to High Distinction and GPA 4.0 / 7.0. A 79% score on the same task is Distinction — one mark can shift scholarship perception even when WAM impact is small.'],
      },
      {
        title: 'Distinction mid-band — 75%',
        paragraphs: ['75% is solidly in the Distinction band (70–79). GPA planning equivalent is 3.0 on the 4.0 scale regardless of whether the mark is 71 or 78.'],
      },
      {
        title: 'Credit pass for progression — 63%',
        paragraphs: ['63% yields Credit (C) and GPA 2.0. Satisfies pass progression for most coursework units while sitting below distinction average territory.'],
      },
      {
        title: 'Bare pass — 52%',
        paragraphs: ['52% is Pass (P) with GPA 1.0. Contributes to WAM at face value — two 52% units drag cumulative WAM more than one HD lifts it when credit points are equal.'],
      },
      {
        title: 'Fail — 48%',
        paragraphs: ['48% is N (fail) with GPA 0.3 per credit point on Monash records. Use the failed unit WAM calculator to model recovery scenarios.'],
      },
      {
        title: 'Near-credit boundary — 59% vs 60%',
        paragraphs: ['59% remains Pass; 60% crosses into Credit. For students tracking distinction average (WAM 70+), credit marks are stepping stones — not the final goal.'],
      },
    ],
    mistakes: {
      bullets: [
        'Using US letter grades (A-, B+) instead of Monash bands.',
        'Assuming fail GPA is 0.0 — Monash N grade is 0.3 on the 4.0 scale.',
        'Converting WAM directly to a single letter grade without per-unit marks.',
        'Treating 79.9% as HD before official rounding rules are confirmed.',
        'Applying postgraduate HDR marking schemas to undergraduate coursework.',
      ],
    },
    tips: {
      bullets: [
        'Memorise the four boundaries: 50, 60, 70, 80.',
        'When near a boundary, prioritise revision on high-weight assessments.',
        'Use mark-to-grade for single units, WAM calculator for degree standing.',
        'Export WES after results release — Moodle may show provisional decimals.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash also uses special grades (SFR, WN, NH, NP) that do not follow standard percentage bands. This calculator covers standard coursework percentage marks only.',
      ],
      bullets: [
        'Honours classifications (H1, H2A) use degree WAM, not single-unit grades.',
        'Malaysia campus students should confirm local reporting with their faculty.',
        'Grade descriptors appear in the Monash grading schema procedure.',
      ],
    },
    legacySections: MARK_TO_GRADE_LEGACY,
  }),

  '/wam-to-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The WAM-to-GPA calculator converts your Monash Weighted Average Mark (percentage) into estimated GPA values on the official 4.0 scale and the Australian 7.0 scale. It uses Monash grade bands rather than linear scaling.',
        'Scholarship forms, US exchange applications, and some graduate programs request GPA while Monash students track WAM on WES. This tool bridges the two metrics for planning — official transcript GPA still comes from per-unit letter grades.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'WAM bands map discretely: 80+ → HD (4.0 / 7.0), 70–79 → D (3.0 / 6.0), 60–69 → C (2.0 / 5.0), 50–59 → P (1.0 / 4.0), below 50 → N. Two students at WAM 74 and WAM 77 both plan as GPA 3.0 even though their percentages differ.',
      ],
      table: {
        headers: ['WAM range', 'Letter grade', '4.0 GPA', '7.0 GPA'],
        rows: [
          ['80–100', 'HD', '4.0', '7.0'],
          ['70–79', 'D', '3.0', '6.0'],
          ['60–69', 'C', '2.0', '5.0'],
          ['50–59', 'P', '1.0', '4.0'],
          ['Below 50', 'N', '0.0', '0.0'],
        ],
      },
      callouts: [
        {
          variant: 'info',
          title: 'Approximation note',
          text: 'Transcript GPA weights each unit by credit points and letter grade. A WAM of 76 might produce CGPA 3.05 or 2.95 depending on mark distribution inside bands — use the Monash CGPA calculator for precision.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when you know your cumulative WAM from WES but a form asks for GPA. Common contexts include US university applications, LinkedIn profiles, and scholarship panels that cite "GPA 3.0+" alongside WAM 70+.',
      ],
      bullets: [
        'Filling international application forms quickly.',
        'Explaining Monash standing to employers using US conventions.',
        'Checking whether WAM 70+ aligns with distinction-average GPA language.',
        'Choosing between 4.0 and 7.0 reporting on Australian HDR forms.',
      ],
    },
    steps: [
      'Copy cumulative WAM from WES academic record.',
      'Enter WAM into the calculator.',
      'Read 4.0 and 7.0 band equivalents.',
      'If the form requires exact CGPA, use the Monash CGPA calculator with unit list.',
      'Label the scale on your application ("GPA 3.0/4.0 Monash scale").',
    ],
    examples: [
      {
        title: 'Distinction average — WAM 72',
        paragraphs: ['WAM 72 maps to Distinction band → GPA 3.0 (4.0 scale) and 6.0 (7.0 scale). Meets typical distinction average language on Monash merit documents.'],
      },
      {
        title: 'HD standing — WAM 84',
        paragraphs: ['WAM 84 is High Distinction territory → GPA 4.0 and 7.0. Competitive for dean\'s honours list planning bands in strong cohorts.'],
      },
      {
        title: 'Credit average — WAM 65',
        paragraphs: ['WAM 65 → Credit band, GPA 2.0 / 5.0. Below distinction average — pair with WAM target calculator to model improvement.'],
      },
      {
        title: 'Borderline distinction — WAM 69.8',
        paragraphs: ['WAM 69.8 still maps to Credit band (60–69) for strict band lookup, though distinction average conversations often use WAM 70+ floor. One strong semester can cross the boundary.'],
      },
      {
        title: 'Strong HD — WAM 91',
        paragraphs: ['WAM 91 → HD band, GPA 4.0 / 7.0. Transcript CGPA may show 3.8–4.0 depending on unit mix — verify on WES.'],
      },
      {
        title: 'Pass level — WAM 55',
        paragraphs: ['WAM 55 → Pass band, GPA 1.0 / 4.0. Satisfies minimum progression for many courses but not merit scholarships or honours entry.'],
      },
    ],
    mistakes: {
      bullets: [
        'Dividing WAM by 25 to guess 4.0 GPA — Monash uses bands, not linear formulas.',
        'Reporting band GPA as exact transcript CGPA without verification.',
        'Mixing Monash 4.0 scale with US institutions that use different fail values.',
        'Using semester WAM instead of cumulative WAM on degree applications.',
        'Forgetting to state which GPA scale (4.0 vs 7.0) on the form.',
      ],
    },
    tips: {
      bullets: [
        'Lead with WAM when forms allow — it is Monash native metric with more precision.',
        'Attach Monash grading scale documentation to international applications.',
        'Cross-check with WAM to 4.0 and WAM to 7.0 dedicated calculators for form-specific fields.',
        'Update after every results release — WAM moves slowly late in your degree.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash publishes both WAM and CGPA on academic records. Distinction average is commonly expressed as WAM 70+ or GPA 3.0+ — both describe similar standing but are computed differently.',
      ],
      callout: {
        variant: 'tip',
        title: 'Employer reporting',
        text: 'Australian employers often understand WAM percentages. US employers may request 4.0 GPA — convert here, then confirm CGPA on WES if challenged.',
      },
    },
    legacySections: WAM_TO_GPA_LEGACY,
  }),

  '/gpa-to-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The GPA-to-WAM calculator estimates the Monash percentage band that corresponds to a given GPA on the 4.0 or 7.0 scale. Because each GPA step covers a 10-point WAM range, the output is a band — not a single precise percentage.',
        'Transfer students, scholarship applicants comparing host-university GPA, and students reading international guides use this to set Monash-style WAM targets.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'GPA 3.0 on the 4.0 scale maps to Distinction → WAM 70–79%. GPA 4.0 maps to HD → WAM 80–100%. The tool returns the full Monash band rather than a midpoint, because official WAM requires credit-weighted unit marks.',
      ],
      table: {
        headers: ['4.0 GPA', '7.0 GPA', 'Monash grade', 'WAM range'],
        rows: [
          ['4.0', '7.0', 'HD', '80–100%'],
          ['3.0', '6.0', 'D', '70–79%'],
          ['2.0', '5.0', 'C', '60–69%'],
          ['1.0', '4.0', 'P', '50–59%'],
          ['0.0–0.3', '0.0', 'N', 'Below 50%'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use when incoming requirements state GPA 3.0 but you plan in WAM terms, or when comparing your home institution GPA to Monash distinction average benchmarks.',
      ],
      bullets: [
        'Translating scholarship briefs into WAM targets.',
        'Estimating Monash-equivalent standing from partner university GPA.',
        'Setting semester mark goals after reading US-style GPA requirements.',
        'Reverse-checking WAM-to-GPA conversions for consistency.',
      ],
    },
    steps: [
      'Identify whether the source GPA uses 4.0 or 7.0 scale.',
      'Enter GPA into the calculator.',
      'Read the Monash WAM percentage band.',
      'Use the midpoint only for rough mental maths — cite the full band officially.',
      'Enter actual unit marks in the Monash WAM calculator once enrolled.',
    ],
    examples: [
      {
        title: 'Scholarship floor GPA 3.0',
        paragraphs: ['GPA 3.0 → WAM 70–79%. Plan semester targets around 75% as a mental anchor, but verify cumulative WAM on WES for formal eligibility.'],
      },
      {
        title: 'US transfer GPA 3.5',
        paragraphs: ['GPA 3.5 sits between Distinction and HD bands → roughly WAM 75–85% planning zone. Monash credit assessment makes final determination — this is orientation only.'],
      },
      {
        title: '7.0 scale HDR requirement — GPA 6.0',
        paragraphs: ['GPA 6.0/7 → Distinction → WAM 70–79%. Many Australian research programs cite 6.0/7 minimum — align remaining coursework with distinction marks.'],
      },
      {
        title: 'Credit standing — GPA 2.0',
        paragraphs: ['GPA 2.0 → WAM 60–69%. Use WAM target calculator to model path toward distinction average if merit awards matter.'],
      },
      {
        title: 'High distinction GPA 4.0',
        paragraphs: ['GPA 4.0 → WAM 80%+. Honours H1 classification at Monash starts at WAM 80 — align degree planning with HD-level unit marks.'],
      },
      {
        title: 'Marginal pass GPA 1.0',
        paragraphs: ['GPA 1.0 → WAM 50–59%. Academic standing reviews may apply — check faculty progression rules alongside WAM planning.'],
      },
    ],
    mistakes: {
      bullets: [
        'Treating GPA 3.0 as exactly WAM 75% — the full band is 70–79.',
        'Applying linear conversion (GPA × 25) for Monash equivalence.',
        'Ignoring that source institution GPA scales differ from Monash.',
        'Using single-semester GPA instead of cumulative for degree comparisons.',
        'Expecting one WAM number when transcript GPA spans multiple bands.',
      ],
      callout: {
        variant: 'warning',
        title: 'Cross-university caution',
        text: 'A 3.0 GPA at another Australian university is not automatically equivalent to WAM 70 at Monash — grading cultures differ. Use bands for planning, not guarantees.',
      },
    },
    tips: {
      bullets: [
        'Once at Monash, ignore external GPA for grade planning — track WAM on WES.',
        'Pair band output with WAM target calculator for remaining semesters.',
        'Document source institution scale when submitting transfer applications.',
        'Use 4.0 GPA to WAM and 7.0 GPA to WAM dedicated tools for scale-specific forms.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash fail grade N contributes GPA 0.3, not 0.0 — external GPAs with zero fails may look harsher or softer depending on direction of conversion. Always note Monash grading schema when comparing.',
      ],
    },
    legacySections: GPA_TO_WAM_LEGACY,
  }),

  '/final-grade-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The final grade calculator computes the exam mark you need to reach a target overall unit percentage when coursework and exam weights are known. It uses the standard Monash split: overall = coursework × coursework weight + exam × exam weight.',
        'Enter coursework mark (average of all non-exam assessments), coursework weight, exam weight, and target (50 pass, 70 distinction, 80 HD). Negative results mean the target is already secured; above 100% means impossible on current weights.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Required exam mark = (target − coursework × coursework weight) ÷ exam weight. Weights are decimals summing to 1 — e.g. 60% coursework = 0.60, 40% exam = 0.40.',
      ],
      table: {
        headers: ['Target', 'Monash band', 'Typical use'],
        rows: [
          ['50%', 'Pass (P)', 'Minimum to pass unit'],
          ['65%', 'Credit (mid)', 'Safe credit buffer'],
          ['70%', 'Distinction (D)', 'Distinction floor'],
          ['75%', 'Distinction (strong)', 'Honours planning'],
          ['80%', 'HD', 'High distinction target'],
        ],
      },
      callouts: [
        {
          variant: 'info',
          title: 'Already secured',
          text: 'A negative required exam mark means coursework alone exceeds the target — you could score 0% on the exam and still pass (subject to hurdle rules).',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use in exam revision period when all coursework is final and one exam determines the remainder. Most Monash units with 40–60% exam weight fit this model.',
      ],
      bullets: [
        'Exam period — coursework marks are locked on Moodle.',
        'Choosing revision intensity for distinction vs pass.',
        'Checking whether HD is still mathematically possible.',
        'Single exam + coursework split only (not multiple remaining tasks).',
      ],
    },
    steps: [
      'Confirm assessment weights in the unit guide (coursework % + exam % = 100%).',
      'Calculate coursework average from all non-exam assessments.',
      'Enter coursework mark, weights, and target percentage.',
      'Read required exam mark — run pass, distinction, and HD scenarios.',
      'Check unit guide for exam hurdles separate from overall target.',
      'Update if special consideration adjusts coursework weighting.',
    ],
    examples: [
      {
        title: 'Standard 60/40 split — targeting distinction',
        paragraphs: [
          'Coursework 68%, weight 0.60, exam weight 0.40, target 70%. Required exam = (70 − 68×0.60) ÷ 0.40 = (70 − 40.8) ÷ 0.40 = 73%. Need 73% on the exam for distinction overall.',
        ],
      },
      {
        title: 'Strong coursework — HD within reach',
        paragraphs: [
          'Coursework 85%, 50% weight, exam 50%, target 80%. Required = (80 − 42.5) ÷ 0.50 = 75%. HD achievable with distinction-level exam performance.',
        ],
      },
      {
        title: 'Weak coursework — pass focus',
        paragraphs: [
          'Coursework 44%, 70% weight, exam 30%, target 50%. Required = (50 − 30.8) ÷ 0.30 = 64%. Must score 64% on exam to pass — check hurdle rules.',
        ],
      },
      {
        title: 'Target already secured',
        paragraphs: [
          'Coursework 88%, 60% weight, exam 40%, target 50%. Required = (50 − 52.8) ÷ 0.40 = −7%. Pass secured from coursework — still verify exam hurdle minimums.',
        ],
      },
      {
        title: 'HD impossible — coursework cap',
        paragraphs: [
          'Coursework 72%, 80% weight, exam 20%, target 80%. Required = (80 − 57.6) ÷ 0.20 = 112%. HD not achievable — maximum possible ≈ 72×0.80 + 100×0.20 = 77.6%.',
        ],
      },
      {
        title: 'Exam-heavy engineering unit',
        paragraphs: [
          'Coursework 91% on 15% weight, exam 85%, target 75%. Required = (75 − 13.65) ÷ 0.85 = 72.2%. Exam dominates — prepare accordingly.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Using percentage weights (60) instead of decimals (0.60) — confirm calculator input format.',
        'Including exam mark in coursework average before the exam is sat.',
        'Ignoring exam hurdle (e.g. must score 40% on exam) when overall pass is calculated.',
        'Using semester WAM target instead of unit percentage target.',
        'Forgetting to update after late assignment mark changes.',
      ],
    },
    tips: {
      bullets: [
        'Run four scenarios: pass 50, credit 65, distinction 70, HD 80 in one session.',
        'If required exam exceeds 85%, discuss realistic outcomes with tutor early.',
        'Pair with pass mark calculator when only pass matters.',
        'Connect unit targets to WAM target calculator for degree-level goals.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash units may specify hurdle assessments in the unit guide — passing overall percentage does not guarantee passing the unit if exam hurdle is failed. Faculty of Engineering and IT commonly applies exam minimums.',
      ],
      callout: {
        variant: 'warning',
        title: 'Special consideration',
        text: 'Approved special consideration may change assessment weighting or offer deferred exams — recalculate after faculty confirms your outcome.',
      },
    },
    legacySections: FINAL_GRADE_LEGACY,
  }),

  '/semester-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The semester WAM calculator computes a credit-weighted average for one Monash teaching period — Semester 1, Semester 2, or Summer — without year-level weighting or prior-semester history.',
        'Degree WAM on WES includes all completed units with Year 1 half-weighting. Semester WAM answers "how did this semester go?" for reflection, not official transcript reporting.',
      ],
      bullets: [
        'Credit-weighted: 12 cp unit counts double a 6 cp unit at the same mark.',
        'No Year 1 × 0.5 factor — semester snapshot only.',
        'Include only units completed in that teaching period.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Semester WAM = Σ(mark × credit points) ÷ Σ(credit points) for units in that period. A 12 cp HD and 6 cp Pass in the same semester: (100×12 + 50×6) ÷ 18 = 83.3%, not the simple mean 75%.',
      ],
      table: {
        headers: ['Unit load', 'Credit points', 'Monash norm'],
        rows: [
          ['Standard full-time', '24 cp', '4 × 6 cp units'],
          ['With 12 cp unit', '24 cp', '1 × 12 cp + 2 × 6 cp'],
          ['Reduced load', '18 cp', '3 × 6 cp units'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use after results release to review semester performance before planning the next enrolment. Compare semester WAM to cumulative WAM to see whether you are trending up or down.',
      ],
      bullets: [
        'Post-results semester review each May and November.',
        'Evaluating whether reduced load affected performance.',
        'Checking semester standing before scholarship renewal conversations.',
        'Diagnosing one bad semester without recalculating full degree WAM.',
      ],
    },
    steps: [
      'List all units completed in the target teaching period from WES.',
      'Record each unit mark and credit points.',
      'Enter units into the semester WAM calculator.',
      'Compare result to cumulative WAM on WES.',
      'Use WAM projection calculator to model next semester impact on degree WAM.',
    ],
    examples: [
      {
        title: 'Standard four-unit semester',
        paragraphs: [
          'Units: 78, 82, 71, 65 (each 6 cp). Semester WAM = (78+82+71+65)×6 ÷ 24 = 74%. Simple mean matches when all units are 6 cp.',
        ],
      },
      {
        title: 'Mixed 6 cp and 12 cp load',
        paragraphs: [
          'FIT core 85% (12 cp), two electives 70% and 68% (6 cp each). Semester WAM = (85×12 + 70×6 + 68×6) ÷ 24 = 79.5% — the 12 cp HD pulls average up versus simple mean 74.3%.',
        ],
      },
      {
        title: 'Strong semester after weak Year 1',
        paragraphs: [
          'Semester WAM 81% but cumulative degree WAM 72% — Year 1 half-weighting and prior semesters anchor official WAM. Semester result shows improvement trend.',
        ],
      },
      {
        title: 'Reduced 18 cp load',
        paragraphs: [
          'Three units: 90%, 88%, 76% (6 cp each). Semester WAM = 84.7%. Lighter load may have enabled higher marks — factor into next enrolment decisions.',
        ],
      },
      {
        title: 'One fail drags semester',
        paragraphs: [
          'Marks 75, 72, 68, 42 (6 cp each). Semester WAM = 64.25%. Failed unit heavily impacts semester — use failed unit WAM calculator for recovery planning.',
        ],
      },
      {
        title: 'Summer unit intensive',
        paragraphs: [
          'Single 12 cp unit at 88%. Semester WAM = 88%. One-unit summer periods equal that unit mark — no averaging across siblings.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Simple-averaging unit marks when credit points differ.',
        'Including units from different teaching periods in one calculation.',
        'Applying Year 1 × 0.5 weighting — semester tool does not use it.',
        'Reporting semester WAM as official cumulative WAM on forms.',
        'Counting in-progress units before WES certification.',
      ],
    },
    tips: {
      bullets: [
        'Compare semester WAM to cumulative WAM each results period.',
        'Identify whether weak cores or weak electives drove the semester result.',
        'Use strong semester momentum to set WAM targets for next enrolment.',
        'Export WES data before manually entering marks — typos skew results.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Official Monash WES displays cumulative WAM, not semester WAM. Year 1 units count at half weight in degree WAM — a 90% semester in first year lifts official WAM less than the same marks in third year.',
      ],
      callout: {
        variant: 'info',
        title: 'Exchange semesters',
        text: 'Outbound exchange units appear as SFR without marks — they do not enter semester or degree WAM. Only Monash-graded units belong in this calculator.',
      },
    },
    legacySections: SEMESTER_WAM_LEGACY,
  }),

  '/wam-target-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The WAM target calculator computes the average mark you need on all remaining credit points to reach a degree WAM goal. It uses Monash credit-weighted maths: required average = (target WAM × total cp − current WAM × completed cp) ÷ remaining cp.',
        'Students planning distinction average (70+), honours entry (75–80+), or HD positioning (80+) use this to test whether goals remain realistic before final-year enrolment.',
      ],
      table: {
        headers: ['Goal', 'WAM target', 'Typical Monash context'],
        rows: [
          ['Distinction average', '70', 'Merit scholarships, dean\'s commendation'],
          ['Competitive honours', '75–78', 'Faculty entry cut-offs vary yearly'],
          ['H1 honours grade', '80', 'First class honours classification'],
          ['Scholarship tier', '85+', 'Top merit bands in strong cohorts'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'Total cp = completed cp + remaining cp. The formula isolates future performance: how high must remaining units average to pull cumulative WAM to target? Results above 100% mean unreachable on current remaining load.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Unreachable targets',
          text: 'If required average exceeds 100%, no mark on remaining units achieves the goal — extend timeline, add credit-bearing study, or adjust target.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use mid-degree and final-year when choosing unit loads and grade targets. Pair with distinction average calculator for WAM 70 / GPA 3.0 benchmark confirmation.',
      ],
      bullets: [
        'Before enrolling in final-year units.',
        'After a semester that moved WAM significantly.',
        'Honours and scholarship application planning.',
        'Deciding whether to repeat a unit for WAM improvement.',
      ],
    },
    steps: [
      'Copy current WAM and completed credit points from WES.',
      'Estimate remaining credit points until degree completion (check handbook).',
      'Enter target WAM (70 distinction, 80 HD, etc.).',
      'Read required average on remaining units.',
      'If above 90%, assess feasibility or adjust target.',
      'Cross-check with WAM projection calculator using unit-level estimates.',
    ],
    examples: [
      {
        title: 'Distinction average from WAM 66',
        paragraphs: [
          'Current WAM 66, 120 cp completed, 72 cp remaining, target 70. Required = (70×192 − 66×120) ÷ 72 = (13440 − 7920) ÷ 72 = 76.7% on remaining units — distinction-level work needed.',
        ],
      },
      {
        title: 'HD push from WAM 77',
        paragraphs: [
          'WAM 77, 144 cp done, 48 cp left, target 80. Required = (80×192 − 77×144) ÷ 48 = (15360 − 11088) ÷ 48 = 89% — very demanding final year.',
        ],
      },
      {
        title: 'Early degree — high remaining cp',
        paragraphs: [
          'WAM 62, 48 cp completed, 144 cp remaining, target 70. Required = (70×192 − 62×48) ÷ 144 = 72.3% — still achievable with sustained distinction marks.',
        ],
      },
      {
        title: 'Unreachable honours target',
        paragraphs: [
          'WAM 58, 168 cp done, 24 cp left, target 80. Required = (80×192 − 58×168) ÷ 24 = 127% — not achievable on remaining load alone.',
        ],
      },
      {
        title: 'Already above target',
        paragraphs: [
          'WAM 74, 100 cp done, 92 cp left, target 70. Required = (70×192 − 74×100) ÷ 92 = 65.7% — distinction average already secured; maintain above 65.7% to hold buffer.',
        ],
      },
      {
        title: '12 cp final unit impact',
        paragraphs: [
          'WAM 69.2, 186 cp done, 6 cp left, target 70. Required = (70×192 − 69.2×186) ÷ 6 = 95.3% on last unit — one small unit can still cross distinction average with HD performance.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Using simple WAM gap (70 − 66 = 4) instead of credit-weighted formula.',
        'Counting in-progress units in completed cp before certification.',
        'Excluding failed units from completed cp when they remain on WES.',
        'Setting target without confirming handbook total cp (192 vs 144 etc.).',
        'Ignoring Year 1 half-weighting when comparing to official WES WAM.',
      ],
    },
    tips: {
      bullets: [
        'Run targets for 70, 75, and 80 in one planning session.',
        'Prioritise high-credit remaining units — they move WAM more.',
        'Combine with scholarship WAM calculator for tier-specific targets.',
        'Recalculate after every results release — required average shifts.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Official WAM uses year-level weighting (Year 1 × 0.5). This target calculator typically uses credit-weighted planning WAM — confirm which WAM source you entered from WES or the main homepage calculator.',
      ],
      bullets: [
        'Honours entry cut-offs are faculty-specific and may exceed WAM 70.',
        'Exchange SFR credit counts toward degree cp but not WAM numerator.',
        'Repeated units may both count — verify faculty repeat policy on WES.',
      ],
    },
    legacySections: WAM_TARGET_LEGACY,
  }),

  '/monash-official-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The official WAM calculator applies Monash published formula with year-level weighting: Year 1 units multiply by 0.5, Year 2 and above by 1.0. WAM = Σ(mark × cp × year weight) ÷ Σ(cp × year weight).',
        'Compare output to a simple planning average (no year weighting) to see how first-year performance affects your WES figure differently from back-of-envelope maths.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'A Year 1 unit at 90% (6 cp) contributes 90 × 6 × 0.5 = 270 to the numerator. The same mark in Year 3 contributes 90 × 6 × 1.0 = 540 — double the WAM impact per credit point.',
      ],
      table: {
        headers: ['Year level', 'Weight factor', 'Typical unit codes'],
        rows: [
          ['Year 1', '0.5', 'First digit 1 — e.g. FIT1045'],
          ['Year 2', '1.0', 'First digit 2'],
          ['Year 3', '1.0', 'First digit 3'],
          ['Year 4+', '1.0', 'Honours / masters coursework'],
        ],
      },
      callouts: [
        {
          variant: 'info',
          title: 'Unit code hint',
          text: 'The calculator may suggest year level from the first digit of unit codes. Override if your handbook lists a unit as different level — some cross-level units exist.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when reconciling hand-calculated WAM with WES, especially if Year 1 marks were unusually strong or weak. Essential for students who used simple averages and see a mismatch on their academic record.',
      ],
      bullets: [
        'WES WAM differs from your spreadsheet calculation.',
        'First-year results seem to matter less than expected.',
        'Planning how much Year 1 drag or boost affects honours classification.',
        'Verifying transcript WAM before graduation applications.',
      ],
    },
    steps: [
      'Export unit list from WES with marks and credit points.',
      'Assign year level to each unit (1, 2, 3, or 4+).',
      'Enter mark, cp, and year level for every completed unit.',
      'Read official-style WAM from the calculator.',
      'Compare to simple average mode if the tool offers both.',
      'Match against WES cumulative WAM — investigate discrepancies.',
    ],
    examples: [
      {
        title: 'Strong Year 1, weaker later years',
        paragraphs: [
          'Year 1 average 88% (48 cp at 0.5 weight), Year 2–3 average 72% (96 cp at 1.0). Official WAM is pulled toward later years — simple average overstates Year 1 boost.',
        ],
      },
      {
        title: 'Weak Year 1 forgiven over time',
        paragraphs: [
          'Year 1 at 58% (48 cp, weight 0.5), Years 2–3 at 76% (144 cp). Official WAM exceeds simple average because Year 1 drag is halved.',
        ],
      },
      {
        title: 'FIT1045 Year 1 IT unit',
        paragraphs: [
          'FIT1045: 82% (6 cp, Year 1). Weighted contribution = 82 × 6 × 0.5 = 246. Same 82% in FIT3179 Year 3 = 82 × 6 × 1.0 = 492 — identical mark, double official impact later.',
        ],
      },
      {
        title: 'Pure third-year transcript',
        paragraphs: [
          'No Year 1 units remaining in calculation — official WAM equals simple credit-weighted average. Gap between methods is zero.',
        ],
      },
      {
        title: 'Double degree mid-program',
        paragraphs: [
          'Mixed faculty units across years — verify year level per handbook, not assumption from code alone. Wrong level assignment explains most WES mismatches.',
        ],
      },
      {
        title: 'Honours year weighting',
        paragraphs: [
          'Fourth-year honours units typically weight 1.0. Thesis-heavy marks at 85%+ can shift official WAM rapidly because prior Year 1 units are diluted.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Treating all units as weight 1.0 — Year 1 must be 0.5 for official match.',
        'Guessing year level from unit name instead of handbook or WES.',
        'Excluding failed Year 1 units that still appear on WES.',
        'Using planning WAM on scholarship forms when WES shows official WAM.',
        'Mixing Malaysia campus units without confirming weighting rules.',
      ],
    },
    tips: {
      bullets: [
        'Recalculate after each results release with full unit history.',
        'If WES and calculator disagree, check for SFR, WN, or ungraded units.',
        'Use homepage WAM calculator for quick checks — this tool for official reconciliation.',
        'Strong Year 3 marks matter more for honours than revisiting Year 1.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash University publishes year-level weighting in academic records procedures. WES cumulative WAM is authoritative — this calculator replicates published rules for student verification.',
      ],
      callout: {
        variant: 'tip',
        title: 'Graduation timing',
        text: 'Honours classifications (H1 from 80 WAM) use certified WAM at completion — model with official weighting, not simple averages.',
      },
    },
    legacySections: OFFICIAL_WAM_LEGACY,
  }),

  '/pass-mark-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The pass mark calculator finds the minimum final exam percentage needed to reach 50% overall — the standard Monash pass floor for coursework units. Enter coursework mark and coursework/exam weight split.',
        'Formula: required exam = (50 − coursework × coursework weight) ÷ exam weight. Negative means pass already secured from coursework; above 100% means not achievable without adjustment or special consideration.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Monash Pass (P) band spans 50–59%. This tool targets exactly 50% overall — the minimum to pass. For credit or distinction targets, use the final grade calculator instead.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Exam hurdles',
          text: 'Some units require minimum exam marks (e.g. 40%) even if overall 50% is mathematically reachable with a lower exam score. Unit guide hurdles are separate from this calculation.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use in the final weeks before exams when anxiety focuses on "what do I need to pass?" rather than HD targets. Most common among first-year students in high-weight exam units.',
      ],
      bullets: [
        'Exam revision prioritisation when time is limited.',
        'Confirming pass is secured before focusing on other units.',
        'After coursework marks are lower than expected.',
        'Quick sanity check — not substitute for unit coordinator advice.',
      ],
    },
    steps: [
      'Confirm coursework and exam weights from unit guide (must sum to 100%).',
      'Calculate coursework percentage from all non-exam assessments.',
      'Enter coursework mark and weights into pass mark calculator.',
      'Read minimum exam mark for 50% overall.',
      'Check unit guide for separate exam hurdle requirements.',
      'If above 100%, contact unit coordinator about options immediately.',
    ],
    examples: [
      {
        title: 'Balanced 50/50 split',
        paragraphs: [
          'Coursework 42%, weights 50/50. Required exam = (50 − 21) ÷ 0.50 = 58%. Need 58% on exam to pass overall.',
        ],
      },
      {
        title: 'Coursework-heavy unit',
        paragraphs: [
          'Coursework 55%, 70% weight, exam 30%. Required = (50 − 38.5) ÷ 0.30 = 38.3%. Pass achievable with modest exam performance.',
        ],
      },
      {
        title: 'Pass already secured',
        paragraphs: [
          'Coursework 54%, 60% weight, exam 40%. Required = (50 − 32.4) ÷ 0.40 = 44% — but coursework alone gives 32.4%; need 44% exam. If coursework were 84%, required goes negative — pass locked.',
        ],
      },
      {
        title: 'Not achievable',
        paragraphs: [
          'Coursework 30%, 80% weight, exam 20%. Required = (50 − 24) ÷ 0.20 = 130%. Cannot pass without mark adjustment, special consideration, or supplementary pathway.',
        ],
      },
      {
        title: 'First-year standard 60/40',
        paragraphs: [
          'Coursework 48%, 60% weight. Required = (50 − 28.8) ÷ 0.40 = 53%. Typical pass scenario — allocate exam revision time accordingly.',
        ],
      },
      {
        title: 'Strong coursework safety net',
        paragraphs: [
          'Coursework 72%, 65% weight, exam 35%. Required = (50 − 46.8) ÷ 0.35 = 9.1%. Pass nearly secured — still meet any exam hurdle minimum.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Confusing unit pass with degree progression rules — both matter separately.',
        'Ignoring exam attendance requirements and hurdle marks.',
        'Using provisional Moodle marks before final coursework is certified.',
        'Assuming supp exam pass automatically removes fail — check faculty rules.',
        'Targeting exactly 50% without buffer — moderation may shift final mark.',
      ],
    },
    tips: {
      bullets: [
        'Aim for 55%+ on exam when pass requires above 45% — buffer for stress.',
        'If required exam exceeds 70%, seek academic advice before exam period ends.',
        'Use final grade calculator to see credit/distinction paths if pass is easy.',
        'Document calculator output if applying for special consideration.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash standard coursework pass is 50% overall with grade P. Some professional units (medicine, education placements) use different competency standards — this calculator is for standard percentage-based coursework.',
      ],
      bullets: [
        'Failed units remain in WAM — use failed unit calculator for recovery.',
        'Supplementary pass caps at 50% for WAM planning in many faculties.',
        'WN grades follow different rules — see withdrawn fail impact calculator.',
      ],
    },
    legacySections: PASS_MARK_LEGACY,
  }),

  '/degree-progress-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The degree progress calculator tracks credit points completed toward your Monash degree total. Most bachelor programs require 192 cp; double degrees, diplomas, and graduate entry paths differ — confirm your handbook.',
        'Progress is separate from WAM: you can be 90% complete with WAM 68 or 50% complete with WAM 82. Use remaining cp with the WAM target calculator for academic goal planning.',
      ],
      table: {
        headers: ['Program type', 'Typical total cp', 'Notes'],
        rows: [
          ['Standard bachelor', '192 cp', '3–4 years full-time'],
          ['Double degree', '192+ cp', 'Often 192 per award component'],
          ['Diploma pathway', '48–96 cp', 'Progression into bachelor'],
          ['Honours add-on', '+48 cp approx.', 'Faculty-specific'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'Progress % = completed cp ÷ total required cp × 100. Completed cp includes passed Monash-graded units and approved exchange SFR credit. In-progress units count only after WES certification.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'SFR exchange credit',
          text: 'Approved outbound exchange units add credit points toward completion without numeric marks in WAM. Include them in completed cp when faculty credit is confirmed.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use at enrolment each semester to verify you are on track for completion date. Essential before planning final-year honours, exchange return, or reduced load applications.',
      ],
      bullets: [
        'Start of semester enrolment planning.',
        'After exchange credit approval — update completed cp.',
        'Estimating graduation semester for job applications.',
        'Checking whether summer units are needed to finish on time.',
      ],
    },
    steps: [
      'Find total cp requirement in course map or handbook.',
      'Sum completed cp from WES (passed units + approved SFR).',
      'Subtract from total to find remaining cp.',
      'Divide by typical semester load (24 cp) for semesters remaining estimate.',
      'Pair remaining cp with WAM target calculator for grade goals.',
    ],
    examples: [
      {
        title: 'Mid-degree standard bachelor',
        paragraphs: [
          '96 cp completed of 192 cp total = 50% progress. At 24 cp/semester, four semesters remain assuming full-time load.',
        ],
      },
      {
        title: 'Final year honours planning',
        paragraphs: [
          '168 cp completed, 24 cp remaining. One full-time semester left — WAM target calculator inputs should use remaining cp = 24 for final push.',
        ],
      },
      {
        title: 'Exchange semester included',
        paragraphs: [
          '144 cp Monash graded + 24 cp SFR exchange = 168 cp completed. Progress 87.5% of 192 cp — exchange advanced completion without WAM change.',
        ],
      },
      {
        title: 'Reduced load student',
        paragraphs: [
          '120 cp completed at 18 cp/semester. 72 cp remaining = 4 semesters, not 3 — progress 62.5% despite being in third year calendar time.',
        ],
      },
      {
        title: 'Failed unit extends timeline',
        paragraphs: [
          '180 cp completed but must repeat 6 cp failed unit. Progress stalls at 180/192 until repeat passes — plan extra semester if repeat fits load.',
        ],
      },
      {
        title: 'Double degree checkpoint',
        paragraphs: [
          'Verify each award\'s cp requirement separately — 192 cp total may split across two qualifications with overlapping credit rules.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Counting enrolled but incomplete units in completed cp.',
        'Using calendar year instead of certified credit points.',
        'Assuming all bachelors are 192 cp without checking handbook.',
        'Forgetting to add approved exchange SFR credit.',
        'Confusing degree progress % with WAM percentage.',
      ],
    },
    tips: {
      bullets: [
        'Update progress after every results release on WES.',
        'Book course advice appointment if remaining cp does not match expected graduation.',
        'Summer units can close small cp gaps — confirm faculty approval.',
        'Track major/minor cp requirements separately from total degree cp.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash course maps specify core, elective, and breadth cp buckets. Total cp progress does not guarantee course completion — all requirements must be satisfied for graduation certification.',
      ],
      callout: {
        variant: 'tip',
        title: 'WES vs handbook',
        text: 'WES completed cp is authoritative for enrolment. Handbook total cp governs graduation — resolve mismatches with Monash Connect early.',
      },
    },
    legacySections: DEGREE_PROGRESS_LEGACY,
  }),

  '/wam-milestones-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The WAM milestones calculator maps your current WAM to practical planning bands: pass progression (~50), exchange readiness (~60), distinction average (70), high distinction (80), and top merit positioning (85+).',
        'Enter completed and remaining credit points to see the average needed on future units to reach each milestone — broader than the WAM target calculator, which focuses on one custom goal.',
      ],
      table: {
        headers: ['Milestone', 'WAM band', 'Planning meaning'],
        rows: [
          ['Pass floor', '50', 'Minimum progression benchmark'],
          ['Exchange / standing', '60', 'Common planning floor for abroad eligibility'],
          ['Distinction average', '70', 'Merit scholarships, GPA 3.0 equivalent'],
          ['High distinction', '80', 'Honours H1, competitive awards'],
          ['Top merit', '85+', 'Dean\'s list percentile positioning'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'For each milestone, required future average = (milestone × total cp − current WAM × completed cp) ÷ remaining cp. The calculator runs this across all bands simultaneously so you see which goals remain realistic.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'Planning bands, not guarantees',
          text: 'Milestones are educational benchmarks. Dean\'s list and honours entry use faculty-specific rules — not fixed WAM cut-offs for every cohort.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use early in final year or after a pivotal semester to see the full landscape of achievable goals. Helpful when deciding between exchange, honours, and scholarship tracks.',
      ],
      bullets: [
        'Orientation for first-year goal setting (with caution — WAM moves fast early).',
        'Pre-enrolment review when multiple academic paths compete.',
        'After academic standing notices — understand recovery bands.',
        'Comparing milestone difficulty side by side.',
      ],
    },
    steps: [
      'Enter current WAM and completed credit points from WES.',
      'Estimate remaining cp until graduation.',
      'Review which milestones you already meet.',
      'Read required averages for milestones not yet achieved.',
      'Drill into specific targets with WAM target or scholarship calculators.',
      'Recalculate after each results release.',
    ],
    examples: [
      {
        title: 'WAM 68 — distinction within reach',
        paragraphs: [
          '120 cp done, 72 cp left. Distinction (70) requires ~73% on remaining units. Exchange milestone (60) already exceeded. HD (80) may require 90%+ — likely unrealistic.',
        ],
      },
      {
        title: 'WAM 74 — already distinction average',
        paragraphs: [
          'Distinction milestone achieved. HD (80) might need 86% on 48 cp remaining. Top merit (85) requires even higher — use scholarship WAM calculator for tier detail.',
        ],
      },
      {
        title: 'WAM 55 — progression focus',
        paragraphs: [
          'Pass milestone met. Reaching 60 for exchange planning needs ~67% on remaining units. Distinction (70) requires ~82% — shift focus to standing recovery first.',
        ],
      },
      {
        title: 'Early degree WAM 81',
        paragraphs: [
          'HD milestone achieved with 144 cp remaining. Maintaining 80+ requires ~79% average — sustainable with consistent distinction work. Top merit 85 needs ~87%.',
        ],
      },
      {
        title: 'Final semester only',
        paragraphs: [
          'WAM 69.5, 186 cp done, 6 cp left. Distinction average needs ~78% on last unit — one HD can cross WAM 70. Small remaining cp makes milestones volatile.',
        ],
      },
      {
        title: 'Post-fail recovery',
        paragraphs: [
          'WAM 61 after fail, 96 cp done, 96 cp left. Milestone 70 needs ~79% on remaining half of degree — achievable with sustained improvement.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Treating 85 WAM as guaranteed dean\'s list — percentiles vary by faculty.',
        'Using milestones without entering remaining cp — status-only mode lacks forward planning.',
        'Confusing exchange planning floor (60) with official Monash Abroad rules.',
        'Ignoring that Year 1 half-weighting affects official WAM vs planning inputs.',
        'Setting all milestones as simultaneous goals instead of prioritising one.',
      ],
    },
    tips: {
      bullets: [
        'Focus on the next achievable milestone above your current WAM.',
        'Pair with distinction average calculator for WAM 70 / GPA 3.0 confirmation.',
        'Use exchange WAM calculator for SFR-specific planning.',
        'Update milestones after supp exams and repeat units finalize on WES.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash Business School describes dean\'s honours list as top two percentile by WAM — a floating cutoff, not a fixed 85. Honours H1 classification uses WAM 80+ on official schema. Milestones align with these frameworks for orientation.',
      ],
      bullets: [
        'Academic standing uses separate rules from milestone bands.',
        'Scholarship renewal may cite distinction average — WAM 70+ or GPA 3.0+.',
        'Malaysia campus merit rules may differ — confirm locally.',
      ],
    },
    legacySections: WAM_MILESTONES_LEGACY,
  }),
};
