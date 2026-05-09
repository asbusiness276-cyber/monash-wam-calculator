import Seo from '../components/Seo';
import { articles } from '../data/articles';

export default function Articles() {
  return (
    <>
      <Seo
        title="Student Articles | Monash WAM Calculator"
        description="Read detailed student guides on WAM benchmarks, WAM conversion, and weighted average mark strategy."
        canonicalPath="/articles"
      />
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Student Articles</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            In-depth guides focused on WAM strategy, conversion methods, and academic planning.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map(article => (
            <article
              key={article.slug}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
                <img
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {article.keyword}
                </p>
                <h2 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">{article.title}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{article.description}</p>
                <a
                  href={`/articles/${article.slug}`}
                  className="inline-flex mt-4 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Read article
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
