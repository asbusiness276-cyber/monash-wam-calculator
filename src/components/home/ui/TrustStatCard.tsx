import type { LucideIcon } from 'lucide-react';
import CardIcon, { type CardIconTone } from './CardIcon';
import PremiumCard from './PremiumCard';

interface TrustStatCardProps {
  icon: LucideIcon;
  label: string;
  detail: string;
  tone?: CardIconTone;
}

export default function TrustStatCard({ icon, label, detail, tone = 'primary' }: TrustStatCardProps) {
  return (
    <PremiumCard as="li" padding="sm" hover className="flex items-center gap-4">
      <CardIcon icon={icon} tone={tone} />
      <span className="min-w-0 text-left">
        <span className="card-title-sm block leading-snug">{label}</span>
        <span className="card-caption mt-0.5 block">{detail}</span>
      </span>
    </PremiumCard>
  );
}
