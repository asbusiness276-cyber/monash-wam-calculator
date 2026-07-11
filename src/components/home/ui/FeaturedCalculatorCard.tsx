import { ArrowRight } from 'lucide-react';
import type { HomeImageAsset } from '../../../data/homeImages';
import HomeImage from './HomeImage';

interface FeaturedCalculatorCardProps {
  href: string;
  title: string;
  description: string;
  image: HomeImageAsset;
  imageAlt: string;
}

export default function FeaturedCalculatorCard({
  href,
  title,
  description,
  image,
  imageAlt,
}: FeaturedCalculatorCardProps) {
  return (
    <a href={href} className="home-featured-calc-card group flex h-full flex-col">
      <div className="home-featured-calc-media">
        <HomeImage
          image={image}
          alt={imageAlt}
          className="home-featured-calc-image"
          wrapperClassName="h-full w-full"
        />
      </div>
      <div className="home-featured-calc-body">
        <p className="card-title transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {title}
        </p>
        <p className="card-body mt-2 flex-1">{description}</p>
        <span className="card-action mt-5">
          Open tool
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </a>
  );
}
