import type { CalculatorPageGuideData, GuideSection } from './calculatorPageGuides';
import { buildStandardCalculatorGuide } from '../utils/calculatorGuideBuilder';

const DISTINCTION_AVERAGE_LEGACY: GuideSection[] = [
  {
    heading: 'What Is Distinction Average at Uni?',
    paragraphs: [
      'Distinction average is a the university benchmark for strong academic standing. Students and employers often treat it as WAM 70 or above, or GPA 3.0 or above on the official 4.0 GPA scale. It is not the same as earning a D grade on one unit — distinction average describes your overall course performance across all completed units.',
      'Faculties reference distinction average for merit certificates, some scholarship renewals, dean\'s commendation tiers, and progression conversations. The exact rules depend on your course and award year, so always confirm with Uni policy pages before relying on a calculator result for formal decisions.',
    ],
    bullets: [
      'WAM 70+ typically meets distinction average on the percentage scale.',
      'GPA 3.0+ on Uni official 4.0 scale can also qualify.',
      'One strong unit does not guarantee distinction average — your cumulative result matters.',
    ],
  },
  {
    heading: 'How to Use This Calculator',
    paragraphs: [
      'Enter your current WAM from WES or the main WAM calculator. If you also track GPA, enter your official 4.0 GPA — the tool checks both pathways. A positive gap means you still need that many points to reach the distinction floor; a negative gap means you are already above it.',
      'If you are below 70 WAM with limited credit points remaining, pair this tool with the WAM target calculator to see whether distinction average is still mathematically reachable on your remaining enrolment load.',
    ],
  },
  {
    heading: 'Distinction Average vs Other Uni Benchmarks',
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
];

const SCHOLARSHIP_WAM_LEGACY: GuideSection[] = [
  {
    heading: 'How Scholarships Use WAM at Uni',
    paragraphs: [
      'Merit scholarships at the university often consider academic performance, but no single WAM applies to every award. Equity scholarships weigh financial need and personal circumstances. Faculty scholarships may set different floors for domestic and international students. This calculator shows planning bands — not guaranteed eligibility.',
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
      'Step 1: Confirm current WAM on WES. Step 2: Sum completed and remaining credit points realistically. Step 3: Run this calculator for tier targets. Step 4: Cross-check distinction average status. Step 5: Read our uni scholarship wam requirements article for award-specific deadlines and criteria.',
    ],
  },
];

const FAILED_UNIT_LEGACY: GuideSection[] = [
  {
    heading: 'Why Failed Units Matter for WAM',
    paragraphs: [
      'At the university, failed units normally remain in your WAM calculation under standard coursework rules. A fail drags your weighted average down in proportion to the unit\'s credit points — a 12-credit fail hurts twice as much as a 6-credit fail at the same mark.',
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
      'Speak with Uni Connect or your faculty about supp eligibility and repeat rules.',
      'Track progress each semester with the WAM projection calculator.',
    ],
    paragraphs: [
      'One failed unit rarely ends honours or scholarship hopes if enough credit points remain. The key is knowing the maths early and choosing the recovery path that fits your timetable and faculty policy.',
    ],
  },
];

const DEANS_HONOURS_LEGACY: GuideSection[] = [
  {
    heading: 'Dean\'s Honours List vs Honours Degree',
    paragraphs: [
      'Uni students often mix up two different ideas. An honours research degree uses H1, H2A, and H2B classifications from WAM. A dean\'s honours list award is a faculty graduation excellence recognition — often percentile-based, not a fixed WAM for every faculty.',
      'Uni Business School publicly describes dean\'s honours list as top two percentile by WAM within a graduating cohort. Other faculties may use distinction average language, dean\'s commendation certificates, or course awards with different selection logic.',
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
      'Failed units and repeats both count under normal WAM rules.',
      'List dean\'s honours list on applications only after faculty confirmation.',
    ],
    paragraphs: [
      'Read our dean\'s honours list guide for resume wording, faculty examples, and common mistakes students make when reporting achievements.',
    ],
  },
];

const EXCHANGE_WAM_LEGACY: GuideSection[] = [
  {
    heading: 'Do Exchange Grades Affect WAM?',
    paragraphs: [
      'Successfully completed outbound exchange units at the university normally transfer as SFR — Satisfied Faculty Requirement. Host university percentage marks do not appear as numeric grades on your Uni transcript and do not enter WAM, GPA, or CGPA calculations.',
      'That surprises many students who expect a strong semester abroad to boost their average. Exchange advances degree progress through credit points without mark risk to WAM — assuming you pass and faculty credit is approved.',
    ],
  },
  {
    heading: 'What This Calculator Shows',
    paragraphs: [
      'Enter your Uni-graded WAM and credit points, then add planned exchange credit as SFR. Your WAM after exchange equals your current WAM — unchanged. Total degree credit points increase, showing progress toward completion.',
      'The exchange WAM floor check uses a typical 60% planning benchmark referenced in Uni standing guidance. Faculty rules vary; confirm eligibility with Uni Abroad and your managing faculty before applying.',
    ],
    bullets: [
      'Keep host transcripts and unit outlines for credit approval.',
      'Failed exchange units may appear as Fail if credit is not granted.',
      'Recalculate WAM after return using only Uni-graded units.',
    ],
  },
  {
    heading: 'Exchange and Long-Term Planning',
    paragraphs: [
      'Strong pre-exchange WAM still matters for scholarships, honours planning, and standing reviews even though exchange itself does not add marks. Use the distinction average calculator and scholarship WAM tool on your Uni-graded baseline before you depart.',
      'Read our exchange grades and WAM guide for SFR definitions, application standing rules, and post-return checklist steps.',
    ],
  },
];

const HONOURS_LEGACY: GuideSection[] = [
  {
    heading: 'Uni Honours Degree Classifications',
    paragraphs: [
      'Uni honours course grades map from WAM using official thresholds: H1 (First Class Honours) from 80, H2A (Second Class Division A) from 70 to below 80, H2B from 60 to below 70, and pass band from 50 to below 60. Below 50 is not a passing honours course average.',
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
      'Generic Australian calculators sometimes show H2A from 75 WAM. Uni official honours schema uses 70 as the H2A floor. A WAM of 79.5 is H2A; H1 begins at exactly 80.00. Small differences matter on transcripts and employer reporting.',
      'Calculate your WAM with year-level weighting (Year 1 at 0.5) using the main WAM calculator before entering your result here.',
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
];

const GPA_LEGACY: GuideSection[] = [
  {
    heading: 'Uni Official 4.0 GPA Scale',
    paragraphs: [
      'the university reports GPA on a 4.0 scale where High Distinction = 4.0, Distinction = 3.0, Credit = 2.0, Pass = 1.0, and Fail (N) = 0.3 — not zero. Withdrawn fail (WN) = 0.0. This fail value surprises students migrating from institutions that use 0.0 fails.',
      'GPA = sum of (grade value × credit points) ÷ sum of credit points, rounded to three decimal places on official records. Enter each unit by letter grade or percentage mark; the calculator maps marks to standard Uni bands before computing.',
    ],
  },
  {
    heading: 'GPA vs WAM — When to Use Each',
    paragraphs: [
      'WAM preserves exact percentage differences inside a grade band — two students at 71 and 79 WAM both map to D for GPA but have different WAM. Employers and Uni faculties often prefer WAM for fine comparisons; some international forms request GPA.',
      'Use the Uni CGPA calculator to combine prior GPA with a new semester. Use WAM to GPA when applications need scale conversion from your weighted average.',
    ],
    bullets: [
      'Distinction average is often stated as GPA 3.0+ or WAM 70+.',
      'Include failed units — they count at 0.3 per credit point.',
      'Verify official GPA on WES before formal submissions.',
    ],
  },
];

const CGPA_LEGACY: GuideSection[] = [
  {
    heading: 'What Is CGPA at Uni?',
    paragraphs: [
      'Cumulative GPA (CGPA) combines your GPA from completed study with new semester results, weighted by credit points. It answers: "What is my overall GPA after this teaching period?" — useful after each results release.',
      'Enter your prior CGPA and completed credit points, then add this semester\'s units by grade or mark. The calculator computes semester GPA and updated cumulative GPA using Uni official grade values.',
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
      'Malaysia campus students should confirm local reporting rules with Uni.',
    ],
    paragraphs: [
      'Read our CGPA explained guide for transcript reading and renewal scholarship contexts.',
    ],
  },
];

const TARGET_GPA_LEGACY: GuideSection[] = [
  {
    heading: 'Target GPA Planning at Uni',
    paragraphs: [
      'This calculator answers: what semester GPA do I need on my next enrolment load to reach a cumulative GPA target? It uses your current CGPA, completed credit points, planned semester credit points, and goal GPA.',
      'Results above 4.0 mean the target is not achievable in one semester on the official scale — you may need multiple strong semesters or a longer timeline.',
    ],
  },
  {
    heading: 'How It Differs from WAM Target',
    paragraphs: [
      'WAM target tools work in percentage marks with credit weighting. GPA target tools work in grade-point space where marks compress into bands. A student aiming for distinction average might track both: WAM 70+ and GPA 3.0+.',
      'Pair with the Uni GPA calculator to verify semester inputs and with the distinction average calculator for merit benchmarks.',
    ],
  },
];

const GRADE_CONVERTER_LEGACY: GuideSection[] = [
  {
    heading: 'Converting Uni Marks, Grades, and GPA',
    paragraphs: [
      'Uni coursework uses percentage marks mapped to letter grades with official GPA values. This converter lets you move between mark, letter, and GPA on the 4.0 scale — useful when a form asks for a different field than your transcript shows.',
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
      'Understanding why fail counts as 0.3, not 0.0, on Uni records.',
    ],
    paragraphs: [
      'For overall course performance, use the Uni GPA or WAM calculators — this tool handles single-value conversion, not cumulative averages.',
    ],
  },
];

const SUPP_REPEAT_LEGACY: GuideSection[] = [
  {
    heading: 'Supplementary vs Repeat at Uni',
    paragraphs: [
      'When you fail a unit, Uni may offer a supplementary assessment. Passing at 50% replaces the fail mark in WAM for that unit without adding extra credit points. Repeating the unit adds a second attempt — and under normal rules both the fail and repeat marks can count toward WAM, increasing total credit points.',
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
      'Check supp eligibility on official Uni channels.',
      'Read our supplementary exam WAM guide and repeat unit guide.',
    ],
  },
];

const WAM_PROJECTION_LEGACY: GuideSection[] = [
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
      'Label estimated marks clearly — only confirmed transcript marks belong in official planning documents. Update projections after every results release. For a full walkthrough with worked examples, read the WAM projection guide.',
    ],
  },
];

export const CALCULATOR_GUIDE_EXPANSIONS_PART1: Record<string, CalculatorPageGuideData> = {
  '/uni-distinction-average-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This tool checks whether your WAM or official 4.0 GPA meets the distinction average floor — WAM 70+ or GPA 3.0+. It shows your gap to each threshold so you know if you already qualify or how many points you still need.',
        'Distinction average is a course-wide standing label, not a grade on one unit. A student with 79 WAM on FIT1045 but 68 overall WAM does not hold distinction average until the cumulative figure crosses 70.',
      ],
      bullets: [
        'Enter WAM from WES or the main WAM calculator.',
        'Optionally enter official 4.0 GPA — either metric can qualify you.',
        'Negative gap means you are already above the distinction floor.',
      ],
      table: {
        headers: ['Metric', 'Distinction floor', 'Example qualifies?'],
        rows: [
          ['WAM 72.4', '70', 'Yes — 2.4 points above'],
          ['WAM 69.8', '70', 'No — 0.2 points below'],
          ['GPA 3.05', '3.0', 'Yes — meets GPA pathway'],
          ['GPA 2.92', '3.0', 'No — below GPA pathway'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'The calculator reads your WAM and GPA inputs independently. WAM gap = 70 − your WAM. GPA gap = 3.0 − your GPA. You qualify if either WAM ≥ 70 or GPA ≥ 3.0 on Uni official scale.',
        'Because Uni recognises two pathways, a student at WAM 68 but GPA 3.02 still meets distinction average through the GPA route — common when marks cluster at the top of Distinction bands.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'Dual pathway rule',
          text: 'Uni distinction average can be satisfied by WAM 70+ OR GPA 3.0+. You do not need both.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Run this check after each results release when merit scholarships, dean\'s commendation, or internship applications reference distinction average. It is a quick status check — not a target planner.',
        'If you are below 70 WAM and need to know what marks to aim for on remaining units, switch to the WAM target calculator after confirming your gap here.',
      ],
      bullets: [
        'Scholarship renewal letters citing "distinction average".',
        'Resume or LinkedIn standing before graduate recruitment season.',
        'Comparing WAM vs GPA qualification when only one metric looks borderline.',
      ],
    },
    steps: [
      'Export or note your cumulative WAM from WES (Academic Record).',
      'If available, note your official cumulative GPA to three decimals on the same screen.',
      'Enter WAM in the first field — use the full decimal (e.g. 69.847, not rounded 70).',
      'Enter GPA in the second field if you track it; leave blank if you only have WAM.',
      'Read the status card: qualifies, gap to WAM 70, gap to GPA 3.0.',
      'If below both thresholds, open the WAM target calculator with your credit point plan.',
    ],
    examples: [
      {
        title: 'Already qualifies on WAM alone',
        paragraphs: [
          'Priya completed 120 cp with WAM 71.2 on WES. She leaves GPA blank. Gap to WAM 70 shows −1.2 (already above). Status: qualifies via WAM pathway.',
        ],
        table: {
          headers: ['Input', 'Value'],
          rows: [
            ['WAM', '71.2'],
            ['GPA', '(not entered)'],
            ['Qualifies?', 'Yes — WAM ≥ 70'],
          ],
        },
      },
      {
        title: 'Borderline WAM but GPA saves standing',
        paragraphs: [
          'James has WAM 69.4 but official GPA 3.012. His marks sit high in each Distinction band, lifting GPA above 3.0 even though WAM is fractionally below 70. He qualifies through GPA.',
        ],
      },
      {
        title: 'Below both — needs 1.3 WAM points',
        paragraphs: [
          'Chen at WAM 68.7 and GPA 2.88 fails both pathways. WAM gap = +1.3. With 48 cp remaining, he needs roughly 71.6 average on future units — use WAM target for exact figure.',
        ],
      },
      {
        title: 'Strong HD average — well above floor',
        paragraphs: [
          'Aisha at WAM 84.1 and GPA 3.72 shows negative gaps on both metrics. Distinction average is secure; she might target dean\'s list bands instead.',
        ],
        table: {
          headers: ['Metric', 'Gap'],
          rows: [
            ['WAM gap', '−14.1'],
            ['GPA gap', '−0.72'],
          ],
        },
      },
      {
        title: 'First-year with only GPA visible',
        paragraphs: [
          'Tom\'s WES shows GPA 2.95 after 48 cp but WAM display is pending a faculty adjustment. Entering GPA 2.95 shows gap +0.05 — he is one strong semester from distinction average on the GPA route.',
        ],
      },
    ],
    mistakes: {
      paragraphs: ['Students often treat one Distinction unit as proof of distinction average, or round WAM up prematurely.'],
      bullets: [
        'Using simple average of unit percentages instead of official WAM from WES.',
        'Rounding 69.6 to 70 and assuming qualification before results are final.',
        'Ignoring the GPA pathway when WAM sits at 69.x but GPA is 3.0+.',
        'Confusing distinction average (course standing) with a D grade on one subject.',
      ],
      callout: {
        variant: 'warning',
        text: 'WES WAM includes year-level weighting (Year 1 at 0.5). Do not substitute a simple average from a spreadsheet.',
      },
    },
    tips: {
      bullets: [
        'Check both WAM and GPA after Semester 2 results — one may cross 70/3.0 first.',
        'If WAM is 68–69, prioritise high-credit core units where a few marks matter most.',
        'Pair with scholarship WAM calculator when merit awards need higher than 70.',
        'Document your WES snapshot date when submitting standing to employers.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Distinction average criteria appear in Uni grading schema and faculty merit policies. Award year and course code can change wording — verify on official Uni policy pages.',
        'This site is independent of the university. Calculator output is planning guidance; WES is authoritative for formal submissions.',
      ],
      callout: {
        variant: 'tip',
        text: 'Some faculties issue Dean\'s Commendation certificates at distinction average — separate from dean\'s honours list percentile awards.',
      },
    },
    legacySections: DISTINCTION_AVERAGE_LEGACY,
  }),

  '/uni-scholarship-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This calculator shows the credit-weighted average you need on remaining units to reach merit WAM bands from 65 through 85. Each tier row answers: "If I want WAM X at graduation, what must I score on everything left?"',
        'Scholarship eligibility depends on award-specific rules — equity, faculty, domestic vs international, and application timing. The tier table is a maths planner, not a guarantee of any particular Uni scholarship.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'For each target tier T: required average = (T × (completed + remaining) − current WAM × completed) ÷ remaining. If the result exceeds 100%, the tier is marked not achievable on your current remaining load.',
        'Credit points must reflect realistic enrolment — count only units you will actually complete at Uni, excluding exchange SFR credit that carries no mark.',
      ],
      table: {
        headers: ['Variable', 'Meaning'],
        rows: [
          ['Current WAM', 'Cumulative WAM from WES today'],
          ['Completed CP', 'Credit points already on transcript'],
          ['Remaining CP', 'Planned Uni-graded units left'],
          ['Required avg.', 'Mark needed on all remaining units'],
        ],
      },
      callouts: [
        {
          variant: 'warning',
          title: 'Not eligibility confirmation',
          text: 'Meeting a tier mathematically does not mean you hold or will receive any specific scholarship.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use before applying for merit scholarships or negotiating renewal when your award letter cites WAM bands. Also useful when choosing whether to overload final-year electives for WAM recovery.',
      ],
      bullets: [
        'Uni Merit Scholarship planning (often high WAM bands).',
        'Faculty excellence awards referencing WAM 75–80+.',
        'Deciding if WAM 85 is realistic before committing to a heavy final-year load.',
      ],
    },
    steps: [
      'Confirm current WAM on WES to three decimals.',
      'Sum completed credit points from your academic record.',
      'Estimate remaining credit points until course completion (check handbook total).',
      'Enter all three values and review the tier table.',
      'Note tiers marked "not achievable" — those need more CP or a lower target.',
      'Cross-check distinction average (70) separately if your award uses that language.',
    ],
    examples: [
      {
        title: 'Second-year student targeting WAM 75',
        paragraphs: [
          'WAM 72, completed 96 cp, remaining 96 cp. For WAM 75: required = (75×192 − 72×96) ÷ 96 = 78%. Achievable with distinction-level final two years.',
        ],
        table: {
          headers: ['Tier', 'Required avg.'],
          rows: [
            ['65', '58%'],
            ['70', '68%'],
            ['75', '78%'],
            ['80', '88%'],
          ],
        },
      },
      {
        title: 'Final year — WAM 85 not achievable',
        paragraphs: [
          'WAM 74, completed 168 cp, remaining 24 cp. WAM 85 needs 134% on remaining units — not achievable. WAM 80 needs 94% — still very demanding on one semester.',
        ],
      },
      {
        title: 'Recovery from WAM 63',
        paragraphs: [
          'Completed 72 cp, remaining 120 cp. WAM 70 needs 74.2% on remaining load — tough but possible with consistent Credit and Distinction marks across three semesters.',
        ],
      },
      {
        title: 'High performer securing WAM 80',
        paragraphs: [
          'WAM 78.5, completed 144 cp, remaining 48 cp. WAM 80 needs 83.0% average — two semesters of low-80s HD marks.',
        ],
      },
      {
        title: 'International student — WAM 70 tier',
        paragraphs: [
          'WAM 68.2, completed 120 cp, remaining 72 cp. Distinction average (70) needs 71.3% on remaining units — aligns with many merit renewal floors.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Putting future exchange SFR credit in "remaining" without understanding it adds no WAM.',
        'Using degree total cp as "completed" when 24 cp are still in progress this semester.',
        'Assuming WAM 65 tier guarantees any scholarship — many merit awards start at 70+.',
        'Ignoring that high-credit units move required average more than 6 cp electives.',
      ],
    },
    tips: {
      paragraphs: ['Focus revision on 12 cp cores when the tier table shows a required average above your comfort zone.'],
      bullets: [
        'Apply early — some scholarships assess WAM at application date, not graduation.',
        'Read equity vs merit criteria; high WAM alone may not qualify equity awards.',
        'Save tier screenshots each semester to track whether targets are drifting.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Uni scholarships publish individual criteria on the scholarships website. Renewal conditions may differ from initial entry requirements.',
      ],
      bullets: [
        'Some awards use GPA or distinction average instead of raw WAM.',
        'Faculty-funded awards may have separate nomination processes.',
      ],
    },
    legacySections: SCHOLARSHIP_WAM_LEGACY,
  }),

  '/failed-unit-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Models how one failed unit affects your WAM under different recovery outcomes: keeping the fail mark, supplementary pass at 50%, or recovering to credit (65), distinction (75), or HD (85).',
        'Enter WAM with the fail already included — matching WES — plus total credit points and the failed unit\'s credit value and mark.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'The tool reverses out the failed unit\'s contribution, swaps in a scenario mark, and recalculates WAM. Formula: new WAM = (current WAM × total cp − fail mark × unit cp + scenario mark × unit cp) ÷ total cp.',
        'A 12 cp fail at 42 drags WAM more than a 6 cp fail at the same mark because credit weighting doubles the penalty.',
      ],
      callouts: [
        {
          variant: 'info',
          text: 'Supplementary pass at Uni is capped at 50% for WAM planning when you pass the supp assessment.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Run immediately after results release when you fail a unit and need to quantify the damage. Compare before choosing supp, repeat, or academic advice pathways.',
      ],
      bullets: [
        'After failing ACC1200, MAT1830, or another high-credit core.',
        'Before supplementary exam preparation to see WAM lift from 50%.',
        'When debating repeat vs supp — pair with supp-repeat calculator for full comparison.',
      ],
    },
    steps: [
      'Open WES and note cumulative WAM including the fail.',
      'Count total credit points on your transcript (completed units).',
      'Enter the failed unit credit points (usually 6 or 12).',
      'Enter the actual fail mark (e.g. 38, not blank).',
      'Review scenario rows: keep fail, supp 50, credit 65, distinction 75, HD 85.',
      'Note WAM delta for each scenario to inform faculty conversations.',
    ],
    examples: [
      {
        title: '6 cp fail at 44 — supp lifts WAM 0.8 points',
        paragraphs: [
          'WAM 71.0, total 120 cp, failed FIT1045 (6 cp) at 44. Keep fail: 71.0. Supp 50: 71.8 (+0.8). Credit 65: 72.9 (+1.9).',
        ],
        table: {
          headers: ['Scenario', 'New WAM', 'Delta'],
          rows: [
            ['Keep 44', '71.0', '0'],
            ['Supp 50', '71.8', '+0.8'],
            ['Credit 65', '72.9', '+1.9'],
          ],
        },
      },
      {
        title: '12 cp fail hurts twice as hard',
        paragraphs: [
          'Same 71.0 WAM on 120 cp but failed ACC2200 (12 cp) at 41. Supp 50: 72.6 (+1.6) — double the lift of a 6 cp fail because credit weighting doubles.',
        ],
      },
      {
        title: 'Low WAM student — fail at 28',
        paragraphs: [
          'WAM 58.3, total 96 cp, 6 cp fail at 28. Supp 50 raises WAM to 59.7 (+1.4). Distinction recovery (75) would need a repeat pathway — shows 60.8 (+2.5) if permitted.',
        ],
      },
      {
        title: 'Near distinction average after fail',
        paragraphs: [
          'WAM 69.1, total 144 cp, MAT1830 (6 cp) failed at 47. Supp 50 → 69.5. Credit 65 → 69.9 — still below 70; needs strong marks on remaining units too.',
        ],
      },
      {
        title: 'HD recovery scenario (repeat)',
        paragraphs: [
          'WAM 73.0, total 108 cp, 12 cp fail at 39. If repeat yields 85 (planning only): WAM 77.1 (+4.1). Supp 50 only reaches 74.2 (+1.2).',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Entering WAM before the fail is posted on WES.',
        'Using planned total cp instead of current transcript total.',
        'Assuming supp automatically removes the fail from transcript — mark becomes 50.',
        'Expecting credit 65 recovery without repeating when only supp was offered.',
      ],
      callout: {
        variant: 'warning',
        text: 'Repeat rules may count both attempts in WAM. Use the supp-repeat calculator when comparing those paths.',
      },
    },
    tips: {
      bullets: [
        'Prioritise supp preparation when the WAM delta from 50% protects scholarship renewal.',
        'Offset future fails by stacking HD marks on remaining 12 cp cores.',
        'Speak with Uni Connect within faculty deadlines for supp eligibility.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Failed units normally remain in WAM under Uni coursework rules. Faculty may offer supplementary assessment per unit policy — not guaranteed for every fail.',
      ],
    },
    legacySections: FAILED_UNIT_LEGACY,
  }),

  '/uni-deans-honours-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Maps your WAM against planning bands used for dean\'s honours list-style recognition: below distinction average, distinction (70–79), high distinction (80+), and competitive top-percentile (85+).',
        'Dean\'s honours list is a graduation excellence award — often percentile-based — not the same as an honours degree H1 classification.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Enter WAM only. The tool assigns a band label and explanatory text. No percentile calculation is performed — faculties select top performers within each graduating cohort using certified WAM at completion.',
        'Uni Business School publicly cites top 2% by WAM; other faculties use different selection logic. A fixed WAM like 85 does not guarantee selection in every faculty or year.',
      ],
      table: {
        headers: ['WAM band', 'Planning label'],
        rows: [
          ['Below 70', 'Below distinction average'],
          ['70 – 79.99', 'Distinction territory'],
          ['80 – 84.99', 'High distinction positioning'],
          ['85+', 'Competitive for top-percentile awards'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use in final year when comparing your standing to faculty excellence benchmarks before graduation. Helpful for resume planning — but list the award only after faculty confirmation.',
      ],
      bullets: [
        'Business students eyeing publicly documented top-2% dean\'s honours list.',
        'Any faculty where course awards reference distinction or high distinction WAM.',
        'Deciding whether to push from 79.x to 80+ for band boundary benefits.',
      ],
    },
    steps: [
      'Calculate official WAM with year-level weighting on the main WAM calculator.',
      'Enter the WAM figure here.',
      'Read the assigned planning band and narrative.',
      'If below target, open WAM target calculator with remaining cp.',
      'Read faculty-specific dean\'s honours list policy before claiming the award.',
      'Recalculate after final semester results are certified.',
    ],
    examples: [
      {
        title: 'WAM 76 — distinction band',
        paragraphs: ['Band: distinction territory (70–79). Commendation-style awards may be possible; top-percentile dean\'s list unlikely without further lift.'],
      },
      {
        title: 'WAM 81.3 — HD positioning',
        paragraphs: ['Band: high distinction (80+). Strong for course awards; may still miss top 2% in competitive Business cohorts.'],
      },
      {
        title: 'WAM 86.7 — competitive percentile',
        paragraphs: ['Band: competitive for top-percentile recognition. Still not a guarantee — cohort strength varies yearly.'],
      },
      {
        title: 'WAM 68.4 — below distinction',
        paragraphs: ['Below distinction average. Dean\'s list planning premature — focus on WAM 70 first via target calculator.'],
        table: {
          headers: ['Current', 'First milestone'],
          rows: [['68.4 WAM', '70 distinction average']],
        },
      },
      {
        title: 'Boundary case 79.95',
        paragraphs: ['Still H2A / distinction band for honours classification purposes. One strong 6 cp unit could push to 80+ HD territory.'],
      },
    ],
    mistakes: {
      bullets: [
        'Listing "Dean\'s Honours List" on a resume before faculty publishes recipients.',
        'Confusing dean\'s list with honours degree H1 (also 80+ WAM but different award).',
        'Assuming WAM 85 guarantees Business School top 2% — percentile floats.',
        'Including exchange host grades in WAM input.',
      ],
    },
    tips: {
      bullets: [
        'Push from 79.x to 80+ before final semester — band boundaries matter for some awards.',
        'Exclude SFR exchange credit from WAM calculations.',
        'Pair with scholarship WAM calculator when awards overlap merit tiers.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Graduation excellence awards use certified WAM at degree completion. Faculty websites describe selection methodology — verify before external reporting.',
      ],
      callout: {
        variant: 'info',
        text: 'Honours degree classifications (H1, H2A) use the honours calculator, not this dean\'s list planning tool.',
      },
    },
    legacySections: DEANS_HONOURS_LEGACY,
  }),

  '/uni-exchange-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Shows that outbound exchange credit approved as SFR (Satisfied Faculty Requirement) adds credit points toward your degree but does not change WAM. Host university marks stay off your Uni transcript.',
        'Also checks your Uni-graded WAM against a typical 60% exchange standing planning floor — faculty rules vary.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'WAM after exchange = current WAM (unchanged). Total cp after exchange = Uni completed cp + exchange cp approved as SFR.',
        'Exchange does not inject host percentages into WAM maths. Failed exchange without credit approval may appear as Fail — consult Uni Abroad.',
      ],
      callouts: [
        {
          variant: 'tip',
          text: 'Strong pre-exchange WAM still helps scholarship and honours applications even though exchange semester marks do not count.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Before applying to Uni Abroad when you wonder whether a semester in Singapore or Europe will boost WAM. It will not — but it advances degree completion.',
      ],
      bullets: [
        'Planning exchange in Year 2 with WAM 62 — check 60% floor guidance.',
        'Confirming WAM unchanged after return from NUS or Leeds.',
        'Explaining SFR entries to employers who ask about exchange grades.',
      ],
    },
    steps: [
      'Calculate WAM from Uni-graded units only.',
      'Enter completed Uni credit points.',
      'Enter planned exchange credit points (e.g. 24 cp one semester).',
      'Review: WAM unchanged, total cp increased.',
      'Check standing floor result against faculty exchange policy.',
      'After return, recalculate WAM — still Uni units only.',
    ],
    examples: [
      {
        title: '24 cp exchange semester',
        paragraphs: [
          'WAM 73.5, 96 Uni cp. Add 24 cp exchange SFR. WAM stays 73.5; total cp becomes 120. Degree progress advances without mark risk.',
        ],
        table: {
          headers: ['Metric', 'Before', 'After exchange'],
          rows: [
            ['WAM', '73.5', '73.5'],
            ['Total cp', '96', '120'],
          ],
        },
      },
      {
        title: 'WAM 58 — below 60 floor warning',
        paragraphs: ['Standing check may flag below typical 60% exchange eligibility floor. Confirm with Uni Abroad before applying.'],
      },
      {
        title: 'High WAM student — no WAM benefit abroad',
        paragraphs: ['WAM 82.0, adding 30 cp exchange. WAM remains 82.0. HD marks at host university do not appear on Uni record.'],
      },
      {
        title: 'Double semester abroad',
        paragraphs: ['48 cp exchange over two semesters. WAM unchanged; 48 cp toward 192 cp degree total.'],
      },
      {
        title: 'Post-return confusion',
        paragraphs: [
          'Student returns with host transcript showing 78% average. Uni WES shows SFR only — recalculated WAM identical to pre-departure 71.2.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Expecting host HD grades to lift WAM.',
        'Mixing exchange cp into WAM numerator.',
        'Assuming 60% floor applies identically in every faculty.',
        'Forgetting failed exchange units may not earn SFR credit.',
      ],
    },
    tips: {
      bullets: [
        'Build WAM before exchange if scholarships require Uni-graded performance.',
        'Keep unit outlines for credit approval.',
        'Use WAM projection on Uni units for post-return semesters only.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'SFR is Uni standard outcome for approved outbound exchange. Marks from partner institutions are not recorded as percentages on the Uni transcript.',
      ],
    },
    legacySections: EXCHANGE_WAM_LEGACY,
  }),

  '/uni-honours-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Converts your Uni honours course WAM into the official classification: H1 (80+), H2A (70–79.99), H2B (60–69.99), Pass (50–59.99), or below pass.',
        'Honours entry cut-offs are separate — faculties publish competitive WAM ranges for admission that differ from these final classification bands.',
      ],
      table: {
        headers: ['Classification', 'WAM range'],
        rows: [
          ['H1 First Class Honours', '80 – 100'],
          ['H2A Second Class Div. A', '70 – 79.99'],
          ['H2B Second Class Div. B', '60 – 69.99'],
          ['P Pass', '50 – 59.99'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'Enter cumulative WAM from your honours year (or projected WAM). The tool applies Uni official thresholds. H2A starts at 70.00 — not 75 as some generic calculators show. H1 starts at 80.00 exactly.',
        'Thesis-heavy honours years may weight units differently in official calculation — confirm in your course map if your faculty uses non-standard weighting.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Uni-specific thresholds',
          text: 'WAM 79.99 is H2A. WAM 80.00 is H1. Generic Australian honours calculators may use different cut-offs.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'During honours enrolment to track classification band. Before final thesis submission when WAM is near a boundary (69.x, 79.x).',
      ],
      bullets: [
        'Science honours after coursework semester results.',
        'Arts honours projecting thesis mark impact.',
        'Comparing current band to faculty entry competitive WAM published separately.',
      ],
    },
    steps: [
      'Calculate WAM with year-level weighting using the main WAM calculator.',
      'Include all honours-year graded units per faculty rules.',
      'Enter WAM here and read classification code.',
      'If near 79.5–80.0, model thesis/exam marks with WAM projection.',
      'Verify final classification on WES at course completion.',
    ],
    examples: [
      {
        title: 'WAM 77.2 → H2A',
        paragraphs: ['Second Class Honours Division A. 2.8 points below H1 threshold.'],
      },
      {
        title: 'WAM 80.0 → H1 boundary',
        paragraphs: ['Exactly at First Class Honours floor. WAM 79.99 would remain H2A.'],
        table: {
          headers: ['WAM', 'Class'],
          rows: [
            ['79.99', 'H2A'],
            ['80.00', 'H1'],
          ],
        },
      },
      {
        title: 'WAM 64.5 → H2B',
        paragraphs: ['Second Class Division B. Pass band starts at 50; honours pass without H grade below 50.'],
      },
      {
        title: 'WAM 83.6 → solid H1',
        paragraphs: ['First Class Honours with margin. Useful for HDR and employer reporting.'],
      },
      {
        title: 'WAM 52 → Pass band only',
        paragraphs: ['Pass (P) — no honours grade. Below 50 would not meet passing honours course average.'],
      },
    ],
    mistakes: {
      bullets: [
        'Using 75 as H2A floor (Uni uses 70).',
        'Mixing honours entry competitive WAM with final classification bands.',
        'Omitting year-level weighting when sourcing WAM from a simple spreadsheet.',
        'Assuming thesis grade weighting matches coursework 6 cp units without checking handbook.',
      ],
    },
    tips: {
      bullets: [
        'Target 80.0+ early in honours year — H1 is materially different from 79.x on transcripts.',
        'Model remaining coursework with WAM target calculator.',
        'Read faculty honours entry page separately from classification bands.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Uni honours course grades follow published WAM thresholds. Entry requirements are faculty-specific and may change annually.',
      ],
    },
    legacySections: HONOURS_LEGACY,
  }),

  '/uni-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Computes credit-weighted Uni official 4.0 GPA from your unit list. Enter letter grades or percentage marks — the tool maps to HD/D/C/P/N values and applies GPA = Σ(grade point × cp) ÷ Σ(cp).',
        'Shows whether your GPA meets distinction average (3.0+) alongside total grade points and credit count.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Uni fail (N) = 0.3 grade points, not 0.0. Withdrawn fail (WN) = 0.0. HD=4.0, D=3.0, C=2.0, P=1.0.',
        'A 12 cp HD contributes twice the grade points of a 6 cp Pass in the same calculation.',
      ],
      table: {
        headers: ['Grade', 'Mark range', 'GPA value'],
        rows: [
          ['HD', '80–100', '4.0'],
          ['D', '70–79', '3.0'],
          ['C', '60–69', '2.0'],
          ['P', '50–59', '1.0'],
          ['N', '0–49', '0.3'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'When a form requests GPA on 4.0 scale, or when comparing distinction average via GPA 3.0 pathway. Also for semester snapshots before rolling into CGPA.',
      ],
      bullets: [
        'US exchange application requiring 4.0 GPA.',
        'Checking if GPA pathway qualifies for distinction average when WAM is 69.x.',
        'Verifying manual GPA maths against WES.',
      ],
    },
    steps: [
      'List completed units with credit points from WES.',
      'Enter grade (letter or mark) for each unit row.',
      'Add or remove rows to match your transcript.',
      'Read Uni GPA to three decimals.',
      'Check distinction average flag (GPA 3.0+).',
      'Compare with WES official GPA before submitting externally.',
    ],
    examples: [
      {
        title: 'Three 6 cp units — mixed grades',
        paragraphs: [
          'FIT1045 HD (4.0), MAT1830 D (3.0), ENG1001 C (2.0). GPA = (24+18+12)/18 = 3.0 exactly — distinction average via GPA.',
        ],
        table: {
          headers: ['Unit', 'Grade', 'GP×cp'],
          rows: [
            ['FIT1045', 'HD', '24'],
            ['MAT1830', 'D', '18'],
            ['ENG1001', 'C', '12'],
          ],
        },
      },
      {
        title: 'Fail drags GPA — N = 0.3',
        paragraphs: ['ACC1200 N on 6 cp: contributes 1.8 grade points, not zero. Surprises students expecting 0.0 fail weighting.'],
      },
      {
        title: '12 cp HD vs 6 cp P mix',
        paragraphs: ['HD (12 cp) + P (6 cp): weighted GPA 3.33, not simple mean 2.5.'],
      },
      {
        title: 'All distinction semester',
        paragraphs: ['Four 6 cp units all D (3.0): semester GPA 3.0. Marks could range 70–79 WAM with same GPA.'],
      },
      {
        title: 'HD-heavy — GPA 3.667',
        paragraphs: ['HD+HD+D on 18 cp: (24+24+18)/18 = 3.667. Strong distinction average positioning.'],
      },
    ],
    mistakes: {
      bullets: [
        'Using 0.0 for fail instead of Uni 0.3.',
        'Simple-averaging grade points without credit weighting.',
        'Entering WAM percentage as GPA directly.',
        'Excluding failed units from the unit list.',
      ],
    },
    tips: {
      bullets: [
        'Enter marks — tool maps bands automatically.',
        'Roll semester result into CGPA calculator for cumulative tracking.',
        'Cross-check distinction average with WAM on distinction calculator.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Official GPA on WES rounds to three decimals. Grade values follow Uni grading schema procedure.',
      ],
    },
    legacySections: GPA_LEGACY,
  }),

  '/uni-cgpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Updates your cumulative GPA after adding a new semester. Enter prior CGPA, completed credit points, then this semester\'s units. Outputs semester GPA and new CGPA using Uni official grade values.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Semester GPA = Σ(grade point × cp) ÷ semester cp. New CGPA = (prior CGPA × prior cp + semester GPA × semester cp) ÷ (prior cp + semester cp).',
        'Large prior cp dampens semester swings — a HD semester after 144 cp moves CGPA less than after 48 cp.',
      ],
      callouts: [
        {
          variant: 'info',
          text: 'CGPA and cumulative GPA on Uni transcripts refer to the same 4.0 metric.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'After each results release to track cumulative standing. Before scholarship renewal when CGPA minimums apply.',
      ],
      bullets: [
        'Post Semester 1 results with 96 cp already completed.',
        'Modelling "what if I get all D this semester?" before exams.',
        'International forms asking for cumulative GPA out of 4.0.',
      ],
    },
    steps: [
      'Note prior CGPA and completed cp from WES.',
      'Enter new semester units with grades and cp.',
      'Read semester GPA and updated CGPA.',
      'Compare to distinction average 3.0 threshold.',
      'Save snapshot after official results — not projections.',
    ],
    examples: [
      {
        title: 'Strong semester lifts CGPA 2.75 → 2.90',
        paragraphs: [
          'Prior CGPA 2.75 on 96 cp. New semester HD+HD+D on 18 cp (SGPA 3.667). CGPA = (2.75×96 + 3.667×18)/114 ≈ 2.90.',
        ],
      },
      {
        title: 'Weak semester — CGPA drops slightly',
        paragraphs: ['CGPA 3.10 on 120 cp. Semester of all P (1.0) on 24 cp → new CGPA ≈ 2.93.'],
      },
      {
        title: 'First year — CGPA equals semester GPA',
        paragraphs: ['No prior cp. Semester GPA 3.333 is also CGPA 3.333.'],
      },
      {
        title: 'Fail in semester — N = 0.3 weighting',
        paragraphs: ['D+D+N on 18 cp: semester GPA ≈ 2.2. Prior 3.0 CGPA on 72 cp falls to ≈ 2.85.'],
        table: {
          headers: ['Unit', 'Grade', 'cp'],
          rows: [
            ['Unit A', 'D', '6'],
            ['Unit B', 'D', '6'],
            ['Unit C', 'N', '6'],
          ],
        },
      },
      {
        title: 'Path to distinction average CGPA 3.0',
        paragraphs: ['CGPA 2.88 on 108 cp, need 3.0. Requires ~3.6+ semester GPA on 24 cp — achievable with HD-heavy semester.'],
      },
    ],
    mistakes: {
      bullets: [
        'Using WAM instead of GPA in prior CGPA field.',
        'Double-counting in-progress units as completed.',
        'Forgetting fail = 0.3 not 0.0.',
        'Projecting CGPA before results are official on WES.',
      ],
    },
    tips: {
      bullets: [
        'Update after every results release.',
        'Use target GPA calculator for next semester goal setting.',
        'Malaysia campus: confirm local reporting with faculty.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Repeated units and withdrawn fails may adjust official CGPA differently — export academic record when precision matters.',
      ],
    },
    legacySections: CGPA_LEGACY,
  }),

  '/uni-target-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Calculates the semester GPA required on your next enrolment load to reach a cumulative GPA target. Inputs: current CGPA, completed cp, planned semester cp, goal GPA.',
        'Results above 4.0 mean the goal is impossible in one semester on Uni official scale.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Required semester GPA = (goal × (completed + semester) − current CGPA × completed) ÷ semester cp.',
        'Works in grade-point space — marks compress into bands, so required GPA 3.5 implies a mix of HD and D grades, not one exact percentage.',
      ],
    },
    whenToUse: {
      paragraphs: [
        'When scholarship renewal requires CGPA 3.0 and you need to know this semester\'s required standing. Pairs with semester GPA calculator to verify unit-level inputs.',
      ],
      bullets: [
        'CGPA 2.85 targeting 3.0 with 24 cp remaining this year.',
        'HDR application needing CGPA 3.2 minimum.',
        'Comparing GPA target vs WAM target for distinction average.',
      ],
    },
    steps: [
      'Enter current CGPA from WES.',
      'Enter completed credit points.',
      'Enter planned semester credit points.',
      'Enter goal CGPA (e.g. 3.0 for distinction average).',
      'Read required semester GPA.',
      'If above 4.0, extend timeline or lower target.',
    ],
    examples: [
      {
        title: 'Reach CGPA 3.0 from 2.85',
        paragraphs: ['CGPA 2.85, 96 cp done, 24 cp semester, goal 3.0. Required semester GPA ≈ 3.55 — mostly HD marks needed.'],
      },
      {
        title: 'Impossible in one semester',
        paragraphs: ['CGPA 2.0, 168 cp done, 24 cp left, goal 3.5. Required > 4.0 — not achievable; need multiple strong semesters earlier.'],
      },
      {
        title: 'Modest lift to 2.75',
        paragraphs: ['CGPA 2.60, 72 cp, 24 cp semester, goal 2.75. Required ≈ 3.05 — distinction-level semester.'],
      },
      {
        title: 'Final semester push',
        paragraphs: ['CGPA 2.95, 168 cp, 24 cp, goal 3.0. Required ≈ 3.35 — HD/D mix on last semester.'],
        table: {
          headers: ['Input', 'Value'],
          rows: [
            ['Current CGPA', '2.95'],
            ['Goal', '3.0'],
            ['Required SGPA', '~3.35'],
          ],
        },
      },
      {
        title: 'First semester target (no prior)',
        paragraphs: ['Completed 0 cp — required semester GPA equals goal CGPA directly. Goal 3.0 needs semester GPA 3.0.'],
      },
    ],
    mistakes: {
      bullets: [
        'Confusing semester GPA with cumulative goal.',
        'Using WAM 70 as GPA input without converting.',
        'Planning 12 cp semester when enrolling in 24 cp.',
        'Ignoring that GPA 4.0 cap makes some targets impossible in one term.',
      ],
    },
    tips: {
      bullets: [
        'Run pessimistic and optimistic semester scenarios.',
        'Cross-check with WAM target when faculty cites WAM 70+.',
        'Build unit list in Uni GPA calculator to verify semester GPA feasibility.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Distinction average is often GPA 3.0+ or WAM 70+. Track both if your award references either metric.',
      ],
    },
    legacySections: TARGET_GPA_LEGACY,
  }),

  '/uni-grade-converter': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Converts between Uni percentage mark, letter grade, and official 4.0 GPA value for a single result. Handles standard HD/D/C/P/N bands and notes special grades.',
        'Single-value tool — not for cumulative WAM or CGPA across multiple units.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Enter mark OR select grade — the tool maps using Uni published bands. HD 80–100 = 4.0, D 70–79 = 3.0, C 60–69 = 2.0, P 50–59 = 1.0, N 0–49 = 0.3.',
        'Boundary marks matter: 79 → D (3.0), 80 → HD (4.0). One point changes GPA step on forms.',
      ],
    },
    whenToUse: {
      paragraphs: [
        'Application form asks for GPA but you only have FIT2004 at 76%. Employer screening wants letter grade from a raw mark.',
      ],
      bullets: [
        'Visa or exchange paperwork with mixed field types.',
        'Understanding why fail = 0.3 on Uni scale.',
        'Pre-checking marks before bulk entry in GPA calculator.',
      ],
    },
    steps: [
      'Enter percentage mark (0–100) OR select letter grade.',
      'Read converted grade, mark band, and GPA value.',
      'For special grades (WN, NP), consult Uni grading schema.',
      'Use GPA calculator for multi-unit cumulative figures.',
    ],
    examples: [
      {
        title: '76% → D, GPA 3.0',
        paragraphs: ['Mid-Distinction mark maps to letter D and grade point 3.0.'],
        table: {
          headers: ['Mark', 'Grade', 'GPA'],
          rows: [['76', 'D', '3.0']],
        },
      },
      {
        title: '79 vs 80 boundary',
        paragraphs: ['79% → D (3.0). 80% → HD (4.0). Scholarship cut-offs at HD can hinge on this point.'],
      },
      {
        title: '48% fail — GPA 0.3',
        paragraphs: ['N grade, not 0.0. Explains why one fail does not zero out GPA entirely.'],
      },
      {
        title: '55% pass',
        paragraphs: ['P grade, GPA 1.0. Satisfies pass threshold, below credit.'],
      },
      {
        title: '92% high distinction',
        paragraphs: ['HD, GPA 4.0. Same GPA as 80% — band compression vs WAM detail.'],
      },
    ],
    mistakes: {
      bullets: [
        'Using this for degree-wide GPA instead of GPA calculator.',
        'Assuming fail = 0.0 like some US schools.',
        'Rounding 79.6 to 80 before conversion.',
        'Ignoring special grades with unique GPA values.',
      ],
    },
    tips: {
      bullets: [
        'Bookmark for quick form filling during application season.',
        'Pair with WAM calculator for cumulative performance.',
        'Note band on applications when mark is borderline.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Grade values follow Uni grading schema procedure. Policy updates can adjust special grade handling — verify on WES for official records.',
      ],
    },
    legacySections: GRADE_CONVERTER_LEGACY,
  }),

  '/supp-repeat-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Compares WAM after supplementary pass at 50% versus repeating the failed unit at a mark you choose. Shows breakeven repeat mark where repeat beats supp, accounting for both attempts counting in repeat scenario.',
        'Supp replaces fail mark without adding cp. Repeat adds second attempt cp with both marks typically in WAM.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Supp scenario: swap fail mark for 50 on same total cp. Repeat scenario: add repeat cp with new mark while fail remains — total cp increases, WAM recalculated over larger denominator.',
        'Breakeven repeat mark is where repeat WAM equals supp WAM — score above it to prefer repeat on maths alone.',
      ],
      callouts: [
        {
          variant: 'warning',
          text: 'Faculty progression, timetable, and fee rules matter as much as WAM maths. Maths alone does not choose your path.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'After failing a unit when both supp exam and repeat are realistic options. Especially for 12 cp cores where mark differences swing WAM materially.',
      ],
      bullets: [
        'Failed LAW2101 (12 cp) with supp offered.',
        'Deciding if repeating MAT1830 for 75+ beats capped 50.',
        'Quantifying WAM cost of carrying two attempts.',
      ],
    },
    steps: [
      'Enter current WAM with fail included.',
      'Enter total cp and failed unit cp.',
      'Enter fail mark.',
      'Enter expected repeat mark (if considering repeat).',
      'Compare supp WAM vs repeat WAM.',
      'Read breakeven mark and consult faculty advice.',
    ],
    examples: [
      {
        title: '6 cp fail — supp often wins',
        paragraphs: [
          'WAM 70, 120 cp total, 6 cp fail at 42. Supp 50 → WAM 70.4. Repeat at 65 with both attempts → WAM 69.8 (worse due to double counting). Breakeven repeat ≈ 72+.',
        ],
      },
      {
        title: '12 cp fail — repeat at 80 beats supp',
        paragraphs: [
          'WAM 68, 108 cp, 12 cp fail at 38. Supp: WAM 69.2. Repeat at 80: WAM 71.5. High repeat mark justifies repeat path.',
        ],
        table: {
          headers: ['Path', 'WAM'],
          rows: [
            ['Supp 50', '69.2'],
            ['Repeat 80', '71.5'],
          ],
        },
      },
      {
        title: 'Breakeven near distinction',
        paragraphs: ['WAM 69.5, repeat breakeven ~74. Below 74, take supp; above 74, repeat wins on WAM.'],
      },
      {
        title: 'Low repeat expectation',
        paragraphs: ['Expected repeat mark 55 — supp at 50 nearly identical WAM; supp saves time and double-count risk.'],
      },
      {
        title: 'Honours-bound student',
        paragraphs: [
          'WAM 76, 12 cp fail at 45. Supp → 76.5. Repeat at 85 → 78.2. Pursuing repeat if confident in distinction repeat performance.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Assuming repeat removes fail from WAM — both often count.',
        'Ignoring supp cap at 50 when comparing to repeat 65.',
        'Choosing repeat during exchange semester without timetable check.',
        'Using WAM excluding the fail as baseline.',
      ],
    },
    tips: {
      bullets: [
        'Take supp when breakeven repeat mark exceeds your realistic expectation.',
        'Use failed unit calculator first for scenario overview.',
        'Confirm repeat policy with faculty — some courses limit attempts.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Supplementary assessment availability follows unit and faculty rules. Repeat enrolment adds credit points and may affect progression timelines.',
      ],
    },
    legacySections: SUPP_REPEAT_LEGACY,
  }),

  '/wam-projection-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Projects cumulative WAM after adding planned units with estimated marks. Enter confirmed WAM, completed cp, then each upcoming unit with mark and credit points.',
        'What-if planner for enrolment and exam season — not official WES output.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Projected WAM = (current WAM × completed cp + Σ(projected mark × unit cp)) ÷ (completed cp + Σ projected cp).',
        'Early-degree projections move faster — 24 cp of HD when you only have 48 cp completed shifts WAM more than when 168 cp already count.',
      ],
    },
    whenToUse: {
      paragraphs: [
        'Before census date when choosing unit load. During exam period with conservative vs optimistic mark estimates. When comparing projection to honours or scholarship targets.',
      ],
      bullets: [
        'Final year: will three D units reach WAM 70?',
        'Semester 2 planning with one risky 12 cp core.',
        'Post-results update with confirmed marks replacing estimates.',
      ],
    },
    steps: [
      'Enter confirmed WAM and completed cp from WES.',
      'Add each planned unit: code optional, mark estimate, cp.',
      'Read projected WAM.',
      'Run conservative (credit-level) and optimistic (HD) scenarios.',
      'Compare to WAM target calculator goals.',
      'Update after official results replace estimates.',
    ],
    examples: [
      {
        title: 'Final semester — reach WAM 70',
        paragraphs: [
          'WAM 69.2, 168 cp done. Adding FIT4000 (12 cp) at 78 and ENG4001 (12 cp) at 72 → projected WAM ≈ 69.9. Still short — need higher estimates or prior lift.',
        ],
        table: {
          headers: ['Unit', 'Est. mark', 'cp'],
          rows: [
            ['FIT4000', '78', '12'],
            ['ENG4001', '72', '12'],
          ],
        },
      },
      {
        title: 'Early degree — HD semester swings WAM',
        paragraphs: ['WAM 65, 48 cp. Project four 6 cp units at 85 → projected WAM ≈ 71.3. Large relative jump with small completed base.'],
      },
      {
        title: 'One weak 12 cp core',
        paragraphs: ['WAM 74, 120 cp. Three units at 80, one ACC3200 at 58 (12 cp) → projected WAM ≈ 72.8. Single core drags disproportionately.'],
      },
      {
        title: 'Conservative vs optimistic',
        paragraphs: ['Same 96 cp base at WAM 68. Conservative (all 65): WAM → 67.2. Optimistic (all 80): WAM → 72.1.'],
      },
      {
        title: 'Honours entry modelling',
        paragraphs: [
          'WAM 77, 144 cp. Two honours prep units at 82 and 79 (12 cp each) → projected ≈ 77.6. Entry competitive bands vary — check faculty page.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Treating projected marks as confirmed on scholarship applications.',
        'Forgetting exchange SFR units add cp but no mark.',
        'Simple-averaging projected unit marks without cp weighting.',
        'Not updating after results — stale projections mislead.',
      ],
      callout: {
        variant: 'tip',
        text: 'Label scenarios "conservative" and "stretch" in your notes — only WES marks are official.',
      },
    },
    tips: {
      bullets: [
        'Run projection before census when drop decisions affect WAM path.',
        'Weight effort toward high-cp units in projection scenarios.',
        'Pair with WAM target to see required marks vs your estimates.',
      ],
    },
    uniNotes: {
      paragraphs: [
        'Official WAM on WES uses year-level weighting (Year 1 at 0.5). This projection tool typically uses credit-weighted marks — align inputs with how you sourced your current WAM.',
      ],
    },
    legacySections: WAM_PROJECTION_LEGACY,
  }),
};
