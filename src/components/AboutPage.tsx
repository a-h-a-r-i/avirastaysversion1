import React from 'react';
import {
  ArrowRight,
  Home,
  Users,
  Leaf,
  Heart,
  Sparkles,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Flame,
  Tv,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/villasData';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenBooking: (villaId?: string) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onNavigateToSection,
}) => {
  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen animate-fadeIn font-sans pb-24 lg:pb-16">
      {/* 1. Hero Section */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-6 sm:pt-8 mb-16">
        {/* Top Eyebrow & Hero Header */}
        <div className="mb-6 space-y-2">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
            ABOUT AVIRA STAYS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-tight">
            Escape, Refresh<br className="hidden sm:inline" /> & Bond with Family
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl pt-1 leading-relaxed">
            A 3BHK wooden cottage farmhouse 25 mins from ORR, Hyderabad with private pool, gazebo village views, and lush green lawns.
          </p>
        </div>

        {/* Large Panoramic Hero Image */}
        <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 group">
          <img
            src="https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386639/DJI_20250507171303_0340_D_medf0n.jpg"
            alt="Avira Stays Drone Landscape"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15 pointer-events-none"></div>

          {/* Script calligraphy watermark on left */}
          <div className="absolute bottom-6 left-6 text-white pointer-events-none">
            <p className="font-script text-3xl sm:text-4xl text-white/95 -rotate-2 drop-shadow-md">
              “Good People<br />Greater Memories ♡”
            </p>
          </div>

          {/* Script calligraphy watermark on right */}
          <div className="absolute bottom-6 right-6 text-white text-right hidden sm:block pointer-events-none">
            <p className="font-script text-3xl sm:text-4xl text-white/95 rotate-1 drop-shadow-md">
              “Touch the Grass,<br />Feel Better Together ♡”
            </p>
          </div>
        </div>
      </div>

      {/* 2. Section 1: About This Place (Full Authentic Description) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 relative">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
                ABOUT THIS PLACE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
                3BHK Wooden Cottage Farmhouse
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 font-normal leading-relaxed bg-[#F4EFE6] p-5 rounded-2xl border border-stone-300/80">
              "{PROPERTY_INFO.aboutPlace}"
            </p>

            <div className="space-y-2.5 text-xs text-stone-600 font-light">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Prime Accessibility:</strong> Just 25 minutes smooth drive from Outer Ring Road (ORR), Hyderabad.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Resort Amenities Nearby:</strong> Browntown Resort restaurant and luxury spa are just a 2-minute stroll away.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Secure & Serene:</strong> Gated community with dedicated watchman, main gate security, on-site caretaker & generator backup.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                <span>Plan Your Stay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-semibold tracking-wider transition-all shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Image with Stats Overlay Bar */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 aspect-[16/11]">
              <img
                src="https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386629/DSC_4386_q6rpl2.jpg"
                alt="Evening Campfire at Avira Stays"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

              {/* Handwritten Script Calligraphy Top Right */}
              <div className="absolute top-6 right-6 text-white pointer-events-none">
                <p className="font-script text-2xl sm:text-3xl text-amber-200/90 -rotate-3 drop-shadow-md">
                  “A place<br />to touch the grass 🍃”
                </p>
              </div>

              {/* Bottom 4 Metric Pillars */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-2xl border border-white/15 p-4 sm:p-5 text-white grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="space-y-1">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mx-auto text-amber-200">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold">3BHK</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-300 font-light leading-tight">
                    Wooden Cottage
                  </div>
                </div>

                <div className="space-y-1 border-l sm:border-l border-white/15">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mx-auto text-amber-200">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold">15</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-300 font-light leading-tight">
                    Max Guests
                  </div>
                </div>

                <div className="space-y-1 border-l-0 sm:border-l border-white/15">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mx-auto text-amber-200">
                    <Leaf className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold">25 Mins</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-300 font-light leading-tight">
                    From ORR
                  </div>
                </div>

                <div className="space-y-1 border-l border-white/15">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mx-auto text-amber-200">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-300 font-light leading-tight">
                    Private & Secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Section 2: Important Things to Note & Transparent Add-Ons */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-24">
        <div className="bg-[#F5F0E8] rounded-3xl p-6 sm:p-10 border border-stone-300/80 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
              GOOD TO KNOW
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
              Other Things to Note
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Clear guidelines to ensure your gathering is seamless, safe, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs">
                🎉
              </div>
              <h4 className="font-serif text-sm font-bold text-stone-900">Parties Allowed</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Parties and celebrations are welcomed! We ask all guests to ensure the property and installations are not damaged.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xs">
                🛡️
              </div>
              <h4 className="font-serif text-sm font-bold text-stone-900">Refundable Security Deposit</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                A refundable deposit of <strong>₹5,000</strong> will be collected from the guest upon check-in and returned upon checkout.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-800 flex items-center justify-center font-bold text-xs">
                🎬
              </div>
              <h4 className="font-serif text-sm font-bold text-stone-900">Projector Setup (₹1,000)</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Available at a charge of <strong>₹1,000</strong> till 12 AM only (collected back due to rain and dust factors).
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-800 flex items-center justify-center font-bold text-xs">
                🔥
              </div>
              <h4 className="font-serif text-sm font-bold text-stone-900">Campfire Wood (₹500)</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Wood for evening campfire is chargeable at <strong>₹500</strong> for 15 Kgs of high quality seasoned firewood.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-800 flex items-center justify-center font-bold text-xs">
                🍢
              </div>
              <h4 className="font-serif text-sm font-bold text-stone-900">Barbeque Coal (₹200)</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                BBQ coal is chargeable at <strong>₹200</strong> for 2 Kg of clean burning charcoal ready for grilling.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-xs">
                🏏
              </div>
              <h4 className="font-serif text-sm font-bold text-stone-900">Included Amenities</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Kitchenware, RO water, generator backup, caretaker, clean pool, gazebo, and carrom, chess & indoor games included!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Section 3: Sunset Panorama CTA Banner */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[160px] sm:min-h-[180px] flex items-center justify-between p-8 sm:p-12">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="Sunset Valley Panorama"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/70"></div>

          {/* Left Text */}
          <div className="relative z-10 space-y-1.5 text-white">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Be a Part of<br className="sm:hidden" /> Our Story
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 font-light">
              Come, touch the grass, refresh, and bond with family!
            </p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 bg-[#F0E6D2] hover:bg-[#E5DAC4] text-stone-900 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 text-stone-900" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. Minimalist Bottom Footer */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 pt-6 border-t border-stone-300/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
          {/* Logo on Left */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#182C23]/10 flex items-center justify-center text-stone-900">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 22C12 22 7 18 7 11C7 7 12 3 12 3C12 3 17 7 17 11C17 18 12 22 12 22Z" />
                <path d="M12 7V17" />
                <path d="M9.5 12L14.5 10" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-[0.2em] uppercase text-stone-900 block leading-tight">
                AVIRA STAYS
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-stone-500 font-semibold block">
                3BHK WOODEN COTTAGE FARMHOUSE
              </span>
            </div>
          </div>

          {/* Navigation Links in Center */}
          <nav className="flex items-center flex-wrap justify-center gap-6 sm:gap-8 text-xs font-medium text-stone-700">
            <button
              onClick={onBackToHome}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('villas');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Our Cottage
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('experiences');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Experiences
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('activities');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Activities
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('gallery');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button className="text-stone-950 font-bold border-b border-stone-900 pb-0.5 cursor-pointer">
              About
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('contact');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Social Icons & Instagram Link */}
          <div className="flex items-center gap-5 text-stone-700">
            <div className="flex items-center gap-3">
              <a
                href={PROPERTY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:text-pink-600 hover:border-pink-500 transition-colors"
                aria-label="Instagram @avy_ira"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:text-emerald-600 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={PROPERTY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:text-stone-950 hover:border-stone-500 transition-colors"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>

            {/* Script Signature */}
            <div className="hidden sm:block text-right border-l border-stone-200 pl-4">
              <p className="font-script text-base text-stone-800 -rotate-2 leading-tight">
                Good Stays<br />Brighter Days ♡
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
