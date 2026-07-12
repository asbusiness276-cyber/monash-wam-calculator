import type { SectionEnhancement } from '../utils/enrichArticleContent';
import { articleEnrichmentsPart2 } from './articleEnrichmentsPart2';
import { articleEnrichmentsPart3 } from './articleEnrichmentsPart3';

/**
 * Per-section SEO enrichments keyed by article slug.
 */
const enrichments: Record<string, SectionEnhancement[]> = {
  'monash-university-australia': [
    {
      facts: [
        {
          title: 'Quick orientation facts',
          items: [
            'Monash is a Group of Eight (Go8) research university with primary Australian campuses in Victoria.',
            'Clayton is the largest teaching and research campus; Caulfield, Peninsula, and Parkville host major course clusters.',
            'Academic performance is tracked with a credit-weighted WAM, not a US-style GPA as the native metric.',
            'Confirm rankings, fees, and entry rules on Study at Monash each intake year — published figures move annually.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Campus location checklist',
          items: [
            'Clayton (Wellington Rd, VIC 3800) — flagship STEM, arts, education, and research facilities.',
            'Caulfield (Dandenong Rd, VIC 3145) — business, design, IT, and many postgraduate coursework offerings.',
            'Peninsula — education, health, and nursing pathways with a smaller campus footprint.',
            'Parkville — pharmacy and pharmaceutical sciences beside Melbourne’s biomedical precinct.',
            'Monash Malaysia and Monash Indonesia use separate admissions, fees, and academic calendars.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Main Australian campuses at a glance',
          headers: ['Campus', 'Typical focus areas', 'Suburb / postcode'],
          rows: [
            ['Clayton', 'Science, engineering, arts, education, medicine (select)', 'Clayton VIC 3800'],
            ['Caulfield', 'Business, design, IT, law (select)', 'Caulfield VIC 3145'],
            ['Peninsula', 'Education, nursing, health', 'Frankston area'],
            ['Parkville', 'Pharmacy & pharmaceutical science', 'Parkville VIC 3052'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'How to use rankings wisely',
          items: [
            'QS World University Rankings 2025 places Monash 37th globally — useful for international comparisons.',
            'Subject rankings often matter more than overall rank for pharmacy, education, nursing, and engineering.',
            'Go8 membership signals research intensity to many employers and graduate schools.',
            'Compare course accreditation and placement hours against Melbourne, RMIT, or Deakin before deciding on rank alone.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Course and research pathway notes',
          items: [
            'Undergraduate handbooks change yearly — download the handbook for your commencement year, not a cached PDF.',
            'Monash Online and blended options exist, but placements and invigilated exams can still require attendance.',
            'PhD and MPhil entry usually needs a supervisor match, research proposal, and prior research training evidence.',
            'Micro-credentials and professional short courses sit outside standard bachelor WAM calculations.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Fees and applications essentials',
          items: [
            'Domestic CSP students pay government-set contribution amounts; international students pay full published tuition.',
            'International undergraduate tuition commonly sits in roughly AUD $40k–$50k per year depending on faculty and load.',
            'Many domestic undergraduates apply via VTAC; postgraduates and internationals often use Monash direct portals.',
            'Scholarship deadlines frequently close before offer rounds — gather transcripts and references early.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Application channels by student type (typical)',
          headers: ['Applicant type', 'Common channel', 'Documents to prepare'],
          rows: [
            ['Domestic undergraduate', 'VTAC (many courses)', 'Year 12 results, preferences, ID'],
            ['International undergraduate', 'Monash international portal', 'Transcripts, English proof, passport'],
            ['Postgraduate coursework', 'Direct Monash application', 'Degree transcript, CV, English proof'],
            ['Graduate research', 'Monash Graduate Research', 'Proposal, supervisor support, CV'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Campus life practicalities',
          items: [
            'Career Connect, counselling, disability support, and libraries operate across major campuses with different hours.',
            'International student visa work limits are set by Home Affairs — campus jobs still count toward hour caps.',
            'Clayton hosts an Australia Post LPO useful for parcels when relocating interstate or overseas.',
            'Save official Monash security and emergency contacts during orientation; follow current campus safety guidance.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'WAM planning while studying at Monash',
          items: [
            'WAM = Σ(mark × credit points) ÷ Σ(credit points) — high-credit units move your average more.',
            'Track WAM for honours eligibility, scholarship renewals, and many postgraduate entry screens.',
            'Recalculate after each major results release rather than once at year end.',
            'Use Monash WAM and WAM-to-GPA tools on this site for planning; submit transcript figures on formal forms.',
          ],
          afterParagraph: 0,
        },
      ],
      extraParagraphs: [
        'If you are still comparing campuses before enrolling, shortlist by course map and commute first, then use WAM planning tools only after you have confirmed marks — rankings and fees matter for the decision, but semester-by-semester weighting decides how competitive your transcript becomes later.',
      ],
    },
  ],

  'what-is-a-good-wam': [
    {
      facts: [
        {
          title: 'Set three WAM targets',
          items: [
            'Safe target — keeps progression and avoids academic risk flags in your faculty.',
            'Competitive target — aligns with internships, exchange, or selective coursework entry.',
            'Stretch target — HD-level planning for research honours or top merit scholarships.',
            'Context beats a single number: the same WAM can be strong in one faculty and mid-pack in another.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Monash-style grade band reading',
          items: [
            '50–59 Pass (P) — progression possible, limited for selective opportunities.',
            '60–69 Credit (C) — solid baseline for many continuing pathways.',
            '70–79 Distinction (D) — commonly competitive for honours and merit screens.',
            '80–100 High Distinction (HD) — strongest positioning for research and top scholarships.',
            'Upward semester trends often matter as much as one cumulative figure.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Planning bands students use at Monash',
          headers: ['WAM range', 'Grade band', 'Typical planning use'],
          rows: [
            ['50–59', 'Pass', 'Course progression; rebuild plan'],
            ['60–69', 'Credit', 'Baseline competitiveness; some equity awards'],
            ['70–79', 'Distinction', 'Honours / merit shortlists in many faculties'],
            ['80+', 'High Distinction', 'Research honours & top merit positioning'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'High-leverage improvement moves',
          items: [
            'Map assessment weights in week 1 — finals and major projects dominate WAM movement.',
            'Run target vs stretch scenarios for remaining units instead of hoping for a flat lift.',
            'Fix repeated mark losses (structure, timing, misread criteria) before adding study hours.',
            'Prioritise 12-credit cores over polishing already-safe low-credit breadth marks.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Effort placement by impact',
          headers: ['Focus area', 'Why it moves WAM', 'Tool to use'],
          rows: [
            ['High-credit units', 'Larger weight in the denominator', 'Monash WAM calculator'],
            ['High-weight finals', 'Largest remaining assessment share', 'Final grade calculator'],
            ['Post-mark reviews', 'Stops repeating the same errors', 'Unit feedback + rubric'],
            ['Monthly recalculation', 'Shows if trajectory hits your band', 'WAM + target planner'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Tool stack for benchmark decisions',
          items: [
            'Monash WAM calculator — confirm current standing from official marks only.',
            'Final grade calculator — reverse-engineer exam marks for unit targets.',
            'WAM to GPA calculator — only when an external form needs 4.0 or 7.0 format.',
            'Milestones checker — see which planning bands (pass, distinction, HD) you already clear.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'how-to-improve-wam-at-monash': [
    {
      facts: [
        {
          title: 'Define “better” before studying harder',
          items: [
            'Pick one semester target and one year stretch target tied to a real goal (honours, scholarship, internship).',
            'Baseline only with WES/transcript marks in the Monash WAM calculator — keep projections labelled separately.',
            'If overseas forms need GPA, convert after WAM is confirmed so both numbers stay consistent.',
            'Write the gap in points (e.g. +3.2 WAM) so weekly effort has a measurable finish line.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Credit-point strategy rules',
          items: [
            'A 12-credit unit moves WAM roughly twice as hard as a 6-credit elective with the same mark change.',
            'Schedule peak revision weeks around high-credit cores, not only whichever deadline feels loudest.',
            'When choosing electives, a strong mark in a large core often beats a perfect tiny breadth for WAM lift.',
            'Re-check credit loads each semester — last year’s timetable may under-weight this semester’s cores.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative mark impact by credit weight',
          headers: ['Unit', 'Credits', 'Mark', 'Weighted points (mark × cp)'],
          rows: [
            ['Core A', '12', '78', '936'],
            ['Core B', '6', '78', '468'],
            ['Elective', '6', '90', '540'],
            ['Insight', '—', '—', '12 cp at 78 outweighs 6 cp at 90'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Assessment and exam tactics',
          items: [
            'Identify units where the final is ≥40–50% of the grade — those drive most recovery maths.',
            'After each release, recalculate which subjects still have enough remaining weight to hit distinction.',
            'Practice timed papers and rubric alignment; process fixes often raise a final by a full grade band.',
            'Drop sunk-cost units mathematically below target and reallocate hours to recoverable high-credit subjects.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Monthly scenario cadence',
          items: [
            'Week 4 — finish the assessment weight map for every unit.',
            'Week 8 — recalculate WAM with mid-semester results locked in.',
            'Week 12 — set exam targets from remaining weight using the final grade calculator.',
            'Model conservative / target / stretch marks each month; act on the gap, not the wishful case.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Example monthly checkpoint outcomes',
          headers: ['Checkpoint', 'Input update', 'Decision if below target'],
          rows: [
            ['Week 4', 'Assessment weights listed', 'Protect high-weight finals in calendar'],
            ['Week 8', 'Mid-semester marks entered', 'Shift hours to recoverable units'],
            ['Week 12', 'Exam targets calculated', 'Timed practice on highest-weight subjects'],
            ['Results week', 'Official marks confirmed', 'Reset next-semester target bands'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Mistakes that stall improvement',
          items: [
            'Treating every mark as equal when credit points differ.',
            'Excluding fails from personal WAM maths when Monash includes them.',
            'Benchmarking against unrelated degrees on social media instead of your faculty goals.',
            'Burning out before high-credit finals — sleep and spaced practice protect weighted outcomes.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'One-day actionable workflow',
          items: [
            'Confirm WAM → set band from “what is a good WAM” → plan finals → convert GPA only if needed → repeat monthly.',
            'Compound gains over two teaching periods are more realistic than a one-week miracle lift.',
            'Start with the next high-credit assessment — that is usually where the next WAM point is won.',
            'Keep official policies for progression; use calculators only for planning.',
          ],
          afterParagraph: 0,
        },
      ],
      extraParagraphs: [
        'If your gap to distinction is larger than remaining credit weight can close this semester, lock a two-semester plan now: protect progression this term, then schedule the highest-credit units next term when you can still move the cumulative average.',
      ],
    },
  ],

  'monash-honours-wam-requirements': [
    {
      facts: [
        {
          title: 'Honours reality check',
          items: [
            'Honours at Monash is faculty-specific — there is no single university-wide WAM cutoff.',
            'Entry usually mixes WAM with completed credits, prerequisites, and sometimes interviews or portfolios.',
            'Integrated honours pathways in some degrees differ from a standalone fourth year.',
            'Treat web benchmarks as planning only; confirm the faculty guide for your application year.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Faculty expectation patterns',
          items: [
            'Some faculties publish a numeric floor; others say “competitive entry” without a fixed cutoff.',
            'Later-year units or discipline cores may be weighted more heavily in merit ranking.',
            'Double degrees can add extra prerequisite or major-specific hurdles.',
            'If a partner form asks for GPA, keep Monash WAM as the primary domestic honours figure.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'How faculties commonly describe honours entry',
          headers: ['Description style', 'What it usually means', 'Student action'],
          rows: [
            ['Minimum WAM stated', 'Hard floor plus other criteria', 'Meet floor then strengthen trend'],
            ['Competitive / ranked', 'Places fill above the floor', 'Aim distinction+ and research fit'],
            ['Stage-weighted merit', 'Later years count more', 'Prioritise level 2–3 high-credit units'],
            ['Portfolio / interview', 'WAM necessary but not sufficient', 'Prepare samples + coordinator questions'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Student planning bands (not official policy)',
          items: [
            '60–69 credit — progression talk, rarely enough for competitive research honours alone.',
            '70–79 distinction — common planning zone for many faculty honours streams.',
            '80+ HD — safer for oversubscribed research places and scholarship stacking.',
            'Upward level-two/three trends can support borderline cumulative WAM in some schools.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative honours readiness bands',
          headers: ['WAM band', 'Grade label', 'Planning interpretation'],
          rows: [
            ['60–69', 'Credit', 'Build trajectory; confirm faculty floor'],
            ['70–74', 'Distinction (lower)', 'Viable in some streams if places allow'],
            ['75–79', 'Distinction (upper)', 'Stronger competitive positioning'],
            ['80+', 'High Distinction', 'Best buffer for popular research honours'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Honours vs scholarships vs masters',
          items: [
            'Scholarship merit floors and honours cutoffs are published on different pages and can diverge.',
            'Coursework masters minima may be lower or higher than research honours expectations.',
            'Overseas applications may need GPA conversion — disclose method and keep Monash WAM visible.',
            'Clarify whether you want research training or employability signalling before chasing a WAM target.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Pre-application checklist highlights',
          items: [
            'Download the current faculty honours guide and diary the deadline.',
            'Calculate transcript-backed WAM; label any projected units separately.',
            'Email the honours coordinator with factual eligibility questions, not forum cutoffs.',
            'Recompute after every results release until the application is lodged.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'If you are below the stated range',
          items: [
            'Strengthen remaining high-credit units before assuming a one-year delay.',
            'Ask about related streams with different demand or supervisor-supported borderline cases.',
            'Check repeat/substitution rules with faculty services before re-enrolling.',
            'Coursework graduate diplomas/masters may remain open with different thresholds.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Site tools for honours planning',
          items: [
            'Monash WAM calculator — current standing from official marks.',
            'Final grade calculator — exam targets on remaining high-weight assessments.',
            '“What is a good WAM” — language for layered targets.',
            'WAM to GPA calculator — only when an external form requires conversion.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-scholarship-wam-requirements': [
    {
      facts: [
        {
          title: 'Scholarship WAM basics',
          items: [
            'Each award on Find a Scholarship can set its own academic floor, residency rules, and deadlines.',
            'Some commencing awards use ATAR/IB; continuing awards more often reference WAM.',
            'Equity and humanitarian schemes may weigh circumstances alongside (or instead of) high merit WAM.',
            'Always verify the live scholarship page for your application year before planning around old cutoffs.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Merit planning bands (illustrative)',
          items: [
            '~60 WAM — some access-linked continuing pathways (not universal).',
            '70–79 — solid merit competitiveness for many faculty and university awards.',
            '80+ — HD positioning for highly selective merit lists.',
            '85+ — appears in some published international merit minimums in recent cycles.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative merit WAM planning bands',
          headers: ['Approx. WAM', 'Band', 'Planning use'],
          rows: [
            ['~60', 'Credit floor', 'Check equity / access continuing awards'],
            ['70–79', 'Distinction', 'Broad merit competitiveness'],
            ['80–84', 'High Distinction', 'Strong merit shortlists'],
            ['85+', 'Top HD', 'Highest published international merit floors'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Non-merit and faculty awards',
          items: [
            'Humanitarian and equity schemes may combine visa status, need, campus, and a modest academic minimum.',
            'Faculty scholarships can restrict eligible course codes or require school nomination.',
            'Two students with identical WAM can face different shortlists based on citizenship and degree.',
            'Honours cutoffs and scholarship floors change independently — read both policy sets.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Renewals and WAM maintenance',
          items: [
            'Many awards require satisfactory progress each year, sometimes without restating the original entry WAM.',
            'Recalculate after major results so progress reports are not a surprise.',
            'Protect high-credit units first when renewal is at risk.',
            'If external panels ask for GPA, convert carefully while keeping Monash WAM primary on record.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Renewal risk checklist',
          headers: ['Risk signal', 'What to check', 'Immediate action'],
          rows: [
            ['WAM drop after hard semester', 'Scholarship terms / appeal options', 'Prioritise high-cp units next term'],
            ['Progress report due soon', 'Exact academic condition wording', 'Update WAM with latest results'],
            ['Fail or WN on transcript', 'Whether award allows recovery', 'Contact scholarship services early'],
            ['Part-time enrolment change', 'Load requirements in the offer', 'Confirm before dropping units'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Application plan steps',
          items: [
            'Shortlist awards with deadlines, WAM/ATAR language, and document lists in one calendar.',
            'Confirm WAM with the Monash WAM calculator before writing personal statements.',
            'Gather leadership/community evidence early — academic floors alone rarely win competitive rounds.',
            'Ignore outdated forum cutoffs; quotas and published minima change with funding cycles.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Below published floors',
          items: [
            'Equity, nomination, or multi-criteria awards may still be realistic.',
            'Model whether remaining high-credit units can close the gap before the deadline.',
            'Skip pure merit awards far above your band if effort is better spent raising weighted marks.',
            'Keep the same WAM workflow for internships and honours so your story stays consistent.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Recommended tool sequence',
          items: [
            'WAM calculator → good-WAM benchmarks → improve-WAM guide if lifting → this scholarship map → final grade targets.',
            'Use WAM to GPA conversion only when an external form requires it.',
            'Submit verified transcript figures — site tools do not decide Monash outcomes.',
            'Re-read each scholarship page the week you submit in case criteria updated.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'failed-unit-wam-impact-monash': [
    {
      facts: [
        {
          title: 'Fail definition and WAM inclusion',
          items: [
            'Final marks below 50 generally sit in the N fail band (0–49) at Monash.',
            'Standard WAM usually includes attempted units with recorded marks unless your course policy says otherwise.',
            'A failed 12-credit unit typically hurts more than a weak 6-credit elective.',
            'Confirm mark, credit points, and faculty rules before modelling recovery.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Weighted maths of a fail',
          items: [
            'WAM = Σ(mark × cp) ÷ Σ(cp) — a fail still adds weighted points at a low mark.',
            'Example: three 6 cp units at 80/75/70 → WAM 75; adding a 6 cp fail at 48 → ~68.25.',
            'Early-degree fails move the visible average more because total credits are smaller.',
            'Always include the fail in calculator inputs so planning matches transcript logic.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative fail impact (6-credit units)',
          headers: ['Scenario', 'Units & marks', 'Approx. WAM'],
          rows: [
            ['Before fail', '80, 75, 70 (3 × 6 cp)', '75.0'],
            ['After fail', '+ 48 (6 cp)', '~68.3'],
            ['If pass at 55 instead', '+ 55 (6 cp)', '~70.0'],
            ['If distinction at 72', '+ 72 (6 cp)', '~74.3'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Fails, repeats, withdrawals, special grades',
          items: [
            'Repeats do not always erase the first attempt from WAM-related reporting — verify handbook rules.',
            'Supplementary passes may be capped (e.g. 50 P) and change maths differently than a full repeat.',
            'Withdrawn fail (WN) treatment can differ from a standard N for GPA and WAM — check faculty guidance.',
            'Honours and scholarship panels may still read the full trend even after recovery.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Outcome types to clarify with faculty',
          headers: ['Outcome', 'Typical question to ask', 'Planning note'],
          rows: [
            ['N fail', 'Is it included in WAM?', 'Model with actual mark × cp'],
            ['Supplementary P', 'Is the mark capped?', 'Compare vs repeating later'],
            ['Repeat attempt', 'Do both attempts remain visible?', 'Plan breakeven mark on repeat'],
            ['WN / withdrawal', 'How does it affect WAM/GPA?', 'Do not assume N-grade maths'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Recovery plan order',
          items: [
            'Lock official mark and credit weight from the transcript first.',
            'Recalculate WAM with the fail included before choosing next-semester load.',
            'Decide repeat vs substitute vs progression management with faculty advice.',
            'Put effort into high-credit units that still have recoverable assessment weight.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Realistic recovery expectations',
          items: [
            'Early in the degree, strong semesters can move WAM faster (smaller denominator).',
            'Late in the degree, one fail still matters, but large prior credit volume slows visible lifts.',
            'Monthly conservative/target/stretch scenarios beat guessing from a single hoped-for exam.',
            'For international reporting, keep Monash WAM primary and treat GPA conversion as secondary.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Post-fail mistakes to avoid',
          items: [
            'Leaving the fail out of personal spreadsheets creates false confidence.',
            'Overloading the next semester while still recovering academically risks a second drop.',
            'Assuming a repeat instantly cleans historical reporting without checking policy.',
            'Submitting calculator outputs on formal forms without transcript verification.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Tools after a fail',
          items: [
            'Monash WAM calculator with the fail included.',
            'How-to-calculate-WAM guide for formula checks.',
            'Improve-WAM and final grade tools for the next teaching period.',
            'Honours/scholarship guides if competitive applications are affected.',
          ],
          afterParagraph: 0,
        },
      ],
      extraParagraphs: [
        'If progression rules are at risk after the fail, book faculty student services before inventing a self-directed repeat plan — enrolment permission, prerequisite chains, and scholarship terms can constrain what “recovery next semester” is allowed to look like.',
      ],
    },
  ],

  'monash-wam-vs-gpa-postgraduate': [
    {
      facts: [
        {
          title: 'WAM vs GPA in one glance',
          items: [
            'Monash WAM is a credit-weighted percentage-style average from unit marks.',
            'GPA compresses results into grade-point bands on 4.0 or 7.0 scales.',
            'They correlate but are not interchangeable labels on applications.',
            'Lead with what the destination form requests; add the other metric when space allows.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When forms ask for WAM',
          items: [
            'Many Australian coursework masters use WAM or “credit average” language.',
            'Calculate from official marks and credit points — not memory.',
            'Note that Monash WAM is credit-weighted if the form allows commentary.',
            'Borderline WAM is better fixed with remaining units than with optimistic conversion.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'When forms ask for GPA',
          items: [
            'US-style and many international portals expect 4.0 (sometimes 7.0) GPA.',
            'Use transcript GPA if printed; otherwise estimate with a documented band table.',
            'Example note: “Monash WAM 78.4; estimated 4.0-scale GPA 3.4 per attached method.”',
            'Follow any destination-published conversion table over third-party defaults.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'What to put on common postgraduate form fields',
          headers: ['Form asks for', 'Primary value', 'Optional support'],
          rows: [
            ['WAM / credit average', 'Monash transcript WAM', 'Short note on credit weighting'],
            ['GPA 4.0', 'Transcript GPA if listed', 'WAM + method if estimating'],
            ['GPA 7.0', 'Converted 7.0 estimate', 'Cite table / calculator method'],
            ['Both / free text', 'WAM + GPA together', 'One-line methodology sentence'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: '4.0 vs 7.0 scale choice',
          items: [
            'Australian contexts often reference 7.0; North American forms commonly fix 4.0.',
            'Enter the scale the portal requires — not the one that looks highest.',
            'Near cutoffs, prefer conservative rounding and keep a citation of your table.',
            'If two tables disagree slightly, report the lower estimate and explain in one sentence.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative WAM band → GPA points (planning)',
          headers: ['WAM band', 'Grade', 'GPA 4.0', 'GPA 7.0'],
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
          title: 'Coursework vs research pathways',
          items: [
            'Coursework masters often emphasise published WAM/GPA minima and competitive averages.',
            'Research degrees weight proposals and supervisor fit more, but weak WAM still limits options.',
            'Fails remain visible in history even if cumulative WAM later recovers.',
            'If still finishing undergrad, model remaining units before locking application numbers.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Application checklist essentials',
          items: [
            'Match the program page language (WAM vs GPA vs credit average) exactly.',
            'Keep one source-of-truth sheet: unit, mark, cp, confirmed vs projected.',
            'Align CV, forms, and referee letters to the same figures and dates.',
            'Recompute after final results if the deadline still allows updates.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Tools for postgraduate reporting',
          items: [
            'Monash WAM calculator → good-WAM benchmarks → WAM to GPA (if needed).',
            'Cross-institution conversion guide when transferring between universities.',
            'Revisit minima each intake — competitive averages drift.',
            'Lead with what the form asks; support with what the transcript proves.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'how-to-convert-wam-from-one-university-to-another': [
    {
      facts: [
        {
          title: 'Why conversion stays approximate',
          items: [
            'No universal formula spans all universities’ grade boundaries and weighting rules.',
            'Two percentage systems can still interpret the same mark differently by faculty.',
            'Treat third-party tables as estimates unless the destination publishes an official map.',
            'Transparency (source WAM + method) beats false precision on competitive applications.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Practical conversion workflow',
          items: [
            'Start from confirmed overall WAM and keep the original metric visible.',
            'If GPA is required, convert with one documented table and label the scale.',
            'Near grade boundaries, report exact WAM plus converted value to avoid misreads.',
            'Prefer the destination’s own calculator or evaluator instructions when available.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Conversion path by destination request',
          headers: ['Destination asks for', 'Report first', 'Then add'],
          rows: [
            ['Percentage / WAM', 'Source Monash WAM', 'Optional band context'],
            ['GPA 4.0', 'Source WAM', '4.0 estimate + method note'],
            ['GPA 7.0', 'Source WAM', '7.0 estimate + method note'],
            ['Course-level evaluation', 'Unit marks & credits', 'Evaluator’s template only'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Safe reporting with site tools',
          items: [
            'Confirm performance in the Monash WAM calculator before converting.',
            'Use the WAM to GPA calculator for 4.0/7.0 planning estimates.',
            'Keep one marks source of truth across resume, forms, and statements.',
            'Update every document when official results change — mixed versions create review friction.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Illustrative Monash WAM → common GPA bands',
          headers: ['Monash WAM', 'Grade band', '4.0 estimate', '7.0 estimate'],
          rows: [
            ['82', 'HD', '4.0', '7.0'],
            ['74', 'D', '3.0', '6.0'],
            ['66', 'C', '2.0', '5.0'],
            ['54', 'P', '1.0', '4.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Pre-submission checklist',
          items: [
            'Source WAM is current and transcript-backed.',
            'Conversion method is documented in one sentence if comments are allowed.',
            'Destination field requirements are matched (scale, decimals, course-level data).',
            'All documents show consistent figures; uncertainty is disclosed where needed.',
          ],
          afterParagraph: 0,
        },
      ],
      extraParagraphs: [
        'When a credential evaluation service is required, stop DIY conversion early and follow their course-level template — overall WAM shortcuts often get rejected even if your percentage maths is correct.',
      ],
    },
  ],

  'how-to-calculate-wam': [
    {
      facts: [
        {
          title: 'Formula inputs that must be clean',
          items: [
            'WAM = Σ(mark × credit points) ÷ Σ(credit points).',
            'Pull marks from WES/transcript — do not mix remembered percentages.',
            'Match each mark to the correct credit point value for that unit.',
            'Monash official WAM also applies year-level weighting (Year 1 often at 0.5) — check policy when reconciling to transcript WAM.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Five-step calculation process',
          items: [
            'List each completed unit with mark and credit points.',
            'Multiply mark × credit points for every row.',
            'Sum weighted points; sum credit points.',
            'Divide weighted total by credit total to get WAM.',
            'Run conservative/expected/stretch scenarios for incomplete semesters.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Worked mini-example (unequal credits)',
          headers: ['Unit', 'Mark', 'Credits', 'Mark × credits'],
          rows: [
            ['A', '80', '6', '480'],
            ['B', '70', '12', '840'],
            ['Totals', '—', '18', '1320'],
            ['WAM', '—', '—', '1320 ÷ 18 = 73.33'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Common calculation mistakes',
          items: [
            'Averaging percentages without weighting by credit points.',
            'Mixing confirmed and projected marks without labels.',
            'Omitting fails when policy includes them in WAM.',
            'Recalculating only at semester end — too late to change strategy.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Simple average vs weighted WAM',
          headers: ['Method', 'Units 80 (6 cp) & 70 (12 cp)', 'Result'],
          rows: [
            ['Simple average', '(80 + 70) ÷ 2', '75.0'],
            ['WAM (weighted)', '(480 + 840) ÷ 18', '73.33'],
            ['Difference', 'Ignores 12 cp load on Unit B', '−1.67 points'],
            ['Takeaway', 'Always weight by credit points', 'Use WAM formula'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Planning tools after you calculate',
          items: [
            'Monash WAM calculator — ongoing tracker for confirmed marks.',
            'Final grade calculator — exam marks needed for unit targets.',
            'WAM to GPA calculator — external application formats.',
            'Pair calculation with “what is a good WAM” so the number drives a decision.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],

  'monash-wam-to-gpa-conversion': [
    {
      facts: [
        {
          title: 'Why students convert WAM to GPA',
          items: [
            'Monash transcripts emphasise WAM; many portals still ask for GPA.',
            'Monash also computes an official 4.0 GPA from letter grades — separate from WAM.',
            'Forms may want transcript GPA, a destination-specific conversion, or either.',
            'Know which method is required before submitting a single number.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Monash grade bands that drive GPA mapping',
          items: [
            'HD 80–100 → typically 4.0 on Monash 4.0 GPA scale.',
            'D 70–79 → 3.0; C 60–69 → 2.0; P 50–59 → 1.0.',
            'Fail and special grades use lower fixed GPA values on the official scale.',
            'Two distinction WAMs (e.g. 76 vs 79) can share the same GPA band despite different WAM.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Monash coursework bands and typical GPA points',
          headers: ['Mark range', 'Grade', 'GPA 4.0 (typical)', 'GPA 7.0 (planning)'],
          rows: [
            ['80–100', 'HD', '4.0', '7.0'],
            ['70–79', 'D', '3.0', '6.0'],
            ['60–69', 'C', '2.0', '5.0'],
            ['50–59', 'P', '1.0', '4.0'],
            ['0–49', 'N', '0.3*', 'Fail band'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Official GPA vs WAM differences',
          items: [
            'GPA uses grade-point buckets × credit points; WAM uses actual percentage marks.',
            'WAM applies year-level weighting (e.g. Year 1 at 0.5) that GPA handling may not mirror the same way.',
            'High marks inside one band raise WAM but not GPA once the letter grade is fixed.',
            'Prefer printed transcript GPA when a form asks for GPA and it is available.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Band-based planning conversion',
          items: [
            'Map overall WAM to its Monash grade band, then read 4.0 / 7.0 points for estimates.',
            'Borderline WAMs (69.5, 79.8) should include exact WAM plus the band estimate.',
            'Unit-by-unit official GPA can diverge from a whole-of-WAM shortcut.',
            'Linear WAM÷100×4 estimates may disagree with Monash band mapping — follow destination rules.',
          ],
          afterParagraph: 0,
        },
      ],
      tables: [
        {
          caption: 'Quick WAM → GPA planning map',
          headers: ['Overall WAM', 'Band', '4.0 estimate', '7.0 estimate'],
          rows: [
            ['85', 'HD', '4.0', '7.0'],
            ['75', 'D', '3.0', '6.0'],
            ['65', 'C', '2.0', '5.0'],
            ['55', 'P', '1.0', '4.0'],
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'Worked example takeaways',
          items: [
            'Example mix: 82 (12 cp HD), 74 (6 cp D), 65 (6 cp C) → WAM near 76 but official GPA can be ~3.25.',
            'High-credit HDs pull official GPA above a naive “WAM 76 → 3.0” shortcut.',
            'Use WAM calculator for WAM, transcript for official GPA, band tool only for estimates.',
            'Domestic transfers may accept WAM directly without forcing GPA conversion.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'GPA to WAM (reverse) caution',
          items: [
            'No clean inverse formula — GPA loses percentage detail inside bands.',
            'Map GPA back to mid-band WAM ranges only for rough planning.',
            'Fails, near passes, and WN grades distort reverse estimates further.',
            'Prefer forward reporting from confirmed WAM and transcript GPA.',
          ],
          afterParagraph: 0,
        },
      ],
    },
    {
      facts: [
        {
          title: 'What to report on forms',
          items: [
            'Australian forms with WAM language — lead with transcript WAM.',
            'US-style GPA fields — use transcript GPA if listed; else WAM + band estimate + method note.',
            'Never hide a stronger official metric behind only a converted number.',
            'Improve WAM before relying on conversion tricks for competitive cutoffs.',
          ],
          afterParagraph: 0,
        },
      ],
    },
  ],
  ...articleEnrichmentsPart2,
  ...articleEnrichmentsPart3,
};

export function getSectionEnhancements(slug: string): SectionEnhancement[] {
  return enrichments[slug] ?? [];
}
