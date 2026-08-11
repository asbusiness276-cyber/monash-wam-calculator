import AffiliateDisclosure from './AffiliateDisclosure';
import { getActiveAffiliateOffers } from '../constants/monetization';
import { INLINE_LINK_CLASS } from '../constants/site';

/**
 * Renders only when at least one affiliate offer has a live tracking URL.
 * Paste CF/Awin links in src/constants/monetization.ts to enable.
 */
export default function AffiliateOffers() {
  const offers = getActiveAffiliateOffers();
  if (offers.length === 0) {
    return null;
  }

  return (
    <section className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 sm:p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Student tools worth knowing</h2>
      <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        Optional products that pair with WAM planning — not required to use any calculator on this site.
      </p>
      <ul className="mt-4 space-y-3">
        {offers.map(offer => (
          <li key={offer.id}>
            <a
              href={offer.href}
              className={`${INLINE_LINK_CLASS} text-base font-semibold`}
              target="_blank"
              rel={offer.rel ?? 'noopener noreferrer sponsored'}
              onClick={() => {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'affiliate_click', {
                    offer_id: offer.id,
                    network: offer.network,
                  });
                }
              }}
            >
              {offer.title}
            </a>
            <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{offer.description}</p>
          </li>
        ))}
      </ul>
      <AffiliateDisclosure className="mt-4" />
    </section>
  );
}
