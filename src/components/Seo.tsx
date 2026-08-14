import { useEffect } from 'react';
import { getCookieConsent, trackPageView } from '../utils/cookieConsent';
import {
  breadcrumbCrumbsToJsonLd,
  buildBreadcrumbCrumbs,
  getWebPageSchemaType,
  isCalculatorRoute,
} from '../utils/seoBreadcrumbs';
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  getOgImageDimensions,
  resolveOgImageUrl,
} from '../utils/ogImageMeta';

export interface FaqItem {
  question: string;
  answer: string;
}

interface SeoPerson {
  name: string;
  jobTitle?: string;
  description: string;
  image: string;
  url: string;
  sameAs: string[];
  email?: string;
}

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  faqItems?: FaqItem[];
  noIndex?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
  person?: SeoPerson;
  article?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    author: string;
    keywords: string[];
  };
}

const BASE_URL = 'https://uniwamcalculator.com';
const ORGANIZATION_LOGO = `${BASE_URL}/logo.png`;
const ROBOTS_INDEX =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
const ROBOTS_NOINDEX =
  'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

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

function removeJsonLd(id: string) {
  const script = document.head.querySelector(`script[data-schema-id="${id}"]`);
  if (script) {
    script.remove();
  }
}

function stripTitleSuffix(title: string): string {
  return title.replace(/\s*\|\s*WAM Calculator.*$/i, '').trim();
}

export default function Seo({
  title,
  description,
  canonicalPath,
  faqItems = [],
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  person,
  article,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    const ogImageUrl = resolveOgImageUrl(ogImage, BASE_URL);
    const { width: ogWidth, height: ogHeight } = getOgImageDimensions(ogImage);
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', article ? 'article' : 'website');
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'WAM Calculator');
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_AU');
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImageUrl);
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', ogImageAlt);
    upsertMeta('meta[property="og:image:width"]', 'property', 'og:image:width', String(ogWidth));
    upsertMeta('meta[property="og:image:height"]', 'property', 'og:image:height', String(ogHeight));
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImageUrl);
    upsertMeta('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);
    upsertMeta('meta[name="robots"]', 'name', 'robots', noIndex ? ROBOTS_NOINDEX : ROBOTS_INDEX);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const breadcrumbCrumbs = buildBreadcrumbCrumbs(canonicalPath, title);
    upsertJsonLd('breadcrumb', breadcrumbCrumbsToJsonLd(breadcrumbCrumbs));

    if (canonicalPath === '/') {
      upsertJsonLd('webapp', {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'WAM Calculator',
        alternateName: [
          'WAM Calculator',
          'WAM calculator',
          'WAM calculator Uni',
          'the university WAM calculator',
        ],
        description:
          'Free WAM calculator for the university students. Compute official Weighted Average Mark with Year 1 half weighting, credit points, and HD/D grade bands.',
        url: BASE_URL,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
        },
        featureList: [
          'Official WAM with Year 1 0.5 weighting',
          'Planning WAM comparison',
          'WAM to GPA conversion',
          'Mobile-friendly unit entry',
        ],
      });
      upsertJsonLd('howto', {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to calculate WAM at Uni',
        description:
          'Use the free WAM calculator to compute your Weighted Average Mark from unit marks and credit points.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Add your units',
            text: 'Enter each unit code, mark (0–100), and credit points.',
          },
          {
            '@type': 'HowToStep',
            name: 'Check credit weighting',
            text: 'Higher-credit units affect your WAM more than low-credit electives.',
          },
          {
            '@type': 'HowToStep',
            name: 'Read your WAM',
            text: 'The calculator shows your weighted average, grade band (HD/D/C/P), and optional WAM to GPA conversion.',
          },
        ],
      });
    } else if (isCalculatorRoute(canonicalPath)) {
      removeJsonLd('howto');
      upsertJsonLd('webapp', {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: stripTitleSuffix(title),
        description,
        url: canonicalUrl,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript',
        isPartOf: {
          '@type': 'WebSite',
          name: 'WAM Calculator',
          url: BASE_URL,
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD',
        },
      });
    } else {
      removeJsonLd('webapp');
      removeJsonLd('howto');
    }

    upsertJsonLd('webpage', {
      '@context': 'https://schema.org',
      '@type': getWebPageSchemaType(canonicalPath),
      name: title,
      description,
      url: canonicalUrl,
      inLanguage: 'en-AU',
      isPartOf: {
        '@type': 'WebSite',
        name: 'WAM Calculator',
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
    } else {
      removeJsonLd('faq');
    }

    if (article) {
      upsertJsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description,
        image: {
          '@type': 'ImageObject',
          url: ogImageUrl,
          width: ogWidth,
          height: ogHeight,
          caption: ogImageAlt,
          description: ogImageAlt,
        },
        author: {
          '@type': 'Person',
          name: article.author,
          url: `${BASE_URL}/about-author`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'WAM Calculator',
          url: BASE_URL,
          logo: {
            '@type': 'ImageObject',
            url: ORGANIZATION_LOGO,
          },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
        keywords: article.keywords.join(', '),
      });
    } else {
      removeJsonLd('article');
    }

    if (person) {
      const personImageUrl = person.image.startsWith('http') ? person.image : `${BASE_URL}${person.image}`;
      upsertJsonLd('person', {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: person.name,
        jobTitle: person.jobTitle,
        description: person.description,
        image: personImageUrl,
        url: `${BASE_URL}${person.url}`,
        sameAs: person.sameAs,
        email: person.email,
        worksFor: {
          '@type': 'Organization',
          name: 'WAM Calculator',
          url: BASE_URL,
        },
      });
    } else {
      removeJsonLd('person');
    }

    if (getCookieConsent()) {
      trackPageView(canonicalPath, title);
    }
  }, [title, description, canonicalPath, faqItems, noIndex, ogImage, ogImageAlt, article, person]);

  return null;
}
