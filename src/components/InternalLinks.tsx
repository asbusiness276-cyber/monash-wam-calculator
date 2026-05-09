import { absoluteUrl } from '../constants/site';
import type { KeywordInternalLink } from '../data/pageKeywordLinks';

interface InternalLinksProps {
  links: readonly [KeywordInternalLink, KeywordInternalLink];
  title?: string;
}

/**
 * Editorial internal links: exactly two keyword anchors (SEO), absolute same-origin URLs.
 */
export default function InternalLinks({ links, title = 'Explore related calculators' }: InternalLinksProps) {
  const [a, b] = links;

  return (
    <section className="max-w-4xl mx-auto px-4 pb-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-7 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Related on this site:{' '}
          <a
            href={absoluteUrl(a.path)}
            className="font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            {a.keyword}
          </a>
          {' and '}
          <a
            href={absoluteUrl(b.path)}
            className="font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            {b.keyword}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
