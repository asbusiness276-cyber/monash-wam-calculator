import type { ReactNode } from 'react';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: 'div' | 'article' | 'li';
  id?: string;
}

export default function PremiumCard({
  children,
  className = '',
  hover = false,
  as: Tag = 'div',
  id,
}: PremiumCardProps) {
  return (
    <Tag
      id={id}
      className={`premium-card rounded-2xl border border-gray-200/80 bg-white p-6 dark:border-gray-700/80 dark:bg-gray-800/90 ${hover ? 'premium-card-hover' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
