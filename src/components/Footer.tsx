import type { ReactNode } from 'react';
import SiteLogo from './SiteLogo';
import SiteSocialLinks from './SiteSocialLinks';
import { ARTICLE_CATEGORIES, getArticleCategoryPath } from '../data/articleCategories';
import { CALCULATOR_CATEGORIES, CALCULATOR_COUNT } from '../data/calculatorCatalog';
import { getArticleBySlug } from '../data/articles';
import { openCookieSettings } from '../utils/cookieConsent';

const POPULAR_CALCULATOR_HREFS = [
  '/wam-to-gpa-calculator',
  '/wam-target-calculator',
  '/final-grade-calculator',
  '/monash-distinction-average-calculator',
  '/semester-wam-calculator',
  '/monash-honours-calculator',
] as const;

const POPULAR_ARTICLE_SLUGS = [
  'how-to-calculate-wam',
  'monash-distinction-average-guide',
  'monash-wam-to-gpa-conversion',
  'how-to-improve-wam-at-monash',
] as const;

const popularCalculators = POPULAR_CALCULATOR_HREFS.flatMap(href => {
  for (const category of CALCULATOR_CATEGORIES) {
    const link = category.links.find(item => item.href === href);
    if (link) return [link];
  }
  return [];
});

const popularArticles = POPULAR_ARTICLE_SLUGS.map(slug => getArticleBySlug(slug)).filter(
  (article): article is NonNullable<typeof article> => article != null
);

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h3 className="footer-col-title">{title}</h3>
      {children}
    </div>
  );
}

function FooterLinkList({ children }: { children: ReactNode }) {
  return <ul className="footer-col-links">{children}</ul>;
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a href={href} className="footer-link">
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="footer-premium mt-6 overflow-x-hidden">
      <div className="footer-premium-glow" aria-hidden />

      <div className="home-container relative py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="inline-flex items-center gap-2.5 text-lg font-bold text-white">
              <SiteLogo size="lg" />
              <span>MonashWAM Calculator</span>
            </div>
            <p className="footer-brand-copy mt-4">
              <strong className="font-medium text-gray-200">Monash WAM Calculator</strong> — free online WAM
              calculator for Monash University students. Instantly calculate your Weighted Average Mark, convert WAM to
              GPA, and plan your academic future.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="footer-trust-badge">{CALCULATOR_COUNT} Calculators</span>
              <span className="footer-trust-badge footer-trust-badge-emerald">Free to Use</span>
              <span className="footer-trust-badge footer-trust-badge-blue">Student Focused</span>
            </div>

            <div className="mt-6">
              <p className="footer-col-title mb-3">Follow us</p>
              <SiteSocialLinks variant="icons" />
            </div>

            <div className="footer-newsletter mt-8">
              <p className="text-sm font-semibold text-white">Stay updated</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-400">
                Monash WAM tips and new guides — newsletter coming soon.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  disabled
                  placeholder="Your email address"
                  aria-label="Email for newsletter (coming soon)"
                  className="footer-newsletter-input min-w-0 flex-1"
                />
                <button type="button" disabled className="footer-newsletter-btn shrink-0">
                  Notify me
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 xl:col-span-9">
            <FooterColumn title="Popular calculators">
              <FooterLinkList>
                {popularCalculators.map(link => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.title}
                  </FooterLink>
                ))}
                <FooterLink href="/calculators">Browse all calculators →</FooterLink>
              </FooterLinkList>
            </FooterColumn>

            <FooterColumn title="Popular articles">
              <FooterLinkList>
                {popularArticles.map(article => (
                  <FooterLink key={article.slug} href={`/articles/${article.slug}`}>
                    {article.title}
                  </FooterLink>
                ))}
                <FooterLink href="/articles">All student articles →</FooterLink>
              </FooterLinkList>
            </FooterColumn>

            <FooterColumn title="Resources">
              <FooterLinkList>
                <FooterLink href="/calculators">Calculators hub</FooterLink>
                <FooterLink href="/articles">Articles hub</FooterLink>
                {ARTICLE_CATEGORIES.map(category => (
                  <FooterLink key={category.id} href={getArticleCategoryPath(category.id)}>
                    {category.title}
                  </FooterLink>
                ))}
              </FooterLinkList>
            </FooterColumn>

            <div className="space-y-8">
              <FooterColumn title="Company">
                <FooterLinkList>
                  <FooterLink href="/write-for-us">Write For Us</FooterLink>
                  <FooterLink href="/about-us">About Us</FooterLink>
                  <FooterLink href="/about-author">About the author</FooterLink>
                  <FooterLink href="/contact-us">Contact Us</FooterLink>
                </FooterLinkList>
              </FooterColumn>

              <FooterColumn title="Legal">
                <FooterLinkList>
                  <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                  <FooterLink href="/terms-and-conditions">Terms &amp; Conditions</FooterLink>
                  <FooterLink href="/disclaimer">Disclaimer</FooterLink>
                  <li>
                    <button type="button" onClick={openCookieSettings} className="footer-link text-left">
                      Cookie settings
                    </button>
                  </li>
                </FooterLinkList>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Full calculator directory — preserves all existing tool links */}
        <div className="footer-sitemap mt-12 border-t border-gray-800/80 pt-10">
          <h3 className="footer-col-title mb-6">All calculator tools</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CALCULATOR_CATEGORIES.map(category => (
              <div key={category.id} className="min-w-0">
                <p className="footer-sitemap-group-title">{category.title}</p>
                <ul className="footer-sitemap-links mt-2 space-y-1.5">
                  {category.links.map(link => (
                    <li key={link.href}>
                      <a href={link.href} className="footer-sitemap-link">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom mt-10 flex flex-col gap-5 border-t border-gray-800/80 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="footer-bottom-copy max-w-2xl">
            &copy; {new Date().getFullYear()} MonashWAMCalculator.com — Not affiliated with Monash University. For
            informational purposes only.
          </p>
          <SiteSocialLinks variant="icons" />
        </div>
      </div>
    </footer>
  );
}
