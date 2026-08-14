import { useMemo } from 'react';
import Seo from '../components/Seo';
import ArticleAuthorBio from '../components/ArticleAuthorBio';
import ArticleFaqs from '../components/ArticleFaqs';
import ArticleContentBlocks from '../components/ArticleContentBlocks';
import ArticleEndNavigation from '../components/ArticleEndNavigation';
import ArticleFeaturedImage from '../components/ArticleFeaturedImage';
import ArticleRelatedTools from '../components/ArticleRelatedTools';
import ArticleTableOfContents, { ArticleMobileBackToTopButton } from '../components/ArticleTableOfContents';
import AmazonStudentDeals from '../components/AmazonStudentDeals';
import DonationBanner from '../components/DonationBanner';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { articles, getArticleBySlug, getArticleImageAlt } from '../data/articles';
import { getArticleCategory, getArticleCategoryPath, getCategoryArticleNeighbors } from '../data/articleCategories';
import { slugifyArticleHeading } from '../utils/articleHeading';

interface ArticlePostProps {
  slug: string;
}

const keywordInternalLinks: Array<{ keyword: string; href: string }> = [
  { keyword: 'how to calculate wam', href: '/articles/how-to-calculate-wam' },
  { keyword: 'uni year 1 wam weighting', href: '/articles/uni-year-1-wam-weighting-guide' },
  { keyword: 'uni withdrawn fail wam', href: '/articles/uni-withdrawn-fail-wam-guide' },
  { keyword: 'WAM milestones', href: '/articles/uni-wam-milestones-guide' },
  { keyword: 'uni distinction average', href: '/articles/uni-distinction-average-guide' },
  { keyword: 'WAM target', href: '/articles/uni-wam-target-guide' },
  { keyword: 'uni semester wam', href: '/articles/uni-semester-wam-guide' },
  { keyword: 'WAM projection', href: '/articles/uni-wam-projection-guide' },
  { keyword: 'what is a good wam', href: '/articles/what-is-a-good-wam' },
  { keyword: 'how to improve wam at uni', href: '/articles/how-to-improve-wam-at-uni' },
  { keyword: 'uni honours wam requirements', href: '/articles/uni-honours-wam-requirements' },
  { keyword: 'uni scholarship wam requirements', href: '/articles/uni-scholarship-wam-requirements' },
  { keyword: 'failed unit wam uni', href: '/articles/failed-unit-wam-impact-uni' },
  { keyword: 'uni supplementary exam wam', href: '/articles/uni-supplementary-exam-wam-guide' },
  { keyword: 'uni cgpa calculator', href: '/articles/uni-cgpa-explained-guide' },
  { keyword: 'uni exchange grades wam', href: '/articles/uni-exchange-grades-wam-guide' },
  { keyword: "uni dean's honours list", href: '/articles/uni-deans-honours-list-wam-guide' },
  { keyword: 'uni repeat unit wam', href: '/articles/uni-repeat-unit-wam-guide' },
  { keyword: 'WAM internship', href: '/articles/uni-wam-internship-graduate-jobs-guide' },
  { keyword: 'WAM vs gpa postgraduate', href: '/articles/uni-wam-vs-gpa-postgraduate' },
  { keyword: 'wam to gpa', href: '/articles/uni-wam-to-gpa-conversion' },
  { keyword: 'WAM to GPA calculator', href: '/wam-to-gpa-calculator' },
  { keyword: 'percentage to gpa calculator', href: '/articles/percentage-to-gpa-calculator-guide' },
  { keyword: '4.0 gpa calculator', href: '/articles/4-0-gpa-calculator-guide' },
  { keyword: '7.0 scale gpa calculator', href: '/articles/7-0-scale-gpa-calculator-guide' },
  { keyword: 'semester gpa calculator', href: '/articles/semester-gpa-calculator-guide' },
  { keyword: 'gpa to cgpa calculator', href: '/articles/gpa-to-cgpa-calculator-guide' },
  { keyword: 'atar to gpa calculator', href: '/articles/atar-to-gpa-wam-conversion-guide' },
  { keyword: 'grade calculator uni', href: '/articles/uni-final-exam-mark-calculator-guide' },
  { keyword: 'final grade calculator', href: '/final-grade-calculator' },
  { keyword: 'uni credit points wam', href: '/articles/uni-credit-points-wam-explained' },
  { keyword: 'WAM transcript', href: '/articles/how-to-find-wam-on-uni-transcript' },
  { keyword: 'wam calculator uni', href: '/' },
  { keyword: 'WAM calculator', href: '/' },
  { keyword: 'how to convert wam from one university to another', href: '/articles/how-to-convert-wam-from-one-university-to-another' },
  { keyword: 'best universities in australia', href: '/articles/best-universities-in-australia' },
  { keyword: 'best pharmacy universities in australia', href: '/articles/best-pharmacy-universities-in-australia' },
  { keyword: 'best universities for economics in australia', href: '/articles/best-universities-for-economics-in-australia' },
  { keyword: 'the university australia', href: '/articles/uni-university-australia' },
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
  const tocItems = useMemo(
    () =>
      article
        ? [
            ...article.sections.map(section => ({
              id: slugifyArticleHeading(section.heading),
              label: section.heading,
            })),
            { id: 'article-faqs', label: 'FAQs' },
          ]
        : [],
    [article]
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
  const category = getArticleCategory(article.slug);
  const featuredImageAlt = getArticleImageAlt(article.slug);
  const categoryPath = getArticleCategoryPath(category.id);
  const neighbors = useMemo(() => getCategoryArticleNeighbors(slug, articles), [slug]);
  const sidebarRelatedLinks = useMemo(
    () =>
      neighbors.related.map(item => ({
        title: item.title,
        href: `/articles/${item.slug}`,
      })),
    [neighbors.related]
  );

  return (
    <>
      <Seo
        title={`${article.title} | WAM Calculator`}
        description={article.description}
        canonicalPath={`/articles/${article.slug}`}
        ogImage={article.featuredImage}
        ogImageAlt={featuredImageAlt}
        faqItems={article.faqs}
        article={{
          headline: article.title,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          author: ARTICLE_AUTHOR.name,
          keywords: [article.keyword, 'WAM calculator', 'WAM', 'GPA conversion'],
        }}
      />
      <article className="max-w-7xl mx-auto px-4 pt-6 md:pt-8 pb-8 md:pb-10">
        <div className="max-w-4xl">
          <a href="/articles" className="inline-flex text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
            ← Back to articles
          </a>
          <a
            href={getArticleCategoryPath(category.id)}
            className="mt-5 inline-block text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 hover:underline"
          >
            {category.title}
          </a>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{article.keyword}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{article.title}</h1>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Published {article.publishedAt} • Updated {article.updatedAt}
          </p>

          <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
            <ArticleFeaturedImage article={article} priority className="w-full aspect-video object-cover block" />
          </figure>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="min-w-0 max-w-4xl flex-1">
            <div className="mb-6 lg:hidden">
              <ArticleTableOfContents items={tocItems} variant="mobile" />
            </div>

            <div className="space-y-8">
              {article.sections.map(section => {
                const sectionId = slugifyArticleHeading(section.heading);
                return (
                  <section key={section.heading} id={sectionId} className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.headingLink ? (
                        <a
                          href={section.headingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600 dark:hover:text-primary-400 hover:underline"
                        >
                          {section.heading}
                        </a>
                      ) : (
                        section.heading
                      )}
                    </h2>
                    {section.blocks && (
                      <div className="mt-4">
                        <ArticleContentBlocks blocks={section.blocks} />
                      </div>
                    )}
                    {section.paragraphs && (
                      <div
                        className={`space-y-4 text-gray-700 dark:text-gray-300 leading-8 ${
                          section.blocks ? 'mt-4' : 'mt-3'
                        }`}
                      >
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={index}>
                            {renderKeywordLinkedParagraph(paragraph, internalLinks, linkedCountRef, 2)}
                          </p>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            

            

            <ArticleFaqs items={article.faqs} />

            <div className="mt-10 mb-6">
              <DonationBanner />
            </div>

            <ArticleAuthorBio />

            <ArticleRelatedTools slug={slug} />

            <ArticleEndNavigation
              prevArticle={neighbors.prev}
              nextArticle={neighbors.next}
              relatedArticles={neighbors.related}
            />
          </div>

          <div className="hidden lg:block w-[272px] shrink-0">
            <div className="sticky top-24 z-30">
              <div className="max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-y-contain [scrollbar-gutter:stable]">
                <ArticleTableOfContents
                  items={tocItems}
                  variant="sidebar"
                  categoryTitle={category.title}
                  categoryPath={categoryPath}
                  relatedLinks={sidebarRelatedLinks}
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <AmazonStudentDeals />
        </div>
      </article>
      <ArticleMobileBackToTopButton />
    </>
  );
}
