import { ArrowRight, Monitor } from 'lucide-react';
import AuthorAvatar from '../AuthorAvatar';
import CardIcon from './ui/CardIcon';
import PremiumCard from './ui/PremiumCard';
import { ARTICLE_AUTHOR } from '../../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../../constants/site';

export default function HomeTrustRow() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="card-grid grid-cols-1 lg:grid-cols-2">
          <PremiumCard id="wes-wam" variant="accent" padding="lg" className="scroll-mt-20">
            <div className="card-row-header">
              <CardIcon icon={Monitor} />
              <div className="min-w-0">
                <h2 className="card-title-lg">Verify on Uni WES</h2>
                <p className="card-body mt-3">
                  Your certified cumulative WAM appears on your unofficial academic record in WES. After each results
                  release, compare WES with this calculator using the same marks, credit points, and year levels.
                  Step-by-step paths are in our{' '}
                  <a href={absoluteUrl('/articles/how-to-find-wam-on-uni-transcript')} className={INLINE_LINK_CLASS}>
                    Uni transcript guide
                  </a>
                  .
                </p>
              </div>
            </div>
          </PremiumCard>

          <PremiumCard hover padding="lg" className="flex gap-5">
            <AuthorAvatar size="md" />
            <div className="min-w-0">
              <p className="home-eyebrow">About the editor</p>
              <h2 className="card-title-lg mt-2">{ARTICLE_AUTHOR.name}</h2>
              <p className="card-body mt-2 line-clamp-4">{ARTICLE_AUTHOR.bio}</p>
              <a
                href={absoluteUrl('/about-author')}
                className="card-action mt-4 transition-colors hover:text-primary-700 dark:hover:text-primary-300"
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
