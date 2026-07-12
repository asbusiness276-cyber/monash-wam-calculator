import type { SectionEnhancement } from '../utils/enrichArticleContent';


export const articleEnrichmentsPart3: Record<string, SectionEnhancement[]> = {
  'monash-withdrawn-fail-wam-guide': [
    {
      facts: [
        {
          title: 'Withdrawn Fail (WN) basics',
          items: [
            'WN is recorded when a student withdraws after the census date without passing — distinct from early withdrawal (WDN).',
            'Treatment differs from a standard N fail for GPA and sometimes WAM calculations.',
            'Faculty progression rules may flag WN alongside academic standing reviews.',
            'Always read the grade code on WES — do not assume N-grade maths.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WN vs WDN vs N',
          items: [
            'WDN (withdrawn no academic penalty) — typically before deadlines that incur fail grades.',
            'N fail — attempted assessment with mark below 50.',
            'WN — late withdrawal that carries fail-level consequences on the transcript.',
            'Check faculty handbook for how each code affects GPA, WAM, and progression.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Grade codes compared (planning)',
          headers: ['Code', 'Typical meaning', 'Ask faculty about'],
          rows: [
            ['WDN', 'Withdrawn without fail', 'WAM/GPA inclusion'],
            ['WN', 'Withdrawn fail', 'GPA points & WAM weight'],
            ['N', 'Fail with mark 0–49', 'Standard fail maths'],
            ['P', 'Pass 50+', 'Normal inclusion'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WN and Monash GPA',
          items: [
            'WN often maps to low or fail-grade GPA points — similar impact to failing academically.',
            'CGPA can drop sharply when WN carries on a high-credit unit.',
            'Recovery requires strong subsequent semesters — both GPA and WAM.',
            'Verify GPA line on WES after WN certifies before updating CVs.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WN and Monash WAM',
          items: [
            'WAM treatment depends on published policy — some systems include WN with fail-level marks.',
            'Do not omit WN rows from personal WAM spreadsheets if WES includes them.',
            'Credit points on the WN unit still matter for weighted averages.',
            'Model scenarios with the WAM calculator using official mark fields from WES.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative WN on 6 cp unit (three other units averaging 75)',
          headers: ['Scenario', 'WN unit contribution', 'Approx. WAM shift'],
          rows: [
            ['Before WN', '—', '75.0 baseline'],
            ['WN as 0 mark', '0 × 6 cp', 'Large drop'],
            ['WN policy mark', 'Faculty-specific', 'Check WES row'],
            ['Recovery term', '75+ on 18 cp', 'Gradual lift'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Worked example reminders',
          items: [
            'A WN on 6 cp hurts less than WN on 12 cp core with the same grade treatment.',
            'Multiple WN rows compound progression risk faster than WAM alone suggests.',
            'Speak with faculty student services before re-enrolling in the same unit.',
            'Calendar advice appointments early in the next enrolment window.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Recovery after WN',
          items: [
            'Confirm academic standing requirements before loading next semester.',
            'Prioritise passing high-credit cores — avoid another withdrawal cycle.',
            'Consider repeat vs substitute pathways with faculty guidance.',
            'Recalculate WAM and GPA after every certified results release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WN misconceptions',
          items: [
            'Assuming WN disappears from GPA/WAM like a no-penalty withdrawal.',
            'Treating WN exactly like N without checking policy.',
            'Hiding WN on applications that request full academic history.',
            'Overloading next semester while standing is already at risk.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-wam-milestones-guide': [
    {
      facts: [
        {
          title: 'WAM milestones defined',
          items: [
            'Milestones are planning bands — pass, credit, distinction, HD — applied to your cumulative WAM.',
            'They translate abstract targets into yes/no checks against opportunities you care about.',
            'Milestones differ from honours cutoffs and employer percentile lists.',
            'Use certified WAM from WES as the input for milestone checks.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Five common planning bands',
          items: [
            '50+ — minimum pass / progression baseline.',
            '60+ — credit band — many continuing pathways.',
            '70+ — distinction average planning threshold.',
            '80+ — high distinction — competitive merit positioning.',
            'Custom bands — employer or scholarship specific (e.g. 75, 85).',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Milestone bands at Monash',
          headers: ['Milestone', 'WAM floor', 'Grade label'],
          rows: [
            ['Pass', '50', 'P'],
            ['Credit', '60', 'C'],
            ['Distinction', '70', 'D'],
            ['High distinction', '80', 'HD'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Checking which milestones you meet',
          items: [
            'Enter transcript marks into the Monash WAM calculator for cumulative WAM.',
            'Compare output to each milestone band sequentially.',
            'Note how far you sit above or below the next band — not just pass/fail the check.',
            'Re-run after every major results release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Required average on remaining units',
          items: [
            'WAM target formula shows what average you need on unfinished credit points.',
            'Closing a gap to 70 distinction may be impossible in one semester — model multi-term paths.',
            'High-credit remaining units dominate the required average maths.',
            'Pair milestones checker with WAM target calculator outputs.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Milestone gap illustration',
          headers: ['Current WAM', 'Target milestone', 'Gap', 'Typical action'],
          rows: [
            ['68.2', '70 distinction', '1.8 pts', 'Focus high-cp finals'],
            ['74.5', '80 HD', '5.5 pts', 'Multi-semester plan'],
            ['81.0', '80 HD', 'Met', 'Maintain; set stretch goals'],
            ['58.0', '60 credit', '2.0 pts', 'Secure progression first'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Milestones vs honours, scholarships, GPA',
          items: [
            'Honours may require distinction plus extra criteria — milestone 70 is necessary not sufficient.',
            'Scholarships can publish higher floors (e.g. 75 or 80) than generic distinction.',
            'GPA 3.0 milestone parallels WAM 70 but is not identical on every transcript.',
            'Keep separate checklists per opportunity type.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Semester planning with milestones',
          items: [
            'Set one milestone to secure (e.g. stay above 60) and one to chase (e.g. reach 70).',
            'Use semester WAM to judge term execution vs cumulative milestone position.',
            'Adjust study hours when milestone gap widens mid-semester.',
            'Celebrate crossing a milestone but recalculate before applications.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Milestone tool mistakes',
          items: [
            'Using semester average instead of cumulative WAM for milestone checks.',
            'Assuming milestone 70 guarantees honours or dean\'s list.',
            'Ignoring remaining credit weight when judging if a milestone is reachable.',
            'Checking milestones once per year instead of each results release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-distinction-average-guide': [
    {
      facts: [
        {
          title: 'Distinction average defined',
          items: [
            'At Monash, distinction average commonly means WAM of at least 70 or GPA of at least 3.0.',
            'Used in scholarship, honours, exchange, and faculty award language.',
            'It is a planning benchmark — always verify exact wording on the opportunity page.',
            'Sitting at 69.9 vs 70.1 matters for automated merit screens.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WAM 70+ vs GPA 3.0',
          items: [
            'WAM uses percentage marks — two students at 79 and 71 both map to distinction GPA band.',
            'WAM preserves that gap; GPA may look similar if both are 3.0.',
            'Lead with WAM when Monash forms ask for weighted average or distinction average.',
            'Use CGPA from transcript when the form explicitly requests GPA.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'How Monash checks distinction average',
          items: [
            'Certified cumulative WAM on academic record is the usual source of truth.',
            'Some faculties reference GPA or CGPA instead — read the specific policy.',
            'Exchange SFR credit typically does not add marks — average reflects Monash-graded units.',
            'Fails and WN rows can disqualify distinction even after recovery semesters.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Distinction average indicators',
          headers: ['Metric', 'Typical threshold', 'Where seen'],
          rows: [
            ['WAM', '≥ 70', 'Merit scholarships, exchange'],
            ['GPA 4.0', '≥ 3.0', 'Some faculty awards'],
            ['CGPA', '≥ 3.0', 'Renewal conditions'],
            ['Transcript label', 'Faculty-specific', 'Official verification'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Distinction vs HD, honours, dean\'s list',
          items: [
            'Distinction average (70+) is lower than typical HD planning (80+).',
            'Honours entry may require distinction plus prerequisites and availability.',
            'Dean\'s Honours List often uses percentile ranks above distinction.',
            'Do not merge these thresholds in one target number.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Gap to distinction example',
          items: [
            'At 68.4 WAM with 24 cp remaining, required average ≈ 76.8 on remaining load to finish at 70.',
            'Small gaps near 70 are often closable in one strong semester on moderate cp.',
            'Large gaps need multi-semester plans — not last-week cramming.',
            'Use WAM target calculator for exact required average.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Closing a gap to 70 (illustrative)',
          headers: ['Current WAM', 'Remaining cp', 'Required avg on remainder', 'Feasibility'],
          rows: [
            ['69.2', '12', '~71', 'Often one-term fix'],
            ['67.5', '36', '~74', 'Plan two terms'],
            ['65.0', '48', '~77', 'Stretch; protect progression'],
            ['72.0', '—', 'Met', 'Maintain buffer'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Reaching or maintaining distinction',
          items: [
            'Prioritise high-credit units with high final exam weights.',
            'Protect marks between 68–72 — small lifts cross the 70 threshold.',
            'After crossing 70, avoid risky overload that threatens a drop below distinction.',
            'Recalculate monthly during final year.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Distinction average mistakes',
          items: [
            'Claiming distinction at 69.5 WAM on forms requiring 70+.',
            'Using GPA 3.0 estimate while transcript WAM is below 70.',
            'Ignoring year-level weighting when comparing to peers.',
            'Assuming distinction guarantees scholarships or honours places.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-wam-target-guide': [
    {
      facts: [
        {
          title: 'What a WAM target is',
          items: [
            'A numeric goal (e.g. 75 WAM) tied to honours, scholarships, or personal benchmarks.',
            'Targets should be transcript-backed goals — not wishful projections without labels.',
            'Separate secure targets (progression) from competitive targets (merit).',
            'Write the gap in points from current certified WAM.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WAM target formula',
          items: [
            'Required avg = (Target × total cp − current weighted points) ÷ remaining cp.',
            'Include only remaining units with known or assumed credit points.',
            'If required average > 100, target is unreachable on remaining load — extend timeline.',
            'Run conservative, target, and stretch mark scenarios.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Target formula symbols',
          headers: ['Symbol', 'Meaning', 'Source'],
          rows: [
            ['Target', 'Desired cumulative WAM', 'Your goal'],
            ['total cp', 'Completed + remaining credits', 'WES + plan'],
            ['weighted pts', 'Σ(mark × cp × year weight)', 'Certified marks'],
            ['remaining cp', 'Future unit load', 'Handbook plan'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WES-first inputs',
          items: [
            'Export cumulative WAM and unit table before any target maths.',
            'Do not mix Malaysia campus marks into Melbourne targets without clarification.',
            'Mark projected units as projected in your spreadsheet.',
            'Refresh inputs after every results release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Worked target examples',
          items: [
            'Current 72 WAM targeting 75 with 30 cp left often needs ~82 average on remainder.',
            'Targeting 70 from 69 with 12 cp left may need only ~71 on the remaining semester.',
            'HD target 80 from mid-60s usually requires multi-year plan — validate feasibility early.',
            'Log examples in the WAM target calculator to avoid manual errors.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Target vs milestones vs GPA target',
          items: [
            'Milestones are band checks (60/70/80); targets can be any number (e.g. 73.5).',
            'GPA targets (3.5) need CGPA tools — convert carefully from WAM targets.',
            'Honours screens may use WAM targets; US apps may need GPA targets in parallel.',
            'Keep one source-of-truth spreadsheet for all metrics.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Planning tool map',
          headers: ['Need', 'Tool', 'Output'],
          rows: [
            ['Band check', 'Milestones', 'Pass/credit/D/HD flags'],
            ['Numeric goal', 'WAM target', 'Required average'],
            ['Term performance', 'Semester WAM', 'Single-period average'],
            ['What-if marks', 'WAM projection', 'Future cumulative WAM'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Semester planning after target known',
          items: [
            'Allocate revision weeks to units with highest cp × exam weight.',
            'Drop sunk-cost units mathematically below recoverable targets.',
            'Set monthly recalculation cadence — week 4, 8, 12 checkpoints.',
            'Adjust target if required average proves unrealistic before census deadlines.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WAM target mistakes',
          items: [
            'Setting targets without entering fails or WN in baseline WAM.',
            'Using simple mark average instead of credit-weighted maths.',
            'Ignoring year-level 0.5 weighting when comparing to official WAM targets.',
            'Publishing projected targets on forms as certified WAM.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-semester-wam-guide': [
    {
      facts: [
        {
          title: 'Semester WAM defined',
          items: [
            'Average of marks earned in one teaching period only — not cumulative degree WAM.',
            'Useful for judging whether a single term helped or hurt your overall trend.',
            'Calculated with same credit-weighting rules within that semester\'s units.',
            'WES may show semester summaries — verify against unit rows.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Semester vs cumulative on WES',
          items: [
            'Cumulative WAM includes all certified Monash-graded units to date.',
            'Semester WAM isolates one results release for narrative and planning.',
            'Strong semester WAM can offset a weak cumulative average in cover letters.',
            'Employers asking for “WAM” usually mean cumulative — clarify if unsure.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Semester vs cumulative comparison',
          headers: ['Metric', 'Scope', 'Typical use'],
          rows: [
            ['Semester WAM', 'One teaching period', 'Trend stories, term review'],
            ['Cumulative WAM', 'Whole degree to date', 'Applications, merit screens'],
            ['Semester GPA', 'Grade points in term', 'CGPA building blocks'],
            ['CGPA', 'All terms', 'Scholarship renewal'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'How to calculate semester WAM',
          items: [
            'List units completed that semester with marks and credit points.',
            'Sum mark × cp for the term; divide by sum of cp for the term.',
            'Exclude exchange SFR or incomplete units until certified.',
            'Use semester WAM calculator on this site to avoid arithmetic slips.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Strong vs weak semester example',
          items: [
            'Semester A: 82, 78, 74 on 6 cp each → semester WAM 78.',
            'Semester B: 58, 62, 90 on mixed cp → semester WAM skewed by fail.',
            'Cumulative WAM moves slowly if prior credit volume is large.',
            'Document turnaround semesters explicitly in grad applications.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative semester outcomes',
          headers: ['Semester', 'Unit marks (6 cp each)', 'Semester WAM'],
          rows: [
            ['Strong', '82, 78, 74', '78.0'],
            ['Weak', '58, 62, 55', '58.3'],
            ['Recovery', '76, 80, 72', '76.0'],
            ['Cumulative effect', 'Depends on prior cp', 'Use full calculator'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When semester WAM helps planning',
          items: [
            'Evaluating whether new study strategies worked this term.',
            'Explaining upward trend after a fail or WN recovery.',
            'Deciding if course load should drop next semester.',
            'Pair with cumulative WAM target before setting next-term goals.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Semester WAM mistakes',
          items: [
            'Submitting semester average on forms requesting cumulative WAM.',
            'Mixing units from two teaching periods in one semester calculation.',
            'Including projected marks before certification.',
            'Ignoring credit weight by simple-averaging three marks.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-wam-projection-guide': [
    {
      facts: [
        {
          title: 'WAM projection defined',
          items: [
            'Estimating future cumulative WAM using certified marks plus assumed future unit marks.',
            'Projections support planning — they are not transcript values.',
            'Label scenarios: conservative, expected, stretch.',
            'Update when official results replace projections.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Projection formula',
          items: [
            'Projected WAM = (current weighted points + Σ(projected mark × cp)) ÷ (current cp + future cp).',
            'Apply year-level multipliers if modelling official Monash WAM.',
            'Use realistic marks per unit — not blanket 90s on every future row.',
            'Sensitivity-test ±3 marks on high-credit futures.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Projection scenario labels',
          headers: ['Scenario', 'Mark assumption', 'Use case'],
          rows: [
            ['Conservative', 'Lower band per unit', 'Risk planning'],
            ['Expected', 'Recent performance trend', 'Default plan'],
            ['Stretch', 'Best realistic finals', 'Motivation ceiling'],
            ['Official', 'Certified only', 'Forms & submissions'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WES-first projection inputs',
          items: [
            'Start from certified unit table — never from memory.',
            'List remaining units with credit points from handbook plan.',
            'Remove units you are not definitely taking before projecting.',
            'Refresh after add/drop deadlines.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Conservative vs optimistic scenarios',
          items: [
            'Conservative: assume distinction floor on hard cores, credit on electives.',
            'Optimistic: assume HD on strongest subjects only — not every row.',
            'Compare spread between scenarios — wide spread means high uncertainty.',
            'Act on conservative case for progression-critical decisions.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Projection vs target vs semester WAM',
          items: [
            'Target tool: required average to hit a number.',
            'Projection tool: what you get if you enter assumed marks.',
            'Semester WAM: backward-looking for one term.',
            'Use all three — they answer different questions.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Tool selection guide',
          headers: ['Question', 'Tool', 'Direction'],
          rows: [
            ['What mark do I need?', 'WAM target', 'Backward'],
            ['What if I score X?', 'WAM projection', 'Forward'],
            ['How was this term?', 'Semester WAM', 'Historical'],
            ['Am I above 70?', 'Milestones', 'Band check'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Multi-semester projection',
          items: [
            'Roll projections semester by semester — update certified rows each release.',
            'Long-range HD targets need consistent distinction+ marks, not one miracle term.',
            'Model fails as zero-projection rows until retake plan exists.',
            'Export spreadsheet snapshots dated per results period.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Projection mistakes',
          items: [
            'Submitting projected WAM on official forms.',
            'Using one optimistic mark for every future unit.',
            'Forgetting year-level 0.5 weight on future Year 1 units.',
            'Never revisiting projections after mid-semester results.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'percentage-to-gpa-calculator-guide': [
    {
      facts: [
        {
          title: 'Percentage to GPA quick answer',
          items: [
            'Map percentage to grade band first, then assign GPA points for the scale requested (4.0 or 7.0).',
            'Monash WAM is percentage-based — conversion is for external forms, not replacing WAM.',
            'Transcript GPA beats estimated conversion when available.',
            'Document the band table used when comments are allowed.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: '4.0 vs 7.0 conversion paths',
          items: [
            '4.0 scale common for US applications and many international portals.',
            '7.0 scale common in Australian university contexts.',
            'Same percentage maps to different numeric scales — enter the scale the form specifies.',
            'Do not mix scales on one form field.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Monash-style percentage bands → GPA scales',
          headers: ['Percentage', 'Grade', 'GPA 4.0', 'GPA 7.0'],
          rows: [
            ['80–100', 'HD', '4.0', '7.0'],
            ['70–79', 'D', '3.0', '6.0'],
            ['60–69', 'C', '2.0', '5.0'],
            ['50–59', 'P', '1.0', '4.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Worked keyword examples',
          items: [
            '76% → distinction band → ~3.0 on 4.0 scale / ~6.0 on 7.0 scale (planning).',
            '83% → HD band → 4.0 / 7.0 respectively.',
            '64% → credit band → 2.0 / 5.0 respectively.',
            'Report exact percentage plus band estimate near boundaries (69.5, 79.8).',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Single percentage conversions (illustrative)',
          headers: ['Percentage', 'Band', '4.0 estimate', '7.0 estimate'],
          rows: [
            ['85', 'HD', '4.0', '7.0'],
            ['74', 'D', '3.0', '6.0'],
            ['66', 'C', '2.0', '5.0'],
            ['52', 'P', '1.0', '4.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When conversion misleads',
          items: [
            'Linear percentage÷100×4 ignores Monash band mapping.',
            'Fails and near-pass marks distort single-number shortcuts.',
            'Unit-by-unit official GPA differs from whole-degree percentage shortcuts.',
            'Prefer WAM on Australian applications when WAM is accepted.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Recommended calculator flow',
          items: [
            'Confirm WAM in Monash WAM calculator → map bands → use WAM to GPA tool.',
            'For Monash students, read monash wam to gpa conversion for policy nuance.',
            'Keep methodology sentence ready for application comment boxes.',
            'Update when new certified results change your percentage.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  '4-0-gpa-calculator-guide': [
    {
      facts: [
        {
          title: '4.0 GPA calculator purpose',
          items: [
            'Estimates US-style GPA from grades, percentages, or WAM using band tables.',
            'Useful when portals lack WAM fields but require 4.0 scale entries.',
            'Official transcript CGPA overrides calculator output when printed.',
            'State estimation method in comments when allowed.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: '4.0 GPA formula pattern',
          items: [
            'GPA = Σ(grade points × credit) ÷ Σ(credit) for graded units.',
            'Each letter grade maps to a point value on the 4.0 scale.',
            'Fails map to low points — do not omit failed units.',
            'Weighted by credit hours/points, not simple average of course GPAs.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Monash bands → 4.0 points',
          headers: ['Band', 'Mark range', 'GPA 4.0'],
          rows: [
            ['HD', '80–100', '4.0'],
            ['D', '70–79', '3.0'],
            ['C', '60–69', '2.0'],
            ['P', '50–59', '1.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WAM and percentage to 4.0',
          items: [
            'Map overall WAM to its Monash grade band, then read 4.0 points.',
            'Unit-level calculation is more accurate than whole-WAM shortcuts.',
            'Percentage 74 and WAM 74 both land in distinction → 3.0 planning estimate.',
            'Borderline marks need exact percentage in notes.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Input source → 4.0 workflow',
          headers: ['You have', 'Step 1', 'Step 2'],
          rows: [
            ['Transcript CGPA', 'Use printed value', 'Add WAM if space allows'],
            ['WAM only', 'Find band', 'Map to 4.0 points'],
            ['Unit marks', 'Grade each unit', 'Credit-weight GPA'],
            ['Percentage', 'Band map', '4.0 estimate'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Common 4.0 benchmarks',
          items: [
            '3.0 ≈ distinction / WAM 70+ planning band.',
            '3.5+ often cited for competitive US grad planning (varies by program).',
            '4.0 = HD band only if all units are HD — rare across full degree.',
            'Compare benchmarks to destination program pages, not social media.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  '7-0-scale-gpa-calculator-guide': [
    {
      facts: [
        {
          title: '7.0 scale GPA calculator',
          items: [
            'Australian contexts often reference 7.0 where 7 = high distinction equivalent.',
            'Maps Monash bands to 7, 6, 5, 4 points for planning estimates.',
            'Use when forms explicitly say “GPA out of 7.”',
            'Not interchangeable with 4.0 entries on the same field.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WAM to 7.0 examples',
          items: [
            'WAM 82 → HD → 7.0 planning estimate.',
            'WAM 75 → distinction → 6.0 estimate.',
            'WAM 63 → credit → 5.0 estimate.',
            'Include exact WAM when near band edges.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'WAM band → 7.0 GPA (planning)',
          headers: ['WAM', 'Band', 'GPA 7.0'],
          rows: [
            ['85', 'HD', '7.0'],
            ['72', 'D', '6.0'],
            ['65', 'C', '5.0'],
            ['55', 'P', '4.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: '4.0 to 7.0 conversion',
          items: [
            'No universal linear formula — use published equivalence tables.',
            'Rough planning: 4.0≈7.0, 3.0≈6.0, 2.0≈5.0 for band-aligned estimates.',
            'Destination universities may publish their own mapping — follow theirs.',
            'Disclose method when submitting estimates.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When Australian GPA matters',
          items: [
            'Domestic postgraduate coursework applications may cite 7.0 or WAM.',
            'Some scholarships reference “credit average” parallel to 5.0–6.0 bands.',
            'Employers in Australia more often ask for WAM — confirm field label.',
            'Keep Monash WAM visible when both metrics are accepted.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: '4.0 vs 7.0 planning alignment',
          headers: ['GPA 4.0', 'Typical band', 'GPA 7.0'],
          rows: [
            ['4.0', 'HD', '7.0'],
            ['3.0', 'D', '6.0'],
            ['2.0', 'C', '5.0'],
            ['1.0', 'P', '4.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'semester-gpa-calculator-guide': [
    {
      facts: [
        {
          title: 'Semester GPA calculator role',
          items: [
            'Computes grade-point average for one teaching period\'s units.',
            'Building block for CGPA when weighted across semesters.',
            'Differs from semester WAM — GPA uses letter band points, WAM uses percentages.',
            'Useful for judging term improvement after a weak cumulative CGPA.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Semester GPA vs CGPA',
          items: [
            'Semester GPA = one term; CGPA = cumulative across all graded terms.',
            'One strong semester GPA lifts CGPA slowly if prior volume is large.',
            'Scholarship renewals often reference CGPA, not single-semester spikes.',
            'Track both when repairing academic standing.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Term vs cumulative metrics',
          headers: ['Metric', 'Scope', 'Monash tool analogue'],
          rows: [
            ['Semester GPA', 'One term grade points', 'Semester GPA calculator'],
            ['CGPA', 'All terms', 'WES cumulative GPA'],
            ['Semester WAM', 'One term percentages', 'Semester WAM calculator'],
            ['WAM', 'Cumulative percentages', 'Monash WAM calculator'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Using the semester GPA calculator',
          items: [
            'Enter each unit letter grade (or band) and credit points for the term.',
            'Verify letter grades on WES after results certification.',
            'Exclude exchange SFR rows without grade points.',
            'Compare output to WES semester summary if displayed.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'SGPA for student planning',
          items: [
            'Set minimum semester GPA goal when CGPA renewal is at risk.',
            'Pair with semester WAM to see both percentage and band performance.',
            'Document turnaround terms for applications referencing upward trend.',
            'Recalculate CGPA after locking semester GPA inputs.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative semester GPA (6 cp units)',
          headers: ['Unit grades', 'Points (4.0 scale)', 'Semester GPA'],
          rows: [
            ['HD, D, D', '4, 3, 3', '3.33'],
            ['D, C, C', '3, 2, 2', '2.33'],
            ['HD, HD, D', '4, 4, 3', '3.67'],
            ['Mix with fail', 'Includes fail points', 'Drops sharply'],
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'gpa-to-cgpa-calculator-guide': [
    {
      facts: [
        {
          title: 'GPA to CGPA calculator',
          items: [
            'Combines semester GPAs (or unit rows) into cumulative grade-point average.',
            'Weighted by credit points each term — not simple average of semester GPAs.',
            'Matches WES cumulative GPA when inputs are complete and certified.',
            'Use for scholarship renewal and postgraduate form planning.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Worked CGPA example',
          items: [
            'Term 1: GPA 3.0 on 24 cp; Term 2: GPA 3.5 on 24 cp → CGPA 3.25 (equal load).',
            'Unequal credit loads require weighting each term\'s points contribution.',
            'Fails in any term drag CGPA disproportionately.',
            'Validate against WES after entering all certified terms.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Two-term CGPA illustration (equal 24 cp)',
          headers: ['Term', 'GPA', 'Credits', 'Points contribution'],
          rows: [
            ['1', '3.0', '24', '72'],
            ['2', '3.5', '24', '84'],
            ['CGPA', '—', '48', '156 ÷ 48 = 3.25'],
            ['Note', '—', '—', 'Weight by cp always'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Inputs you need',
          items: [
            'Per-unit letter grades and credit points — most accurate path.',
            'Or semester GPA plus semester credit total per term.',
            'Exclude ungraded or pending units until certified.',
            'Use official transcript rows as single source of truth.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'CGPA planning for targets',
          items: [
            'Set CGPA renewal floor (e.g. 3.0) alongside WAM distinction target.',
            'Model required semester GPA to lift cumulative to target.',
            'High-credit future terms offer more CGPA leverage.',
            'Read monash cgpa explained guide for Monash-specific nuances.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'CGPA target planning',
          headers: ['Current CGPA', 'Terms left', 'Typical action'],
          rows: [
            ['2.8', '2', 'Need 3.4+ semesters'],
            ['3.1', '4', 'Maintain 3.0+ buffer'],
            ['3.6', '1', 'Protect with 3.5+ term'],
            ['Below 2.0', 'Any', 'Seek faculty advice early'],
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'atar-to-gpa-wam-conversion-guide': [
    {
      facts: [
        {
          title: 'Can you convert ATAR to GPA or WAM?',
          items: [
            'No official formula links Year 12 ATAR to university WAM — they measure different stages.',
            'Indicative tables exist for rough planning only — not for transcript substitution.',
            'Once enrolled, WAM and GPA come only from unit results.',
            'Stop referencing ATAR on applications after first-year university results exist.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Why ATAR and WAM differ',
          items: [
            'ATAR ranks school performance for entry; WAM averages tertiary unit marks.',
            'Scaling and subject mix affect ATAR — not comparable to credit-weighted WAM.',
            'A high ATAR does not guarantee distinction WAM without university study skills.',
            'A lower ATAR student can achieve strong WAM with effective term habits.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'ATAR vs WAM at a glance',
          headers: ['Dimension', 'ATAR', 'WAM'],
          rows: [
            ['Stage', 'Year 12 entry', 'University units'],
            ['Scale', '0–99.95 rank', '0–100 percentage avg'],
            ['Weighting', 'Subject scaling', 'Credit points × year level'],
            ['Use after enrolment', 'Legacy context only', 'Primary performance metric'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Indicative planning bands',
          items: [
            'Some guides map ATAR 90+ to “strong starting potential” — not a WAM prediction.',
            'First-year WAM depends on unit difficulty, load, and assessment skills.',
            'Use semester WAM after first results instead of ATAR extrapolation.',
            'Scholarships after enrolment use university WAM/GPA, not ATAR alone.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When to stop using ATAR',
          items: [
            'After one completed university semester — cite WAM or GPA instead.',
            'Internship and graduate forms want tertiary transcripts, not ATAR.',
            'Postgraduate applications never substitute ATAR for WAM.',
            'Keep ATAR on CV only for entry scholarships or first-year roles if relevant.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'What to report by stage',
          headers: ['Stage', 'Lead with', 'Retire'],
          rows: [
            ['First-year uni', 'WAM after semester 1', 'ATAR unless asked'],
            ['Penultimate', 'Cumulative WAM', 'ATAR except rare CV lines'],
            ['Graduate jobs', 'WAM + degree', 'ATAR'],
            ['Postgraduate', 'WAM/CGPA', 'ATAR'],
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],
};
