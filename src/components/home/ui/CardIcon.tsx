import type { LucideIcon } from 'lucide-react';

export type CardIconTone = 'primary' | 'emerald';

interface CardIconProps {
  icon: LucideIcon;
  tone?: CardIconTone;
  size?: number;
  className?: string;
}

const toneClasses: Record<CardIconTone, string> = {
  primary: 'card-icon-primary',
  emerald: 'card-icon-emerald',
};

export default function CardIcon({ icon: Icon, tone = 'primary', size = 20, className = '' }: CardIconProps) {
  return (
    <span className={`card-icon ${toneClasses[tone]} ${className}`}>
      <Icon size={size} strokeWidth={2} aria-hidden />
    </span>
  );
}
