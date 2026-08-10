import { type ReactNode } from 'react';
import DonationBanner from './DonationBanner';

interface CalculatorSectionWithInlineAdsProps {
  children: ReactNode;
  path?: string;
}

export default function CalculatorSectionWithInlineAds({
  children,
}: CalculatorSectionWithInlineAdsProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full">
        {children}
        <DonationBanner />
        
      </div>
    </section>
  );
}
