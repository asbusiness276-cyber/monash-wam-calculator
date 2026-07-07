import { useMemo } from 'react';
import Seo from '../components/Seo';
import ArticleAuthorBio from '../components/ArticleAuthorBio';
import ArticleFeaturedImage from '../components/ArticleFeaturedImage';
import ArticleRelatedTools from '../components/ArticleRelatedTools';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { getArticleBySlug } from '../data/articles';

interface ArticlePostProps {
  slug: string;
}

const keywordInternalLinks: Array<{ keyword: string; href: string }> = [
  { keyword: 'how to calculate wam', href: '/articles/how-to-calculate-wam' },
  { keyword: 'monash year 1 wam weighting', href: '/articles/monash-year-1-wam-weighting-guide' },
  { keyword: 'monash withdrawn fail wam', href: '/articles/monash-withdrawn-fail-wam-guide' },
  { keyword: 'monash wam milestones', href: '/articles/monash-wam-milestones-guide' },
  { keyword: 'what is a good wam', href: '/articles/what-is-a-good-wam' },
  { keyword: 'how to improve wam at monash', href: '/articles/how-to-improve-wam-at-monash' },
  { keyword: 'monash honours wam requirements', href: '/articles/monash-honours-wam-requirements' },
  { keyword: 'monash scholarship wam requirements', href: '/articles/monash-scholarship-wam-requirements' },
  { keyword: 'failed unit wam monash', href: '/articles/failed-unit-wam-impact-monash' },
  { keyword: 'monash supplementary exam wam', href: '/articles/monash-supplementary-exam-wam-guide' },
  { keyword: 'monash cgpa calculator', href: '/articles/monash-cgpa-explained-guide' },
  { keyword: 'monash exchange grades wam', href: '/articles/monash-exchange-grades-wam-guide' },
  { keyword: "monash dean's honours list", href: '/articles/monash-deans-honours-list-wam-guide' },
  { keyword: 'monash repeat unit wam', href: '/articles/monash-repeat-unit-wam-guide' },
  { keyword: 'monash wam internship', href: '/articles/monash-wam-internship-graduate-jobs-guide' },
  { keyword: 'monash wam vs gpa postgraduate', href: '/articles/monash-wam-vs-gpa-postgraduate' },
  { keyword: 'wam to gpa', href: '/articles/monash-wam-to-gpa-conversion' },
  { keyword: 'WAM to GPA calculator', href: '/wam-to-gpa-calculator' },
  { keyword: 'grade calculator monash', href: '/articles/monash-final-exam-mark-calculator-guide' },
  { keyword: 'final grade calculator', href: '/final-grade-calculator' },
  { keyword: 'monash credit points wam', href: '/articles/monash-credit-points-wam-explained' },
  { keyword: 'monash wam transcript', href: '/articles/how-to-find-wam-on-monash-transcript' },
  { keyword: 'Monash WAM calculator', href: '/' },
  { keyword: 'how to convert wam from one university to another', href: '/articles/how-to-convert-wam-from-one-university-to-another' },
];

function renderKeywordLinkedParagraph(
  paragraph: string,
  availableLinks: Array<{ keyword: string; href: string }>,
  linkedCountRef: { value: number },
  maxLinks: number
) {
  if (linkedCountRef.value >= maxLinks) {
    return paragraph;
  }

  let nextParagraph = paragraph;
  const linksToRender: Array<{ keyword: string; href: string }> = [];

  for (const link of availableLinks) {
    if (linkedCountRef.value >= maxLinks) break;
    if (nextParagraph.toLowerCase().includes(link.keyword.toLowerCase())) {
      linksToRender.push(link);
      linkedCountRef.value += 1;
    }
  }

  if (linksToRender.length === 0) {
    return paragraph;
  }

  const escapedKeywords = linksToRender.map(item => item.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const matcher = new RegExp(`(${escapedKeywords.join('|')})`, 'i');
  const parts = nextParagraph.split(matcher);

  return parts.map((part, index) => {
    const match = linksToRender.find(item => item.keyword.toLowerCase() === part.toLowerCase());
    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }
    return (
      <a key={`${match.href}-${index}`} href={absoluteUrl(match.href)} className={INLINE_LINK_CLASS}>
        {part}
      </a>
    );
  });
}

export default function ArticlePost({ slug }: ArticlePostProps) {
  const article = useMemo(() => getArticleBySlug(slug), [slug]);
  const internalLinks = useMemo(
    () => keywordInternalLinks.filter(item => item.href !== `/articles/${slug}`).slice(0, 2),
    [slug]
  );

  if (!article) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Article not found</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">Try visiting the full article list page.</p>
        <a href="/articles" className="inline-flex mt-4 text-primary-600 dark:text-primary-400 hover:underline">
          Go to articles
        </a>
      </section>
    );
  }

  const linkedCountRef = { value: 0 };

  return (
    <>
      <Seo
        title={`${article.title} | Monash WAM Calculator`}
        description={article.description}
        canonicalPath={`/articles/${article.slug}`}
        faqItems={article.faqs}
        article={{
          headline: article.title,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          author: ARTICLE_AUTHOR.name,
          keywords: [article.keyword, 'Monash WAM calculator', 'WAM', 'GPA conversion'],
        }}
      />
      <article className="max-w-4xl mx-auto px-4 pt-6 md:pt-8 pb-8 md:pb-10">
        <a href="/articles" className="inline-flex text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
          ← Back to articles
        </a>
        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
          {article.keyword}
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{article.title}</h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Published {article.publishedAt} • Updated {article.updatedAt}
        </p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
          <ArticleFeaturedImage article={article} priority className="w-full aspect-video object-cover block" />
        </figure>

        <div className="mt-6 space-y-6">
          {article.sections.map(section => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.heading}</h2>
              <div className="mt-3 space-y-4 text-gray-700 dark:text-gray-300 leading-8">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{renderKeywordLinkedParagraph(paragraph, internalLinks, linkedCountRef, 2)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <ArticleAuthorBio />

        <ArticleRelatedTools faqs={article.faqs} />
      </article>
    </>
  );
}
