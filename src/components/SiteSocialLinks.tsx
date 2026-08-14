import { Instagram } from 'lucide-react';
import { SITE_SOCIAL } from '../constants/social';

type SiteSocialLinksProps = {
  variant?: 'icons' | 'buttons';
  className?: string;
};

function FacebookIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  { key: 'facebook' as const, label: 'Facebook', href: SITE_SOCIAL.facebook, Icon: FacebookIcon },
  { key: 'instagram' as const, label: 'Instagram', href: SITE_SOCIAL.instagram, Icon: Instagram },
  { key: 'youtube' as const, label: 'YouTube', href: SITE_SOCIAL.youtube, Icon: YoutubeIcon },
];

export default function SiteSocialLinks({ variant = 'buttons', className = '' }: SiteSocialLinksProps) {
  if (variant === 'icons') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {SOCIAL_ITEMS.map(({ key, label, href, Icon }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label={`WAM Calculator on ${label}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {SOCIAL_ITEMS.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="footer-social-button">
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
