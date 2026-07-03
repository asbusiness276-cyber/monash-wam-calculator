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

        <div className="mt-8 max-w-3xl bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">What Our Guides Cover</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Articles on this site answer real Monash student questions: how WAM is calculated with year-level weighting,
            what counts as a good WAM, how failed units and supplementary exams affect your average, and how exchange SFR
            credit interacts with degree progress. We publish faculty-aware planning content for honours entry,
            scholarship merit bands, dean&apos;s honours list recognition, CGPA reporting, and postgraduate WAM vs GPA
            decisions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">WAM fundamentals</p>
              <p className="text-gray-600 dark:text-gray-400">
                Credit points, official formula, transcript reading, and semester tracking workflows.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Merit &amp; awards</p>
              <p className="text-gray-600 dark:text-gray-400">
                Scholarships, distinction average, dean&apos;s honours list, and internship WAM screens.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Recovery &amp; exams</p>
              <p className="text-gray-600 dark:text-gray-400">
                Failed units, supplementary exams, repeat rules, and final exam mark planning.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Pathways</p>
              <p className="text-gray-600 dark:text-gray-400">
                Honours requirements, exchange grades, WAM to GPA conversion, and postgraduate reporting.
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Every article links to relevant calculators so you can move from reading to modelling your own marks in one
            session. Browse the full{' '}
            <a href={absoluteUrl('/calculators')} className={INLINE_LINK_CLASS}>calculators directory</a>
            {' '}for all 26 tools. Content is updated when student questions or Monash policy emphasis shifts — check the
            published date on each guide.
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
