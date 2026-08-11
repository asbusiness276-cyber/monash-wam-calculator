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
  defaultText = 'Grab This Offer',
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
      className={`group flex flex-col items-center justify-center gap-0.5 w-full py-2.5 px-2 rounded-xl font-black text-xs transition-all duration-300 shadow-xl active:scale-[0.95] cursor-pointer text-center relative overflow-hidden ${
        isHovered
          ? 'bg-gradient-to-r from-red-600 via-rose-500 to-red-600 text-white shadow-red-500/50 scale-[1.03]'
          : 'bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white shadow-red-500/30 animate-pulseScale'
      } ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 w-1/2 skew-x-12 -translate-x-full animate-[shimmer_2.5s_infinite]" />
      
      {isHovered ? (
        <div className="flex items-center gap-1.5 z-10">
          <ShoppingCart className="w-5 h-5 text-white shrink-0 animate-bounce" />
          <span className="text-sm tracking-wide">CLAIM OFFER NOW →</span>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-1.5 z-10">
            <Flame className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0 animate-pulse" />
            <span className="whitespace-normal leading-tight break-words text-center text-sm tracking-wide">{defaultText}</span>
            <ExternalLink className="w-4 h-4 text-white/80 shrink-0" />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-amber-200 font-bold z-10 animate-pulse">⏰ Limited Time Offer - Ending Soon</span>
        </>
      )}
    </a>
  );
}
