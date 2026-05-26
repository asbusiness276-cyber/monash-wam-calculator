import { articles } from '../data/articles';

export default function ArticlesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-8">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-7">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Read Articles</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Helpful guides for WAM strategy, conversion, and planning.
            </p>
          </div>
          <a href="/articles" className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
            View all articles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(0, 3).map(article => (
            <article
              key={article.slug}
              className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-50 dark:bg-gray-900/50"
            >
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
                <img
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {article.keyword}
                </p>
                <h3 className="mt-1 text-sm font-bold text-gray-900 dark:text-white line-clamp-2">{article.title}</h3>
                <a
                  href={`/articles/${article.slug}`}
                  className="inline-flex mt-3 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Read article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
