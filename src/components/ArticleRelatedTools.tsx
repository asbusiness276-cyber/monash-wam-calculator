import RelatedCalculators from './RelatedCalculators';

/** Related calculators at the end of an article (after author bio). */
export default function ArticleRelatedTools() {
  return (
    <RelatedCalculators
      className="mt-8 !max-w-none !mx-0 !px-0"
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
  );
}
