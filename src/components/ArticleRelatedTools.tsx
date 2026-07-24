import RelatedCalculators from './RelatedCalculators';
import { getArticleRelatedCalculatorHrefs } from '../data/articleRelatedTools';

/** Related calculators at the end of an article (after author bio). */
export default function ArticleRelatedTools({ slug }: { slug: string }) {
  return (
    <RelatedCalculators
      className="mt-8 !max-w-none !mx-0 !px-0"
      title="Try These Calculators"
      description="Model your WAM, GPA, and targets with the same tools referenced in this guide."
      hrefs={getArticleRelatedCalculatorHrefs(slug)}
      maxItems={6}
    />
  );
}
