import { SITE_LOGO, SITE_LOGO_ALT } from '../constants/site';

interface SiteLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9 sm:h-10 sm:w-10',
  lg: 'h-12 w-12',
} as const;

export default function SiteLogo({ size = 'md', className = '' }: SiteLogoProps) {
  return (
    <img
      src={SITE_LOGO}
      alt={SITE_LOGO_ALT}
      width={size === 'lg' ? 48 : size === 'md' ? 40 : 32}
      height={size === 'lg' ? 48 : size === 'md' ? 40 : 32}
      className={`shrink-0 rounded-full object-cover ${sizeClasses[size]} ${className}`}
      decoding="async"
    />
  );
}
