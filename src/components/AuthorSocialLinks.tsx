import { Instagram, Linkedin, Mail } from 'lucide-react';
import { ARTICLE_AUTHOR } from '../constants/author';
import { SOCIAL_LINK_BUTTON_CLASS } from '../constants/site';

type AuthorSocialLinksProps = {
  className?: string;
};

export default function AuthorSocialLinks({ className = '' }: AuthorSocialLinksProps) {
  return (
    <ul className={`flex flex-wrap gap-2 text-sm ${className}`}>
      <li>
        <a
          href={ARTICLE_AUTHOR.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={SOCIAL_LINK_BUTTON_CLASS}
        >
          <Linkedin size={16} className="shrink-0" aria-hidden />
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href={ARTICLE_AUTHOR.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={SOCIAL_LINK_BUTTON_CLASS}
        >
          <Instagram size={16} className="shrink-0" aria-hidden />
          Instagram
        </a>
      </li>
      <li>
        <a href={`mailto:${ARTICLE_AUTHOR.email}`} className={SOCIAL_LINK_BUTTON_CLASS}>
          <Mail size={16} className="shrink-0" aria-hidden />
          Email
        </a>
      </li>
    </ul>
  );
}
