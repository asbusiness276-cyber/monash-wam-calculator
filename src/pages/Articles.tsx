import Seo from '../components/Seo';
import ArticleGridCard from '../components/ArticleGridCard';
import { ArticleSearchBar, useArticleSearch } from '../components/ArticleSearch';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { ARTICLE_CATEGORIES, getArticleCategoryPath } from '../data/articleCategories';
import { CALCULATOR_COUNT } from '../data/calculatorCatalog';
import { articles } from '../data/articles';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';
import DonationBanner from '../components/DonationBanner';

const [articlesHome, articlesHowTo] = PAGE_KEYWORD_LINKS['/articles'];

export default function Articles() {
  const { query, setQuery, filteredGroups, resultCount, trimmedQuery } = useArticleSearch();

  return (
    <>
      <Seo
        title="Student Articles | WAM Calculator"
        description="Browse Uni student guides by category: WAM fundamentals, GPA conversion, honours, scholarships, exam recovery, and planning targets."
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

        <div className="mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">What You Will Find Here</h2>
            <p>
              UniWAMCalculator.com publishes {articles.length} long-form guides written for students who need
              more than a one-line FAQ. Each article explains Uni grading concepts in plain language — credit
              points, year-level weighting, distinction average, supplementary exams, exchange grades — and links to
              the free calculator that matches the topic. Guides typically run 800–1,600 words with worked examples,
              tables, and actionable checklists rather than generic SEO filler.
            </p>
            <p className="mt-3">
              Content is organised into six categories below. Use the search bar to jump straight to a topic — try
              &quot;honours&quot;, &quot;scholarship&quot;, &quot;failed unit&quot;, or &quot;GPA conversion&quot; — or
              browse category pills when you want a structured reading path from fundamentals through to recovery
              planning.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How to Use Articles With Calculators</h2>
            <p>
              Articles and calculators are designed to work together. Read first when you need context — for example
              how Uni treats withdrawn fails, or what distinction average means for scholarships. Open the linked
              calculator when you have marks ready and want live numbers. Many students run a projection calculator
              mid-semester, then return to the matching article before final exams to confirm policy details.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>WAM fundamentals → homepage WAM calculator and semester WAM tools</li>
              <li>GPA conversion → WAM to GPA, percentage to GPA, and CGPA calculators</li>
              <li>Merit and honours → distinction average, scholarship WAM, and honours calculators</li>
              <li>Recovery → failed unit, supp/repeat, and final grade calculators</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-2xl">
          <ArticleSearchBar
            query={query}
            onChange={setQuery}
            resultCount={trimmedQuery ? resultCount : undefined}
          />
        </div>

        <nav
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Article categories"
        >
          {ARTICLE_CATEGORIES.map(category => (
            <a
              key={category.id}
              href={getArticleCategoryPath(category.id)}
              className="inline-block rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {category.title}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-12">
          {filteredGroups.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">No articles matched your search. Try another keyword.</p>
          ) : (
            filteredGroups.map(group => (
            <section key={group.id} className="scroll-mt-24">
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
            ))
          )}
        </div>

        <p className="mt-12 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl">
          Every article links to relevant calculators so you can move from reading to modelling your own marks in one
          session. Browse the full{' '}
          <a href={absoluteUrl('/calculators')} className={INLINE_LINK_CLASS}>calculators directory</a>
          {' '}for all {CALCULATOR_COUNT} tools grouped by WAM, GPA, exams, and merit planning.
        </p>
        
        <div className="mt-12">
          <DonationBanner />
        </div>

      </section>
    </>
  );
}
