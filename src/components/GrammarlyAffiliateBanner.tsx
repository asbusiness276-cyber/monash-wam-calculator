import { Sparkles, Edit3, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

interface GrammarlyAffiliateBannerProps {
  affiliateUrl?: string;
  className?: string;
}

export default function GrammarlyAffiliateBanner({
  // Default non-affiliate fallback link until user replaces it with their CJ Affiliate link
  affiliateUrl = 'https://grammarly.com',
  className = '',
}: GrammarlyAffiliateBannerProps) {
  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'grammarly_affiliate_click', {
        destination: affiliateUrl,
      });
    }
  };

  return (
    <div
      className={`my-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-emerald-200 dark:border-emerald-800/50 p-6 md:p-8 shadow-xl relative group transition-all duration-300 hover:shadow-2xl hover:border-emerald-400 ${className}`}
    >
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left/Top Content */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Essential For Assignments</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            Fix your grammar and get <span className="text-emerald-600 dark:text-emerald-400">higher grades</span> instantly.
          </h3>

          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-lg">
            Monash University marks down for poor grammar and punctuation. Use the free writing assistant trusted by thousands of Aussie students to proofread essays automatically.
          </p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Catches typos instantly',
              'Suggests better vocabulary',
              'Checks tone and clarity',
              '100% Free for students',
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right/Bottom CTA */}
        <div className="md:col-span-4 flex flex-col items-center justify-center pt-6 md:pt-0 border-t md:border-t-0 border-emerald-100 dark:border-slate-800">
          <div className="relative w-full aspect-[4/3] max-w-[200px] mb-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-3">
            <Edit3 className="w-12 h-12 text-emerald-500" />
            <div className="text-center">
              <p className="text-sm font-black text-slate-900 dark:text-white">Grammarly</p>
              <p className="text-[10px] text-slate-500 font-bold">Writing Assistant</p>
            </div>
          </div>

          <a
            href={affiliateUrl}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            <Download className="w-4 h-4" />
            Sign Up For Free
          </a>
          
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Trusted & Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
