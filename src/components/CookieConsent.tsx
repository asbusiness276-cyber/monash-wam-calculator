import { useEffect, useState } from 'react';
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  setCookieConsent,
  type CookieConsentChoice,
} from '../utils/cookieConsent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);

    const openSettings = () => setVisible(true);
    window.addEventListener(COOKIE_CONSENT_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, openSettings);
  }, []);

  const saveChoice = (choice: CookieConsentChoice) => {
    setCookieConsent(choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-5"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl p-5 sm:p-6">
        <h2 id="cookie-consent-title" className="text-sm font-bold text-gray-900 dark:text-white">
          Cookies
        </h2>
        <p id="cookie-consent-description" className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          We use cookies to run this site. <strong>Essential only</strong> enables basic Google Analytics (no ads).{' '}
          <strong>Accept all</strong> also enables Google AdSense.{' '}
          <a href="/privacy-policy" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
            Privacy Policy
          </a>
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:justify-end">
          <button
            type="button"
            onClick={() => saveChoice('essential')}
            className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => saveChoice('all')}
            className="rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
