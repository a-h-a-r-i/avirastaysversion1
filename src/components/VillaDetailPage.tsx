import React, { useState, useEffect } from 'react';
import {
  Bed,
  Users,
  Waves,
  Trees,
  ArrowRight,
  Play,
  Calendar,
  ChevronDown,
  Phone,
  MessageSquare,
  ShieldCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  MapPin,
  Star,
  Car,
  Wifi,
  Flame,
  Gamepad2,
  ExternalLink,
  Tv,
  Coffee,
  Info,
  CheckCircle2,
  UtensilsCrossed,
  Droplets
} from 'lucide-react';
import { Villa } from '../types';
import { VILLAS_DATA, PROPERTY_INFO } from '../data/villasData';
import { ADD_ONS_DATA } from '../data/addOnsData';
import { buildWhatsAppBookingUrl } from '../utils/whatsapp';

interface VillaDetailPageProps {
  villa: Villa;
  onBackToHome: () => void;
  onSelectVilla: (villa: Villa) => void;
  onOpenBooking: (villaId: string, checkIn?: string, checkOut?: string, guests?: number) => void;
}

export const VillaDetailPage: React.FC<VillaDetailPageProps> = ({
  villa,
  onBackToHome,
  onSelectVilla,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'about' | 'amenities' | 'notes' | 'gallery' | 'location'>('overview');
  const [checkInDate, setCheckInDate] = useState(
    () => new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    () => new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0]
  );
  const [adults, setAdults] = useState(6);
  const [children, setChildren] = useState(2);
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [villa.id]);

  const villaSpaces = [
    {
      id: 'living-room',
      title: 'Wooden Cottage Living Area',
      subtitle: 'Spacious, Cozy & Rustic',
      image:
        'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386665/DSC_4189_ctx5g5.jpg',
      desc: 'Wooden architecture, smart TV, plush seating, and warm ambiance designed for cozy conversations.'
    },
    {
      id: 'bedrooms',
      title: '3 Master Bedrooms (3BHK)',
      subtitle: 'Luxury Bedding & Comfort',
      image:
        'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386662/DSC_4209_rhwnbx.jpg',
      desc: 'Three private air-conditioned bedrooms featuring high-quality linens, comfortable mattresses, and serene garden views.'
    },
    {
      id: 'private-pool',
      title: 'Private Outdoor Swimming Pool',
      subtitle: 'Clean & Refreshing Swims',
      image:
        'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386651/DJI_20250507171747_0350_D_xer7qh.jpg',
      desc: 'Private outdoor swimming pool maintained sparkling clean, ideal for day dips and relaxing pool parties.'
    },
    {
      id: 'gazebo-lawn',
      title: 'Gazebo & Lush Lawn Grass',
      subtitle: 'Village Views & Campfire Nights',
      image:
        'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386671/DSC_4230_wd1ysd.jpg',
      desc: 'Gazebo with stairs offering elevated village views, manicured green grass lawn for relaxing, and evening campfire setup.'
    },
  ];

  // Specific 11 requested amenities
  const officialAmenities = [
    {
      name: 'Swimming Pool',
      desc: 'Private outdoor swimming pool',
      icon: <Waves className="w-5 h-5 text-emerald-800" />
    },
    {
      name: 'Fireplace',
      desc: 'Cozy wood-burning fireplace',
      icon: <Flame className="w-5 h-5 text-amber-700" />
    },
    {
      name: 'Full Kitchen',
      desc: 'Modern appliances & cookware',
      icon: <UtensilsCrossed className="w-5 h-5 text-emerald-800" />
    },
    {
      name: 'Hot Shower',
      desc: 'Private hot shower',
      icon: <Droplets className="w-5 h-5 text-blue-700" />
    },
    {
      name: 'Fast WiFi',
      desc: 'High-speed internet',
      icon: <Wifi className="w-5 h-5 text-emerald-800" />
    },
    {
      name: 'Free Parking',
      desc: 'On-site parking available',
      icon: <Car className="w-5 h-5 text-stone-800" />
    },
    {
      name: 'Washer & Dryer',
      desc: 'In-unit laundry facilities',
      icon: <Sparkles className="w-5 h-5 text-teal-800" />
    },
    {
      name: 'Smart TV',
      desc: 'Streaming services available',
      icon: <Tv className="w-5 h-5 text-indigo-800" />
    },
    {
      name: 'Coffee Station',
      desc: 'Premium coffee & tea',
      icon: <Coffee className="w-5 h-5 text-amber-900" />
    },
    {
      name: 'Luxury Bedding',
      desc: 'High-quality linens',
      icon: <Bed className="w-5 h-5 text-emerald-800" />
    },
    {
      name: 'Garden Access',
      desc: 'Private garden & patio',
      icon: <Trees className="w-5 h-5 text-emerald-900" />
    },
    {
      name: 'Gated Security',
      desc: 'Watchman & main gate',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-800" />
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(villa.id, checkInDate, checkOutDate, adults + children);
  };

  const handleQuickWhatsAppInquiry = () => {
    const calculateNights = () => {
      if (!checkInDate || !checkOutDate) return 2;
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 2;
    };

    const url = buildWhatsAppBookingUrl({
      guestName: 'Guest',
      contactPhone: 'Inquiring via website',
      propertyName: villa.name,
      propertyType: villa.subtitle,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      nights: calculateNights(),
      adults,
      children,
      selectedAddOnIds: ['addon-projector', 'addon-campfire']
    });
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen animate-fadeIn font-sans pb-24 lg:pb-16">
      {/* 1. Top Breadcrumb Bar */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-4 pb-2">
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="hover:text-stone-900 transition-colors flex items-center gap-1 text-stone-600 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-stone-400">›</span>
            <span className="text-stone-900 font-semibold truncate max-w-[200px] sm:max-w-none">3BHK Wooden Cottage</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROPERTY_INFO.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#FF5A5F] hover:underline flex items-center gap-1"
            >
              <span>Airbnb</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Villa Section */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-8 sm:mb-10">
        <div className="mb-5 space-y-2.5 sm:space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-800 block">
                AVIRA STAYS • 25 MINS FROM ORR
              </span>
              <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-tight uppercase mt-1">
                3BHK WOODEN COTTAGE
              </h1>
              <p className="font-serif italic text-base sm:text-2xl text-stone-700 font-normal">
                Clean Pool • Gazebo with Village Views • Lush Green Lawn Grass
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PROPERTY_INFO.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-200 rounded-full text-[11px] font-bold text-rose-700 shadow-2xs"
              >
                <Star className="w-3 h-3 fill-rose-500 text-rose-500" />
                <span>Airbnb Listing</span>
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 font-light max-w-3xl leading-relaxed">
            Escape to our 3BHK wooden cottage farmhouse, 25 mins from ORR, in a serene community with lush green lawn grass. Perfect for weekend getaways, parties, campfires, and BBQ.
          </p>

          {/* 4 Core Highlight Specs Row */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-8 pt-1 text-xs text-stone-800 font-medium">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>3 Bedrooms (3BHK)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Up to 15 Guests</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Private Pool</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Trees className="w-4 h-4 text-emerald-800 shrink-0" />
              <span>Gazebo & Lawn</span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
            <button
              onClick={() => onOpenBooking(villa.id, checkInDate, checkOutDate, adults + children)}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 shadow hover:shadow-md cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Check Availability & Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp ({PROPERTY_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Large Hero Panoramic Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 group">
          <img
            src={villa.mainImage}
            alt={villa.name}
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"></div>

          {/* Script Watermark */}
          <div className="absolute bottom-4 right-5 text-white text-right hidden sm:block pointer-events-none">
            <p className="font-script text-2xl sm:text-3xl text-amber-200/90 -rotate-2 drop-shadow-md">
              “Come, touch the grass,<br />refresh & bond with family ♡”
            </p>
          </div>

          {/* Expand Full Gallery Button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 min-h-[36px] bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View Photos</span>
          </button>
        </div>
      </div>

      {/* 3. Sticky In-Page Navigation Bar */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-stone-300/80 mb-8 sm:mb-10 shadow-2xs">
        <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <nav className="flex items-center gap-5 sm:gap-8 overflow-x-auto py-3 text-xs font-medium no-scrollbar">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'about', label: 'About' },
              { id: 'amenities', label: 'Amenities' },
              { id: 'notes', label: 'Guidelines' },
              { id: 'gallery', label: 'Rooms & Spaces' },
              { id: 'location', label: 'Location' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    const el = document.getElementById(`section-${tab.id}`);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`relative py-1 whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'text-stone-900 font-bold after:content-[""] after:absolute after:bottom-[-12px] after:left-0 after:right-0 after:h-[2px] after:bg-[#182C23]'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 4. Split Main Content Grid */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* LEFT CONTENT COLUMN (8 of 12) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-14">
            {/* SECTION: About This Place */}
            <div id="section-about" className="space-y-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
                  PROPERTY DESCRIPTION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-tight mt-0.5">
                  About This Place
                </h2>
              </div>

              <div className="bg-[#F5F0E8] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-stone-300/80 shadow-2xs space-y-3">
                <p className="text-xs sm:text-base text-stone-800 leading-relaxed font-light">
                  "{PROPERTY_INFO.aboutPlace}"
                </p>

                <div className="pt-2 border-t border-stone-300/60 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                  <div className="p-2 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block">25 Mins</span>
                    <span className="text-[10px] text-stone-500">From ORR</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block">2-Min Walk</span>
                    <span className="text-[10px] text-stone-500">Browntown Spa</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block">Private Pool</span>
                    <span className="text-[10px] text-stone-500">Sparkling Clean</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block">Secure</span>
                    <span className="text-[10px] text-stone-500">Watchman & Gate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION: Amenities */}
            <div id="section-amenities" className="space-y-4 pt-4 border-t border-stone-300/70">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
                  WHAT THIS PLACE OFFERS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-0.5">
                  Farmhouse Amenities
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {officialAmenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-2xl border border-stone-200/90 shadow-2xs flex items-start gap-3 hover:border-stone-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: Other Things To Note */}
            <div id="section-notes" className="space-y-4 pt-4 border-t border-stone-300/70">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
                  IMPORTANT GUIDELINES & CHARGES
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-0.5">
                  Other Things to Note
                </h2>
              </div>

              <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-stone-300/80 shadow-2xs space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-white rounded-2xl border border-stone-200 space-y-1">
                    <span className="font-bold text-emerald-900 uppercase text-[10px] tracking-wider block">
                      🎉 Celebrations & Events
                    </span>
                    <p className="text-stone-700 font-light leading-relaxed text-[11px] sm:text-xs">
                      Parties are allowed, but please ensure the property, lawn, and amenities are not damaged.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border border-stone-200 space-y-1">
                    <span className="font-bold text-amber-900 uppercase text-[10px] tracking-wider block">
                      🛡️ Security Deposit
                    </span>
                    <p className="text-stone-700 font-light leading-relaxed text-[11px] sm:text-xs">
                      A refundable security deposit of <strong>₹5,000</strong> will be collected upon arrival.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border border-stone-200 space-y-1">
                    <span className="font-bold text-indigo-900 uppercase text-[10px] tracking-wider block">
                      🎬 Outdoor Cinema Projector
                    </span>
                    <p className="text-stone-700 font-light leading-relaxed text-[11px] sm:text-xs">
                      Projector is available at a charge of <strong>₹1,000</strong> (till 12 AM only, collected back due to rain/dust).
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border border-stone-200 space-y-1">
                    <span className="font-bold text-orange-900 uppercase text-[10px] tracking-wider block">
                      🔥 Campfire & Barbeque
                    </span>
                    <p className="text-stone-700 font-light leading-relaxed text-[11px] sm:text-xs">
                      Wood for campfire is chargeable at <strong>₹500</strong> (15 Kgs). Barbeque coal is chargeable at <strong>₹200</strong> (2 Kg).
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-900 text-[11px] sm:text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Kitchenware, RO water, power generator backup, and caretaker are included with your stay!</span>
                </div>
              </div>
            </div>

            {/* SECTION: Explore Rooms & Spaces */}
            <div id="section-gallery" className="space-y-4 pt-4 border-t border-stone-300/70">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
                    SPACES DESIGNED FOR COMFORT
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-0.5">
                    Explore the Farmhouse
                  </h2>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="text-xs font-semibold text-stone-800 hover:text-[#182C23] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Photos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {villaSpaces.map((space) => (
                  <div
                    key={space.id}
                    onClick={() => setIsLightboxOpen(true)}
                    className="bg-[#F5F0E8] rounded-2xl overflow-hidden border border-stone-200/80 cursor-pointer group hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-2.5 sm:p-3.5">
                      <h3 className="font-serif text-xs sm:text-base font-bold text-stone-900 leading-tight">
                        {space.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 line-clamp-1">{space.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: Location */}
            <div id="section-location" className="space-y-3 pt-4 border-t border-stone-300/70">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
                  GETTING HERE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-0.5">
                  Prime Hyderabad Location
                </h2>
              </div>

              <div className="bg-[#F5F0E8] rounded-2xl p-4 sm:p-6 border border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-stone-700">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900">
                    <Car className="w-4 h-4 text-[#182C23]" />
                    <span>25 Mins From ORR</span>
                  </div>
                  <p className="text-stone-600 font-light text-[11px] leading-relaxed">
                    Easy, traffic-free highway drive from Outer Ring Road Hyderabad.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900">
                    <MapPin className="w-4 h-4 text-[#182C23]" />
                    <span>Browntown Resort (2-Min Walk)</span>
                  </div>
                  <p className="text-stone-600 font-light text-[11px] leading-relaxed">
                    Enjoy fine dining and spa services within a 2-minute stroll.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900">
                    <ShieldCheck className="w-4 h-4 text-[#182C23]" />
                    <span>Secure Gated Premises</span>
                  </div>
                  <p className="text-stone-600 font-light text-[11px] leading-relaxed">
                    Main gate security, on-site watchman and estate caretaker.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={PROPERTY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[40px] inline-flex items-center gap-2 px-4 py-2 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Avira Stays on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: Direct WhatsApp / Airbnb Reservation Card (4 of 12) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <div
              id="booking-card-widget"
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-stone-300 shadow-lg space-y-4"
            >
              <div className="border-b border-stone-200/80 pb-3 space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                  Direct Owner Booking
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  Book Your Cottage Stay
                </h3>
                <p className="text-xs text-stone-500">
                  Fill details below to send inquiry on WhatsApp or book via Airbnb.
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2 bg-[#FAF7F2] p-2.5 rounded-2xl border border-stone-200">
                  <div>
                    <label htmlFor="villa-checkin" className="block text-[9px] font-bold uppercase tracking-wider text-stone-500 mb-0.5">
                      Check In
                    </label>
                    <input
                      id="villa-checkin"
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full text-xs font-medium text-stone-800 bg-transparent border-0 p-0 focus:ring-0 cursor-pointer"
                    />
                  </div>

                  <div className="border-l border-stone-300/80 pl-2">
                    <label htmlFor="villa-checkout" className="block text-[9px] font-bold uppercase tracking-wider text-stone-500 mb-0.5">
                      Check Out
                    </label>
                    <input
                      id="villa-checkout"
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full text-xs font-medium text-stone-800 bg-transparent border-0 p-0 focus:ring-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Guests Selector */}
                <div className="relative">
                  <div
                    onClick={() => setIsGuestsDropdownOpen(!isGuestsDropdownOpen)}
                    className="w-full p-2.5 rounded-2xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-between cursor-pointer hover:border-stone-300"
                  >
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-stone-500">
                        Total Guests
                      </span>
                      <span className="text-xs font-semibold text-stone-800">
                        {adults} Adults, {children} Children ({adults + children} Total)
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform ${
                        isGuestsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {isGuestsDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-stone-200 shadow-xl p-3 z-20 space-y-2.5 animate-fadeIn">
                      <div className="flex items-center justify-between text-xs">
                        <div>
                          <p className="font-semibold text-stone-900">Adults (Age 13+)</p>
                          <p className="text-[10px] text-stone-500">3 bedrooms</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold"
                          >
                            -
                          </button>
                          <span className="font-bold w-4 text-center">{adults}</span>
                          <button
                            type="button"
                            onClick={() => setAdults(Math.min(15, adults + 1))}
                            className="w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-100">
                        <div>
                          <p className="font-semibold text-stone-900">Children (Age 0-12)</p>
                          <p className="text-[10px] text-stone-500">Lawn games</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold"
                          >
                            -
                          </button>
                          <span className="font-bold w-4 text-center">{children}</span>
                          <button
                            type="button"
                            onClick={() => setChildren(Math.min(8, children + 1))}
                            className="w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsGuestsDropdownOpen(false)}
                        className="w-full py-1.5 bg-stone-100 hover:bg-stone-200 rounded-xl text-[11px] font-semibold text-stone-800 mt-1"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>

                {/* Primary Booking Submit Button */}
                <button
                  type="submit"
                  className="w-full min-h-[44px] py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-xl text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Direct WhatsApp Quick Button */}
              <button
                onClick={handleQuickWhatsAppInquiry}
                className="w-full min-h-[44px] py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp: {PROPERTY_INFO.phone}</span>
              </button>

              {/* Airbnb Link */}
              <div className="pt-2 border-t border-stone-200 text-center">
                <a
                  href={PROPERTY_INFO.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF5A5F] hover:underline"
                >
                  <span>Or book directly on Airbnb</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-3.5 border border-stone-200/90 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#182C23]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-stone-400">Owner Contact</p>
                  <a href={`tel:${PROPERTY_INFO.rawPhone}`} className="text-xs font-bold text-stone-800 hover:underline">
                    {PROPERTY_INFO.phone}
                  </a>
                </div>
              </div>
              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#25D366] text-white rounded-full text-[11px] font-semibold flex items-center gap-1 shadow-2xs"
              >
                <MessageSquare className="w-3 h-3 fill-white" />
                <span>Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl">
            <img
              src={villa.galleryImages[0] || villa.mainImage}
              alt={villa.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
