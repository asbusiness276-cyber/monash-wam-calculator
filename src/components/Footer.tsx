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
  '/age-calculator',
  '/salary-calculator',
] as const;

const POPULAR_ARTICLE_SLUGS = [
  'how-to-calculate-wam',
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

      <div className="home-container relative py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="inline-flex items-center gap-2.5 text-lg font-bold text-white">
              <SiteLogo size="lg" />
              <span>My Calculator Hub</span>
            </div>
            <p className="footer-brand-copy mt-4">
              My Calculator Hub — your go-to destination for everyday calculators. From finance and health to math and utilities, we have over 100+ free online calculators designed to make your life easier.
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
          </div>

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

        <div className="footer-copyright mt-10 border-t border-gray-800/80 pt-6 text-center">
          <p className="text-[11px] text-gray-500 max-w-2xl mx-auto mb-2 leading-relaxed">
            
          </p>
          <p className="text-xs text-gray-500">&copy; 2026 MyCalculatorHub.pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
