export type CookieConsentChoice = 'all' | 'essential';

const STORAGE_KEY = 'mwc-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'mwc-open-cookie-settings';

const GA_ID = 'G-PE23MBW6JK';
const ADSENSE_CLIENT = 'ca-pub-6008816938247526';

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

export function setCookieConsent(choice: CookieConsentChoice): void {
  localStorage.setItem(STORAGE_KEY, choice);
  if (choice === 'all') {
    loadAnalytics();
    loadAdSense();
  }
}

export function loadAnalytics(): void {
  if (document.getElementById('gtag-script')) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  const script = document.createElement('script');
  script.id = 'gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.onload = () => {
    window.gtag?.('js', new Date());
    window.gtag?.('config', GA_ID);
  };
  document.head.appendChild(script);
}

export function loadAdSense(): void {
  if (document.getElementById('adsense-script')) {
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
  if (choice === 'all') {
    loadAnalytics();
    loadAdSense();
  }
}
