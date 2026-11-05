import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, Home, Sparkles, MessageSquare } from 'lucide-react';
import { VILLAS_DATA, PROPERTY_INFO } from '../data/villasData';

interface HeroProps {
  onExploreVillas: () => void;
  onOpenBookingWithDetails: (villaId?: string, checkIn?: string, checkOut?: string, guests?: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreVillas,
  onOpenBookingWithDetails
}) => {
  const [selectedVilla, setSelectedVilla] = useState('villa-01');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(6);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingWithDetails(selectedVilla, checkInDate, checkOutDate, guestCount);
  };

  return (
    <section id="home" className="relative w-full bg-stone-950 text-white overflow-hidden" data-purpose="hero-banner">
      {/* Background Image & Cinematic Lighting Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Avira Stays 3BHK Wooden Cottage Farmhouse with Private Pool"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          src="https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386641/DJI_20250507171643_0346_D_q1a0o7.jpg"
        />
        {/* Soft, readable sunset & dusk overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-stone-950/35 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-transparent to-stone-950/40"></div>
      </div>

      {/* Hero Content Container - Full Expanded Luxury Grid */}
      <div className="relative z-10 max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 flex flex-col justify-between min-h-[640px] lg:min-h-[720px]">
        {/* Top Text & Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading, Subtitle & Primary Buttons */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            {/* Eyebrow Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-stone-100 shadow-sm">
              <span>3BHK Wooden Cottage</span>
              <span className="text-amber-300">•</span>
              <span>25 Mins From ORR</span>
              <span className="text-amber-300">•</span>
              <span>Private Pool</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-white drop-shadow-md">
              Escape to<br />
              <span className="italic font-normal text-amber-100/95">Avira Stays</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-stone-200/95 font-light max-w-2xl leading-relaxed">
              3BHK wooden cottage farmhouse in a serene community with lush green lawn grass, clean pool, gazebo, campfire, BBQ & outdoor projector.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenBookingWithDetails('villa-01')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-[#182C23] hover:bg-stone-900 border border-white/25 text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Book Your Stay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp ({PROPERTY_INFO.phone})</span>
              </a>
            </div>

            {/* Cursive Signature */}
            <div className="pt-2">
              <span className="font-script text-2xl sm:text-3xl text-amber-100/95 -rotate-2 inline-block drop-shadow-md">
                Touch the Grass, Bond with Family ~
              </span>
            </div>
          </div>

          {/* Right Column: Location Badge (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="text-right bg-black/35 backdrop-blur-md border border-white/20 px-5 py-3.5 rounded-2xl shadow-lg">
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-stone-200 leading-relaxed">
                25 Mins From ORR<br />
                <span className="tracking-[0.28em] text-amber-200 font-bold">HYDERABAD —</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Reservation & Availability Search Bar - Expanded Full Width */}
        <div className="w-full pt-8 sm:pt-10">
          <form
            onSubmit={handleQuickSearch}
            className="w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-3 sm:p-2.5 border border-stone-200/90 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center"
          >
            {/* Villa Selector */}
            <div className="lg:col-span-3 px-3.5 py-1.5 sm:border-r border-stone-200 flex items-center gap-2.5">
              <Home className="w-4 h-4 text-[#182C23] shrink-0" />
              <div className="w-full">
                <label htmlFor="hero-select-villa" className="block text-[9px] uppercase font-bold tracking-wider text-stone-400">
                  Farmhouse
                </label>
                <select
                  id="hero-select-villa"
                  value={selectedVilla}
                  onChange={(e) => setSelectedVilla(e.target.value)}
                  className="w-full text-xs font-semibold text-stone-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer"
                >
                  {VILLAS_DATA.map((v) => (
                    <option key={v.id} value={v.id} className="text-stone-900">
                      {v.name} (3BHK Cottage)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Check-In Date */}
            <div className="lg:col-span-3 px-3.5 py-1.5 lg:border-r border-stone-200 flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#182C23] shrink-0" />
              <div className="w-full">
                <label htmlFor="hero-checkin-date" className="block text-[9px] uppercase font-bold tracking-wider text-stone-400">
                  Check-in Date
                </label>
                <input
                  id="hero-checkin-date"
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full text-xs font-semibold text-stone-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Group Size */}
            <div className="lg:col-span-3 px-3.5 py-1.5 sm:border-r border-stone-200 flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#182C23] shrink-0" />
              <div className="w-full">
                <label htmlFor="hero-guest-count" className="block text-[9px] uppercase font-bold tracking-wider text-stone-400">
                  Group Size
                </label>
                <select
                  id="hero-guest-count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full text-xs font-semibold text-stone-800 bg-transparent border-none p-0 focus:ring-0 cursor-pointer"
                >
                  <option value={4} className="text-stone-900">4 Guests (Family)</option>
                  <option value={8} className="text-stone-900">8 Guests (Family & Friends)</option>
                  <option value={12} className="text-stone-900">12 Guests (Party / Gathering)</option>
                  <option value={15} className="text-stone-900">Up to 15 Guests (Full Cottage)</option>
                </select>
              </div>
            </div>

            {/* Submit Action */}
            <div className="lg:col-span-3">
              <button
                type="submit"
                className="w-full min-h-[44px] py-2.5 px-5 bg-[#182C23] hover:bg-[#233F32] text-white rounded-xl sm:rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Check Availability</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
