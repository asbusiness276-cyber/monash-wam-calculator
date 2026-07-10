import Seo from '../components/Seo';
import ArticleGridCard from '../components/ArticleGridCard';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { articles } from '../data/articles';
import { ARTICLE_CATEGORIES, groupArticlesByCategory } from '../data/articleCategories';
import { CALCULATOR_COUNT } from '../data/calculatorCatalog';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [articlesHome, articlesHowTo] = PAGE_KEYWORD_LINKS['/articles'];
const groupedArticles = groupArticlesByCategory(articles);

export default function Articles() {
  return (
    <>
      <Seo
        title="Student Articles | Monash WAM Calculator"
        description="Browse Monash student guides by category: WAM fundamentals, GPA conversion, honours, scholarships, exam recovery, and planning targets."
        canonicalPath="/articles"
      />
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Student Articles</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            In-depth guides organised by topic — WAM maths, planning targets, GPA conversion, merit awards, and recovery
            after a tough semester. Each article pairs with our free calculators — use the{' '}
            <a href={absoluteUrl(articlesHome.path)} className={INLINE_LINK_CLASS}>{articlesHome.keyword}</a>
            {' '}when you want live numbers first, or open{' '}
            <a href={absoluteUrl(articlesHowTo.path)} className={INLINE_LINK_CLASS}>{articlesHowTo.keyword}</a>
            {' '}for a step-by-step explanation.
          </p>
        </div>

        <nav
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Article categories"
        >
          {ARTICLE_CATEGORIES.map(category => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-block rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {category.title}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-12">
          {groupedArticles.map(group => (
            <section key={group.id} id={group.id} className="scroll-mt-24">
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{group.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">{group.description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{group.articles.length} guides</p>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                {group.articles.map(article => (
                  <div key={article.slug} className="flex min-h-0 h-full">
                    <ArticleGridCard article={article} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl">
          Every article links to relevant calculators so you can move from reading to modelling your own marks in one
          session. Browse the full{' '}
          <a href={absoluteUrl('/calculators')} className={INLINE_LINK_CLASS}>calculators directory</a>
          {' '}for all {CALCULATOR_COUNT} tools grouped by WAM, GPA, exams, and merit planning.
        </p>
      </section>
    </>
  );
}
