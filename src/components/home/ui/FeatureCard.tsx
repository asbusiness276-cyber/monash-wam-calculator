import type { LucideIcon } from 'lucide-react';
import CardIcon, { type CardIconTone } from './CardIcon';
import PremiumCard from './PremiumCard';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step?: number;
  tone?: CardIconTone;
  hover?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  step,
  tone = 'primary',
  hover = true,
}: FeatureCardProps) {
  return (
    <PremiumCard hover={hover} as="article" padding="md" className="relative flex h-full flex-col">
      {step !== undefined && (
        <span className="card-step-index" aria-hidden>
          {step}
        </span>
      )}
      <CardIcon icon={icon} tone={tone} className="mb-4" />
      <h3 className={`card-title ${step !== undefined ? 'pr-8' : ''}`}>{title}</h3>
      <p className="card-body mt-2 flex-1">{description}</p>
    </PremiumCard>
  );
}
