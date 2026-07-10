import { useEffect, useState } from 'react';
import { ArrowUp, List } from 'lucide-react';

export interface ArticleTocItem {
  id: string;
  label: string;
}

interface ArticleTableOfContentsProps {
  items: ArticleTocItem[];
  variant?: 'sidebar' | 'mobile';
  categoryTitle?: string;
  categoryPath?: string;
  relatedLinks?: Array<{ title: string; href: string }>;
}

function shortenTocLabel(label: string): string {
  const withoutNumber = label.replace(/^\d+\.\s*/, '');
  if (withoutNumber.length <= 42) {
    return withoutNumber || label;
  }
  return `${withoutNumber.slice(0, 39).trim()}…`;
}

export default function ArticleTableOfContents({
  items,
  variant = 'sidebar',
  categoryTitle,
  categoryPath,
  relatedLinks = [],
}: ArticleTableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const sectionElements = items
      .map(item => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-15% 0px -60% 0px',
        threshold: [0, 0.15, 0.35, 0.6, 1],
      }
    );

    sectionElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navList = (
    <nav aria-label="Table of contents">
      <ul className="space-y-1">
        {items.map(item => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollToId(item.id)}
              title={item.label}
              className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                activeId === item.id
                  ? 'bg-primary-50 text-primary-700 font-semibold dark:bg-primary-900/30 dark:text-primary-300'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {shortenTocLabel(item.label)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (variant === 'mobile') {
    return (
      <div className="lg:hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <button
          type="button"
          className="w-full flex items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200"
          onClick={() => setMobileOpen(open => !open)}
          aria-expanded={mobileOpen}
        >
          <span className="inline-flex items-center gap-2">
            <List size={16} />
            On this page
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{items.length} sections</span>
        </button>
        {mobileOpen && <div className="px-2 pb-3 border-t border-gray-100 dark:border-gray-700">{navList}</div>}
      </div>
    );
  }

  return (
    <>
      <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
              On this page
            </p>
            <div className="max-h-[min(58vh,28rem)] overflow-y-auto pr-1 scroll-smooth">{navList}</div>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm space-y-3 text-sm">
            <a href="/articles" className="block text-primary-600 dark:text-primary-400 hover:underline">
              ← All articles
            </a>
            {categoryPath && categoryTitle && (
              <a href={categoryPath} className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                {categoryTitle} category
              </a>
            )}
            <button
              type="button"
              onClick={() => scrollToId('article-faqs')}
              className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Jump to FAQs
            </button>
            {relatedLinks.length > 0 && (
              <div className="pt-2 border-t border-gray-100 dark:border-gray-700 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Related guides
                </p>
                {relatedLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 leading-snug"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {showBackToTop && (
            <button
              type="button"
              onClick={scrollToTop}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 text-white px-4 py-2.5 text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              <ArrowUp size={16} />
              Back to top
            </button>
          )}
        </div>
      </aside>

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="lg:hidden fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
