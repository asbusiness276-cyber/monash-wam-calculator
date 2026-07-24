import { INLINE_LINK_CLASS } from '../constants/site';

/** Short disclosure for pages that may show affiliate recommendations. */
export default function AffiliateDisclosure({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-gray-500 dark:text-gray-400 leading-relaxed ${className}`}>
      <span className="font-semibold text-gray-600 dark:text-gray-300">Disclosure:</span> Some links may be
      affiliate links. If you buy or sign up through them, we may earn a commission at no extra cost to you. We only
      recommend tools that fit Monash student planning — this site is not affiliated with Monash University. See our{' '}
      <a href="/privacy-policy" className={INLINE_LINK_CLASS}>
        privacy policy
      </a>
      .
    </p>
  );
}
