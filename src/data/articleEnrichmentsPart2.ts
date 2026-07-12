import type { SectionEnhancement } from '../utils/enrichArticleContent';


export const articleEnrichmentsPart2: Record<string, SectionEnhancement[]> = {
  'how-to-find-wam-on-monash-transcript': [
    {
      facts: [
        {
          title: 'Where WAM lives on Monash systems',
          items: [
            'WES (Web Enrolment System) is the fastest place to check cumulative WAM during your degree.',
            'Official academic records and transcripts are what employers and universities accept on forms.',
            'Student portal widgets may show GPA/WAM summaries — always cross-check against WES.',
            'Unit-level marks and credit points on WES are the inputs for hand-checking WAM maths.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WES navigation checklist',
          items: [
            'Log in via my.monash → WES → Academic Record or Unofficial Academic Record.',
            'Look for cumulative WAM, GPA, and credit points completed on the summary panel.',
            'Scroll unit rows to confirm each mark matches your expectations before exporting.',
            'Screenshot or PDF only for personal planning — submit official documents on applications.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'WES record fields students use for WAM checks',
          headers: ['Field', 'What it shows', 'Planning use'],
          rows: [
            ['Cumulative WAM', 'Credit-weighted average to date', 'Primary benchmark number'],
            ['GPA / CGPA', 'Grade-point average', 'Scholarship or US-form reporting'],
            ['Credit points', 'Load per unit', 'Weighting in WAM formula'],
            ['Unit mark', 'Percentage result', 'Verify calculator inputs'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Student portal GPA/WAM widget notes',
          items: [
            'Course Progress pages sometimes surface GPA and WAM without opening full WES.',
            'Widgets can lag immediately after results release — refresh after certification dates.',
            'Mobile views may truncate columns; use desktop WES for full unit history.',
            'If widget and WES disagree, trust the academic record export after 24–48 hours.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Official transcript essentials',
          items: [
            'Order through Monash student services or authorised digital providers for third parties.',
            'Transcripts list unit codes, marks, grades, credit points, and cumulative WAM when certified.',
            'Pending or NS units appear differently until finalised — do not submit mid-semester snapshots.',
            'Keep the PDF naming convention clear: include certification date in your filing system.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Document type vs typical use',
          headers: ['Document', 'Source', 'When to use'],
          rows: [
            ['Unofficial academic record', 'WES', 'Personal checks and calculator inputs'],
            ['Official transcript', 'Monash / digital vendor', 'Employers, universities, visas'],
            ['Statement of results', 'Results release', 'Interim planning only'],
            ['Completion letter', 'Graduation office', 'Proof of award after certification'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Beyond WAM on your record',
          items: [
            'SFR exchange credit shows pass/fail style outcomes without host marks in WAM.',
            'WN, N, and supplementary P grades each carry different GPA and WAM treatment.',
            'Repeated units may list both attempts — both typically remain visible historically.',
            'Year-level weighting (0.5 for Year 1) affects official WAM but not every hand calculation.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Pre-submission verification steps',
          items: [
            'Match form WAM field to transcript cumulative WAM to one decimal if the portal allows.',
            'If a form asks for GPA, use transcript CGPA when printed before estimating.',
            'Note Monash uses credit-weighted WAM in comments when free-text is permitted.',
            'Re-download WES after each major results release before lodging applications.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Common WAM lookup mistakes',
          items: [
            'Using a semester average instead of cumulative certified WAM on forms.',
            'Mixing Malaysia or partner-campus records with Melbourne WAM without clarification.',
            'Omitting fails or WN rows when hand-calculating to “see what WAM should be.”',
            'Submitting screenshots of planning calculators instead of transcript-backed figures.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-credit-points-wam-explained': [
    {
      facts: [
        {
          title: 'Credit points in the WAM formula',
          items: [
            'WAM = Σ(mark × credit points) ÷ Σ(credit points) — load scales each unit’s influence.',
            'Monash undergraduate units commonly carry 6 or 12 credit points per semester.',
            'A 12-credit core at 75 affects cumulative WAM roughly twice a 6-credit elective at 75.',
            'Always pair each mark with its credit value from WES before calculating.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: '6 cp vs 12 cp practical difference',
          items: [
            'Double-weight units dominate recovery maths when marks move by a few points.',
            'Students often over-invest in 6-credit breadth units while a 12-credit core slips.',
            'Timetable planning should flag 12-credit finals weeks before the semester starts.',
            'Credit load also affects full-time status — do not drop cp without checking enrolment rules.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Same mark, different credit weight',
          headers: ['Unit', 'Credits', 'Mark', 'Weighted points'],
          rows: [
            ['Core', '12', '80', '960'],
            ['Elective', '6', '80', '480'],
            ['Core', '12', '65', '780'],
            ['Elective', '6', '90', '540'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Worked example takeaway',
          items: [
            'Three units at 78 (6 cp), 72 (12 cp), 85 (6 cp) → WAM ≈ 75.0, not 78.3 simple average.',
            'Improving the 12-credit unit from 72 → 78 moves WAM more than perfecting a 6-credit breadth.',
            'Model scenarios in the Monash WAM calculator with true credit columns.',
            'Label projected units separately from certified transcript rows.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Year 1 half-weight interaction',
          items: [
            'Official Monash WAM applies 0.5 weighting to Year 1 level units in the formula.',
            'Hand calculators that ignore year level will diverge from WES cumulative WAM.',
            'Year 1 high marks still help progression even when official WAM moves slowly.',
            'See the Year 1 weighting guide when reconciling planning vs transcript WAM.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Year level multipliers (official WAM)',
          headers: ['Year level', 'Weight', 'Planning note'],
          rows: [
            ['Year 1', '0.5', 'Marks count at half strength in official WAM'],
            ['Year 2+', '1.0', 'Full credit-weighted contribution'],
            ['Mixed semester', 'Per unit', 'Apply multiplier per unit row'],
            ['Hand calc', 'Often 1.0', 'May overstate Year 1 impact'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Effort placement strategy',
          items: [
            'Map assessment weights and credit points together in week one of each semester.',
            'Prioritise revision for 12-credit units with high final exam percentages.',
            'When choosing electives, consider WAM impact only after progression requirements are secure.',
            'Revisit credit map after add/drop deadlines when loads change.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Calculator mistakes with credit points',
          items: [
            'Averaging marks without multiplying by credit points first.',
            'Using EFTSL or contact hours instead of credit points from WES.',
            'Treating exchange SFR units as graded credit in WAM maths.',
            'Forgetting to update credit totals after unit substitutions.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Tools after credit-point clarity',
          items: [
            'Monash WAM calculator — enter marks with correct cp per row.',
            'Final grade calculator — target high-weight assessments in large units.',
            'WAM target calculator — see required averages on remaining cp load.',
            'Year 1 weighting guide — reconcile official vs planning WAM.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-final-exam-mark-calculator-guide': [
    {
      facts: [
        {
          title: 'Why finals drive calculator searches',
          items: [
            'Many Monash units weight the final exam 40–60% of the total mark.',
            'Students reverse-engineer the exam mark needed to hit HD (80), distinction (70), or pass (50).',
            'Coursework locked in early reduces remaining leverage — calculate before the final sits.',
            'Unit targets and cumulative WAM planning use different tools — keep both updated.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Required final mark formula',
          items: [
            'Required = (Target − Coursework × Coursework%) ÷ Final%',
            'Express coursework and final weights as decimals summing to 1.0.',
            'Round only at the end; intermediate rounding can misstate borderline HD targets.',
            'If required > 100, the target is mathematically unreachable — adjust expectations early.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Standard 40/60 weighting targets',
          headers: ['Coursework', 'Target', 'Required final (60% weight)'],
          rows: [
            ['70', '80 (HD)', '86.7'],
            ['65', '70 (D)', '73.3'],
            ['55', '60 (C)', '63.3'],
            ['45', '50 (P)', '58.3'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Monash grade bands to aim for',
          items: [
            'HD 80–100 — strongest WAM and GPA band movement per unit.',
            'D 70–79 — common honours and internship planning zone.',
            'C 60–69 — solid progression; may miss competitive merit screens.',
            'P 50–59 — minimum pass; check faculty progression rules if clustered near 50.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'HD chase example (coursework 72, final 60%)',
          items: [
            'Target 80 → Required = (80 − 72×0.4) ÷ 0.6 ≈ 85.3 on the final.',
            'An 85+ final usually needs timed practice, not only content review.',
            'If coursework was 68, required HD final rises to ~88 — reassess unit target band.',
            'Log the calculation in your revision plan so effort matches the maths.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Coursework 68 → HD final requirement',
          headers: ['Component', 'Weight', 'Mark', 'Contribution'],
          rows: [
            ['Coursework', '40%', '68', '27.2'],
            ['Required final', '60%', '88', '52.8'],
            ['Total', '100%', '—', '80.0 (HD)'],
            ['Insight', '—', '—', 'High coursework raises final burden'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Protecting pass after weak coursework',
          items: [
            'Coursework 42 with 50% final → need ~58 on the exam to reach 50 overall.',
            'Sub-40 coursework often makes distinction unrealistic — pivot to secure pass first.',
            'Check supplementary eligibility rules before assuming a second chance.',
            'Speak with faculty student services if progression is at risk.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Non-standard weightings',
          items: [
            'Some units use 30/70, 50/50, or multi-component portfolios — read the handbook week one.',
            'Group work components may cap individual recovery on the final.',
            'Practical exams and hurdle assessments can block scaling even with strong written finals.',
            'Rebuild the formula per unit; do not assume 40/60 from a prior semester template.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Linking unit results to overall WAM',
          items: [
            'After finals, enter confirmed unit marks into the Monash WAM calculator.',
            'High-credit units move cumulative WAM more than low-credit electives at the same mark.',
            'Run semester WAM separately to judge term performance vs degree average.',
            'Use WAM target tool if the final season must close a gap to distinction.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Final exam calculator mistakes',
          items: [
            'Using whole-number weights (40) instead of decimals (0.4) in the formula.',
            'Forgetting hurdle requirements that override weighted averages.',
            'Targeting HD when coursework makes 80 mathematically impossible.',
            'Updating WAM projections with hoped-for finals before official release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-supplementary-exam-wam-guide': [
    {
      facts: [
        {
          title: 'Supplementary assessment basics',
          items: [
            'Offered when a student narrowly fails or meets faculty supp criteria — not automatic for every N.',
            'Usually one additional assessment window rather than repeating the full semester unit.',
            'Outcome may be recorded as a capped pass (e.g. 50 P) depending on policy.',
            'Eligibility and timing are faculty-specific — read the unit guide and WES notices.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Supp pass and WAM maths',
          items: [
            'A capped 50 P supplementary pass typically enters WAM as 50 × credit points.',
            'That is usually better for WAM than leaving a fail mark (0–49) on the transcript.',
            'The original fail attempt may still appear historically — verify repeat vs supp rules.',
            'Recalculate WAM immediately after the supp result certifies.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative WAM impact (6 cp unit, three other units at 75 WAM)',
          headers: ['Outcome on failed unit', 'Mark used in WAM', 'Approx. new WAM'],
          rows: [
            ['Original N at 45', '45', '~69.4'],
            ['Supp P capped at 50', '50', '~70.0'],
            ['Repeat later at 72', 'Both attempts*', 'Policy-dependent'],
            ['Insight', '—', '50 P often beats low fail for average'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'What stays on your record',
          items: [
            'Transcripts may show both the initial fail period and the supplementary resolution.',
            'Employers reviewing full history see the trend — recovery narrative still matters.',
            'Honours and scholarship panels may read attempt patterns, not only final WAM.',
            'Keep personal statements factual; do not hide attempts that appear on WES.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Supp vs repeat decision frame',
          items: [
            'Supp is faster when offered and caps at pass — good for WAM vs raw fail.',
            'Repeat allows higher than 50 if you can earn distinction, but both attempts may count.',
            'Progression deadlines and prerequisite chains may force one path over the other.',
            'Model both scenarios in the WAM calculator before re-enrolling.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Supplementary vs repeat (planning lens)',
          headers: ['Factor', 'Supplementary', 'Repeat unit'],
          rows: [
            ['Time to resolve', 'Weeks', 'Full semester+'],
            ['Typical mark cap', 'Often 50 P', 'Full mark range'],
            ['WAM entries', 'Capped pass common', 'Both attempts may count'],
            ['Best when', 'Narrow fail, supp offered', 'Need high mark for prerequisites'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'NS grades and WES timing',
          items: [
            'NS (not satisfied) may display until supplementary assessment completes.',
            'WAM summaries can temporarily exclude or freeze affected units — refresh after certification.',
            'Do not submit employer forms while NS rows are unresolved.',
            'Calendar supplementary study time as if it were a full exam period.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Post-supp WAM planning steps',
          items: [
            'Lock certified mark and credit points from WES.',
            'Recalculate cumulative WAM including the supp outcome.',
            'Set next-semester targets for high-credit units still in progress.',
            'If WAM remains below goals, plan repeats or grade lifts on recoverable loads.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Supp WAM estimation mistakes',
          items: [
            'Assuming supp removes the fail from WAM history entirely.',
            'Treating capped 50 P as distinction-level for competitive applications.',
            'Ignoring credit weight of the failed unit when modelling recovery.',
            'Using projected supp pass in forms before WES certification.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-cgpa-explained-guide': [
    {
      facts: [
        {
          title: 'CGPA in Monash context',
          items: [
            'CGPA (cumulative GPA) compresses letter grades into grade-point averages across your degree.',
            'Monash commonly reports GPA on a 4.0 scale derived from unit letter grades.',
            'CGPA differs from WAM — WAM uses raw percentage marks with credit weighting.',
            'Transcript CGPA is authoritative when printed; estimates are for planning only.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'GPA terminology map',
          items: [
            'Semester GPA — grade points within one teaching period.',
            'CGPA — cumulative grade-point average across all completed graded units.',
            'WAM — percentage-style credit-weighted average with year-level rules.',
            'Forms may ask for any of the three — match the field label exactly.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Official CGPA formula pattern',
          items: [
            'CGPA = Σ(grade points × credit points) ÷ Σ(credit points) for graded units.',
            'HD maps to 4.0, D to 3.0, C to 2.0, P to 1.0 on the standard Monash 4.0 scale.',
            'Fails and special grades use lower fixed point values per policy.',
            'Use WES GPA/CGPA line when available instead of rebuilding from memory.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Monash grade bands → GPA points (typical)',
          headers: ['Mark range', 'Grade', 'GPA 4.0'],
          rows: [
            ['80–100', 'HD', '4.0'],
            ['70–79', 'D', '3.0'],
            ['60–69', 'C', '2.0'],
            ['50–59', 'P', '1.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Finding CGPA on WES',
          items: [
            'Academic record summary panels list cumulative GPA alongside WAM.',
            'Unit rows show letter grades used to derive GPA points.',
            'After results release, allow certification lag before exporting for applications.',
            'Order official transcript if a third party requires Monash certification.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'CGPA vs WAM reporting',
          items: [
            'Australian employers and many Monash pathways reference WAM or distinction average.',
            'US-style forms and some scholarships ask for GPA/CGPA on 4.0 or 7.0 scales.',
            'Lead with transcript values; add conversion notes only when comments are allowed.',
            'Never report a higher converted GPA while omitting a stronger WAM on the same form.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Which metric to lead with',
          headers: ['Audience', 'Lead metric', 'Support with'],
          rows: [
            ['Monash scholarships (merit)', 'WAM or distinction average', 'CGPA if requested'],
            ['US graduate schools', 'Transcript CGPA / GPA', 'WAM + method note'],
            ['Australian internships', 'WAM', 'CGPA if portal requires'],
            ['Research honours', 'WAM + trend', 'Faculty-specific GPA rules'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Semester impact example',
          items: [
            'Strong HD semester on 24 cp can lift CGPA faster when prior CGPA was credit-level.',
            'One fail disproportionately drops GPA because fail points sit well below 1.0.',
            'Model semester GPA separately before assuming CGPA moved a full band.',
            'Use semester GPA calculator for term checks; WAM calculator for percentage average.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'CGPA targets for merit pathways',
          items: [
            'Distinction average language often aligns with GPA 3.0+ / WAM 70+ planning bands.',
            'Scholarship renewals may cite CGPA even when you track WAM day to day.',
            'Protect high-credit units first when CGPA renewal is at risk.',
            'Recalculate after every certified results release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'CGPA mistakes to avoid',
          items: [
            'Treating CGPA and WAM as interchangeable numbers on applications.',
            'Estimating CGPA from overall WAM without unit-level letter grades.',
            'Ignoring fails in personal spreadsheets when WES includes them.',
            'Using 7.0 scale entries on forms that explicitly request 4.0 CGPA.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-exchange-grades-wam-guide': [
    {
      facts: [
        {
          title: 'Exchange grade handling overview',
          items: [
            'Approved exchange credit usually appears on Monash records without host percentage marks.',
            'SFR (satisfied requirements) is the common transcript notation for passed exchange units.',
            'Your Monash WAM reflects Monash-graded units — not host university percentages.',
            'Exchange still advances degree completion when credit is approved.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'SFR explained',
          items: [
            'SFR indicates credit granted without a numeric mark contributing to WAM.',
            'Host grades may be recorded internally for approval but not averaged into WAM.',
            'Employers asking for “exchange WAM” need clarification — cite Monash cumulative WAM.',
            'Keep host transcripts for portfolios even when Monash WAM unchanged.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Why host marks skip WAM',
          items: [
            'Grade scales differ internationally — direct averaging would be misleading.',
            'Monash policy emphasises credit completion over cross-institution mark blending.',
            'WAM therefore measures Monash-assessed performance separately.',
            'Plan exchange knowing your average is frozen at pre-departure Monash marks until you return.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Exchange notation vs WAM impact',
          headers: ['Transcript code', 'Meaning', 'Affects WAM?'],
          rows: [
            ['SFR', 'Satisfied requirements (exchange)', 'No numeric mark added'],
            ['Graded Monash unit', 'Standard mark & cp', 'Yes'],
            ['N fail (Monash)', 'Fail at Monash', 'Yes'],
            ['Pending approval', 'Credit in progress', 'Wait for certification'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Graded credit requirement at host',
          items: [
            'Monash still requires passing graded assessment at the partner institution for credit.',
            'Failed host units may jeopardise credit approval even without WAM impact.',
            'Document pass grades for credit transfer paperwork promptly after host results.',
            'Coordinate with Monash global mobility if results are delayed.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Exchange eligibility and WAM',
          items: [
            'Many faculties set minimum WAM or distinction-average expectations for exchange approval.',
            'Apply with certified Monash WAM — not host marks or projected post-exchange averages.',
            'A weak semester before exchange can delay approval — plan the prior term carefully.',
            'Scholarship conditions may still apply while abroad.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Pre-exchange WAM checklist',
          headers: ['Step', 'Action', 'Why'],
          rows: [
            ['1', 'Export WES WAM', 'Eligibility forms need certified figure'],
            ['2', 'Check faculty minimum', 'Avoid applying below published guidance'],
            ['3', 'Model remaining cp', 'Ensure progression if exchange delays units'],
            ['4', 'Note scholarship terms', 'Merit conditions may continue abroad'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Fails, repeats, and timing',
          items: [
            'Unresolved Monash fails can block exchange departure until addressed.',
            'Repeating units at Monash while on exchange timelines is difficult — plan sequences early.',
            'Returning students should recalculate WAM with only Monash-graded new units.',
            'Do not expect host HD grades to lift Monash WAM after return.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Before and after exchange planning',
          items: [
            'Boost Monash WAM pre-departure if eligibility cutoffs are tight.',
            'After return, focus on high-credit Monash units to move cumulative average.',
            'Use semester WAM to judge post-return terms separately from frozen cumulative periods.',
            'Clarify SFR rows on CVs — credit earned abroad without Monash mark.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Exchange WAM misconceptions',
          items: [
            'Believing host HD automatically raises Monash WAM.',
            'Listing host percentage as Monash WAM on job applications.',
            'Ignoring SFR notation when hand-calculating averages.',
            'Applying for exchange with unofficial projected WAM instead of WES figure.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-deans-honours-list-wam-guide': [
    {
      facts: [
        {
          title: "Dean's Honours List quick facts",
          items: [
            "Faculty graduation award recognising top academic achievement — not the same as research honours (H1/H2A).",
            'Monash Business School cites top two percentile of bachelor cohort WAM for Dean\'s Honours List.',
            'Criteria vary by faculty — percentile, distinction average, or course awards use different rules.',
            'Certificates and events are typical rewards — not ongoing scholarship payments.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Dean\'s list vs scholarships vs honours degree',
          items: [
            'Scholarships = funding with renewal rules — separate WAM guide applies.',
            'Honours degree = extra study year with H1/H2A classifications.',
            'Dean\'s Honours List = graduation excellence recognition tied to cohort performance.',
            'You may earn multiple outcomes — keep resume categories distinct.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'How faculties rank by WAM',
          items: [
            'Official WAM uses credit weighting with Year 1 at 0.5 multiplier.',
            'Percentile lists compare you only to your faculty degree cohort that graduation year.',
            'Course awards may honour top student per program even below dean\'s list percentile.',
            'Calculate with certified marks only — projections are for personal planning.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Award types and typical WAM use',
          headers: ['Award type', 'Selection logic', 'WAM role'],
          rows: [
            ["Dean's Honours List", 'Cohort percentile (e.g. top 2%)', 'Primary ranking metric'],
            ["Dean's Commendation", 'Often distinction+', 'Threshold or tier'],
            ['Course award', 'Top in specific degree', 'May differ from list cut'],
            ['Unit excellence', 'Single subject', 'Unit mark driven'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Business School percentile example',
          items: [
            'Top two percentile implies very strong distinction or HD territory in competitive cohorts.',
            'Exact WAM cutoff floats annually with cohort strength.',
            'Course and unit awards at the same ceremony provide alternate recognition paths.',
            'Model final-year lifts with WAM target calculator before assuming a fixed 85 WAM.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Distinction average and commendation tiers',
          items: [
            'Distinction average planning band is commonly WAM 70+ / GPA 3.0+.',
            'Dean\'s Commendation may sit at distinction; Dean\'s Honours List typically higher.',
            'WAM preserves differences inside GPA bands — important for close rankings.',
            'Borderline 69–71 WAM students should protect high-weight finals first.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Planning bands vs award tiers (illustrative)',
          headers: ['WAM band', 'Grade', 'Typical award relevance'],
          rows: [
            ['80+', 'HD', 'Strong dean\'s list contender in many cohorts'],
            ['70–79', 'Distinction', 'Commendation / merit certificates'],
            ['60–69', 'Credit', 'Rare for dean\'s list; focus progression'],
            ['<70', 'Below distinction', 'Build trajectory before final year'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When WAM locks for graduation awards',
          items: [
            'Awards use certified completing-degree WAM — not mid-semester estimates.',
            'NS, exchange SFR, and in-progress units wait until finalisation.',
            'Repeats and fails remain in history under normal Monash rules.',
            'Recalculate after each final-year results release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Resume and employer reporting',
          items: [
            'List award only after official faculty confirmation.',
            'Name faculty-specific award exactly as certificate states.',
            'Pair with numeric WAM when employers request academic average.',
            'Use WAM to GPA conversion only when forms lack WAM fields.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: "Dean's list planning mistakes",
          items: [
            'Confusing Dean\'s Honours List with honours degree H1/H2A classification.',
            'Assuming fixed 80 WAM guarantees list placement in every faculty.',
            'Ignoring Year 1 half-weighting when comparing to peers hand-calculating WAM.',
            'Claiming the award on LinkedIn before faculty notification.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-repeat-unit-wam-guide': [
    {
      facts: [
        {
          title: 'Repeat unit WAM rule of thumb',
          items: [
            'Monash does not replace grades — both attempts typically remain in WAM calculations.',
            'A repeat distinction can help, but the original fail still pulls the average down.',
            'Credit weight of the unit doubles the impact when both attempts are graded.',
            'Confirm faculty handbook wording before assuming grade replacement.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Both attempts in the average',
          items: [
            'Example: 45 fail (6 cp) then 72 pass (6 cp) → both rows contribute weighted points.',
            'Breakeven repeat mark must be higher than a first-attempt target to offset the fail.',
            'Transcripts show attempt history — panels see recovery trends.',
            'Model both marks explicitly in the WAM calculator.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Fail then repeat (6 cp each attempt)',
          headers: ['Attempt', 'Mark', 'Weighted points'],
          rows: [
            ['First (fail)', '45', '270'],
            ['Repeat', '72', '432'],
            ['Combined', '12 cp total', '702 ÷ 12 = 58.5'],
            ['Insight', '—', 'Repeat must be strong to lift average'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Repeat vs supplementary pass',
          items: [
            'Supp capped at 50 P may beat a low fail faster than waiting to repeat.',
            'Repeat allows distinction-level marks if you can earn them — supp usually caps lower.',
            'Progression and prerequisites may force one route.',
            'Compare WAM maths for both paths before enrolling.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Repeats and GPA/CGPA',
          items: [
            'Both attempts generally contribute grade points unless policy states otherwise.',
            'CGPA recovery can lag WAM recovery when fails mapped to low GPA points.',
            'Check WES after repeat certification before updating applications.',
            'Semester GPA isolates repeat term performance from cumulative history.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'When repeating still makes sense',
          headers: ['Situation', 'Why repeat', 'Caution'],
          rows: [
            ['Prerequisite requires C+', 'Supp cap may not suffice', 'Both attempts count in WAM'],
            ['Honours prerequisite', 'Need distinction-level mark', 'Plan timeline delay'],
            ['Low fail with time', 'Can aim for 70+ repeat', 'Original fail remains'],
            ['Near pass only', 'Supp may be faster', 'Compare WAM outcomes'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Right-call signals for repeating',
          items: [
            'Prerequisite chains block progression without a higher mark.',
            'Professional accreditation expects competency in the failed topic.',
            'You have capacity for one focused repeat without overloading other cores.',
            'Faculty advice supports repeat over substitute unit.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Pre-enrolment WAM planning',
          items: [
            'Calculate current WAM with fail included.',
            'Set minimum repeat mark needed for personal WAM goals.',
            'Schedule repeat in a semester with lighter high-credit load if possible.',
            'Recompute after certification each results release.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Credit points and year level',
          items: [
            '12-credit repeats move WAM harder than 6-credit repeats when both attempts count.',
            'Year 1 half-weighting still applies to level 1 repeats in official WAM.',
            'Prioritise repeat preparation like a high-stakes core — not a background elective.',
            'Pair with final grade calculator for exam-heavy repeats.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Repeat unit mistakes',
          items: [
            'Assuming the new mark erases the old attempt from WAM.',
            'Repeating while overloaded with other 12-credit cores.',
            'Choosing repeat without modelling breakeven mark for target WAM.',
            'Submitting applications with projected repeat marks before certification.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-wam-internship-graduate-jobs-guide': [
    {
      facts: [
        {
          title: 'Do employers ask for WAM?',
          items: [
            'Large graduate programs often request WAM or “credit average” on application forms.',
            'Smaller firms may focus on portfolios, experience, and interviews over numeric cutoffs.',
            'Penultimate-year internships frequently screen on WAM for competitive streams.',
            'Always report transcript-backed WAM — round consistently with the application field.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Employer planning bands (illustrative)',
          items: [
            '60–69 credit — viable for many roles; may miss top-tier grad program shortlists.',
            '70–79 distinction — common competitive zone for finance, consulting, and government grads.',
            '80+ HD — strongest for oversubscribed programs; still not sole selection factor.',
            'Trend and relevant experience can offset a mid-60s WAM in some industries.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'WAM bands vs typical employer use',
          headers: ['WAM band', 'Label', 'Typical screening'],
          rows: [
            ['80+', 'HD', 'Top grad program shortlists'],
            ['70–79', 'Distinction', 'Broad competitive eligibility'],
            ['60–69', 'Credit', 'Many roles; highlight experience'],
            ['<60', 'Below credit', 'Emphasise portfolio & recovery story'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Internship timing notes',
          items: [
            'Penultimate year is standard for vacation programs in Australia.',
            'Applications often open a year ahead — WAM from prior semester matters.',
            'Some firms allow one completed semester for early internships — check each portal.',
            'Update WES figure before every application submission.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Graduate programs vs internships',
          items: [
            'Graduate roles may publish firmer WAM floors than internship streams.',
            'Internship performance can bypass strict WAM cutoffs for return offers.',
            'Government graduate streams sometimes use merit bands tied to distinction average.',
            'Plan WAM lifts in the semester before application peaks.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WAM vs GPA on job forms',
          items: [
            'Australian employers usually prefer WAM or “weighted average mark.”',
            'Multinationals may ask for GPA — use transcript CGPA when listed.',
            'If only GPA field exists, add WAM in cover letter or additional information box.',
            'Never inflate converted GPA above transcript-supported values.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Application field cheat sheet',
          headers: ['Field label', 'Enter', 'If unclear'],
          rows: [
            ['WAM / weighted average', 'Transcript cumulative WAM', 'One decimal if allowed'],
            ['GPA 4.0', 'Transcript CGPA', 'WAM + method in comments'],
            ['Credit average', 'Usually WAM 70+ = distinction', 'Cite Monash definition'],
            ['Academic transcript upload', 'Official PDF', 'Match typed numbers exactly'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Strategy when WAM is weaker',
          items: [
            'Lead with relevant projects, leadership, and internship outcomes in CV order.',
            'Explain upward trend if recent semesters improved — cite semester WAM.',
            'Target firms weighting experience over raw average.',
            'Use final year to lift WAM before full-time grad applications.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Faculty and industry differences',
          items: [
            'Commerce and law streams often face higher published WAM expectations.',
            'Creative and IT portfolios may outweigh average for specialist roles.',
            'Engineering internships may emphasise project work and faculty partnerships.',
            'Research pathways care about honours WAM separately from vacation programs.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Pre-season calculator workflow',
          items: [
            'Export WES WAM → check milestones → set WAM target for remaining units.',
            'Run semester WAM on last term to craft trend narrative.',
            'Convert to GPA only if application portal requires it.',
            'Recompute after results release before bulk applications.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Job application WAM mistakes',
          items: [
            'Typing semester average instead of cumulative WAM.',
            'Rounding up WAM beyond transcript precision.',
            'Claiming distinction average without meeting WAM 70+ / GPA 3.0 benchmarks.',
            'Inconsistent WAM across CV, form, and referee talking points.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-year-1-wam-weighting-guide': [
    {
      facts: [
        {
          title: 'Year 1 half-weighting rule',
          items: [
            'Official Monash WAM applies 0.5 weighting to Year 1 level units.',
            'Year 2 and later units typically use 1.0 weighting in the same formula.',
            'Hand calculators that treat all years equally will overstate Year 1 impact.',
            'Progression still depends on passing Year 1 units regardless of WAM weight.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Formula with year level',
          items: [
            'Weighted points = mark × credit points × year-level multiplier.',
            'Year 1 multiplier = 0.5; later years = 1.0 under standard Monash policy.',
            'Sum weighted points ÷ sum (credit × multiplier) = official WAM.',
            'Verify against WES cumulative line after entering certified marks.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Year multipliers at a glance',
          headers: ['Year level', 'Multiplier', 'Effect on WAM'],
          rows: [
            ['Year 1', '0.5', 'Half contribution vs same mark later'],
            ['Year 2', '1.0', 'Full contribution'],
            ['Year 3+', '1.0', 'Full contribution'],
            ['Planning calc', 'Often 1.0 all years', 'May diverge from WES'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Worked example insight',
          items: [
            'HD Year 1 marks lift official WAM more slowly than identical marks in Year 2.',
            'A weak Year 1 semester hurts less in official WAM than the same marks later.',
            'Do not interpret low Year 1 WAM drag as permanent — later years weigh heavier.',
            'Still aim for strong habits — GPA bands and progression rules still apply.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When planning and official WAM diverge',
          items: [
            'Students using unweighted spreadsheets may think Year 1 hurt more than WES shows.',
            'Conversely, unweighted calcs can understate early fails if ignoring 0.5 rule incorrectly.',
            'Always reconcile to WES before employer or scholarship submissions.',
            'Label personal projections “unweighted estimate” if not using year multipliers.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Same marks, different weighting models',
          headers: ['Model', 'Year 1 HD (12 cp)', 'Impact on cumulative'],
          rows: [
            ['Official (0.5)', '80', 'Moderate lift'],
            ['Unweighted (1.0)', '80', 'Larger lift than official'],
            ['Year 2 same mark', '80', 'Full 1.0 weight'],
            ['Takeaway', '—', 'Match model to purpose'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Year 1 weighting vs GPA',
          items: [
            'GPA/CGPA systems may not mirror year-level WAM multipliers exactly.',
            'Scholarship text citing GPA may behave differently from WAM honours screens.',
            'Check which metric your specific opportunity references.',
            'Use CGPA guide when forms ask for GPA despite WAM planning.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Planning with the 0.5 rule',
          items: [
            'Focus Year 2+ on distinction targets when official WAM is the decision metric.',
            'Use Year 1 to build study systems without panic if official WAM moves slowly.',
            'Model future semesters with full weighting when estimating honours eligibility.',
            'Recalculate after each results release as Year 2 units dominate the denominator.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Year 1 weighting mistakes',
          items: [
            'Assuming Year 1 marks do not matter at all for progression.',
            'Using unweighted calculators for official scholarship WAM checks.',
            'Comparing your hand average to peers without matching year multipliers.',
            'Ignoring that GPA may still reflect Year 1 letter grades fully.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],
};
