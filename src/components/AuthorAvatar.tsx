import { useState } from 'react';
import { ARTICLE_AUTHOR } from '../constants/author';

const sizeClasses = {
  sm: 'h-14 w-14',
  md: 'h-16 w-16 sm:h-20 sm:w-20',
  lg: 'h-20 w-20 sm:h-24 sm:w-24',
} as const;

const sizePixels = {
  sm: 56,
  md: 80,
  lg: 96,
} as const;

type AuthorAvatarProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
  priority?: boolean;
};

export default function AuthorAvatar({ size = 'md', className = '', priority = false }: AuthorAvatarProps) {
  const [avatarError, setAvatarError] = useState(false);
  const pixels = sizePixels[size];

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-gray-700 shadow-sm bg-primary-100 dark:bg-primary-900/40 ${sizeClasses[size]} ${className}`}
    >
      {avatarError ? (
        <span
          className="flex h-full w-full items-center justify-center text-xl sm:text-2xl font-bold text-primary-700 dark:text-primary-300"
          aria-hidden
        >
          {ARTICLE_AUTHOR.name.charAt(0)}
        </span>
      ) : (
        <picture>
          <source srcSet={ARTICLE_AUTHOR.avatarWebp} type="image/webp" />
          <img
            src={ARTICLE_AUTHOR.avatar}
            alt={ARTICLE_AUTHOR.avatarAlt}
            width={pixels}
            height={pixels}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover object-center"
            onError={() => setAvatarError(true)}
          />
        </picture>
      )}
    </div>
  );
}
