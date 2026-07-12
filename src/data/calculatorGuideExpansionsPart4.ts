import type { CalculatorPageGuideData } from './calculatorPageGuides';
import { buildStandardCalculatorGuide } from '../utils/calculatorGuideBuilder';

const LEGACY_40_TO_70 = [
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
];

const LEGACY_70_TO_40 = [
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
];

const LEGACY_SEMESTER_GPA = [
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
];

const LEGACY_GPA_TO_CGPA = [
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
];

const LEGACY_CGPA_TO_GPA = [
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
];

const LEGACY_40_GPA = [
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
];

const LEGACY_GPA_CALCULATOR = [
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
];

const LEGACY_ATAR = [
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
];

const LEGACY_HIGH_SCHOOL_GPA = [
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
];

const LEGACY_10_POINT = [
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
];

export const CALCULATOR_GUIDE_EXPANSIONS_PART4: Record<string, CalculatorPageGuideData> = {
  '/4-0-to-7-0-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This converter translates a GPA figure on the 4.0 scale into the equivalent Australian 7.0 scale using Monash official grade-band alignment — not a linear multiplier. A Distinction on 4.0 (3.0) becomes 6.0 on 7.0; High Distinction (4.0) becomes 7.0.',
        'Monash students use it when HDR applications, scholarship comparison tables, or exchange paperwork ask for 7-point GPA while WES shows 4.0 CGPA. The output preserves your standing tier rather than inventing fractional 7-point values that do not appear on Australian transcripts.',
      ],
      bullets: [
        'Band-accurate: HD↔7.0, D↔6.0, C↔5.0, P↔4.0, Fail↔0.',
        'Accepts decimals like 3.2 — maps to the nearest Monash band threshold.',
        'Companion table shows every standard band in both scales.',
      ],
      table: {
        headers: ['Use case', 'Start with', 'Tool output'],
        rows: [
          ['Australian HDR form', 'WES CGPA 3.42', '6.0 on 7.0 (Distinction band)'],
          ['Scholarship comparison site', 'Semester GPA 3.8', '7.0 on 7.0 (HD band)'],
          ['LinkedIn profile draft', 'Overall 2.6', '5.0 on 7.0 (Credit band)'],
        ],
      },
    },
    howItWorks: {
      paragraphs: [
        'The calculator reads your 4.0 input, identifies which Monash letter-grade band it falls into using published thresholds (3.5+ → HD, 2.5–3.49 → D, 1.5–2.49 → C, 0.5–1.49 → P, below 0.5 → Fail), then returns the paired 7.0 grade point for that band.',
        'Mid-band values like 3.2 still map to Distinction (6.0) because Monash reports discrete grade tiers, not continuous 7-point decimals on coursework transcripts. That is intentional — it matches how admissions officers read Australian results.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Do not multiply by 1.75',
          text: 'A 4.0 GPA of 3.0 × 1.75 = 5.25, which is not a valid Monash 7.0 grade point. Band mapping always yields whole-step values: 3.0 → 6.0.',
        },
      ],
      table: {
        headers: ['4.0 input range', 'Monash grade', '7.0 output'],
        rows: [
          ['3.5 – 4.0', 'HD', '7.0'],
          ['2.5 – 3.49', 'D', '6.0'],
          ['1.5 – 2.49', 'C', '5.0'],
          ['0.5 – 1.49', 'P', '4.0'],
          ['Below 0.5', 'N', '0.0'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Reach for this tool when you already hold a 4.0 GPA figure and the reader expects 7.0 — common for domestic Australian postgrad brochures, some Monash scholarship FAQs, and cross-university league tables.',
        'Skip it when you only have percentage WAM; convert WAM to 4.0 GPA first, then run this converter. Also skip it when the form explicitly wants Monash CGPA on 4.0 — converting twice adds confusion.',
      ],
      bullets: [
        'HDR and research program applications listing 7-point entry averages.',
        'Comparing your Monash CGPA to a friend at a university that publishes 7.0 only.',
        'Drafting CV lines for Australian employers who reference 7-point scale norms.',
      ],
    },
    steps: [
      'Open WES or your semester GPA calculator and note your 4.0 GPA to at least one decimal.',
      'Enter that value in the 4.0 GPA field — stay within 0.0 to 4.0.',
      'Read the converted 7.0 figure and the grade label shown beside it.',
      'Cross-check the reference table at the bottom of the tool for your exact band.',
      'Label both numbers when pasting into forms: "CGPA 3.0/4.0 (equivalent 6.0/7.0 Australian scale)".',
    ],
    examples: [
      {
        title: 'Distinction CGPA for 7-point HDR form',
        paragraphs: [
          'Priya\'s WES shows cumulative GPA 3.0 on 144 cp. A Melbourne research program asks for "minimum 6.0/7.0". Enter 3.0 → output 6.0, Distinction band. She attaches Monash grading scale documentation alongside WES.',
        ],
      },
      {
        title: 'High Distinction semester snapshot',
        paragraphs: [
          'Semester GPA 3.85 from four HD units maps to HD band (≥ 3.5). Converter returns 7.0 — appropriate when a summer research bursary form requests 7-point semester GPA.',
        ],
        table: {
          headers: ['Unit', 'Grade', '4.0 GP', 'Credits'],
          rows: [
            ['BIO2041', 'HD', '4.0', '6'],
            ['BIO2042', 'HD', '4.0', '6'],
            ['ATS1367', 'HD', '4.0', '6'],
            ['SCI2010', 'HD', '4.0', '6'],
          ],
        },
      },
      {
        title: 'Credit-average student planning exchange',
        paragraphs: [
          'CGPA 2.3 sits in Credit band (1.5–2.49). Converter outputs 5.0 on 7.0. Exchange minimum often cites WAM 60+ — he pairs this with WAM calculator to confirm percentage standing.',
        ],
      },
      {
        title: 'Borderline Distinction at 3.4',
        paragraphs: [
          'A GPA of 3.4 is below the 3.5 HD threshold but above 2.5, so it remains Distinction → 6.0 on 7.0, not 6.5 or 7.0. Students near 3.5 should not round up on official forms.',
        ],
      },
      {
        title: 'Pass-level recovery semester',
        paragraphs: [
          'After a difficult semester SGPA 1.2 (Pass band), conversion yields 4.0 on 7.0 — the Pass tier on the Australian scale, not a fail. Useful when explaining recovery progress to a mentor familiar with 7-point norms.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Multiplying 4.0 GPA by 1.75 and reporting the decimal result as "official 7.0 GPA".',
        'Rounding 3.49 up to 3.5 to claim HD / 7.0 when WES still shows Distinction.',
        'Converting WAM percentage directly without first mapping to 4.0 grade points.',
        'Using US community-college 4.0 values that include A+ at 4.3 — Monash caps HD at 4.0.',
      ],
      callout: {
        variant: 'tip',
        title: 'Pair with reverse converter',
        text: 'After editing a 7.0 draft, run the 7.0 to 4.0 calculator to confirm round-trip consistency before submitting.',
      },
    },
    tips: {
      bullets: [
        'Screenshot the band table when attaching evidence to international applications.',
        'If your CGPA is exactly 3.0, you meet Monash distinction average on GPA — note both 3.0/4.0 and 6.0/7.0.',
        'For employers, lead with WAM percentage if available — it carries more detail than either GPA scale.',
        'Update conversions after each results release; one HD semester can shift band thresholds on cumulative figures.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash coursework transcripts display official GPA on the 4.0 scale. The 7.0 conversion reflects standard Australian grade-band equivalence used for comparison — not a separate Monash metric stored on WES.',
        'Honours classifications and faculty awards reference WAM bands and policy documents, not converted 7-point GPA alone.',
      ],
      callout: {
        variant: 'info',
        text: 'Always cite WES as the authoritative source. This converter supports planning and third-party forms; it does not replace Monash academic records.',
      },
    },
    legacySections: LEGACY_40_TO_70,
  }),

  '/7-0-to-4-0-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This tool converts Australian 7-point GPA figures into the US-style 4.0 scale using Monash grade-band pairing: 7→4, 6→3, 5→2, 4→1, 0→0. It answers the common US grad-school prompt "enter GPA on 4.0 scale" when your mental model is Monash or Australian 7-point results.',
        'Unlike dividing by 7 and multiplying by 4, band mapping keeps Pass (4.0/7) aligned with Pass (1.0/4) — a linear formula would misstate Pass as roughly 2.3/4.',
      ],
      bullets: [
        'Designed for outbound applications: US masters, Canadian professional programs, LinkedIn.',
        'Handles mid-band decimals (6.2 → Distinction → 3.0/4).',
        'Shows grade label so you report honestly, not optimistically.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Input is classified against Monash 7.0 thresholds: 6.5+ HD, 5.5–6.49 D, 4.5–5.49 C, 3.5–4.49 P, below 3.5 Fail. The matched band\'s 4.0 grade point is returned.',
        'Cumulative 7-point figures on other universities\' transcripts may use different rounding — when Monash WES shows 4.0 CGPA, prefer that figure and skip manual 7-point conversion entirely.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'WES is authoritative for Monash',
          text: 'If your Monash transcript lists CGPA 3.125 on 4.0, report that directly. Use this tool when you only have a 7-point estimate from a comparison table.',
        },
      ],
      table: {
        headers: ['7.0 input', 'Band', '4.0 output', 'Typical WAM'],
        rows: [
          ['7.0', 'HD', '4.0', '80%+'],
          ['6.0', 'D', '3.0', '70–79%'],
          ['5.0', 'C', '2.0', '60–69%'],
          ['4.0', 'P', '1.0', '50–59%'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use before completing Common App graduate sections, Fulbright forms, or US employer background checks that hard-code 4.0 scale fields.',
        'Avoid when your Monash WES already exports 4.0 CGPA — duplicate conversion can introduce inconsistency if thresholds differ slightly from your input source.',
      ],
      bullets: [
        'US MBA and STEM masters applications.',
        'Dual-degree LinkedIn profiles targeting US recruiters.',
        'Translating a friend\'s 7-point average for collaborative comparison with your Monash 4.0 CGPA.',
      ],
    },
    steps: [
      'Locate your 7-point GPA source — university transcript, offer letter, or prior conversion note.',
      'Type the value into the 7.0 GPA field (0.0–7.0).',
      'Record the 4.0 output and associated grade band from the results panel.',
      'Compare against the full band table displayed below the input.',
      'On the application, write "Converted from Australian 7-point scale per institution grading policy" if a comments box is available.',
    ],
    examples: [
      {
        title: 'US grad school minimum 3.0/4.0',
        paragraphs: [
          'Jamal holds 6.1/7.0 from another Go8 university. Band mapping → Distinction → 3.0/4.0. He meets the stated minimum and uploads Monash-compatible grading scale documentation.',
        ],
      },
      {
        title: 'Monash HD average expressed for Silicon Valley internship',
        paragraphs: [
          'Recruiter asks for "GPA / 4.0". Student with 7.0/7.0 equivalent standing enters 7.0 → 4.0. She also notes Monash HD = 80%+ WAM in cover letter for context.',
        ],
      },
      {
        title: 'Credit average study-abroad return',
        paragraphs: [
          'Exchange transcript shows 5.3/7.0. Converter maps to Credit → 2.0/4.0. US home institution uses its own transfer policy — this output is a planning starting point.',
        ],
      },
      {
        title: 'Partial GPA 6.75 — still Distinction',
        paragraphs: [
          '6.75 is below 6.5 HD threshold on 7.0 scale, so output is 3.0 not 4.0. Student avoids overstating to 4.0/4 on resume — verification would show mismatch.',
        ],
      },
      {
        title: 'Pass-level 4.2/7.0 for certification body',
        paragraphs: [
          'Professional cert requires "GPA above 1.0/4.0". Pass band 4.0–4.49 on 7.0 converts to 1.0/4.0 — qualifies, though student plans to raise standing before final submission.',
        ],
        table: {
          headers: ['Scale', 'Value', 'Band'],
          rows: [
            ['7.0', '4.2', 'Pass'],
            ['4.0', '1.0', 'Pass'],
          ],
        },
      },
    ],
    mistakes: {
      bullets: [
        'Using formula (7.0 GPA ÷ 7 × 4) — misaligns Pass and Credit tiers.',
        'Reporting 4.0/4 because "6.9 is basically 7" — HD requires ≥ 6.5 on 7-point band logic used here.',
        'Mixing semester 7-point GPA with cumulative 4.0 CGPA on the same form line.',
        'Ignoring Monash WES 4.0 line when it already satisfies the application.',
      ],
      callout: {
        variant: 'warning',
        title: 'Verification risk',
        text: 'US universities may request WES or Monash transcripts. Inflated 4.0 conversions are easily caught against official 4.0 CGPA.',
      },
    },
    tips: {
      bullets: [
        'Attach Monash grading scale PDF when applications allow supplementary documents.',
        'If between bands, report conservatively and explain in optional essay.',
        'Keep a spreadsheet of scale pairs you have submitted to avoid inconsistent re-reporting.',
        'After Monash results release, switch to WES 4.0 CGPA for all US forms — simpler and official.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash publishes cumulative GPA on the 4.0 scale in WES. This 7→4 converter assists when you encounter 7-point framing in external materials, not when reporting Monash results officially.',
        'Distinction average at Monash is GPA 3.0+ on 4.0 — equivalent to 6.0+ on 7.0 under band mapping.',
      ],
    },
    legacySections: LEGACY_70_TO_40,
  }),

  '/semester-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Semester GPA (SGPA) summarises one teaching period — Semester 1, Semester 2, or Summer — using Monash official 4.0 grade values weighted by credit points. It isolates recent performance from your cumulative CGPA, which can hide a strong recovery or a single bad term.',
        'Enter each unit\'s letter grade (HD, D, C, P, N) and credit points. The calculator returns SGPA to three decimals plus total grade points — matching the maths WES applies before rolling results into cumulative GPA.',
      ],
      bullets: [
        'Official Monash grade values including N = 0.3 (not zero).',
        'Credit-weighted: 12 cp HD counts double a 6 cp Pass.',
        'Flags distinction average when SGPA ≥ 3.0.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'For each unit: grade point × credit points = weighted points. SGPA = sum(weighted points) ÷ sum(credits). Monash uses HD=4.0, D=3.0, C=2.0, P=1.0, N=0.3, NP=0.7, NH=0.3, WN=0.0.',
        'A semester with mixed grades produces a blended SGPA — three HDs and one Pass on equal credits lands near 3.25, not 4.0.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Fail grade value',
          text: 'Monash N grade contributes 0.3 GPA points, not 0.0. Using zero in manual spreadsheets understates how much a fail still drags SGPA.',
        },
      ],
      table: {
        headers: ['Grade', 'GPA value', 'Mark range'],
        rows: [
          ['HD', '4.0', '80–100'],
          ['D', '3.0', '70–79'],
          ['C', '2.0', '60–69'],
          ['P', '1.0', '50–59'],
          ['N', '0.3', '0–49'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Calculate SGPA at results release to judge whether your study strategy worked, before cumulative CGPA absorbs the signal. Also use mid-semester with expected grades for scenario planning.',
        'Prefer semester WAM calculator when you think in raw percentages; use this tool when scholarships or forms cite semester GPA explicitly.',
      ],
      bullets: [
        'Dean\'s list or faculty merit awards referencing single-semester GPA.',
        'Comparing Semester 1 vs Semester 2 performance in the same calendar year.',
        'Feeding expected SGPA into the GPA to CGPA calculator for cumulative projections.',
      ],
    },
    steps: [
      'List every unit enrolled in the target teaching period — exclude prior semesters.',
      'Assign each unit its certified letter grade from WES (or best estimate for planning).',
      'Enter credit points exactly as listed (usually 6 or 12 at Monash).',
      'Add rows for all units; remove blank rows.',
      'Read SGPA and check distinction-average flag; export totals for CGPA merge if needed.',
    ],
    examples: [
      {
        title: 'Clean Distinction semester (18 cp)',
        paragraphs: [
          'FIT1045 D, FIT1050 D, MAT1830 HD — all 6 cp. Weighted: 18+18+24 = 60 ÷ 18 = 3.333 SGPA. Meets distinction average for the semester.',
        ],
        table: {
          headers: ['Unit', 'Grade', 'GP', 'Credits', 'Weighted'],
          rows: [
            ['FIT1045', 'D', '3.0', '6', '18'],
            ['FIT1050', 'D', '3.0', '6', '18'],
            ['MAT1830', 'HD', '4.0', '6', '24'],
          ],
        },
      },
      {
        title: 'HD-heavy semester with one Pass',
        paragraphs: [
          'Three HDs (6 cp) + one P (6 cp): (24+24+24+6) ÷ 24 = 3.25 SGPA. One Pass pulls a would-be 4.0 semester down noticeably.',
        ],
      },
      {
        title: 'Summer unit load (12 cp)',
        paragraphs: [
          'Single 12 cp unit graded C → SGPA 2.0 exactly. Light load means CGPA shift will be smaller than a full 24 cp semester.',
        ],
      },
      {
        title: 'Recovery after fail',
        paragraphs: [
          'ECC1000 N (0.3 × 6 = 1.8), plus two Ds: (1.8+18+18) ÷ 18 = 2.1 SGPA. Student models next term needing 3.0+ to lift CGPA via GPA-to-CGPA tool.',
        ],
      },
      {
        title: 'Double-weight core dragging result',
        paragraphs: [
          '12 cp C (24 points) + two 6 cp HDs (48 points): 72 ÷ 24 = 3.0 SGPA. High-credit core at Credit grade caps semester at Distinction floor despite two HDs.',
        ],
        table: {
          headers: ['Unit', 'Grade', 'Credits', 'Weighted GP'],
          rows: [
            ['LAW4323', 'C', '12', '24'],
            ['LAW4321', 'HD', '6', '24'],
            ['LAW4322', 'HD', '6', '24'],
          ],
        },
      },
    ],
    mistakes: {
      bullets: [
        'Including units from previous semesters in the same row set.',
        'Using N = 0.0 instead of Monash official 0.3.',
        'Averaging letter grades without credit weighting.',
        'Treating WAM percentage as GPA input without grade conversion.',
      ],
    },
    tips: {
      bullets: [
        'Run best-case and worst-case SGPA before exam period using projected grades.',
        'Prioritise high-credit units when SGPA is below target — they move the average fastest.',
        'Compare SGPA to semester WAM; large gaps indicate marks clustered at band edges.',
        'Archive each semester\'s SGPA in a tracker to show improvement trends to mentors.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'WES publishes semester and cumulative GPA after results certification. Withdrawn fails (WN) and incomplete grades follow faculty policy — confirm inclusion before manual SGPA.',
        'First-year students often see SGPA equal to CGPA until multiple semesters accumulate.',
      ],
      callout: {
        variant: 'info',
        text: 'Distinction average (GPA 3.0+) is a course-wide benchmark. One distinction semester helps but does not alone guarantee course distinction average.',
      },
    },
    legacySections: LEGACY_SEMESTER_GPA,
  }),

  '/gpa-to-cgpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This calculator merges your existing cumulative GPA (CGPA) with a new semester GPA using credit-weighted Monash maths. Enter prior CGPA, credit points completed, expected semester GPA, and semester credit load — it returns updated CGPA to three decimals.',
        'Mid-degree students use it to answer "if I score Distinction this semester, does my CGPA cross 3.0?" without rebuilding every unit row in a full CGPA spreadsheet.',
      ],
      bullets: [
        'Formula: (prior CGPA × prior cp + semester GPA × semester cp) ÷ total cp.',
        'Works with official Monash 4.0 grade values only.',
        'Supports scenario modelling before results release.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Prior grade points = prior CGPA × prior credits. Semester grade points = semester GPA × semester credits. New CGPA = (prior points + semester points) ÷ (prior credits + semester credits), rounded to three decimals.',
        'Heavy prior history dampens semester swings: 96 cp at 2.8 absorbs a 24 cp semester at 3.5 with only a +0.14 CGPA lift. Early-degree students see larger moves from the same semester performance.',
      ],
      table: {
        headers: ['Variable', 'Typical source'],
        rows: [
          ['Prior CGPA', 'WES cumulative GPA line'],
          ['Prior credits', 'Sum of completed coursework cp'],
          ['Semester GPA', 'Semester GPA calculator output'],
          ['Semester credits', 'Current enrolment cp total'],
        ],
      },
      callouts: [
        {
          variant: 'tip',
          title: 'Run three scenarios',
          text: 'Model Credit (2.0), Distinction (3.0), and HD (3.8+) semester GPAs before exams — range beats a single guess.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use after estimating semester GPA or when results are provisional. Essential for scholarship renewal panels that require CGPA 3.0+ and for tracking progress toward distinction average.',
        'Switch to Monash CGPA calculator when you want to enter individual unit rows instead of a precomputed semester GPA.',
      ],
      bullets: [
        'Pre-results "what if" planning each exam period.',
        'Checking whether one strong semester reaches merit scholarship threshold.',
        'Explaining CGPA trajectory to academic advisers with numeric evidence.',
      ],
    },
    steps: [
      'Export WES: note cumulative GPA and total completed credit points (coursework only).',
      'Calculate or estimate this semester\'s SGPA via semester GPA calculator.',
      'Count enrolled credit points for the current teaching period.',
      'Enter all four values and read updated CGPA.',
      'Repeat with alternate semester GPA assumptions to bracket outcomes.',
    ],
    examples: [
      {
        title: 'Mid-degree Distinction semester (legacy worked example)',
        paragraphs: [
          'Prior CGPA 2.8 on 96 cp + SGPA 3.5 on 24 cp → (268.8 + 84) ÷ 120 = 2.940. Still below distinction average but trending upward.',
        ],
      },
      {
        title: 'First-year first semester',
        paragraphs: [
          'No prior credits: CGPA equals SGPA. SGPA 3.667 on 24 cp → CGPA 3.667. Simplest case — no merge maths needed.',
        ],
      },
      {
        title: 'Crossing distinction average threshold',
        paragraphs: [
          'CGPA 2.95 on 72 cp needs SGPA ≥ 3.22 on 24 cp to reach 3.0 cumulative. Student targets solid Distinction semester, not bare Credit.',
        ],
        table: {
          headers: ['Scenario', 'Semester GPA', 'New CGPA'],
          rows: [
            ['Conservative', '3.0', '2.975'],
            ['Target', '3.3', '3.025'],
            ['Strong', '3.8', '3.125'],
          ],
        },
      },
      {
        title: 'Recovering from early fail',
        paragraphs: [
          'CGPA 2.1 on 48 cp after two rough semesters. Two HD semesters at 3.8 on 24 cp each: after first → 2.64; after second → 3.05. Recovery takes sustained performance, not one lucky term.',
        ],
      },
      {
        title: 'Light summer load impact',
        paragraphs: [
          'CGPA 3.2 on 120 cp + summer SGPA 4.0 on 6 cp → (384 + 24) ÷ 126 = 3.238. Small credit load barely moves cumulative figure.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Entering total degree cp instead of completed cp only.',
        'Using WAM percentage in the GPA field.',
        'Double-counting current semester units in both prior and semester fields.',
        'Expecting one HD semester to fix CGPA after three years of Credit grades.',
      ],
      callout: {
        variant: 'warning',
        text: 'Repeated units, grade replacement, and WN grades may adjust official CGPA differently — export WES after certification for binding figures.',
      },
    },
    tips: {
      bullets: [
        'Update the model within 24 hours of each results release.',
        'If CGPA goal is 3.0, work backwards to required semester GPA using the same formula.',
        'Pair with WAM projection when your faculty culture emphasises percentages.',
        'Save scenario screenshots for scholarship appeal documentation.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash WES CGPA uses official 4.0 grade values including N=0.3. This calculator assumes standard coursework weighting without honours thesis adjustments.',
        'Faculty progression and exclusion policies may reference both WAM and CGPA — confirm which metric your course handbook prioritises.',
      ],
    },
    legacySections: LEGACY_GPA_TO_CGPA,
  }),

  '/cgpa-to-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This page clarifies cumulative GPA (CGPA) terminology and converts between scale conventions. For Monash students, CGPA on a 4.0 scale is the same metric as cumulative GPA on WES — the tool echoes that figure or translates 10-point international CGPA into linear 4.0 equivalents for US forms.',
        'Toggle between 10-point and Monash 4.0 modes depending on whether you hold an Indian/European transcript or an Australian WES export.',
      ],
      bullets: [
        'Monash 4.0 mode: passthrough and terminology confirmation.',
        '10-point mode: linear CGPA ÷ 10 × 4 for indicative US GPA.',
        'Outputs three-decimal 4.0 GPA for form fields.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Monash 4.0 CGPA mode validates that your input already sits on the official scale — output matches input when within 0–4.',
        '10-point mode applies linear scaling: GPA₄ = (CGPA₁₀ ÷ 10) × 4. An 8.5/10 becomes 3.400/4. This is indicative; Monash band mapping may classify 85% as HD (4.0) rather than 3.4.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'Two valid interpretations',
          text: 'US forms often want linear 10→4 scaling. Monash admission planning may prefer percentage bands via the 10-point GPA to WAM calculator — use the right tool for each audience.',
        },
      ],
      table: {
        headers: ['Input scale', 'Example', 'Output 4.0', 'Method'],
        rows: [
          ['Monash 4.0 CGPA', '3.125', '3.125', 'Direct (same metric)'],
          ['10-point CGPA', '8.0', '3.200', 'Linear × 0.4'],
          ['10-point CGPA', '9.5', '3.800', 'Linear × 0.4'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use 10-point mode when drafting US applications with home-country CGPA. Use Monash 4.0 mode to double-check WES before employers request "GPA" without the "C" prefix.',
        'If you need Monash WAM bands from 10-point CGPA, switch to the dedicated 10-point GPA to WAM calculator instead.',
      ],
      bullets: [
        'International postgrad applicants comparing IIT/NIT CGPA to US cutoff lists.',
        'Monash students verifying CGPA equals cumulative GPA on cover letters.',
        'Employer forms with ambiguous "enter GPA" fields.',
      ],
    },
    steps: [
      'Identify whether your transcript uses 10-point or 4.0 CGPA.',
      'Select the matching scale tab in the calculator.',
      'Enter CGPA to two or three decimals.',
      'Read 4.0 GPA output and explanatory note below the result.',
      'For Monash band planning from 10-point scores, follow up with 10-point to WAM tool.',
    ],
    examples: [
      {
        title: 'Monash WES confirmation',
        paragraphs: [
          'WES shows CGPA 3.042. Monash 4.0 mode → output 3.042. Student writes "Cumulative GPA 3.042/4.0" on internship application — no conversion needed.',
        ],
      },
      {
        title: 'Indian 10-point to US draft',
        paragraphs: [
          'Home CGPA 8.75/10 → linear 3.500/4.0. US program cutoff 3.3 — likely competitive; student also prepares Monash band narrative via WAM tool (87.5% ≈ HD).',
        ],
      },
      {
        title: 'Borderline 7.0/10',
        paragraphs: [
          'CGPA 7.0 → 2.800/4.0 linear. Monash band view treats 70% as Distinction (3.0/4.0) — student discloses both interpretations in application addendum.',
        ],
        table: {
          headers: ['Method', '4.0 equivalent'],
          rows: [
            ['Linear', '2.800'],
            ['Monash band (70%)', '3.000'],
          ],
        },
      },
      {
        title: 'Strong 9.2/10 applicant',
        paragraphs: [
          'Linear 3.680/4.0. Percentage equivalent 92% sits firmly in HD band. Monash coursework transfer assessment still requires official documents.',
        ],
      },
      {
        title: 'Low 5.8/10 planning Monash entry',
        paragraphs: [
          'Linear 2.320/4.0; percentage 58% maps to Pass band. Student focuses on pathway programs rather than direct merit scholarships requiring distinction average.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Assuming CGPA always means 10-point scale — at Monash it means 4.0 cumulative.',
        'Applying linear 10→4 then claiming Monash HD without band check.',
        'Confusing semester GPA with CGPA on the same form line.',
        'Rounding 3.996 up to 4.0 when WES shows 3.996.',
      ],
    },
    tips: {
      bullets: [
        'Label scale explicitly: "CGPA 8.5/10 (linear US equivalent 3.4/4.0)".',
        'When both interpretations differ, provide percentage equivalent for clarity.',
        'Refresh after each semester — CGPA is cumulative, not static.',
        'Cross-link to Monash CGPA calculator for unit-level rebuilds.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'On Monash transcripts, CGPA and cumulative GPA refer to the same 4.0 coursework metric. There is no separate 10-point CGPA stored for standard domestic coursework.',
        'Credit transfer from 10-point systems is assessed by Monash admissions — linear calculator output is not a guarantee of recognised standing.',
      ],
    },
    legacySections: LEGACY_CGPA_TO_GPA,
  }),

  '/4-0-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This calculator computes credit-weighted GPA on Monash official 4.0 scale from a list of units. Enter letter grades (HD through WN) and credit points for any subset — one semester, a major sequence, or your full transcript export.',
        'Output includes GPA to three decimals, total grade points, and credit count — enough to mirror WES cumulative reporting or isolate a faculty merit calculation.',
      ],
      bullets: [
        'All official Monash grade codes: HD, D, C, P, NP, N, NH, WN.',
        'Highlights distinction average when GPA ≥ 3.0.',
        'Reference table embedded for grade value lookup.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Each unit contributes grade_value × credits to the numerator. GPA = Σ(grade value × cp) ÷ Σ(cp). A 12 cp HD (48 points) outweighs two 6 cp Pass units (12 points combined).',
        'Simple arithmetic mean of grade values — without credit weighting — can error by 0.3+ GPA points on typical Monash loads.',
      ],
      table: {
        headers: ['Grade', 'Value', 'Notes'],
        rows: [
          ['HD', '4.0', '80%+'],
          ['D', '3.0', '70–79%'],
          ['N', '0.3', 'Fail — not zero'],
          ['WN', '0.0', 'Withdrawn fail'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use when building GPA from scratch — spreadsheet cross-check, hypothetical semester, or verifying WES after a policy change. Prefer Monash CGPA calculator page when merging prior + semester via dedicated CGPA workflow.',
        'Also useful for computing GPA on a subset (e.g., Law units only) when a prize rules document excludes electives.',
      ],
      bullets: [
        'Validating WES after first fail or WN grade.',
        'Computing major-specific GPA for prize applications.',
        'Teaching peers the credit-weighting concept with live rows.',
      ],
    },
    steps: [
      'Add one row per unit with certified or projected grade.',
      'Enter credit points matching WES (6, 12, or other approved values).',
      'Remove empty rows; add rows for summer or multi-term loads as needed.',
      'Read GPA, total grade points, and distinction-average indicator.',
      'Compare to WES cumulative line — investigate discrepancies grade-by-grade.',
    ],
    examples: [
      {
        title: 'Equal 6 cp load — simple mean equals weighted',
        paragraphs: [
          'HD + D + C on 6 cp each: (24+18+12) ÷ 18 = 3.000. Rare case where simple average matches credit-weighted result.',
        ],
        table: {
          headers: ['Unit', 'Grade', 'Credits', 'Weighted'],
          rows: [
            ['ACC1100', 'HD', '6', '24'],
            ['ACC1200', 'D', '6', '18'],
            ['ETW1100', 'C', '6', '12'],
          ],
        },
      },
      {
        title: 'Mixed load — weighting changes outcome',
        paragraphs: [
          '12 cp HD + 6 cp P: (48+6) ÷ 18 = 3.000 weighted vs 2.500 simple mean of 4.0 and 1.0. Demonstrates why credit matters.',
        ],
      },
      {
        title: 'Fail impact with N = 0.3',
        paragraphs: [
          'Two HDs + one N on 6 cp each: (24+24+1.8) ÷ 18 = 2.767. Using N=0 would incorrectly show 2.667.',
        ],
      },
      {
        title: 'Full-time semester with 24 cp',
        paragraphs: [
          'Four units: HD, D, D, C on 6 cp → (24+18+18+12) ÷ 24 = 3.000 SGPA equivalent.',
        ],
      },
      {
        title: 'WN zeroes a slot',
        paragraphs: [
          '12 cp WN (0 points) + 12 cp HD (48 points): 48 ÷ 24 = 2.000 semester GPA. WN hurts more than N because WN = 0.0 grade points.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Using percentage marks instead of letter grades in the grade selector.',
        'Omitting a failed unit that WES still includes in GPA.',
        'Simple-averaging four grades when credits differ (6 vs 12 cp).',
        'Confusing this tool\'s output with 7.0 scale results.',
      ],
      callout: {
        variant: 'warning',
        title: 'Official source',
        text: 'WES GPA after certification supersedes any manual calculation — use this tool for planning and verification, not dispute resolution.',
      },
    },
    tips: {
      bullets: [
        'Duplicate the row set each semester to build a running CGPA spreadsheet.',
        'Sort units by credit descending to see which grades move GPA most.',
        'Model replacing one C with D to quantify improvement effort.',
        'Export totals to feed GPA-to-CGPA calculator without re-entering units.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash official GPA values are published in academic records policy. NP (0.7) and N (0.3) distinctions matter for accurate fail modelling.',
        'Some prizes and honours pathways reference WAM instead of GPA — confirm which metric your faculty uses before optimising the wrong number.',
      ],
    },
    legacySections: LEGACY_40_GPA,
  }),

  '/gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'A general-purpose Australian university GPA calculator defaulting to Monash official 4.0 grade values and credit weighting. Suitable for Monash students and as a benchmark for other Go8 universities with similar HD/D/C/P/N bands.',
        'Computes weighted GPA from any unit list, displays distinction-average status, and embeds the full Monash grade reference — bridging high-level "what is GPA?" questions and concrete semester maths.',
      ],
      bullets: [
        'Same engine as Monash-specific GPA tools — portable across calculator pages.',
        '4.0 output with three-decimal precision.',
        'Explains GPA vs WAM distinction in guide sections below.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'GPA compresses percentage performance into discrete grade points. Two students both at GPA 3.0 may have different WAMs if one scored 71s and another 78s — GPA hides intra-band detail by design.',
        'Calculation: sum(grade point × credit points) / sum(credit points). Monash maps HD=4, D=3, C=2, P=1, N=0.3.',
      ],
      callouts: [
        {
          variant: 'info',
          title: 'Not high school GPA',
          text: 'US high school weighted 5.0 scales use a different calculator on this site. University GPA and high school GPA should not be mixed on applications.',
        },
      ],
      table: {
        headers: ['Metric', 'Granularity', 'Typical Monash use'],
        rows: [
          ['WAM', 'Continuous %', 'Honours, dean\'s list, employers'],
          ['GPA 4.0', '5 bands + fail variants', 'Scholarships, US forms'],
          ['GPA 7.0', '5 bands (AU convention)', 'HDR comparisons, some grants'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Start here if you are new to GPA and need a trustworthy 4.0 computation without Monash-branded page context. Monash students can stay on this page or use the dedicated Monash GPA calculator — maths is identical.',
        'Move to scale converters when forms ask for 7.0 or when translating to WAM percentages.',
      ],
      bullets: [
        'First-year students learning credit-weighted averages.',
        'Cross-university study group comparing GPA with similar band structures.',
        'Quick GPA before specialisation applications citing 3.0+ cutoffs.',
      ],
    },
    steps: [
      'Gather unit grades and credit points from WES or unit guides.',
      'Add rows for each unit; select letter grade from dropdown.',
      'Confirm credit points — do not assume all units are 6 cp.',
      'Review GPA and distinction-average message.',
      'Follow related calculator links for CGPA merge or WAM conversion.',
    ],
    examples: [
      {
        title: 'Commerce first year (24 cp)',
        paragraphs: [
          'BTC1100 C, BTC1110 D, ETC1000 HD, MKF1120 D — all 6 cp. GPA = (12+18+24+18) ÷ 24 = 3.000. Meets distinction average on GPA metric.',
        ],
      },
      {
        title: 'Engineering with 12 cp design studio',
        paragraphs: [
          'ENG1001 P (6 cp), ENG1002 C (6 cp), ENG1003 D (12 cp): (6+12+36) ÷ 24 = 2.250. Large-credit unit at Pass drags GPA despite smaller units being acceptable.',
        ],
      },
      {
        title: 'Arts double major subset',
        paragraphs: [
          'Filtering ATS-coded units only: five units averaging D band → GPA ~3.0 for major prize eligibility check separate from overall CGPA.',
        ],
      },
      {
        title: 'Comparison with WAM',
        paragraphs: [
          'Student A: marks 71, 72, 73, 74 → WAM 72.5, GPA 3.0. Student B: marks 78, 78, 79, 79 → WAM 78.5, GPA 3.0. Same GPA, different WAM — explains scholarship panels using both metrics.',
        ],
      },
      {
        title: 'Pathway student after credit transfer',
        paragraphs: [
          'Advanced standing 24 cp at D average (3.0) plus 24 cp Monash at HD (4.0): (72+96) ÷ 48 = 3.500 GPA on combined list entered manually.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Applying US +/- grade increments (A− = 3.7) — Monash HD is flat 4.0.',
        'Ignoring credit weighting on mixed 6/12 cp loads.',
        'Reporting GPA without stating 4.0 scale maximum.',
        'Using high school weighted GPA values in university forms.',
      ],
    },
    tips: {
      bullets: [
        'Track both WAM and GPA each semester — faculties reference either.',
        'Use Monash CGPA calculator when prior cumulative figure is known.',
        'Read GPA conversion articles for faculty-specific prize rules.',
        'Set targets with Monash target GPA calculator after baseline computation.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Grade values follow Monash published coursework scale. Other Australian universities may assign slightly different points to Pass or fail — note your institution when comparing with peers.',
        'This site is independent of Monash University; WES remains the authoritative record for official GPA.',
      ],
    },
    legacySections: LEGACY_GPA_CALCULATOR,
  }),

  '/atar-to-gpa-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'This planning tool maps ATAR to indicative WAM and GPA bands — and works in reverse from WAM to estimated ATAR ranges. It does not apply an official UAC or Monash formula because none exists linking secondary rank to university grade point averages.',
        'Output groups entry-level benchmarks (e.g., ATAR 90–95 → WAM 80–84 planning band) so school leavers set realistic first-year goals before any Monash results exist.',
      ],
      bullets: [
        'Bidirectional: ATAR → WAM/GPA or WAM → ATAR range.',
        'Includes 4.0 and 7.0 GPA equivalents per band.',
        'Explicitly indicative — not predictive of individual outcomes.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Eight planning bands span ATAR 0–99.95 mapped to WAM ranges and paired GPA values. Example: ATAR 85–89.99 → WAM 75–79 → GPA 3.0/4.0 and 6.0/7.0 (Distinction band).',
        'Reverse mode finds the band containing your WAM and returns the associated ATAR range — useful for curiosity, not for claiming ATAR equivalence on official documents.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Not official policy',
          text: 'UAC does not publish ATAR↔WAM conversion. Monash employers and postgrad programs evaluate degree WAM/GPA, not Year 12 ATAR.',
        },
      ],
      table: {
        headers: ['ATAR band', 'Indicative WAM', 'GPA 4.0', 'Label'],
        rows: [
          ['95–99.95', '85–100', '4.0', 'Elite ATAR'],
          ['90–94.99', '80–84', '4.0', 'Very high ATAR'],
          ['85–89.99', '75–79', '3.0', 'Strong ATAR'],
          ['80–84.99', '70–74', '3.0', 'Solid ATAR'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use briefly before starting at Monash to frame first-semester expectations — then retire it once real WAM exists. Also useful for parents or mentors unfamiliar with university grading translating familiar ATAR into WAM language.',
        'Do not use for scholarship eligibility (merit awards use university WAM), employer applications, or official reporting.',
      ],
      bullets: [
        'Orientation week goal-setting conversations.',
        'Explaining to family why "ATAR 95" does not auto-equal "WAM 95".',
        'Rough curiosity check after first semester results.',
      ],
    },
    steps: [
      'Select ATAR → WAM/GPA or WAM → ATAR mode.',
      'Enter ATAR (0–99.95) or WAM (0–100) from your source.',
      'Read indicative band label, WAM range, and GPA equivalents.',
      'Set first-semester study targets using WAM calculator instead of this tool once enrolled.',
      'Replace all planning bands with certified WAM from WES after results release.',
    ],
    examples: [
      {
        title: 'School leaver ATAR 92',
        paragraphs: [
          'Falls in 90–94.99 band → indicative WAM 80–84, GPA 4.0/7.0 HD band. Student aims for WAM 75+ first semester rather than expecting 92 at university.',
        ],
      },
      {
        title: 'Moderate ATAR 76 still capable of distinction WAM',
        paragraphs: [
          'Band "Good ATAR" maps to WAM 65–69 initially — but many ATAR 76 students exceed 70 WAM by second year through consistent habits. Tool sets floor, not ceiling.',
        ],
      },
      {
        title: 'Reverse: WAM 72 after Semester 1',
        paragraphs: [
          'WAM 72 → Solid ATAR band (80–84.99 ATAR range) in reverse mode — illustrative only; student reports WAM 72 on resume, not fabricated ATAR.',
        ],
      },
      {
        title: 'Elite ATAR 98 expectations management',
        paragraphs: [
          'Band suggests WAM 85+ territory — first-year 0.5 level weighting and harder assessment styles mean even strong students often start mid-70s WAM.',
        ],
      },
      {
        title: 'Entry-level ATAR 65',
        paragraphs: [
          'Maps to WAM 50–59 Pass band planning. Student focuses on pass-to-credit progression using unit target calculators, not ATAR nostalgia.',
        ],
        table: {
          headers: ['Input', 'Indicative WAM', 'GPA band'],
          rows: [
            ['ATAR 65', '50–59', 'Pass (1.0/4.0)'],
          ],
        },
      },
    ],
    mistakes: {
      bullets: [
        'Listing converted WAM on CV as if derived from official UAC formula.',
        'Assuming high ATAR guarantees HD WAM without semester effort.',
        'Using ATAR bands after second year when WAM history exists.',
        'Confusing entry scholarships (ATAR-based) with merit awards (WAM-based).',
      ],
    },
    tips: {
      bullets: [
        'After first results, switch entirely to Monash WAM and GPA calculators.',
        'First-year units at 0.5 level weight affect official WAM — GPA tools may not mirror that nuance.',
        'Peer study groups should compare current WAM, not secondary school rank.',
        'Read pathways articles for transfer students without ATAR context.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash course entry cut-offs publish ATAR requirements separately each year — this tool does not replace VTAC/UAC course search.',
        'Not official Monash policy. Monash merit assessment after enrolment uses WAM, GPA, and distinction average — never ATAR conversion.',
      ],
      callout: {
        variant: 'info',
        text: 'Monash students should cite WES WAM and CGPA on all post-enrolment applications. ATAR belongs on school-leaver sections only where explicitly requested.',
      },
    },
    legacySections: LEGACY_ATAR,
  }),

  '/high-school-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Computes US-style high school GPA from course grades and credit weights, with optional +1.0 weighted bump for honours/AP-style rigour (capped at 5.0). Australian students more often hold ATAR — this tool serves dual citizens, US transfer applicants, and Monash students preparing US exchange or graduate school packets.',
        'Toggle unweighted (4.0 cap) vs weighted (5.0 cap) before interpreting results for Common App or NCAA eligibility contexts.',
      ],
      bullets: [
        'Letter-grade points: A=4.0 through F=0.0 with intermediate +/- values.',
        'Per-course credit weighting (typically 0.5–1.0 per semester course).',
        'Separate from Monash university GPA — different scale and purpose.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Unweighted: GPA = Σ(grade points × credits) ÷ Σ(credits), max 4.0 per course. Weighted: each course gets min(grade points + 1, 5) before the same weighted average — modelling common US honours/AP bumps.',
        'District policies vary (+0.5 vs +1.0, which courses qualify). Treat output as orientation; official transcripts from your registrar override calculator results.',
      ],
      table: {
        headers: ['Mode', 'A grade', 'AP/honours A', 'Scale max'],
        rows: [
          ['Unweighted', '4.0', '4.0', '4.0'],
          ['Weighted (+1)', '4.0', '5.0', '5.0'],
          ['Weighted (+1)', 'B (3.0)', '4.0', '5.0'],
        ],
      },
      callouts: [
        {
          variant: 'info',
          title: 'Monash entry unaffected',
          text: 'Monash undergraduate admission uses ATAR, IB, or diploma pathways — not US high school GPA. This tool supports outbound US applications, not Monash entry.',
        },
      ],
    },
    whenToUse: {
      paragraphs: [
        'Use when a US institution requests unweighted or weighted high school GPA and you need a draft before ordering official transcripts. Monash-enrolled students rarely need high school GPA except for US grad school or exchange applications referencing secondary performance.',
        'Switch to university GPA calculators once you have Monash WES results — post-secondary GPA matters more for most programs.',
      ],
      bullets: [
        'US undergraduate transfer applications while still in Year 12.',
        'Monash students applying to US summer programs citing HS performance.',
        'Comparing US cousin\'s GPA reporting format to your ATAR for family planning conversations.',
      ],
    },
    steps: [
      'Choose unweighted or weighted mode matching your target application guidance.',
      'Add one row per course with letter grade and credit weight.',
      'Include only grades that appear on official high school transcripts.',
      'Read computed GPA and note scale maximum (4.0 or 5.0).',
      'Order registrar-sealed transcripts before final submission — calculator is draft only.',
    ],
    examples: [
      {
        title: 'Standard unweighted senior year',
        paragraphs: [
          'Five courses: A, A−, B+, B, A with 1 credit each. Points: 4+3.7+3.3+3+4 = 18 ÷ 5 = 3.600 unweighted GPA.',
        ],
        table: {
          headers: ['Course', 'Grade', 'Points', 'Credits'],
          rows: [
            ['English', 'A', '4.0', '1'],
            ['Calculus', 'A−', '3.7', '1'],
            ['Chemistry', 'B+', '3.3', '1'],
            ['History', 'B', '3.0', '1'],
            ['PE', 'A', '4.0', '1'],
          ],
        },
      },
      {
        title: 'Weighted with two AP courses',
        paragraphs: [
          'Three standard + two AP As: unweighted 4.0 average; weighted uses 5.0 for AP rows → GPA above 4.0 on weighted scale.',
        ],
      },
      {
        title: 'Mixed B student unweighted',
        paragraphs: [
          'Six courses averaging B (3.0) → 3.000 unweighted. US state college minimums often near 2.5–3.0 — competitive schools want higher.',
        ],
      },
      {
        title: 'Credit-heavy semester',
        paragraphs: [
          'Two 1.0-credit courses at A and four 0.5-credit at B: (4+4+1.5×4) ÷ 4 = 3.500 — higher-credit As pull average up.',
        ],
      },
      {
        title: 'Monash student drafting US grad school supplement',
        paragraphs: [
          'HS weighted GPA 4.2/5.0 from junior year; Monash CGPA 3.4/4.0 from WES. Application receives both — HS GPA contextualises pre-university rigour only.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Submitting calculator GPA when application requires official registrar figure.',
        'Applying weighted bumps to standard courses not designated honours/AP.',
        'Confusing US high school 5.0 weighted with Australian 7.0 university scale.',
        'Using Monash unit grades in the high school GPA row format.',
      ],
    },
    tips: {
      bullets: [
        'Save both weighted and unweighted figures — colleges ask for different variants.',
        'After Monash enrolment, lead with WES CGPA on almost all forms.',
        'Check whether target US school recalculates GPA internally anyway.',
        'Keep PDF transcripts — calculator assumptions may not match school policy.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Not official Monash policy. Monash does not collect or store US high school GPA for standard domestic entry. International offices may review US transcripts holistically without a single GPA cutoff.',
        'Once enrolled, Monash students should use WAM and official CGPA for all Monash-related merit, honours, and employment reporting.',
      ],
    },
    legacySections: LEGACY_HIGH_SCHOOL_GPA,
  }),

  '/10-point-gpa-to-wam-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'Translates 10-point CGPA (common in India, parts of Europe, and Asia-Pacific partner institutions) into indicative Monash WAM percentage bands and paired 4.0/7.0 GPA values. Method: multiply CGPA by 10 for percentage equivalent, then map to HD/D/C/P/N bands.',
        'International applicants and Monash students returning from exchange use it to estimate where home-university performance sits against Monash distinction average (WAM 70+) before formal credit assessment completes.',
      ],
      bullets: [
        'Input 0.0–10.0 CGPA with one decimal precision.',
        'Shows WAM band range, grade label, and both GPA scales.',
        'Reference table for integer 10-point steps included in tool.',
      ],
    },
    howItWorks: {
      paragraphs: [
        'Core formula: estimated % = CGPA₁₀ × 10. An 8.5 → 85% → Distinction/HD border band (80–89% zone depending on exact mark mapping). Grade bands follow Monash standard cutoffs: HD 80+, D 70–79, C 60–69, P 50–59.',
        'Home institutions may compress or inflate grades differently — linear ×10 assumption is planning-only until Monash admissions confirms converted marks on your Australian transcript.',
      ],
      callouts: [
        {
          variant: 'warning',
          title: 'Not a credit decision',
          text: 'Monash makes final advanced standing and grade recognition decisions from certified documents. Calculator bands do not guarantee credit or GPA transfer.',
        },
      ],
      table: {
        headers: ['10-pt CGPA', 'Est. %', 'Monash grade', '4.0 GP'],
        rows: [
          ['9.0', '90%', 'HD', '4.0'],
          ['8.5', '85%', 'HD', '4.0'],
          ['7.5', '75%', 'D', '3.0'],
          ['6.2', '62%', 'C', '2.0'],
        ],
      },
    },
    whenToUse: {
      paragraphs: [
        'Use when holding a 10-point transcript and needing Monash WAM language for self-assessment, scholarship drafting, or conversation with course advisers. Pair with CGPA to GPA calculator for US linear 4.0 forms.',
        'Monash students without 10-point backgrounds can skip this tool — WES WAM is direct.',
      ],
      bullets: [
        'Indian postgrad applicants comparing 8.x CGPA to Monash distinction average.',
        'Exchange returnees merging overseas 10-point results with Monash planning.',
        'Estimating WAM targets before starting at Clayton or Caulfield campus.',
      ],
    },
    steps: [
      'Locate cumulative CGPA on home institution transcript (10-point scale).',
      'Enter value in the calculator field.',
      'Read indicative WAM band, percentage equivalent, and GPA pairs.',
      'Compare band against Monash opportunity thresholds (e.g., WAM 70+ merit).',
      'Submit official transcripts to Monash for formal assessment — do not self-award converted grades.',
    ],
    examples: [
      {
        title: 'Strong Indian engineering CGPA 9.1',
        paragraphs: [
          '9.1 × 10 = 91% → HD band (80–100%). Planning GPA 4.0/4.0 and 7.0/7.0. Competitive for merit scholarships pending Monash verification.',
        ],
      },
      {
        title: 'Borderline distinction at 7.0/10',
        paragraphs: [
          '70% equivalent → Distinction band floor. Student targets WAM 75+ at Monash to buffer against assessment variance.',
        ],
      },
      {
        title: '7.9 vs 8.0 sensitivity',
        paragraphs: [
          '7.9 → 79% (Distinction, 3.0/4.0). 8.0 → 80% (HD, 4.0/4.0). One decimal can shift scholarship planning — use conservative estimate until Monash confirms.',
        ],
        table: {
          headers: ['CGPA', 'Est. %', 'Band shift'],
          rows: [
            ['7.9', '79%', 'Distinction'],
            ['8.0', '80%', 'HD'],
          ],
        },
      },
      {
        title: 'Credit-level 6.5/10',
        paragraphs: [
          '65% → Credit band (60–69%). Meets typical pass progression but below distinction average for competitive internal transfers.',
        ],
      },
      {
        title: 'Monash student comparing partner university',
        paragraphs: [
          'Exchange host reports 8.2/10. Maps to 82% HD band for personal tracking while awaiting Monash credit articulation on WES.',
        ],
      },
    ],
    mistakes: {
      bullets: [
        'Claiming Monash HD on CV from calculator output without WES certification.',
        'Using linear CGPA-to-GPA (÷10×4) when form actually wants Monash band narrative.',
        'Ignoring home institution grade inflation — 8.0/10 may not equal Monash 80% work.',
        'Confusing 10-point CGPA with Monash 4.0 CGPA on the same resume line.',
      ],
    },
    tips: {
      bullets: [
        'Provide percentage equivalent alongside 10-point CGPA on applications for clarity.',
        'Cross-check with CGPA to WAM calculator if you also hold 4.0-scale documents.',
        'After Monash enrolment, prioritise WES WAM over home-scale conversions.',
        'Read exchange and pathways articles for document submission timelines.',
      ],
    },
    monashNotes: {
      paragraphs: [
        'Monash credit transfer and admissions assess 10-point transcripts individually — this tool is not official Monash policy or a substitute for faculty assessment.',
        'Distinction average at Monash requires WAM 70+ or GPA 3.0+ on Monash coursework after enrolment; home CGPA conversion does not pre-qualify you.',
      ],
      callout: {
        variant: 'info',
        text: 'Once studying at Monash, WES WAM and CGPA replace all pre-enrolment 10-point estimates for official purposes.',
      },
    },
    legacySections: LEGACY_10_POINT,
  }),
};
