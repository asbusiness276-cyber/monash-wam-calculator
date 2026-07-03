import RelatedCalculators from './RelatedCalculators';
import PageFaq from './PageFaq';
import { FaqItem } from './Seo';

interface ArticleRelatedToolsProps {
  faqs: FaqItem[];
}

/** Article footer: related calculators + FAQs (no affiliate products). */
export default function ArticleRelatedTools({ faqs }: ArticleRelatedToolsProps) {
  return (
    <>
      <RelatedCalculators
        className="mt-8"
        title="Try These Calculators"
        description="Model your WAM, GPA, and targets with the same tools referenced in this guide."
        hrefs={[
          '/',
          '/wam-to-gpa-calculator',
          '/monash-gpa-calculator',
          '/wam-target-calculator',
          '/final-grade-calculator',
          '/supp-repeat-wam-calculator',
        ]}
        maxItems={6}
      />
      <PageFaq items={faqs} />
    </>
  );
}
