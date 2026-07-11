import type { HomeImageAsset } from '../../../data/homeImages';

interface HomeImageProps {
  image: HomeImageAsset;
  alt: string;
  priority?: boolean;
  className?: string;
  wrapperClassName?: string;
}

export default function HomeImage({
  image,
  alt,
  priority = false,
  className = '',
  wrapperClassName = '',
}: HomeImageProps) {
  return (
    <div className={`home-image-wrap ${wrapperClassName}`.trim()}>
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`home-image ${className}`.trim()}
      />
    </div>
  );
}
