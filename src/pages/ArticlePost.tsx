import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import ArticleFaqProducts from '../components/ArticleFaqProducts';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { getArticleBySlug } from '../data/articles';

interface ArticlePostProps {
  slug: string;
}

const keywordInternalLinks: Array<{ keyword: string; href: string }> = [
  { keyword: 'how to calculate wam', href: '/articles/how-to-calculate-wam' },
  { keyword: 'what is a good wam', href: '/articles/what-is-a-good-wam' },
  { keyword: 'WAM to GPA calculator', href: '/wam-to-gpa-calculator' },
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
          author: 'Monash WAM Calculator',
          keywords: [article.keyword, 'Monash WAM calculator', 'WAM', 'GPA conversion'],
        }}
      />
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-10">
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

        <figure className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-900">
          {article.showToolEmbed !== false && article.referenceEmbed ? (
            <>
              <iframe
                src={article.referenceEmbed.path}
                title={article.referenceEmbed.title}
                className="w-full h-[min(70vh,520px)] min-h-[320px] block border-0"
                loading="eager"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
              <figcaption className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 leading-relaxed">
                {article.referenceEmbed.caption}
              </figcaption>
            </>
          ) : (
            <img
              src={article.featuredImage}
              alt={article.featuredImageAlt}
              className="w-full aspect-video object-cover block"
              loading="eager"
            />
          )}
        </figure>

        <div className="mt-8 space-y-8">
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

        <ArticleFaqProducts
          slug={slug}
          faqs={article.faqs}
          openFaq={openFaq}
          onToggleFaq={index => setOpenFaq(openFaq === index ? null : index)}
        />
      </article>
    </>
  );
}
