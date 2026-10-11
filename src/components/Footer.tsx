import React from 'react';
import { MessageSquare, Phone, MapPin, ExternalLink, Instagram } from 'lucide-react';
import { PROPERTY_INFO } from '../data/villasData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#121A15] text-stone-400 text-xs pt-10 sm:pt-12 pb-24 lg:pb-8 border-t border-stone-800" data-purpose="site-footer">
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-8 sm:space-y-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-stone-800/80">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-100 shrink-0">
                <svg
                  className="w-5 h-5 text-amber-100"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="none" opacity="0.1" />
                  <path d="M12 22C12 22 7 18 7 11C7 7 12 3 12 3C12 3 17 7 17 11C17 18 12 22 12 22Z" />
                  <path d="M12 7V17" />
                  <path d="M9.5 12L14.5 10" />
                  <path d="M9.5 14L14.5 16" />
                </svg>
              </div>
              <div>
                <span className="font-serif tracking-[0.22em] text-base font-bold uppercase text-stone-100 block leading-tight">
                  AVIRA STAYS
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-stone-400 font-semibold block mt-0.5">
                  3BHK Wooden Cottage Farmhouse
                </span>
              </div>
            </div>

            <p className="text-stone-400 font-light text-xs leading-relaxed max-w-sm">
              Escape to our 3BHK wooden cottage farmhouse, 25 mins from ORR, in a serene community with lush green lawn grass. Clean pool, gazebo village views, campfire, BBQ, and projector.
            </p>

            <div className="pt-1">
              <span className="font-script text-2xl text-amber-200/90 block">
                Good Stays, Brighter Days ~
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-200">Avira Stays</h4>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li><a href="#home" className="hover:text-amber-200 transition-colors py-1 inline-block">Home</a></li>
              <li><a href="#villas" className="hover:text-amber-200 transition-colors py-1 inline-block">3BHK Cottage</a></li>
              <li><a href="#activities" className="hover:text-amber-200 transition-colors py-1 inline-block">Activities & Games</a></li>
              <li><a href={PROPERTY_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors py-1 flex items-center gap-1">Location on Google Maps <ExternalLink className="w-3 h-3" /></a></li>
              <li><button onClick={onOpenBooking} className="hover:text-amber-200 transition-colors py-1 text-left cursor-pointer">Check Availability</button></li>
            </ul>
          </div>

          {/* Col 4: Direct Owner Contact */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-200">Owner Contact & Booking</h4>
            <div className="space-y-2.5 text-stone-300 text-xs">
              <a
                href={`tel:${PROPERTY_INFO.rawPhone}`}
                className="flex items-center gap-2 hover:text-amber-200 transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Call: {PROPERTY_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-200 transition-colors py-1"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {PROPERTY_INFO.phone}</span>
              </a>

              <a
                href={PROPERTY_INFO.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-200 transition-colors text-[#FF5A5F] py-1"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>Book on Airbnb</span>
              </a>

              <a
                href={PROPERTY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-200 transition-colors py-1"
              >
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Instagram: {PROPERTY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-stone-400">
            <span className="font-serif tracking-[0.2em] uppercase font-bold text-stone-200">AVIRA STAYS</span>
            <span className="text-stone-700">|</span>
            <span>25 mins from ORR, Hyderabad</span>
            <span className="text-stone-700">|</span>
            <span>© 2025 All Rights Reserved</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-stone-400">
            <a className="hover:text-white transition-colors" href={PROPERTY_INFO.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a>
            <a className="hover:text-white transition-colors" href={PROPERTY_INFO.airbnbUrl} target="_blank" rel="noopener noreferrer">Airbnb</a>
            <a className="hover:text-white transition-colors" href={PROPERTY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
