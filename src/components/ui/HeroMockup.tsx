/**
 * CSS-only laptop + phone mockup of a modern real estate website.
 * Accessible via role="img" and descriptive alt text on the figure.
 */
export function HeroMockup() {
  return (
    <figure
      className="relative"
      role="img"
      aria-label="Mockup of a modern real estate website shown on a laptop and phone, with soft blue glow"
    >
      {/* Soft glow behind devices */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-primary/25 blur-3xl"
        aria-hidden
      />

      {/* Laptop */}
      <div className="relative z-10 mx-auto w-full max-w-[28rem]">
        <div className="rounded-t-xl border border-warm-300/80 bg-warm-800 p-1.5 sm:p-2 shadow-card">
          <div className="overflow-hidden rounded-lg bg-white aspect-[16/10]">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-warm-100 bg-warm-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-warm-300" />
              <span className="h-2 w-2 rounded-full bg-warm-300" />
              <span className="h-2 w-2 rounded-full bg-warm-300" />
              <div className="ml-2 flex-1 rounded-md bg-white border border-warm-200 h-5 max-w-[10rem] flex items-center px-2">
                <span className="text-[8px] text-warm-400 truncate">
                  premierrealty.example
                </span>
              </div>
            </div>
            {/* Site content mock */}
            <div className="p-3 sm:p-4 h-full bg-gradient-to-b from-slate-50 to-white">
              <div className="flex items-center justify-between mb-3">
                <div className="h-2.5 w-16 rounded bg-primary/80" />
                <div className="flex gap-2">
                  <div className="h-1.5 w-8 rounded bg-warm-200" />
                  <div className="h-1.5 w-8 rounded bg-warm-200" />
                  <div className="h-1.5 w-10 rounded bg-primary/30" />
                </div>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-slate-700 via-slate-600 to-primary/40 p-3 sm:p-4 mb-3 shadow-soft">
                <div className="h-2 w-24 rounded bg-white/90 mb-1.5" />
                <div className="h-1.5 w-32 rounded bg-white/50 mb-3" />
                <div className="h-5 w-16 rounded-full bg-primary shadow-glow-sm" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-md border border-warm-100 bg-white p-1.5 shadow-sm"
                  >
                    <div className="aspect-[4/3] rounded bg-gradient-to-br from-warm-100 to-primary/10 mb-1.5" />
                    <div className="h-1 w-10 rounded bg-warm-200 mb-1" />
                    <div className="h-1 w-6 rounded bg-primary/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="relative mx-auto">
          <div className="h-2 sm:h-2.5 rounded-b-lg bg-warm-300 mx-[-2%]" />
          <div className="h-1 sm:h-1.5 bg-warm-200 rounded-b-xl mx-[8%]" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute -right-1 sm:right-2 bottom-2 sm:bottom-4 z-20 w-[4.5rem] sm:w-[5.5rem]">
        <div className="rounded-[1rem] sm:rounded-[1.15rem] border-[3px] border-warm-800 bg-warm-800 p-0.5 shadow-glow">
          <div className="overflow-hidden rounded-[0.75rem] sm:rounded-[0.9rem] bg-white aspect-[9/19]">
            <div className="h-3 bg-warm-50 flex justify-center items-end pb-0.5">
              <div className="h-1 w-6 rounded-full bg-warm-200" />
            </div>
            <div className="p-1.5 space-y-1.5">
              <div className="h-1 w-8 rounded bg-primary/70" />
              <div className="rounded aspect-video bg-gradient-to-br from-slate-600 to-primary/50" />
              <div className="h-1 w-full rounded bg-warm-100" />
              <div className="h-1 w-2/3 rounded bg-warm-100" />
              <div className="h-3 w-full rounded-full bg-primary/80 mt-1" />
              <div className="space-y-1 pt-1">
                <div className="h-6 rounded bg-warm-50 border border-warm-100" />
                <div className="h-6 rounded bg-warm-50 border border-warm-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        Decorative mockup of a real estate website on laptop and mobile devices
      </figcaption>
    </figure>
  );
}
