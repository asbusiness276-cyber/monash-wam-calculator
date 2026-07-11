import { GraduationCap, LineChart, Sparkles } from 'lucide-react';

/** Decorative hero illustration — not interactive, placeholder only. */
export default function HomeHeroIllustration() {
  return (
    <div
      className="home-hero-illustration relative mx-auto w-full max-w-lg lg:max-w-none"
      aria-hidden
    >
      {/* Outer frame */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-gradient-to-br from-white via-slate-50/80 to-primary-50/30 p-1 shadow-premium-xl dark:border-gray-700/80 dark:from-gray-800 dark:via-gray-900 dark:to-primary-950/20">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-white/90 dark:bg-gray-900/90">
          {/* Top bar — browser chrome */}
          <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3 dark:border-gray-800">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <div className="ml-3 h-2 flex-1 max-w-[140px] rounded-full bg-gray-100 dark:bg-gray-800" />
          </div>

          {/* Illustration canvas */}
          <div className="relative aspect-[4/3] p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_45%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.1),transparent_45%)]" />

            {/* Floating card — analytics */}
            <div className="absolute left-6 top-8 w-[42%] card-surface p-3 shadow-premium-lg backdrop-blur-sm sm:left-8 sm:top-10 sm:p-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/60 dark:text-primary-400">
                  <LineChart size={16} strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700" />
                  <div className="h-2 w-2/3 rounded-full bg-primary-100 dark:bg-primary-900/50" />
                </div>
              </div>
              <div className="mt-3 flex items-end gap-1 h-12">
                {[40, 65, 50, 80, 60, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-primary-600 to-primary-400 opacity-80 dark:from-primary-500 dark:to-primary-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating card — education */}
            <div className="absolute bottom-10 right-6 w-[46%] card-surface p-3 shadow-premium-lg backdrop-blur-sm sm:bottom-12 sm:right-8 sm:p-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <GraduationCap size={18} strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-700" />
                  <div className="h-2 w-3/4 rounded-full bg-emerald-100 dark:bg-emerald-900/40" />
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700" />
                <div className="h-2 w-5/6 rounded-full bg-gray-100 dark:bg-gray-700" />
                <div className="h-2 w-2/3 rounded-full bg-gray-100 dark:bg-gray-700" />
              </div>
            </div>

            {/* Center accent ring */}
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-200/60 bg-primary-50/40 dark:border-primary-800/60 dark:bg-primary-950/30 sm:h-32 sm:w-32">
              <div className="flex h-full w-full items-center justify-center">
                <Sparkles size={28} className="text-primary-500/70 dark:text-primary-400/70" strokeWidth={1.5} />
              </div>
            </div>

            {/* Dot grid */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5 opacity-40">
              {[0, 1, 2, 3, 4].map(i => (
                <span key={i} className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative glow behind frame */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-400/10 via-transparent to-emerald-400/10 blur-2xl dark:from-primary-500/15 dark:to-emerald-500/10" />
    </div>
  );
}
