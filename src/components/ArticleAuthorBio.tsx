import AuthorAvatar from './AuthorAvatar';
import AuthorSocialLinks from './AuthorSocialLinks';
import { ARTICLE_AUTHOR } from '../constants/author';

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
            {ARTICLE_AUTHOR.name}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{ARTICLE_AUTHOR.bio}</p>

          <AuthorSocialLinks className="mt-4" />
        </div>
      </div>
    </aside>
  );
}
