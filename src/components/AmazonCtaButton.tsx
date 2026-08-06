import { useState } from 'react';
import { ShoppingCart, ExternalLink, Flame } from 'lucide-react';

interface AmazonCtaButtonProps {
  href: string;
  defaultText?: string;
  onClick?: () => void;
  className?: string;
}

export default function AmazonCtaButton({
  href,
  defaultText = 'Grab This Offer on Amazon AU',
  onClick,
  className = '',
}: AmazonCtaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-black text-xs md:text-sm transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer text-center ${
        isHovered
          ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-white shadow-emerald-500/30 scale-[1.02]'
          : 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 shadow-amber-500/20'
      } ${className}`}
    >
      {isHovered ? (
        <>
          <ShoppingCart className="w-4 h-4 text-white shrink-0 animate-bounce" />
          <span>Add to Cart (Amazon AU) →</span>
        </>
      ) : (
        <>
          <Flame className="w-4 h-4 text-slate-950 fill-slate-950 shrink-0" />
          <span className="truncate">{defaultText}</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-950 shrink-0" />
        </>
      )}
    </a>
  );
}
