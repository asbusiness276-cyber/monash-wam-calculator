import Seo from '../components/Seo';
import ArticleGridCard from '../components/ArticleGridCard';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { articles } from '../data/articles';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [articlesHome, articlesHowTo] = PAGE_KEYWORD_LINKS['/articles'];

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
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            In-depth guides on WAM benchmarks, honours and scholarship planning, credit points, transcript reading, and
            recovery after a failed unit. Each article is written for Monash students and pairs with our free calculators
            — use the{' '}
            <a href={absoluteUrl(articlesHome.path)} className={INLINE_LINK_CLASS}>{articlesHome.keyword}</a>
            {' '}when you want live numbers first, or open{' '}
            <a href={absoluteUrl(articlesHowTo.path)} className={INLINE_LINK_CLASS}>{articlesHowTo.keyword}</a>
            {' '}for a step-by-step explanation.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {articles.map(article => (
            <div key={article.slug} className="flex min-h-0 h-full">
              <ArticleGridCard article={article} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
