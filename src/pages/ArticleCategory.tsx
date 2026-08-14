import Seo from '../components/Seo';
import ArticleGridCard from '../components/ArticleGridCard';
import NotFound from './NotFound';
import { articles } from '../data/articles';
import {
  ARTICLE_CATEGORIES,
  getArticleCategoryById,
  getArticleCategoryId,
  getArticleCategoryPath,
} from '../data/articleCategories';

interface ArticleCategoryProps {
  categoryId: string;
}

export default function ArticleCategory({ categoryId }: ArticleCategoryProps) {
  const category = getArticleCategoryById(categoryId);

  if (!category) {
    return <NotFound />;
  }

  const categoryArticles = articles.filter(article => getArticleCategoryId(article.slug) === category.id);

  return (
    <>
      <Seo
        title={`${category.title} Articles | WAM Calculator`}
        description={`${category.description} Browse ${category.title.toLowerCase()} guides for Uni students.`}
        canonicalPath={getArticleCategoryPath(category.id)}
      />
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <a href="/articles" className="inline-flex text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
          ← All articles
        </a>

        <div className="mt-5 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
            Article Category
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{category.title}</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">{category.description}</p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{category.intro}</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{categoryArticles.length} guides</p>
        </div>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Article categories">
          {ARTICLE_CATEGORIES.map(item => (
            <a
              key={item.id}
              href={getArticleCategoryPath(item.id)}
              className={`inline-block rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                item.id === category.id
                  ? 'border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-400 dark:bg-primary-900/30 dark:text-primary-300'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-primary-400 hover:text-primary-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-primary-400'
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {categoryArticles.map(article => (
            <div key={article.slug} className="flex min-h-0 h-full">
              <ArticleGridCard article={article} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
