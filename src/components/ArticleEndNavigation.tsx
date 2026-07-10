import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ArticleData } from '../data/articles';

interface ArticleEndNavigationProps {
  prevArticle?: ArticleData;
  nextArticle?: ArticleData;
  relatedArticles?: ArticleData[];
}

export default function ArticleEndNavigation({
  prevArticle,
  nextArticle,
  relatedArticles = [],
}: ArticleEndNavigationProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Finished reading?</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Jump back to the top or explore more guides below.
          </p>
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 text-white px-5 py-3 text-sm font-semibold hover:bg-primary-700 transition-colors"
        >
          <ArrowUp size={16} />
          Back to top
        </button>
      </div>

      {(prevArticle || nextArticle) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <a
              href={`/articles/${prevArticle.slug}`}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
            >
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                <ChevronLeft size={14} />
                Previous article
              </span>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {prevArticle.title}
              </p>
            </a>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <a
              href={`/articles/${nextArticle.slug}`}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary-300 dark:hover:border-primary-700 transition-colors sm:text-right"
            >
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 sm:justify-end sm:w-full">
                Next article
                <ChevronRight size={14} />
              </span>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {nextArticle.title}
              </p>
            </a>
          ) : null}
        </div>
      )}

      {relatedArticles.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            More in this category
          </p>
          <ul className="space-y-2">
            {relatedArticles.map(item => (
              <li key={item.slug}>
                <a
                  href={`/articles/${item.slug}`}
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <a href="/articles" className="inline-flex text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
        ← All articles
      </a>
    </footer>
  );
}
