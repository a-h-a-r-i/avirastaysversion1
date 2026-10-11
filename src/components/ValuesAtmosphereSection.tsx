import React from 'react';

export const ValuesAtmosphereSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden" data-purpose="brand-atmosphere-banner" id="about">
      {/* Full-width Mountain Mist Forest Background */}
      <div className="relative min-h-[380px] sm:min-h-[420px] w-full flex items-center py-16">
        <img
          alt="Avira Stays Community & Cottage Landscape"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386639/DJI_20250507171303_0340_D_medf0n.jpg"
        />

        {/* Forest tone darkening overlays */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-black/60 to-stone-950/85"></div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Editorial Quote */}
            <div className="lg:col-span-4 text-white">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-normal text-stone-100 drop-shadow-md">
                “Good People<br />
                Great Stays<br />
                Greater Memories”
              </h3>
              <p className="text-xs text-stone-300/80 font-light mt-4 max-w-sm leading-relaxed hidden sm:block">
                Rooted in untouched hills and mindful architecture, Avirastays is crafted to slow down time and bring humans closer together.
              </p>
            </div>

            {/* Middle Column: 4 Brand Value Pillars */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
              {/* Pillar 1 */}
              <div className="flex flex-col items-center space-y-2.5 group">
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 backdrop-blur-sm group-hover:border-amber-300 group-hover:text-amber-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <span className="text-xs font-normal text-stone-200 leading-tight">
                  Reconnect<br />with Loved Ones
                </span>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center space-y-2.5 group">
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 backdrop-blur-sm group-hover:border-amber-300 group-hover:text-amber-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                  </svg>
                </div>
                <span className="text-xs font-normal text-stone-200 leading-tight">
                  Breathe<br />Cleaner Air
                </span>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center space-y-2.5 group">
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 backdrop-blur-sm group-hover:border-amber-300 group-hover:text-amber-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" />
                  </svg>
                </div>
                <span className="text-xs font-normal text-stone-200 leading-tight">
                  Experience<br />Real Peace
                </span>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-center space-y-2.5 group">
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 backdrop-blur-sm group-hover:border-amber-300 group-hover:text-amber-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <polygon points="12 2 2 22 22 22" />
                  </svg>
                </div>
                <span className="text-xs font-normal text-stone-200 leading-tight">
                  Create Stories<br />That Last
                </span>
              </div>
            </div>

            {/* Right Column: Rustic Wooden Sign Plaque */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="wood-texture relative p-5 sm:p-6 rounded-lg text-stone-200 border-2 border-stone-800/80 shadow-2xl max-w-[280px] w-full transform rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Corner Rivets / Screws */}
                <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-stone-900 border border-stone-600 shadow-inner"></span>
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-stone-900 border border-stone-600 shadow-inner"></span>
                <span className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-stone-900 border border-stone-600 shadow-inner"></span>
                <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-stone-900 border border-stone-600 shadow-inner"></span>

                {/* Plaque Text Content */}
                <div className="text-center space-y-2 py-2">
                  <p className="font-script text-3xl sm:text-[32px] text-amber-200/95 leading-tight select-none drop-shadow">
                    Same Place<br />Different Happiness ♡
                  </p>
                  <div className="pt-2 border-t border-amber-900/50 flex items-center justify-center gap-1.5 opacity-85">
                    <span className="font-serif tracking-[0.25em] text-[10px] uppercase font-bold text-amber-100">
                      AVIRASTAYS
                    </span>
                    <span className="text-[9px] text-amber-200">♡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
