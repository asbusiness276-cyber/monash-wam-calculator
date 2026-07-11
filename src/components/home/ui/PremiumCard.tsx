import type { ElementType, ReactNode } from 'react';

type CardPadding = 'none' | 'sm' | 'md' | 'lg';
type CardVariant = 'default' | 'accent' | 'emerald';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: ElementType;
  id?: string;
  href?: string;
  padding?: CardPadding;
  variant?: CardVariant;
}

const paddingClasses: Record<CardPadding, string> = {
  none: '',
  sm: 'card-p-sm',
  md: 'card-p-md',
  lg: 'card-p-lg',
};

const variantClasses: Record<CardVariant, string> = {
  default: 'card-surface',
  accent: 'card-surface-accent',
  emerald: 'card-surface-emerald',
};

export default function PremiumCard({
  children,
  className = '',
  hover = false,
  as,
  id,
  href,
  padding = 'md',
  variant = 'default',
}: PremiumCardProps) {
  const Tag = href ? 'a' : (as ?? 'div');

  return (
    <Tag
      id={id}
      href={href}
      className={`${variantClasses[variant]} ${paddingClasses[padding]} ${hover ? 'card-interactive' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
