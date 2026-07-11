import AuthorAvatar from '../components/AuthorAvatar';
import AuthorSocialLinks from '../components/AuthorSocialLinks';
import PageFaq from '../components/PageFaq';
import Seo from '../components/Seo';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { articles } from '../data/articles';
import { CALCULATOR_COUNT } from '../data/calculatorCatalog';

const authorFaqs = [
  {
    question: 'Who writes articles on Monash WAM Calculator?',
    answer: `${ARTICLE_AUTHOR.name} writes and maintains editorial guides and calculator documentation on this site.`,
  },
  {
    question: 'Is the author affiliated with Monash University?',
    answer:
      'No. Saahil is an independent creator. This site is not endorsed by Monash University or any faculty.',
  },
  {
    question: 'How can I contact the author?',
    answer: `Use the contact page or email ${ARTICLE_AUTHOR.email} for editorial questions, corrections, or partnership enquiries.`,
  },
];

export default function Author() {
  const articleCount = articles.length;

  return (
    <>
      <Seo
        title={`About ${ARTICLE_AUTHOR.name} | Author — Monash WAM Calculator`}
        description={`Meet ${ARTICLE_AUTHOR.name}, founder and editor of Monash WAM Calculator — ${CALCULATOR_COUNT} free tools and ${articleCount} student guides on WAM, GPA, and Australian university life.`}
        canonicalPath="/about-author"
        faqItems={authorFaqs}
        ogImage={ARTICLE_AUTHOR.avatarWebp}
        ogImageAlt={ARTICLE_AUTHOR.avatarAlt}
        person={{
          name: ARTICLE_AUTHOR.name,
          jobTitle: ARTICLE_AUTHOR.role,
          description: ARTICLE_AUTHOR.longBio,
          image: ARTICLE_AUTHOR.avatarWebp,
          url: '/about-author',
          sameAs: [ARTICLE_AUTHOR.linkedin, ARTICLE_AUTHOR.instagram],
          email: ARTICLE_AUTHOR.email,
        }}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <a href="/about-us" className="inline-flex text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
          ← About us
        </a>

        <div className="mt-6 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
          <AuthorAvatar size="lg" priority />
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
              {ARTICLE_AUTHOR.role}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{ARTICLE_AUTHOR.name}</h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{ARTICLE_AUTHOR.longBio}</p>
            <AuthorSocialLinks className="mt-4" />
          </div>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Areas of focus</h2>
            <ul className="list-disc list-inside space-y-1">
              {ARTICLE_AUTHOR.expertise.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-4 text-center">
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{CALCULATOR_COUNT}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Calculators maintained</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-4 text-center">
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{articleCount}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Guides published</p>
            </div>
          </div>

          <p>
            Browse the{' '}
            <a href={absoluteUrl('/articles')} className={INLINE_LINK_CLASS}>
              student articles
            </a>
            , try the{' '}
            <a href={absoluteUrl('/')} className={INLINE_LINK_CLASS}>
              Monash WAM calculator
            </a>
            , or{' '}
            <a href={absoluteUrl('/contact-us')} className={INLINE_LINK_CLASS}>
              contact us
            </a>{' '}
            with corrections or suggestions.
          </p>
        </div>
      </section>

      <PageFaq title="Author FAQs" items={authorFaqs} />
    </>
  );
}
