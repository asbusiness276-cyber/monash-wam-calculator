import type { FaqItem } from '../components/Seo';

/** Homepage FAQs — single source for visible accordion + FAQPage JSON-LD. */
export const HOME_FAQS: FaqItem[] = [
  {
    question: 'How is WAM calculated at Monash University?',
    answer:
      'Official Monash WAM = sum(mark × credit points × year weight) ÷ sum(credit points × year weight). Year 1 units use 0.5 weight; Year 2 and above use 1.0. Enter each unit in this free Monash WAM calculator to see official and planning WAM side by side — then verify on your WES transcript.',
  },
  {
    question: 'What is a WAM calculator for Monash students?',
    answer:
      'A WAM calculator computes your Weighted Average Mark from unit percentage marks and credit points. This Monash WAM calculator applies official year-level weighting (not a plain average), shows HD/D/C/P bands, and links to WAM to GPA conversion when applications need grade points.',
  },
  {
    question: 'Where can I find my official WAM on Monash WES?',
    answer:
      'Log into WES via my.monash and open your unofficial academic record from the results area. Cumulative WAM appears to three decimal places alongside GPA. Copy unit marks from WES into this calculator to sanity-check or model what-if scenarios before results are final.',
  },
  {
    question: 'Why does my spreadsheet WAM differ from WES?',
    answer:
      'Generic averages often ignore Monash Year 1 half weighting (0.5), exclude special grade codes, or use wrong credit points. This calculator applies official-style year weights. Read the Year 1 WAM weighting guide if your simple mean still does not match WES.',
  },
  {
    question: 'What is a good WAM at Monash?',
    answer:
      'Broad bands: HD 80+, distinction 70–79, credit 60–69, pass 50–59. Honours, scholarships, and employers may use higher planning thresholds — use the WAM milestones checker to see which bands you already meet.',
  },
  {
    question: 'Is this Monash WAM calculator official?',
    answer:
      'No. This is an independent educational tool for planning. Official outcomes always come from your Monash transcript and faculty policies.',
  },
  {
    question: 'Do failed units count in Monash WAM?',
    answer:
      'In most cases, yes — failed units with recorded marks are included unless excluded by specific grade categories. Include fails when modelling recovery scenarios.',
  },
  {
    question: 'Can I convert WAM to GPA?',
    answer:
      'Yes. Use the WAM to GPA calculator on this site for Monash 4.0 and 7.0 band estimates. WAM and GPA are related but not identical metrics.',
  },
];
