import { ArrowRight, Monitor } from 'lucide-react';
import AuthorAvatar from '../AuthorAvatar';
import PremiumCard from './ui/PremiumCard';
import { ARTICLE_AUTHOR } from '../../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../../constants/site';

export default function HomeTrustRow() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PremiumCard
            id="wes-wam"
            className="scroll-mt-20 rounded-3xl border-primary-200/80 bg-gradient-to-br from-primary-50/90 to-white p-6 md:p-8 dark:border-primary-800/60 dark:from-primary-950/40 dark:to-gray-800/90"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Monitor size={22} strokeWidth={2} aria-hidden />
              </span>
              <div className="min-w-0">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Verify on Monash WES</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Your certified cumulative WAM appears on your unofficial academic record in WES. After each results
                  release, compare WES with this calculator using the same marks, credit points, and year levels.
                  Step-by-step paths are in our{' '}
                  <a href={absoluteUrl('/articles/how-to-find-wam-on-monash-transcript')} className={INLINE_LINK_CLASS}>
                    Monash transcript guide
                  </a>
                  .
                </p>
              </div>
            </div>
          </PremiumCard>

          <PremiumCard hover className="flex gap-5 rounded-3xl p-6 md:p-8">
            <AuthorAvatar size="md" />
            <div className="min-w-0">
              <p className="home-eyebrow">About the editor</p>
              <h2 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">{ARTICLE_AUTHOR.name}</h2>
              <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {ARTICLE_AUTHOR.bio}
              </p>
              <a
                href={absoluteUrl('/about-author')}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Meet the author
                <ArrowRight size={14} aria-hidden />
              </a>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
}
