import { ADSENSE_CLIENT, ADSENSE_ENABLED, GA_MEASUREMENT_ID } from '../constants/analytics';

export type CookieConsentChoice = 'all' | 'essential';

const STORAGE_KEY = 'mwc-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'mwc-open-cookie-settings';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getCookieConsent(): CookieConsentChoice | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'all' || stored === 'essential') {
    return stored;
  }
  return null;
}

function applyGtagConsent(choice: CookieConsentChoice): void {
  if (typeof window.gtag !== 'function') {
    return;
  }

  if (choice === 'all') {
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    });
    if (ADSENSE_ENABLED) {
      loadAdSense();
    }
  } else {
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
    });
  }

  window.gtag('event', 'page_view', {
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  });
}

export function setCookieConsent(choice: CookieConsentChoice): void {
  localStorage.setItem(STORAGE_KEY, choice);
  applyGtagConsent(choice);
}

export function loadAdSense(): void {
  if (!ADSENSE_ENABLED || document.getElementById('adsense-script')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'adsense-script';
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

export function openCookieSettings(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
}

export function applyStoredCookieConsent(): void {
  const choice = getCookieConsent();
  if (choice) {
    applyGtagConsent(choice);
  }
}

export function trackPageView(pagePath: string, pageTitle: string): void {
  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle,
  });
}
