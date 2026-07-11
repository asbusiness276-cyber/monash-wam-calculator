import { ArrowRight, Calculator } from 'lucide-react';
import CardIcon from './CardIcon';

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  actionLabel?: string;
}

export default function LinkCard({
  href,
  title,
  description,
  actionLabel = 'Open tool',
}: LinkCardProps) {
  return (
    <a href={href} className="card-link group flex h-full flex-col">
      <CardIcon icon={Calculator} className="mb-4" />
      <p className="card-title transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
        {title}
      </p>
      <p className="card-body mt-2 flex-1">{description}</p>
      <span className="card-action mt-5">
        {actionLabel}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </a>
  );
}
