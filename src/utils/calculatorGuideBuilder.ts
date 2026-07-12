import type {
  CalculatorPageGuideData,
  GuideCallout,
  GuideExample,
  GuideSection,
  GuideTable,
} from '../data/calculatorPageGuides';

export interface StandardCalculatorGuideInput {
  whatItDoes: {
    paragraphs: string[];
    bullets?: string[];
    table?: GuideTable;
  };
  howItWorks: {
    paragraphs: string[];
    bullets?: string[];
    table?: GuideTable;
    callouts?: GuideCallout[];
  };
  whenToUse: {
    paragraphs: string[];
    bullets?: string[];
    table?: GuideTable;
  };
  steps: string[];
  examples: GuideExample[];
  mistakes: {
    paragraphs?: string[];
    bullets: string[];
    callout?: GuideCallout;
  };
  tips: {
    paragraphs?: string[];
    bullets: string[];
  };
  monashNotes?: {
    paragraphs: string[];
    bullets?: string[];
    callout?: GuideCallout;
  };
  /** Existing sections to preserve verbatim at the end. */
  legacySections?: GuideSection[];
}

export function buildStandardCalculatorGuide(input: StandardCalculatorGuideInput): CalculatorPageGuideData {
  const sections: GuideSection[] = [
    {
      heading: 'What This Calculator Does',
      paragraphs: input.whatItDoes.paragraphs,
      bullets: input.whatItDoes.bullets,
      table: input.whatItDoes.table,
    },
    {
      heading: 'How the Calculation Works',
      paragraphs: input.howItWorks.paragraphs,
      bullets: input.howItWorks.bullets,
      table: input.howItWorks.table,
      callouts: input.howItWorks.callouts,
    },
    {
      heading: 'When Students Should Use This Calculator',
      paragraphs: input.whenToUse.paragraphs,
      bullets: input.whenToUse.bullets,
      table: input.whenToUse.table,
    },
    {
      heading: 'Step-by-Step Guide',
      paragraphs: ['Follow this workflow each time you use the tool so your inputs match WES or your unit guide.'],
      steps: input.steps,
    },
    {
      heading: 'Practical Examples',
      paragraphs: [
        'Worked scenarios below use realistic Monash-style marks and credit loads. Enter the same values in the calculator to verify.',
      ],
      examples: input.examples,
    },
    {
      heading: 'Common Mistakes Students Make',
      paragraphs: input.mistakes.paragraphs ?? [],
      bullets: input.mistakes.bullets,
      callouts: input.mistakes.callout ? [input.mistakes.callout] : undefined,
    },
    {
      heading: 'Tips to Improve Academic Performance',
      paragraphs: input.tips.paragraphs ?? [],
      bullets: input.tips.bullets,
    },
  ];

  if (input.monashNotes) {
    sections.push({
      heading: 'Important Notes About Monash University Policies',
      paragraphs: input.monashNotes.paragraphs,
      bullets: input.monashNotes.bullets,
      callouts: input.monashNotes.callout ? [input.monashNotes.callout] : undefined,
    });
  }

  if (input.legacySections?.length) {
    sections.push(...input.legacySections);
  }

  return { sections };
}
