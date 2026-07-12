import type { CalculatorPageGuideData, GuideSection } from './calculatorPageGuides';
import { buildStandardCalculatorGuide } from '../utils/calculatorGuideBuilder';

const WITHDRAWN_FAIL_LEGACY: GuideSection[] = [
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
];

const WEIGHTED_AVERAGE_LEGACY: GuideSection[] = [
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
];

const GRADE_AVERAGE_LEGACY: GuideSection[] = [
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
];

const PERCENTAGE_TO_GPA_LEGACY: GuideSection[] = [
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
];

export const CALCULATOR_GUIDE_EXPANSIONS_PART3: Record<string, CalculatorPageGuideData> = {
  '/withdrawn-fail-impact-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The withdrawn fail impact calculator models how a WN result on one unit changes your cumulative GPA — and optionally your WAM — before the code appears on WES. You enter your current GPA, total GPA credit points, and the credit load of the unit at risk.',
        'Monash treats WN as a fail with 0.0 grade points on the official 4.0 scale, which is harsher than a standard N fail (0.3). The tool also compares WN against that N scenario so you can see the GPA gap between withdrawal-after-deadline and sitting the exam and failing.',
      ],
      bullets: [
        'GPA after WN — credit-weighted mean with 0.0 added for the WN unit.',
        'Standard N comparison — same maths but with Monash fail value 0.3.',
        'Optional WAM panel — excluded vs worst-case zero-counted scenarios.',
        'Planning only — confirm final treatment on your academic record.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'GPA maths follows the standard cumulative formula: (current GPA × completed cp + WN grade points × WN cp) ÷ (completed cp + WN cp). For WN, grade points = 0.0. For standard N, grade points = 0.3 on the Monash 4.0 scale.',
        'When you add optional WAM inputs, the tool holds WAM steady if the unit is excluded from WAM calculation, and recalculates with a 0 mark counted if you want a conservative worst-case estimate.',
      ],
      table: {
        headers: ['Result code', 'GPA value (4.0)', 'Typical WAM treatment'],
        rows: [
          ['WN (withdrawn fail)', '0.0', 'Often excluded — confirm on WES'],
          ['N / NH (fail)', '0.3', 'Mark counted in WAM'],
          ['WDN (withdrawn)', 'Not graded', 'Usually excluded from GPA and WAM'],
          ['P and above', '1.0–4.0', 'Full mark counted in WAM'],
        ],
      },
      callouts: [
        {
          variant: 'warning',
          title: 'Do not assume WAM is unchanged',
          text: 'Monash policy on whether WN affects WAM can depend on faculty rules and the timing of withdrawal. Use the excluded scenario as one possibility, not a guarantee.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use this calculator when you are deciding whether to withdraw after the census date with academic penalty, or when a WN has already posted and you want to quantify the GPA damage before planning recovery.',
        'It is also useful before talking to a course adviser — arriving with estimated GPA deltas makes the conversation concrete.',
      ],
      bullets: [
        'After receiving a WN on WES and before applying for readmission or transfer.',
        'When comparing WN impact against sitting the exam and likely failing with N.',
        'Before scholarship renewal if your award cites minimum CGPA.',
        'Alongside the supp/repeat WAM calculator if you plan to retake the unit.',
      ],
      table: {
        headers: ['Situation', 'Key input', 'Result to watch'],
        rows: [
          ['Late withdrawal penalty', 'Current GPA + WN cp', 'GPA after WN'],
          ['Borderline scholarship', 'GPA credits total', 'GPA delta vs N'],
          ['WAM planning', 'Current WAM + cp', 'Worst-case WAM drop'],
          ['Appeal preparation', 'All fields', 'WN vs N gap'],
        ],
      },
    },
    steps: [
      'Open WES and note your cumulative GPA to three decimals plus total credit points that contribute to GPA.',
      'Enter the credit points of the unit that received or may receive WN (usually 6 or 12 cp).',
      'Review GPA after WN and compare with the standard N column to see the penalty gap.',
      'Optionally enter current WAM and WAM credit points to compare excluded vs worst-case scenarios.',
      'Screenshot or note the results before meeting a faculty adviser or drafting an appeal.',
      'Cross-check the result code on WES — WN, WDN, and N are handled differently.',
    ],
    examples: [
      {
        title: 'Second-year student with GPA 2.75 and one 6 cp WN',
        paragraphs: [
          'Completed 96 cp at GPA 2.750. A 6 cp WN adds 0.0 grade points.',
          'New GPA = (2.750 × 96 + 0.0 × 6) ÷ 102 ≈ 2.588. Drop of about 0.162.',
          'If the same unit were N instead: (2.750 × 96 + 0.3 × 6) ÷ 102 ≈ 2.606 — slightly less harsh.',
        ],
      },
      {
        title: 'Final-year student near distinction average (GPA 2.95)',
        paragraphs: [
          '144 cp at GPA 2.950. One 12 cp core receives WN after missing the withdrawal window.',
          'GPA after WN ≈ 2.704. The WN vs N gap is roughly 0.025 on GPA — small in absolute terms but enough to miss a 3.0 scholarship floor.',
        ],
        table: {
          headers: ['Scenario', 'GPA', 'Change'],
          rows: [
            ['Before WN', '2.950', '—'],
            ['After WN (0.0)', '2.704', '−0.246'],
            ['If standard N (0.3)', '2.729', '−0.221'],
          ],
        },
      },
      {
        title: 'WAM 68 with WN excluded from WAM',
        paragraphs: [
          'Enter WAM 68.00 on 90 cp. If WN is excluded, WAM stays 68.00 — no movement.',
          'Worst-case if 0 counted on a 6 cp unit: new WAM ≈ 63.53, a drop of about 4.47 points.',
          'Use the excluded figure for optimistic planning and worst-case for conservative targets.',
        ],
      },
      {
        title: '12 cp WN on a heavy engineering load',
        paragraphs: [
          'GPA 3.100 on 120 cp. A 12 cp WN pulls GPA to about 2.900 — crossing from Distinction-band GPA toward Credit-band reporting.',
          'Retaking and passing at 75+ is often the fastest recovery path; model that with the supp/repeat calculator.',
        ],
      },
      {
        title: 'First WN early in degree (24 cp completed)',
        paragraphs: [
          'Small credit base means each WN moves GPA sharply. GPA 3.200 on 24 cp drops to about 2.720 after one 6 cp WN.',
          'Early recovery is easier because future high marks carry less historical weight — focus on the next two semesters.',
        ],
      },
    ],
    mistakes: {
      paragraphs: [
        'Students often treat WN like a neutral withdrawal. On GPA it is a zero-grade fail, not a blank entry.',
      ],
      bullets: [
        'Confusing WN with WDN — WDN is a standard withdrawal without the fail penalty.',
        'Entering degree total cp instead of only GPA-counted cp.',
        'Assuming WAM is always excluded without checking WES.',
        'Using worst-case WAM as the official figure on applications.',
        'Ignoring that retaking may replace the grade depending on faculty rules.',
      ],
      callout: {
        variant: 'info',
        title: 'Check your exact result code',
        text: 'Open WES → Academic Record and read the grade column letter-for-letter. WN, WDN, and N trigger different calculator assumptions.',
      },
    },
    tips: {
      bullets: [
        'Withdraw before the academic penalty deadline whenever possible — WDN avoids the 0.0 GPA hit.',
        'If WN is confirmed, prioritise high-credit units for strong marks to dilute the GPA impact faster.',
        'Book a course advising appointment early; some faculties allow special consideration.',
        'Pair with the failed unit WAM calculator to see mark-level recovery scenarios.',
        'Document dates and reasons if you plan a grade appeal or withdrawal review.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash publishes separate policies for withdrawal without academic penalty, withdrawn fail, and fail grades. Faculty handbooks may add progression rules that reference WN counts toward maximum fail allowances.',
        'GPA on WES is calculated from official grade points per unit. WN contributes 0.0. This calculator mirrors that maths for planning — it does not override faculty decisions on exclusion or WAM treatment.',
      ],
      callout: {
        variant: 'warning',
        title: 'Not legal or academic advice',
        text: 'Outcomes from appeals, exclusions, and readmission depend on individual circumstances. Use this tool for numeric orientation only.',
      },
    },
    legacySections: WITHDRAWN_FAIL_LEGACY,
  }),

  '/weighted-average-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This weighted average calculator computes a credit-weighted mean of percentage marks. Each unit mark is multiplied by its credit points before the total is divided by combined credit — the same structure Monash uses for WAM when year-level weighting is not applied.',
        'Add as many units as you need for a semester snapshot, a major sequence, or any custom group. The result tells you the true average when 12 cp cores count twice as much as 6 cp electives.',
      ],
      bullets: [
        'Enter marks 0–100 with matching credit points per row.',
        'Semester or custom groups — not necessarily your full degree.',
        'Complements the homepage WAM calculator for Year 1 half-weighting.',
        'Instant result as soon as two valid rows are filled.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Formula: weighted average = Σ(mark × cp) ÷ Σ(cp). A 82 in FIT2004 (6 cp) contributes 492 weighted points; an 82 in ENG1001 (12 cp) contributes 984 — double the influence despite the same percentage.',
        'The tool does not apply Monash Year 1 × 0.5 weighting. For official cumulative WAM, use the Monash official WAM calculator after exporting your full transcript.',
      ],
      table: {
        headers: ['Unit', 'Mark', 'Cp', 'Contribution'],
        rows: [
          ['Example A', '70', '6', '420'],
          ['Example B', '80', '12', '960'],
          ['Total', '—', '18', '1380 ÷ 18 = 76.67%'],
        ],
      },
      callouts: [
        {
          variant: 'tip',
          title: 'Why weighted beats simple here',
          text: 'Simple mean of 70 and 80 = 75%. Weighted mean = 76.67% because the 80 sits on a 12 cp unit. That 1.67 point gap grows when mark spreads are wider.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Reach for this tool when you want a quick credit-weighted snapshot without loading your entire degree history — common mid-semester when only four units are in play.',
        'It also helps compare scenarios: what happens if your 12 cp unit lands 65 vs 75 while electives stay flat.',
      ],
      bullets: [
        'Semester review before SWOTVAC.',
        'Modelling one unit mark change on a subset of units.',
        'Verifying spreadsheet maths against an independent calculator.',
        'Teaching groups where not all units share equal credit loads.',
      ],
    },
    steps: [
      'List each unit in the group with its final percentage mark from Moodle or WES.',
      'Enter the credit points beside each mark — check the handbook if unsure (most undergrad units are 6 or 12 cp).',
      'Add rows for every unit in the period you are averaging.',
      'Read the weighted average result and compare mentally to a simple mean if marks feel uneven.',
      'For full-degree WAM with Year 1 half-weight, switch to the main Monash WAM calculator.',
      'Save a screenshot if you are sharing results with a study group or tutor.',
    ],
    examples: [
      {
        title: 'Semester 1 snapshot — four 6 cp units',
        paragraphs: [
          'Marks: FIT1045 78, MAT1830 72, ENG1001 85, PSY1011 69. All 6 cp.',
          'Weighted average = (78×6 + 72×6 + 85×6 + 69×6) ÷ 24 = 76.00%.',
          'With equal credit, weighted equals simple mean — no divergence.',
        ],
      },
      {
        title: 'Mixed 6 cp and 12 cp load',
        paragraphs: [
          'ACC1200 88 (12 cp), BFF1001 71 (6 cp), LAW1101 74 (6 cp).',
          'Weighted = (88×12 + 71×6 + 74×6) ÷ 24 = 81.50%. Simple mean = 77.67%.',
          'The HD in the 12 cp accounting unit pulls the weighted result up sharply.',
        ],
        table: {
          headers: ['Unit', 'Mark', 'Cp', 'Weighted pts'],
          rows: [
            ['ACC1200', '88', '12', '1056'],
            ['BFF1001', '71', '6', '426'],
            ['LAW1101', '74', '6', '444'],
          ],
        },
      },
      {
        title: 'One weak core dragging the semester',
        paragraphs: [
          'CHE2161 52 (12 cp), ECE2072 78 (6 cp), FIT2086 80 (6 cp).',
          'Weighted ≈ 62.67% — Credit band. Simple mean ≈ 70% — misleading Distinction appearance.',
          'Focus revision on the 12 cp core; its weight dominates the semester average.',
        ],
      },
      {
        title: 'Postgraduate 12 cp-only semester',
        paragraphs: [
          'Two units at 12 cp each: 76 and 81. Weighted = 78.50%.',
          'PG students with uniform 12 cp loads see weighted and simple averages align when every unit shares the same credit.',
        ],
      },
      {
        title: 'Breadth-heavy year with one double-weight core',
        paragraphs: [
          'Core 12 cp at 73, three breadth 6 cp at 80, 77, 82.',
          'Weighted ≈ 77.14% vs simple ≈ 78.00%. The core sits below the elective cluster — typical pattern before students rebalance effort.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Averaging marks without entering credit points when loads differ.',
        'Including withdrawn or incomplete units with no final mark.',
        'Mixing Year 1 and Year 2 units without half-weight adjustment for official WAM.',
        'Using assignment running totals instead of final unit marks.',
        'Forgetting that 12 cp units move the average twice as much as 6 cp units.',
      ],
    },
    tips: {
      bullets: [
        'Sort units by credit points descending — review the highest-weight marks first.',
        'Run two scenarios (expected vs conservative) before final exams.',
        'Export marks from WES each results period to avoid manual typos.',
        'Pair with the grade average calculator to see simple vs weighted side by side.',
        'Track semester weighted average each teaching period to spot downward trends early.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Official Monash WAM on WES applies credit weighting plus Year 1 units counted at half weight toward the cumulative total. This calculator uses standard credit weighting only — ideal for semester groups, not a WES transcript substitute.',
      ],
      bullets: [
        'Year 1 half-weighting: use the Monash official WAM calculator.',
        'Excluded results (some WN/WDN cases) are omitted from official WAM — do not enter them here.',
      ],
    },
    legacySections: WEIGHTED_AVERAGE_LEGACY,
  }),

  '/grade-average-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The grade average calculator displays two averages from the same mark list: a simple mean (every mark weighted equally) and a credit-weighted mean (marks scaled by credit points). Monash WAM follows the weighted approach, so the gap between the two numbers reveals whether your lighter units are flattering or hurting your true standing.',
        'Enter marks with optional credit points per row. When credits are provided, both averages appear plus the Monash letter grade band for the weighted result.',
      ],
      bullets: [
        'Side-by-side simple vs credit-weighted comparison.',
        'Optional cp per row — leave blank for simple-only mode.',
        'Grade band label (HD, D, C, P) on the weighted result.',
        'Flexible row count for semesters or assignment clusters.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Simple average = sum of marks ÷ count of marks. Credit-weighted average = Σ(mark × cp) ÷ Σ(cp) using only rows where both fields are filled.',
        'When every unit shares the same credit load, both averages match. Divergence appears as soon as 12 cp and 6 cp units sit in the same list — the weighted figure is what Monash-style planning should follow.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'Which number should I trust?',
          text: 'For Monash degree planning, trust the credit-weighted average. Use the simple mean only when comparing raw assessment performance without credit context.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use this when someone quotes a "75 average" but you are unsure whether they mean equal-weight or credit-weighted — a common confusion in study groups.',
        'Also helpful when a strong breadth elective masks a struggling core: the simple mean may look fine while the weighted mean exposes the problem.',
      ],
      bullets: [
        'Mid-semester check-in with mixed 6/12 cp loads.',
        'Explaining Monash WAM logic to new students.',
        'Comparing assessment-only clusters (equal weight) vs unit finals (weighted).',
        'Validating mental maths before WES results release.',
      ],
      table: {
        headers: ['If simple > weighted', 'Likely cause', 'Action'],
        rows: [
          ['Yes', 'High marks on low-cp units', 'Lift 12 cp core marks'],
          ['No', 'Strong cores, weak electives', 'Less urgent — cores carry weight'],
          ['Equal', 'Uniform cp or no cp entered', 'Enter cp to test sensitivity'],
        ],
      },
    },
    steps: [
      'Add one row per unit or assessment mark (0–100).',
      'Enter credit points where known — handbook or WES shows cp per unit.',
      'Read the simple grade average and credit-weighted average together.',
      'Note the grade band on the weighted result for Monash context.',
      'Add or remove rows with the controls to test what-if marks.',
      'Cross-check weighted output against the weighted average calculator for semester totals.',
    ],
    examples: [
      {
        title: 'Equal 6 cp semester — averages match',
        paragraphs: [
          'FIT1045 78, MAT1830 72, ACC1200 85 — all 6 cp.',
          'Simple = 78.33%, weighted = 78.33%. Grade band: Distinction.',
        ],
        table: {
          headers: ['Unit', 'Mark', 'Cp'],
          rows: [
            ['FIT1045', '78', '6'],
            ['MAT1830', '72', '6'],
            ['ACC1200', '85', '6'],
          ],
        },
      },
      {
        title: 'High electives masking a weak core',
        paragraphs: [
          'ENG1001 58 (12 cp), PSY1011 81 (6 cp), ATS1365 79 (6 cp).',
          'Simple ≈ 72.67% (looks like Distinction). Weighted ≈ 64.67% (Credit).',
          'The 12 cp engineering core at 58 dominates — revision priority is clear.',
        ],
      },
      {
        title: 'HD cluster on small units only',
        paragraphs: [
          'Core 12 cp at 71, three 6 cp breadths at 84, 86, 88.',
          'Simple ≈ 82.25%, weighted ≈ 76.43%. Simple mean overstates standing.',
        ],
      },
      {
        title: 'Marks only — no credit entered',
        paragraphs: [
          'Four marks: 65, 70, 74, 77 with credits left blank.',
          'Only simple average displays (71.50%). Enter cp to unlock weighted comparison.',
        ],
      },
      {
        title: 'Postgrad two-unit semester',
        paragraphs: [
          'MGF5960 74 (6 cp), MGF5130 81 (6 cp).',
          'Both averages = 77.50%, Distinction band. Uniform loads hide the simple vs weighted trap — the trap appears once cp differs.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Quoting the simple average in scholarship applications that use WAM.',
        'Entering cp for some rows but not others — weighted uses only complete pairs.',
        'Mixing provisional assignment marks with final unit results.',
        'Ignoring the grade band and focusing only on the raw percentage.',
        'Assuming this tool applies Year 1 half-weighting.',
      ],
      callout: {
        variant: 'tip',
        title: 'Quick sanity check',
        text: 'If weighted < simple by more than 2 points, audit your highest-credit units first — that is where recovery effort pays off.',
      },
    },
    tips: {
      bullets: [
        'Always enter credit points when units differ in load.',
        'Screenshot both averages when discussing standing with a mentor.',
        'Re-run after each major assessment to catch drift early.',
        'Use with the WAM target calculator once you know which average matters.',
        'Share the simple vs weighted lesson with first-year peers — it prevents common planning errors.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash WAM is credit-weighted and may apply Year 1 half-weight at the degree level. This calculator shows unit-list weighted maths without year-level adjustment — the right layer for understanding simple vs weighted, not for official WES parity.',
      ],
    },
    legacySections: GRADE_AVERAGE_LEGACY,
  }),

  '/percentage-to-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Convert a single percentage mark — or a raw score like 42/50 — into Monash official GPA values on both the 4.0 and 7.0 scales. The mapping uses published grade bands: HD 80+, D 70–79, C 60–69, P 50–59, N below 50.',
        'Handy when Moodle shows a percentage but an exchange application asks for GPA, or when you want to know whether a 79% assignment sits in Distinction or just below High Distinction territory.',
      ],
      bullets: [
        'Direct percentage entry (0–100).',
        'Obtained ÷ total entry for partial scores.',
        'Outputs 4.0 and 7.0 GPA simultaneously.',
        'Shows letter grade band alongside GPA.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'The tool first resolves your input to a percentage, then finds the Monash band. Band cut-offs are discrete — 79.9% maps to Distinction (3.0 / 6.0), 80.0% maps to HD (4.0 / 7.0). There is no linear interpolation between bands.',
        'Partial mark mode computes percentage = (obtained ÷ total) × 100 before band lookup. Useful for lab reports marked out of 40 or exams out of 100 with section weighting already applied.',
      ],
      table: {
        headers: ['Input', 'Resolved %', '4.0 GPA', '7.0 GPA'],
        rows: [
          ['76', '76', '3.0', '6.0'],
          ['42/50', '84', '4.0', '7.0'],
          ['55', '55', '1.0', '4.0'],
          ['38/100', '38', '0.0', '0.0'],
        ],
      },
      callouts: [
        {
          variant: 'warning',
          title: 'One mark ≠ cumulative GPA',
          text: 'Transcript GPA averages grade points across all units with credit weighting. Converting one exam percentage does not produce your degree GPA.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when you have a mark but need the Monash letter grade or GPA equivalent for a form, employer screen, or personal target-setting.',
        'Also use mid-assessment when a weighted Moodle column shows 38/50 and you want to know the band before the final is released.',
      ],
      bullets: [
        'Exchange and study-abroad GPA fields on application portals.',
        'Understanding borderline HD cut-offs (79 vs 80).',
        'Translating assignment feedback into GPA language.',
        'Preparing CV bullets that cite both WAM and GPA.',
      ],
    },
    steps: [
      'Choose percentage mode or obtained/total mode depending on how the mark is reported.',
      'Enter the value — use decimals if your mark has them (e.g. 76.5).',
      'Read the 4.0 and 7.0 GPA outputs and the letter grade band.',
      'For degree-level GPA, switch to the Monash CGPA calculator with all units.',
      'For WAM-based conversion, use the WAM to 4.0 or 7.0 GPA calculators instead.',
      'Confirm final unit marks on WES once results are official.',
    ],
    examples: [
      {
        title: 'Distinction assignment at 76%',
        paragraphs: [
          'Enter 76. Output: D grade, GPA 3.0 (4.0 scale), GPA 6.0 (7.0 scale).',
          'Three points below the HD threshold — worth pushing final exam prep if the unit is high credit.',
        ],
      },
      {
        title: 'Lab report 34/40',
        paragraphs: [
          'Obtained 34, total 40 → 85%. Output: HD, 4.0 / 7.0.',
          'Strong performance — if this unit is 12 cp, protect the mark through the final assessment.',
        ],
      },
      {
        title: 'Borderline pass at 52%',
        paragraphs: [
          'Enter 52. Output: P grade, GPA 1.0 / 4.0. Still passes but sits near fail territory.',
          'Pair with the pass mark calculator to see what the final exam needs.',
        ],
      },
      {
        title: 'Fail at 44%',
        paragraphs: [
          'Enter 44. Output: N grade, GPA 0.0 on both scales.',
          'Check supp exam eligibility and model recovery with the failed unit WAM calculator.',
        ],
      },
      {
        title: 'HD exam section 88/100',
        paragraphs: [
          'Obtained 88, total 100 → 88%. Output: HD, 4.0 / 7.0.',
          'If this is one component of a weighted unit, do not treat it as your unit GPA until all assessments combine.',
        ],
        table: {
          headers: ['Component', 'Score', 'Band'],
          rows: [
            ['Exam', '88/100', 'HD'],
            ['Unit final (example)', 'TBD', 'Use unit mark on WES'],
          ],
        },
      },
    ],
    mistakes: {
      bullets: [
        'Treating single-mark GPA as cumulative transcript GPA.',
        'Using linear scaling (percentage ÷ 25) instead of Monash bands.',
        'Forgetting that 79% and 80% sit in different GPA tiers.',
        'Entering total marks above 100 without normalising.',
        'Mixing 7.0 scale expectations with 4.0 outputs on US forms.',
      ],
    },
    tips: {
      bullets: [
        'Bookmark band cut-offs: 50, 60, 70, 80 — they drive every Monash GPA step.',
        'Run 79 vs 80 scenarios before final exams on borderline units.',
        'Use obtained/total mode to avoid manual percentage rounding errors.',
        'Cite both scale labels on international forms ("6.0/7.0" vs "3.0/4.0").',
        'After degree completion, pull official GPA from WES for applications.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash coursework grade points are defined in university grading policy. HD = 4.0/7.0, D = 3.0/6.0, C = 2.0/5.0, P = 1.0/4.0, N = 0.0. This calculator implements those published mappings for single-mark lookup.',
      ],
      callout: {
        variant: 'info',
        title: 'NH and supplementary results',
        text: 'Some fail codes (NH) still carry 0.3 GPA value on transcripts. This single-mark tool maps sub-50 percentages to N (0.0) — check WES for the exact code on your record.',
      },
    },
    legacySections: PERCENTAGE_TO_GPA_LEGACY,
  }),

  '/7-0-scale-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The 7.0 scale GPA calculator converts a percentage mark into the Australian standard 7-point GPA used by many HDR programs, government scholarships, and interstate university comparisons. High Distinction = 7, Distinction = 6, Credit = 5, Pass = 4, Fail = 0.',
        'Monash transcripts emphasise WAM percentages, but when a form asks for "GPA out of 7" this tool gives the band-accurate answer from a single mark — without the misleading linear formula of percentage ÷ 100 × 7.',
      ],
      bullets: [
        'Percentage or obtained/total input modes.',
        'Discrete Monash band mapping — no fake decimals like 6.5.',
        'Letter grade label alongside 7.0 GPA.',
        'Companion to the percentage-to-GPA calculator for 4.0 outputs.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'After resolving your input to a percentage, the calculator finds the Monash grade band and returns the corresponding 7.0 value. A 75% is Distinction → 6.0. An 82% is HD → 7.0. Marks below 50 map to 0.0.',
        'The 7-point scale spreads grade tiers more widely than 4.0 — Pass is 4.0/7 rather than 1.0/4 — which is why citing the scale on applications matters.',
      ],
      table: {
        headers: ['Percentage', 'Grade', '7.0 GPA'],
        rows: [
          ['83', 'HD', '7.0'],
          ['74', 'D', '6.0'],
          ['61', 'C', '5.0'],
          ['53', 'P', '4.0'],
          ['41', 'N', '0.0'],
        ],
      },
      callouts: [
        {
          variant: 'info',
          title: 'Not a cumulative degree GPA',
          text: 'One mark converts to one band GPA. Degree-level 7.0 GPA requires averaging all unit grade points with credit weighting via the Monash CGPA or semester GPA tools.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when an Australian postgrad form, Research Training Program brief, or interstate transfer guide specifies minimum "GPA 6.5/7" or similar — first convert your marks or WAM to the 7-point band language they expect.',
        'Also useful for comparing Monash unit performance to a friend at Melbourne or ANU who reports on the same 7-point scale.',
      ],
      bullets: [
        'HDR and Masters entry forms citing /7 GPA.',
        'Government scholarship eligibility screens.',
        'Single-unit mark translation before cumulative tools.',
        'Cross-checking 4.0 vs 7.0 reporting consistency.',
      ],
    },
    steps: [
      'Enter your percentage directly or use obtained/total for partial scores.',
      'Read the 7.0 GPA output and letter grade band.',
      'For degree-wide 7.0 GPA, use WAM to 7.0 GPA with your overall WAM from WES.',
      'When US forms appear, convert via the 7.0 to 4.0 GPA calculator.',
      'Label results clearly on applications: "GPA 6.0 on a 7.0 scale".',
      'Confirm final marks on WES once results are released.',
    ],
    examples: [
      {
        title: 'Distinction lab mark at 73%',
        paragraphs: ['Enter 73 → D grade, 7.0 GPA = 6.0. Same band as 78% — both Distinction on the 7-point summary.'],
      },
      {
        title: 'Assignment 45/50 (90%)',
        paragraphs: ['Obtained 45, total 50 → 90% → HD, 7.0 GPA = 7.0. Strong single-assessment result.'],
      },
      {
        title: 'Credit-level midterm 64%',
        paragraphs: ['Enter 64 → C grade, 5.0/7. Passes unit band planning but below merit cut-offs.'],
      },
      {
        title: 'Borderline HD at 80%',
        paragraphs: ['Enter 80 → HD, 7.0. One point above 79 — illustrates discrete band jump at the HD threshold.'],
      },
      {
        title: 'Fail mark 47%',
        paragraphs: ['Enter 47 → N, 0.0/7. Check supp options and model recovery with failed-unit tools.'],
      },
    ],
    mistakes: {
      bullets: [
        'Using linear scaling (WAM × 0.07) instead of band mapping.',
        'Reporting 6.3/7 when Monash bands do not use fractional tiers.',
        'Confusing 7.0 scale Pass (4.0) with 4.0 scale Pass (1.0).',
        'Submitting single-mark 7.0 GPA as cumulative degree GPA.',
        'Omitting scale label on international application forms.',
      ],
    },
    tips: {
      bullets: [
        'Memorise 7-point band cut-offs: 50, 60, 70, 80.',
        'Pair with WAM to 7.0 GPA for overall degree reporting.',
        'Use 7.0 to 4.0 converter before US grad school applications.',
        'Cite letter grade alongside numeric GPA for clarity.',
        'Check target university policy — some use slightly different bands.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash grading policy aligns letter grades across 4.0 and 7.0 scales at the band level. This calculator implements the standard coursework mapping used for Australian HDR and merit reporting from percentage inputs.',
      ],
    },
    legacySections: [
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
  }),

  '/wam-to-4-0-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Enter your Monash WAM and receive the band-equivalent GPA on the official 4.0 scale. WAM 80+ maps to HD (4.0), 70–79 to D (3.0), 60–69 to C (2.0), 50–59 to P (1.0), below 50 to fail (0.0).',
        'Built for scholarship forms, US exchange applications, and employer screens that request 4.0 GPA when you only have WAM from WES.',
      ],
      bullets: [
        'Single WAM input — instant 4.0 band GPA.',
        'Shows letter grade tier alongside GPA.',
        'Band mapping, not linear percentage scaling.',
        'Fast alternative to re-entering every unit in CGPA tool.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'The calculator locates your WAM in the Monash percentage band table and returns the corresponding 4.0 grade point. WAM 76 → Distinction → GPA 3.0, even though your exact transcript CGPA might be 3.05 or 2.95 depending on unit mix within the band.',
        'Transcript CGPA is credit-weighted across individual unit grade points. This tool is a WAM snapshot converter — ideal for forms, not a replacement for WES when three-decimal precision is required.',
      ],
      table: {
        headers: ['WAM', 'Band', '4.0 GPA'],
        rows: [
          ['82', 'HD', '4.0'],
          ['76', 'D', '3.0'],
          ['65', 'C', '2.0'],
          ['54', 'P', '1.0'],
          ['48', 'N', '0.0'],
        ],
      },
      callouts: [
        {
          variant: 'tip',
          title: 'Scholarship dual thresholds',
          text: 'Many Monash merit awards cite "WAM 70+ or GPA 3.0+". If your WAM is 74, this tool confirms you meet the GPA side even when the form only shows one field.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when you know your cumulative WAM from WES but the application field says "Cumulative GPA (4.0 scale)".',
        'Also use for quick band checks — is your WAM 79 still Distinction-tier (3.0) or did you cross into HD (4.0) at 80?',
      ],
      bullets: [
        'US exchange and grad school pre-screening forms.',
        'Employer graduate program applications.',
        'Scholarship renewal with GPA-based criteria.',
        'Explaining Monash standing to international recruiters.',
      ],
    },
    steps: [
      'Copy your cumulative WAM from WES (Academic Record or Results screen).',
      'Enter the WAM value in the calculator.',
      'Read the 4.0 GPA band equivalent and letter grade.',
      'If the form needs official CGPA, verify against WES GPA or use the Monash CGPA calculator.',
      'For improvement planning, pair with the WAM target calculator to see marks needed to reach the next band.',
      'Submit WES figures on official documents; use this output for orientation and draft forms.',
    ],
    examples: [
      {
        title: 'WAM 76 — Distinction average',
        paragraphs: ['Enter 76 → D band, GPA 3.0. Typical distinction-average student planning honours or merit scholarships.'],
      },
      {
        title: 'WAM 81 — High Distinction tier',
        paragraphs: ['Enter 81 → HD band, GPA 4.0. Meets HD-average reporting on 4.0 forms.'],
      },
      {
        title: 'WAM 79 vs 80 boundary',
        paragraphs: [
          'WAM 79 → GPA 3.0 (still Distinction). WAM 80 → GPA 4.0 (HD).',
          'One point shift changes 4.0 reporting tier — model with WAM target before final semester.',
        ],
      },
      {
        title: 'WAM 68 — Credit standing',
        paragraphs: ['Enter 68 → C band, GPA 2.0. Solid progression but below typical merit cut-offs.'],
      },
      {
        title: 'WAM 72 with mixed transcript',
        paragraphs: [
          'Band mapping returns 3.0. Actual CGPA might be 2.8–3.2 if fails or HDs cluster — run Monash CGPA for precision.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Dividing WAM by 25 to get GPA — incorrect for Monash bands.',
        'Reporting band GPA as exact transcript CGPA without WES check.',
        'Ignoring that WAM 79.9 still maps to 3.0, not 4.0.',
        'Using semester WAM when the form asks for cumulative WAM.',
        'Forgetting to label "Monash 4.0 scale" on international forms.',
      ],
    },
    tips: {
      bullets: [
        'Export WAM after every results period — band tier can shift with one unit.',
        'Cross-check with WAM to CGPA calculator for dual-metric forms.',
        'If near 80 WAM, prioritise high-credit units for HD marks.',
        'Read the WAM to GPA conversion article for employer context.',
        'Keep WES screenshot attached to draft applications for your records.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash publishes WAM as the primary percentage average and calculates CGPA separately from unit grade points. Band mapping between WAM and 4.0 GPA follows official grade bands — this calculator applies those tiers for planning.',
      ],
    },
    legacySections: [
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
  }),

  '/wam-to-7-0-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Convert your overall Monash WAM into the Australian 7-point GPA scale used by HDR programs, RTP scholarships, and many interstate universities. WAM 80+ → 7.0, 70–79 → 6.0, 60–69 → 5.0, 50–59 → 4.0.',
        'Avoids the common error of computing WAM ÷ 100 × 7, which misstates Monash band standing. Two students at WAM 72 and 78 both report 6.0/7 under official mapping.',
      ],
      bullets: [
        'WAM input from WES → 7.0 GPA band.',
        'Letter grade displayed with result.',
        'Emphasises Australian /7 reporting standard.',
        'Complements WAM to 4.0 for dual-scale forms.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'The tool applies discrete Monash percentage bands to 7.0 grade points. Unlike US linear conversion, there is no gradual slide — WAM 79.5 remains 6.0/7 until WAM reaches 80.',
        'Degree CGPA on a 7.0 basis would require credit-weighting each unit\'s 7-point grade. This calculator maps cumulative WAM snapshot to the band GPA for form filling.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Interstate band differences',
          text: 'Other Australian universities may use marginally different cut-offs. Always read the target institution\'s grading policy when applying outside Monash.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when WES shows WAM but your postgrad application asks for "GPA /7.0". Common for Australian PhD and Masters by research pathways.',
        'Also helpful when comparing your Monash WAM to a entry requirement stated as "minimum 6.0 GPA" on the 7-point scale.',
      ],
      bullets: [
        'HDR and research training program applications.',
        'Australian government scholarship forms.',
        'Faculty merit lists citing /7 GPA.',
        'Quick band check before WAM improvement planning.',
      ],
      table: {
        headers: ['Application type', 'Typical minimum', 'WAM equivalent'],
        rows: [
          ['HDR coursework', '6.0/7', 'WAM 70+'],
          ['Merit scholarship', '6.5/7 (example)', 'Upper D band'],
          ['Honours entry', 'Varies by faculty', 'Check course map'],
        ],
      },
    },
    steps: [
      'Copy cumulative WAM from WES.',
      'Enter WAM in the calculator.',
      'Read 7.0 GPA and letter grade band.',
      'Cite as "GPA X.X/7.0 (Monash band mapping)" on forms if free text allowed.',
      'Reverse-check with 7.0 GPA to WAM calculator if the form also asks for percentage range.',
      'Use Monash CGPA calculator when unit-level 7.0 precision is required.',
    ],
    examples: [
      { title: 'WAM 78', paragraphs: ['→ D band, 6.0/7. Strong distinction average for HDR planning.'] },
      { title: 'WAM 83', paragraphs: ['→ HD band, 7.0/7. Top tier on Australian 7-point reporting.'] },
      { title: 'WAM 71', paragraphs: ['→ D band, 6.0/7. Same 7.0 GPA as WAM 78 — band not linear.'] },
      { title: 'WAM 63', paragraphs: ['→ C band, 5.0/7. Credit standing — below typical merit thresholds.'] },
      { title: 'WAM 79.6 near HD boundary', paragraphs: ['Still 6.0/7 until WAM hits 80. Model one HD unit impact with WAM target calculator.'] },
    ],
    mistakes: {
      bullets: [
        'Multiplying WAM by 0.07 for "7.0 GPA".',
        'Expecting fractional 7.0 values like 6.4 from WAM band mapping.',
        'Using semester WAM instead of cumulative WAM on degree applications.',
        'Confusing 7.0 Pass (4.0) with failing performance.',
        'Applying Monash bands to non-Monash transcripts without policy check.',
      ],
    },
    tips: {
      bullets: [
        'Always write "/7.0" next to the number on forms.',
        'Pair with WAM to 4.0 when submitting to US institutions too.',
        'Track WAM movement each semester — band tier follows WAM, not vice versa.',
        'Browse GPA conversion articles for cross-university context.',
        'Verify near-boundary WAM on WES before final submission.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash WAM is the authoritative percentage average on your academic record. Seven-point GPA reporting derives from the same grade bands used for 4.0 mapping — HD/D/C/P/N tiers apply consistently.',
      ],
    },
    legacySections: [
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
  }),

  '/wam-to-cgpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Translate your Monash WAM into CGPA-style 4.0 band reporting for forms that ask for cumulative GPA when you only have WAM visible on WES. WAM and CGPA describe the same academic record — one as percentage, one as credit-weighted grade points.',
        'This tool maps WAM bands to the equivalent 4.0 GPA tier (HD/D/C/P) for quick orientation. For transcript-exact CGPA to three decimals, use the Monash CGPA calculator with every unit entered.',
      ],
      bullets: [
        'WAM → 4.0 CGPA band equivalent.',
        'Primary label shows CGPA terminology for form alignment.',
        'Band-based mapping consistent with other WAM converters.',
        'Highlights when full unit entry is needed instead.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'WAM band cut-offs drive the output: 80+ → GPA 4.0, 70–79 → 3.0, 60–69 → 2.0, 50–59 → 1.0, below 50 → 0.0. Actual CGPA on WES averages each unit\'s grade points weighted by credit — a WAM of 74 might pair with CGPA 3.1 or 2.9 depending on mark distribution inside the Distinction band.',
        'The calculator is intentionally a snapshot converter — same maths as WAM to 4.0 GPA but labelled for CGPA form fields.',
      ],
      table: {
        headers: ['WAM band', 'CGPA band (4.0)', 'Typical standing'],
        rows: [
          ['80+', '3.7–4.0', 'HD average'],
          ['70–79', '3.0–3.6', 'Distinction average'],
          ['60–69', '2.0–2.9', 'Credit average'],
          ['50–59', '1.0–1.9', 'Pass average'],
        ],
      },
      callouts: [
        {
          variant: 'info',
          title: 'When to use full CGPA tool',
          text: 'Scholarship panels requiring official CGPA to three decimals need the Monash CGPA calculator with your complete unit list — not WAM band mapping alone.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when a form field says "CGPA" but WES prominently displays WAM and you need a fast band-equivalent answer for draft applications.',
        'Also use to sanity-check whether your WAM 72 likely corresponds to CGPA above or below 3.0 before opening the full unit calculator.',
      ],
      bullets: [
        'Dean\'s list and merit award pre-checks.',
        'Postgrad applications accepting band-equivalent CGPA.',
        'Employer forms mixing WAM and CGPA terminology.',
        'Orientation before running full Monash CGPA calculator.',
      ],
    },
    steps: [
      'Copy cumulative WAM from WES.',
      'Enter WAM and read the CGPA band equivalent.',
      'If the form requires official CGPA, open WES GPA field or run Monash CGPA calculator.',
      'Compare band output with WAM to 4.0 — they should align on tier.',
      'Track semester changes with semester GPA calculator.',
      'Submit WES-authoritative CGPA on final applications.',
    ],
    examples: [
      {
        title: 'WAM 75 — distinction planning',
        paragraphs: ['Band CGPA ≈ 3.0. Actual WES CGPA might read 3.05 — run full calculator to confirm.'],
      },
      {
        title: 'WAM 82 — HD average',
        paragraphs: ['Band CGPA 4.0 tier. Strong positioning for merit and research pathways.'],
      },
      {
        title: 'WAM 66 — credit band',
        paragraphs: ['Band CGPA ≈ 2.0. Meets progression; below typical scholarship renewal floors.'],
      },
      {
        title: 'WAM 74 with clustered 79s',
        paragraphs: ['Band says 3.0 but actual CGPA may skew toward 3.3 — unit mix matters inside the band.'],
      },
      {
        title: 'WAM 58 — pass band',
        paragraphs: ['Band CGPA ≈ 1.0. Focus on lifting next semester before cumulative damage compounds.'],
      },
    ],
    mistakes: {
      bullets: [
        'Submitting band-mapped CGPA as official WES CGPA without verification.',
        'Assuming WAM and CGPA always move in perfect lockstep.',
        'Ignoring failed units (0.3 vs 0.0) when estimating from WAM alone.',
        'Using semester WAM for cumulative CGPA forms.',
        'Skipping unit-level calculator when three-decimal precision is required.',
      ],
    },
    tips: {
      bullets: [
        'Export academic record showing both WAM and GPA if WES displays them.',
        'Use this for drafts; WES for submissions.',
        'After WN or repeats, rerun Monash CGPA — band mapping hides those details.',
        'Read CGPA article for repeat and withdrawal effects.',
        'Pair with WAM target when CGPA band is below scholarship threshold.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash calculates CGPA from credit-weighted unit grade points on the 4.0 scale. WAM is the parallel percentage average. Both appear on different WES screens for some students — export your record rather than inferring one from the other on official forms.',
      ],
    },
    legacySections: [
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
  }),

  '/4-0-gpa-to-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Reverse-convert a 4.0 GPA value into the Monash WAM percentage band it represents. GPA 4.0 → WAM 80–100% (HD), 3.0 → 70–79% (D), 2.0 → 60–69% (C), 1.0 → 50–59% (P), 0.0 → below 50%.',
        'Essential when a scholarship brief says "GPA 3.0 minimum" and you need to translate that into WAM targets for remaining semesters at Monash.',
      ],
      bullets: [
        '4.0 scale input locked — no scale toggle confusion.',
        'Returns WAM min–max range, not a fake precise percentage.',
        'Letter grade band displayed with range.',
        'Reverse companion to WAM to 4.0 GPA calculator.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Monash maps each 4.0 grade point step to a 10-point WAM window. The calculator finds the band for your GPA input and returns the WAM range. GPA 3.0 always plans as WAM 70–79 — whether your actual WAM is 71 or 78 requires unit-level detail.',
        'Cumulative transcript GPA can sit between integer bands when units mix grades — e.g. CGPA 3.4 spans mostly Distinction with some HD units. The tool maps the band of the entered value; use WES for authoritative WAM.',
      ],
      table: {
        headers: ['4.0 GPA', 'Grade', 'WAM range'],
        rows: [
          ['4.0', 'HD', '80–100%'],
          ['3.0', 'D', '70–79%'],
          ['2.0', 'C', '60–69%'],
          ['1.0', 'P', '50–59%'],
          ['0.0', 'N', '<50%'],
        ],
      },
      callouts: [
        {
          variant: 'tip',
          title: 'Mental maths anchor',
          text: 'Many students use 75% as a Distinction midpoint when GPA 3.0 is cited — but official planning should reference the full 70–79% band, especially near boundaries.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when translating US-style or Monash 4.0 GPA requirements into WAM language for target setting.',
        'Common when reading exchange program eligibility ("minimum GPA 3.0") while planning Monash unit marks.',
      ],
      bullets: [
        'Scholarship GPA floors → WAM semester targets.',
        'US transfer guide GPA requirements.',
        'Employer grad schemes citing 4.0 GPA.',
        'Sanity-checking WES GPA against WAM band.',
      ],
    },
    steps: [
      'Enter your 4.0 GPA from WES or a prior conversion.',
      'Read the WAM min–max range and letter grade.',
      'Use WAM target calculator to plan marks needed within that band or above.',
      'If GPA is between bands (e.g. 3.5), note it spans HD/D territory — check WES WAM directly.',
      'Pair with GPA to percentage calculator for midpoint planning figures.',
      'Confirm cumulative WAM on WES before competitive applications.',
    ],
    examples: [
      { title: 'GPA 3.0', paragraphs: ['→ WAM 70–79%, Distinction. Typical merit scholarship floor at Monash.'] },
      { title: 'GPA 4.0', paragraphs: ['→ WAM 80–100%, HD. Dean\'s honours and top scholarship territory.'] },
      { title: 'GPA 2.5', paragraphs: ['→ WAM 60–69%, Credit. Progression safe; build toward distinction if targeting honours.'] },
      { title: 'GPA 3.5 (between bands)', paragraphs: ['Maps to upper Distinction / lower HD overlap zone — pull actual WAM from WES for precision.'] },
      { title: 'GPA 1.0', paragraphs: ['→ WAM 50–59%, Pass band. Focus on lifting next enrolment load.'] },
    ],
    mistakes: {
      bullets: [
        'Treating WAM range midpoint as official WAM on forms.',
        'Assuming GPA 3.0 means exactly WAM 75.',
        'Using US high school GPA on this Monash band tool.',
        'Ignoring mixed-grade transcripts where GPA spans bands.',
        'Forgetting to convert 7.0 GPA to 4.0 first when needed.',
      ],
    },
    tips: {
      bullets: [
        'After mapping, open WAM target calculator with your actual completed cp.',
        'Cross-check with WAM to 4.0 for round-trip consistency.',
        'Read GPA to WAM article for employer reporting tips.',
        'Aim for top of band (e.g. 78+) when form says "minimum 3.0".',
        'Export WES each semester — band range is static but your WAM moves.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash official 4.0 scale assigns HD=4.0, D=3.0, C=2.0, P=1.0, N=0.0. Each step corresponds to a published WAM percentage band used across Monash planning tools and policy documents.',
      ],
    },
    legacySections: [
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
  }),

  '/7-0-gpa-to-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Map a 7-point GPA input to Monash WAM percentage bands. GPA 7.0 → 80%+, 6.0 → 70–79%, 5.0 → 60–69%, 4.0 → 50–59%, 0.0 → below 50%.',
        'Designed for students transferring from universities that report only /7 GPA, or when HDR forms state "minimum 6.0/7" and you need WAM-style targets for remaining Monash study.',
      ],
      bullets: [
        'Fixed 7.0 scale input.',
        'WAM range output with grade label.',
        'Band-based reverse mapping.',
        'Pairs with WAM to 7.0 GPA calculator.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Each 7.0 integer maps to a Monash letter grade and WAM window. GPA 6.0/7 is Distinction regardless of whether your WAM is 71 or 79 — the range captures that spread.',
        'Non-integer inputs (e.g. 5.5) are not standard Monash band values — enter cumulative 7.0 GPA from transcripts and treat output as orientation; confirm WAM on WES.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'Honours may use WAM directly',
          text: 'Faculty honours classifications often reference WAM cut-offs, not 7-point GPA. Check your course map before planning solely on /7 conversions.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when arriving at Monash with a 7-point transcript and needing to set WAM goals aligned to Australian band language.',
        'Also when comparing an external "GPA 6.0/7" requirement to your Monash WAM progress.',
      ],
      bullets: [
        'Transfer students from other Australian universities.',
        'HDR minimum /7 GPA → WAM planning.',
        'Cross-checking WAM to 7.0 round-trip conversion.',
        'Explaining /7 standing to mentors using WAM terminology.',
      ],
    },
    steps: [
      'Enter 7.0 GPA from transcript or prior conversion.',
      'Read WAM min–max range and Monash grade label.',
      'Compare range to your actual WES WAM if already enrolled at Monash.',
      'Use WAM projection calculator to model movement within or above the band.',
      'Convert to 4.0 first if a US form also appears — use 7.0 to 4.0 calculator.',
      'Verify faculty honours rules on WAM vs GPA reporting.',
    ],
    examples: [
      { title: 'GPA 6.0/7', paragraphs: ['→ WAM 70–79%, Distinction. Standard HDR coursework minimum at many faculties.'] },
      { title: 'GPA 7.0/7', paragraphs: ['→ WAM 80%+, HD. Top band — competitive for research scholarships.'] },
      { title: 'GPA 5.0/7', paragraphs: ['→ WAM 60–69%, Credit. Meets baseline progression; below merit tiers.'] },
      { title: 'GPA 4.0/7 (Pass on 7-scale)', paragraphs: ['→ WAM 50–59%. Note: 4.0/7 is Pass, not HD — scale label is essential.'] },
      { title: 'Transfer student with 6.2/7 estimated', paragraphs: ['Treat as upper Distinction band; set Monash WAM target 75+ for equivalent standing.'] },
    ],
    mistakes: {
      bullets: [
        'Confusing 4.0/7 (Pass) with 4.0/4 (HD on US scale).',
        'Expecting a single WAM percentage instead of a range.',
        'Using home-university 7.0 without checking Monash WAM on WES after enrolment.',
        'Linearly multiplying 7.0 GPA by ~14.3 to get WAM.',
        'Ignoring faculty honours WAM cut-offs in favour of GPA alone.',
      ],
    },
    tips: {
      bullets: [
        'Always label "/7.0" when discussing 7-point GPA.',
        'Round-trip test: WAM → 7.0 → WAM should land in the same band.',
        'Model improvement with WAM projection calculator.',
        'Compare 4.0 and 7.0 with dedicated cross-scale converters.',
        'Browse merit articles for faculty-specific WAM floors.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash academic standing is primarily tracked via WAM on WES. Seven-point GPA is a parallel reporting scale aligned at grade band level — this calculator bridges /7 inputs to WAM ranges for Monash planning.',
      ],
    },
    legacySections: [
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
  }),

  '/cgpa-to-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Enter your Monash CGPA on the 4.0 scale and receive the corresponding WAM percentage band. CGPA compresses your full academic history into one grade-point average; this tool expands that snapshot back into WAM language for target setting.',
        'CGPA input label distinguishes this from generic GPA converters — built for students who track cumulative GPA on WES but think in WAM percentages for unit planning.',
      ],
      bullets: [
        'CGPA-specific input labelling.',
        '4.0 scale locked to match Monash transcripts.',
        'WAM min–max band output.',
        'Reverse of WAM to CGPA calculator.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Band mapping follows Monash tiers: CGPA 4.0 → WAM 80–100%, 3.0 → 70–79%, 2.0 → 60–69%, 1.0 → 50–59%, 0.0 → below 50%. CGPA 3.2 might align with WAM anywhere from low to mid Distinction depending on unit mix — the range captures that uncertainty.',
        'Because CGPA aggregates every completed unit, one new HD mark moves it slowly. Use this for band orientation, then drill into unit marks when diagnosing performance.',
      ],
      table: {
        headers: ['CGPA (4.0)', 'Planning WAM band', 'Label'],
        rows: [
          ['3.5–4.0', '80–100%', 'HD average'],
          ['3.0–3.4', '70–79%', 'Distinction average'],
          ['2.0–2.9', '60–69%', 'Credit average'],
          ['1.0–1.9', '50–59%', 'Pass average'],
        ],
      },
      callouts: [
        {
          variant: 'warning',
          title: 'International CGPA',
          text: 'Non-Monash 4.0 CGPA from overseas institutions may use different curves. Try the 10-point GPA to WAM calculator for 10-point scales before using this Monash band tool.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when WES shows CGPA prominently but a placement coordinator asks for "expected WAM" or percentage average.',
        'Also when scholarship renewal letters cite CGPA and you want WAM-equivalent semester targets.',
      ],
      bullets: [
        'Placement and internship percentage questions.',
        'CGPA scholarship floors → WAM unit targets.',
        'Employer screens listing both metrics.',
        'Quick band check before WAM target planning.',
      ],
    },
    steps: [
      'Copy CGPA from WES academic record.',
      'Enter CGPA in the calculator (4.0 scale).',
      'Read WAM range and standing label.',
      'Pull actual WAM from WES for side-by-side comparison.',
      'If they diverge significantly, your marks cluster at band edges — trust WES WAM for precision.',
      'Use WAM target calculator to plan remaining units toward desired band.',
    ],
    examples: [
      { title: 'CGPA 3.25', paragraphs: ['→ WAM 70–79% band (Distinction). Actual WAM might be 74–77 depending on mark spread.'] },
      { title: 'CGPA 3.75', paragraphs: ['→ HD/D overlap zone. WES WAM confirms whether you sit above 80.'] },
      { title: 'CGPA 2.8', paragraphs: ['→ WAM 60–69%, Credit average. Build toward 70 WAM for merit pathways.'] },
      { title: 'CGPA 3.0 exactly', paragraphs: ['→ Distinction band floor. Aim for 75+ WAM on remaining units to strengthen standing.'] },
      { title: 'CGPA 1.5 after difficult semester', paragraphs: ['→ Pass band WAM 50–59. Prioritise recovery units before cumulative impact deepens.'] },
    ],
    mistakes: {
      bullets: [
        'Assuming CGPA 3.0 equals exactly WAM 75.',
        'Using semester GPA instead of cumulative CGPA.',
        'Applying Monash bands to international CGPA without conversion.',
        'Submitting inferred WAM on official forms instead of WES WAM.',
        'Ignoring WN/repeat effects hidden inside CGPA.',
      ],
    },
    tips: {
      bullets: [
        'Compare CGPA-derived band with WES WAM each results period.',
        'Use Monash CGPA calculator to verify WES if numbers look stale.',
        'Combine with WAM projection for recovery planning.',
        'Submit the metric each application explicitly requests.',
        'Document both CGPA and WAM on personal tracking spreadsheet.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash CGPA is credit-weighted across official 4.0 grade points. WAM is the percentage parallel. Scholarship letters sometimes cite both — always submit the requested figure; use this tool to translate between them for planning only.',
      ],
    },
    legacySections: [
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
  }),

  '/gpa-to-percentage-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Convert 4.0 or 7.0 GPA inputs back into Monash percentage (WAM) bands so you can think in exam marks again. GPA 3.0 → roughly 70–79%, GPA 4.0 → 80–100%, with planning midpoints shown for mental maths.',
        'Useful when employers or placement coordinators ask for "percentage average" but your WES mental model is GPA — or when setting unit mark targets from a scholarship GPA floor.',
      ],
      bullets: [
        'Toggle 4.0 or 7.0 scale input.',
        'WAM percentage range output.',
        'Planning midpoint for each band.',
        'Letter grade label included.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'GPA maps to Monash letter grade bands, then to percentage ranges. On 4.0 scale: HD=80–100%, D=70–79%, C=60–69%, P=50–59%. Midpoints (~85, ~75, ~65, ~55) are illustrative — Monash does not publish single official percentages per GPA step.',
        'Seven-point scale follows parallel bands: 7.0→80%+, 6.0→70–79%, etc. Always prefer the range over midpoint when near a band edge.',
      ],
      table: {
        headers: ['4.0 GPA', 'Grade', 'WAM range', 'Midpoint'],
        rows: [
          ['4.0', 'HD', '80–100%', '~85%'],
          ['3.0', 'D', '70–79%', '~75%'],
          ['2.0', 'C', '60–69%', '~65%'],
          ['1.0', 'P', '50–59%', '~55%'],
        ],
      },
      callouts: [
        {
          variant: 'tip',
          title: 'Midpoint vs range',
          text: 'Use midpoints for quick targets; use full ranges when one mark could push you across a scholarship or honours boundary.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when translating GPA-based requirements into semester mark goals you can chase unit by unit.',
        'Common in placement interviews: "We expect ~75% average" while you hold GPA 3.1 on WES.',
      ],
      bullets: [
        'Internship and placement percentage questions.',
        'Scholarship GPA → unit mark targets.',
        'Explaining Monash GPA to percentage-minded employers.',
        'Cross-scale check after 7.0 scale calculator.',
      ],
    },
    steps: [
      'Select 4.0 or 7.0 scale to match your input GPA.',
      'Enter GPA from WES or a prior conversion.',
      'Read WAM percentage range and planning midpoint.',
      'Set unit targets using the range, not midpoint alone, if near boundaries.',
      'Verify actual WAM on WES for official reporting.',
      'Use Monash WAM calculator with unit marks when precision matters.',
    ],
    examples: [
      {
        title: 'GPA 3.0 (4.0 scale)',
        paragraphs: ['→ WAM 70–79%, midpoint ~75%. Plan remaining units around low-to-mid 70s minimum.'],
      },
      {
        title: 'GPA 4.0 (4.0 scale)',
        paragraphs: ['→ WAM 80–100%, midpoint ~85%. HD territory for honours and top merit.'],
      },
      {
        title: 'GPA 6.0 (7.0 scale)',
        paragraphs: ['→ WAM 70–79%, Distinction. Equivalent to 3.0/4.0 for mark planning.'],
      },
      {
        title: 'GPA 2.0 (4.0 scale)',
        paragraphs: ['→ WAM 60–69%, midpoint ~65%. Credit band — target 70+ on cores to lift standing.'],
      },
      {
        title: 'GPA 3.0 with placement asking for 78% average',
        paragraphs: [
          'Band allows 70–79. Target upper band (77–79) on high-credit units to meet 78% expectation.',
        ],
        table: {
          headers: ['Target', 'Within band?', 'Action'],
          rows: [
            ['78% avg', 'Yes — upper D', 'Focus 12 cp units'],
            ['85% avg', 'Requires HD band', 'Need GPA/WAM 4.0/80+'],
          ],
        },
      },
    ],
    mistakes: {
      bullets: [
        'Quoting midpoint as official WAM on applications.',
        'Using 7.0 GPA on 4.0 scale setting or vice versa.',
        'Assuming linear GPA-to-percentage formula across scales.',
        'Ignoring that actual WAM comes from credit-weighted unit marks.',
        'Setting unit target at midpoint when sitting at band floor.',
      ],
    },
    tips: {
      bullets: [
        'Near honours cut-offs, plan using range top, not midpoint.',
        'Convert 7.0 to band first if starting from Australian HDR forms.',
        'Pair with percentage to GPA for round-trip checks.',
        'Pull WES WAM for official submissions.',
        'Read GPA conversion articles for postgrad reporting nuance.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash does not assign one fixed percentage to each GPA step — bands reflect ranges of unit marks. Midpoints in this calculator are planning aids only; WES WAM is authoritative for official percentage average reporting.',
      ],
      callout: {
        variant: 'info',
        title: 'Unit-level precision',
        text: 'For exact WAM, enter completed unit marks in the Monash WAM calculator rather than inferring from GPA alone.',
      },
    },
    legacySections: [
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
  }),
};
