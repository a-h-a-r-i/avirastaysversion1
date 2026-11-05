import React from 'react';
import { Bed, Users, Waves, ArrowRight, ArrowUpRight, Sparkles, MapPin, MessageSquare } from 'lucide-react';
import { Villa } from '../types';
import { VILLAS_DATA, PROPERTY_INFO } from '../data/villasData';

interface VillasSectionProps {
  onSelectVilla: (villa: Villa) => void;
  onBookVilla: (villaId: string) => void;
}

export const VillasSection: React.FC<VillasSectionProps> = ({ onSelectVilla, onBookVilla }) => {
  return (
    <section className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-20" data-purpose="villas-showcase" id="villas">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
          AVIRA STAYS FARMHOUSE
        </span>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
          3BHK Wooden Cottage. <span className="italic font-normal">25 Mins from ORR.</span>
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-light max-w-xl mx-auto leading-relaxed">
          Surrounded by lush green lawn grass, clean pool, gazebo with village views, campfire, BBQ, and projector. Parties allowed!
        </p>
      </div>

      {/* Villas Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {VILLAS_DATA.map((villa) => (
          <article
            key={villa.id}
            className="bg-[#F5F0E8] rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Villa Image with badge & hover zoom */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
              onClick={() => onSelectVilla(villa)}
            >
              <img
                alt={`${villa.name} - ${villa.subtitle}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                src={villa.mainImage}
                loading="lazy"
              />
              {/* Number badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 backdrop-blur-md flex items-center justify-center text-white text-xs font-semibold tracking-wider shadow">
                {villa.number}
              </div>

              {/* Tagline Pill */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full bg-[#182C23]/90 backdrop-blur-md text-amber-100 text-[10px] sm:text-[11px] font-semibold tracking-wide shadow flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>3BHK Wooden Cottage</span>
              </div>

              {/* View details overlay cue */}
              <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white/95 text-stone-900 text-xs font-semibold shadow-md backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  Explore Cottage Details
                </span>
              </div>
            </div>

            {/* Villa Content */}
            <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3
                      onClick={() => onSelectVilla(villa)}
                      className="font-serif text-xl sm:text-2xl font-medium text-stone-900 cursor-pointer hover:text-[#182C23] transition-colors leading-tight"
                    >
                      {villa.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5 font-medium">{villa.subtitle}</p>
                  </div>

                  {/* Arrow Action Button */}
                  <button
                    onClick={() => onSelectVilla(villa)}
                    aria-label={`View ${villa.name} Details`}
                    className="w-8 h-8 rounded-full bg-[#233F32] hover:bg-stone-900 text-white flex items-center justify-center transition-all duration-200 shadow hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-stone-600 mt-2.5 line-clamp-2 leading-relaxed font-light">
                  {villa.description}
                </p>
              </div>

              {/* Villa Specs Bottom Row */}
              <div className="pt-3 border-t border-stone-300/60 flex items-center justify-between text-[10px] sm:text-[11px] text-stone-700 font-medium">
                <span className="flex items-center gap-1" title="3 Bedrooms">
                  <Bed className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span>3 Bedrooms</span>
                </span>
                <span className="flex items-center gap-1" title="Up to 15 Guests">
                  <Users className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span>Up to 15 Guests</span>
                </span>
                <span className="flex items-center gap-1" title="Private Pool">
                  <Waves className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span>Private Pool</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Bar: View All Button + Right Slogan */}
      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="sm:flex-1 hidden sm:block"></div>
        <div className="flex justify-center sm:flex-1 w-full sm:w-auto">
          <button
            onClick={() => onSelectVilla(VILLAS_DATA[0])}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <span>View Full Cottage Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="sm:flex-1 flex justify-center sm:justify-end items-center gap-2 text-stone-500 text-center sm:text-right">
          <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-600 leading-tight">
            25 Mins From ORR.<br />Near Browntown Resort.
          </span>
        </div>
      </div>
    </section>
  );
};
