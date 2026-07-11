import AuthorAvatar from './AuthorAvatar';
import AuthorSocialLinks from './AuthorSocialLinks';
import { ARTICLE_AUTHOR, AUTHOR_PAGE_PATH } from '../constants/author';

export default function ArticleAuthorBio() {
  return (
    <aside
      className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-5 sm:p-6"
      aria-labelledby="article-author-heading"
    >
      <div className="flex items-center gap-4 sm:gap-5">
        <AuthorAvatar />

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
            About the author
          </p>
          <h2 id="article-author-heading" className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
            <a href={AUTHOR_PAGE_PATH} className="hover:text-primary-600 dark:hover:text-primary-400 hover:underline">
              {ARTICLE_AUTHOR.name}
            </a>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{ARTICLE_AUTHOR.bio}</p>

          <a
            href={AUTHOR_PAGE_PATH}
            className="mt-3 inline-flex text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
          >
            Full author profile →
          </a>

          <AuthorSocialLinks className="mt-4" />
        </div>
      </div>
    </aside>
  );
}
