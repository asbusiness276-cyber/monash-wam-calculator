import { useEffect } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  faqItems?: FaqItem[];
  noIndex?: boolean;
  article?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    author: string;
    keywords: string[];
  };
}

const BASE_URL = 'https://monashwamcalculator.com';

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.head.querySelector(`script[data-schema-id="${id}"]`) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-id', id);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function Seo({ title, description, canonicalPath, faqItems = [], noIndex = false, article }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noIndex ? 'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    upsertJsonLd('webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Monash WAM Calculator',
        url: BASE_URL,
      },
    });

    if (faqItems.length > 0) {
      upsertJsonLd('faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      });
    }
    if (article) {
      upsertJsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description,
        author: {
          '@type': 'Organization',
          name: article.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Monash WAM Calculator',
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
        keywords: article.keywords.join(', '),
      });
    }
  }, [title, description, canonicalPath, faqItems, noIndex, article]);

  return null;
}
