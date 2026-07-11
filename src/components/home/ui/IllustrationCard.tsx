import type { HomeImageAsset } from '../../../data/homeImages';
import HomeImage from './HomeImage';

interface IllustrationCardProps {
  image: HomeImageAsset;
  imageAlt: string;
  title: string;
  description: string;
  step?: number;
  variant?: 'step' | 'why';
}

export default function IllustrationCard({
  image,
  imageAlt,
  title,
  description,
  step,
  variant = 'step',
}: IllustrationCardProps) {
  const cardClass = variant === 'why' ? 'home-why-card' : 'home-step-card';

  return (
    <article className={`${cardClass} group flex h-full flex-col`}>
      {step !== undefined && (
        <span className="home-step-index" aria-hidden>
          {step}
        </span>
      )}
      <div className="home-illustration-card-media">
        <HomeImage
          image={image}
          alt={imageAlt}
          className="home-illustration-card-image"
          wrapperClassName="h-full w-full"
        />
      </div>
      <div className="home-illustration-card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-body mt-2 flex-1">{description}</p>
      </div>
    </article>
  );
}
