import { useEffect, useState } from 'react';

export default function ArticleReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector('article');
      if (!article) {
        return;
      }

      const rect = article.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const articleHeight = article.offsetHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      const traveled = viewportBottom - articleTop;
      const nextProgress = Math.min(100, Math.max(0, (traveled / articleHeight) * 100));
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  if (progress <= 0) {
    return null;
  }

  return (
    <div
      className="fixed top-16 left-0 right-0 z-40 h-1 bg-gray-200/80 dark:bg-gray-800/80"
      aria-hidden="true"
    >
      <div
        className="h-full bg-primary-600 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
