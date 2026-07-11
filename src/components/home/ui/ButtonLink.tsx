import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gray-900 text-white shadow-premium hover:bg-gray-800 hover:shadow-premium-lg dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100',
  secondary:
    'bg-white text-gray-900 border border-gray-200 shadow-premium-sm hover:border-gray-300 hover:shadow-premium dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:border-gray-600',
  ghost:
    'bg-transparent text-gray-700 border border-gray-200 hover:bg-gray-50 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800/80',
  accent:
    'bg-primary-600 text-white shadow-premium hover:bg-primary-700 hover:shadow-premium-lg dark:bg-primary-500 dark:hover:bg-primary-400',
};

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  icon,
  iconRight,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`home-btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
      {iconRight}
    </a>
  );
}
