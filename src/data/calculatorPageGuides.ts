import { INLINE_LINK_CLASS } from '../constants/site';

export interface GuideTable {
  headers: string[];
  rows: string[][];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: GuideTable;
}

export interface CalculatorPageGuideData {
  sections: GuideSection[];
}

export const CALCULATOR_PAGE_GUIDES: Record<string, CalculatorPageGuideData> = {
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
};

export function getCalculatorPageGuide(path: string): CalculatorPageGuideData | undefined {
  return CALCULATOR_PAGE_GUIDES[path];
}
