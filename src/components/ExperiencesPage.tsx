import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Flame,
  Waves,
  Gamepad2,
  UtensilsCrossed,
  Users,
  Trees,
  MapPin,
  Calendar,
  Phone,
  MessageSquare,
  Star,
  CheckCircle2,
  X,
  Tv,
  Dices,
  Sun,
  ExternalLink
} from 'lucide-react';
import { Experience } from '../types';
import { PROPERTY_INFO } from '../data/villasData';

interface ExperiencesPageProps {
  onBackToHome: () => void;
  onOpenBooking: (villaId?: string) => void;
  onSelectExperience?: (experience: Experience) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({
  onBackToHome,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemDetail, setSelectedItemDetail] = useState<{
    title: string;
    subtitle: string;
    image: string;
    description: string;
    highlights: string[];
    category: string;
  } | null>(null);

  const categories = [
    {
      id: 'pool',
      name: 'Swimming Pool',
      icon: <Waves className="w-5 h-5" />
    },
    {
      id: 'food',
      name: 'BBQ & Campfire',
      icon: <Flame className="w-5 h-5" />
    },
    {
      id: 'indoor',
      name: 'Indoor Games (Carrom & Chess)',
      icon: <Dices className="w-5 h-5" />
    },
    {
      id: 'cinema',
      name: 'Projector Cinema',
      icon: <Tv className="w-5 h-5" />
    },
    {
      id: 'gazebo',
      name: 'Gazebo & Village Views',
      icon: <Trees className="w-5 h-5" />
    }
  ];

  const farmhouseActivities = [
    {
      id: 'swimming-pool',
      title: 'Private Swimming Pool',
      subtitle: 'Sparkling clean & refreshing',
      category: 'pool',
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386651/DJI_20250507171747_0350_D_xer7qh.jpg',
      description:
        'Private outdoor swimming pool surrounded by manicured green lawn grass. Great for morning laps, afternoon family games, and evening poolside lounging.',
      highlights: ['100% private to your group', 'Clean filtered water', 'Poolside loungers', 'Night pool illumination']
    },
    {
      id: 'campfire-bbq',
      title: 'Campfire & BBQ',
      subtitle: 'Firewood & charcoal available on lawn',
      category: 'food',
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386633/DSC_4388_jfceik.jpg',
      description:
        'Wood for campfire is chargeable at ₹500 (15 Kgs) and BBQ coal is chargeable at ₹200 (2 Kg). Enjoy sizzling barbecue skewers and cozy bonfire music under the stars.',
      highlights: ['Campfire wood: ₹500 (15 Kgs)', 'BBQ coal: ₹200 (2 Kg)', 'Lawn firepit circle', 'Parties allowed']
    },
    {
      id: 'carrom-chess',
      title: 'Indoor Games (Carrom & Chess)',
      subtitle: 'Relaxed games inside cottage',
      category: 'indoor',
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386675/DSC_4354_i2z9f9.jpg',
      description:
        'Smooth wooden carrom board with striker and handcrafted chess set inside the air-conditioned wooden cottage lounge for fun family tournaments.',
      highlights: ['Carrom board with striker', 'Chess board & pieces', 'Cottage living room', 'Relaxing entertainment']
    },
    {
      id: 'projector',
      title: 'Outdoor Cinema Projector',
      subtitle: 'Available till 12 AM (₹1,000)',
      category: 'cinema',
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386647/DJI_20250507201535_0358_D_fjywos.jpg',
      description:
        'Watch movies, sports matches, and music videos on a big projector screen under the open skies. Chargeable at ₹1,000 and available till 12 AM (collected back safely due to night dew and dust factors).',
      highlights: ['Chargeable @ ₹1,000', 'Available till 12 AM', 'Movie & sports screenings', 'Open sky cinema setup']
    },
    {
      id: 'gazebo-views',
      title: 'Gazebo & Village Views',
      subtitle: 'Elevated view deck with stairs',
      category: 'gazebo',
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386671/DSC_4230_wd1ysd.jpg',
      description:
        'Stairs lead up to a scenic gazebo terrace overlooking nearby farmland horizons. Enjoy cool breeze, morning coffee, and village sunset views.',
      highlights: ['Stairs to elevated deck', 'Village panorama views', 'Peaceful morning tea spot', 'Sunset photography']
    },
    {
      id: 'lawn-retreat',
      title: 'Lush Green Lawn Grass',
      subtitle: 'Touch the grass, refresh & bond',
      category: 'gazebo',
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386669/DSC_4265_ghq3ah.jpg',
      description:
        'Soft manicured lawn grass where you can walk barefoot, relax with family, and breathe clean countryside air.',
      highlights: ['Lush green lawn grass', '25 mins from ORR', 'Browntown resort 2-min walk', 'Secure gated community']
    }
  ];

  const experiencesAround = [
    {
      id: 'browntown-resort',
      title: 'Browntown Resort Restaurant & Spa',
      subtitle: '2-Minute Walk Away',
      image:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      distance: '2 mins walk',
      description:
        'Located just a 2-minute stroll from Avira Stays. Enjoy fine dining restaurant options and wellness massage/spa services during your retreat.'
    },
    {
      id: 'orr-connectivity',
      title: '25 Mins to ORR Hyderabad',
      subtitle: 'Quick & Smooth Drive',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      distance: '25 mins drive',
      description:
        'Conveniently situated just 25 minutes smooth drive from Hyderabad Outer Ring Road (ORR), making it the ideal weekend escape.'
    }
  ];

  const filteredActivities =
    activeCategory === 'all'
      ? farmhouseActivities
      : farmhouseActivities.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen animate-fadeIn font-sans pb-16">
      {/* 1. Hero Section */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-6 sm:pt-8 mb-8">
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="hover:text-stone-900 transition-colors flex items-center gap-1 text-stone-600 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-stone-400">›</span>
            <span className="text-stone-900 font-semibold">Experiences</span>
          </div>

          <div className="text-stone-500 text-xs hidden sm:block">
            <span>Pool · BBQ · Campfire · Projector · Carrom · Chess</span>
          </div>
        </div>

        <div className="mb-6 space-y-2">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-800 block">
            AVIRA STAYS EXPERIENCES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-none">
            Moments Designed to<br />
            <span className="italic font-normal text-stone-700">Restore Peace & Joy</span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl pt-1">
            Experience our clean private swimming pool, cozy campfire BBQ, Carrom & Chess indoor games, outdoor cinema projector, and scenic gazebo.
          </p>
        </div>

        {/* Hero Panorama */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 group">
          <img
            src="https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386651/DJI_20250507171747_0350_D_xer7qh.jpg"
            alt="Avira Stays Pool and Lawn"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none"></div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white pointer-events-none">
            <p className="font-script text-2xl sm:text-4xl text-amber-200/95 -rotate-2 drop-shadow-md">
              “Come, Touch the Grass<br />Refresh & Bond with Family ♡”
            </p>
          </div>
        </div>
      </div>

      {/* 2. Filter Category Pills */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="bg-white rounded-2xl sm:rounded-full border border-stone-200/90 shadow-xs p-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#182C23] text-white shadow-xs'
                : 'hover:bg-stone-100 text-stone-700'
            }`}
          >
            All Experiences
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-[#182C23] text-white shadow-xs'
                  : 'hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Farmhouse Activities Grid */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredActivities.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemDetail(item)}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 sm:p-5 space-y-2">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{item.subtitle}</p>
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-900 font-semibold">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Nearby Highlights (Browntown & ORR) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-16">
        <div className="mb-6">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
            PRIME LOCATION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-0.5">
            Surroundings & Location Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {experiencesAround.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F0E8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-stone-200/90 flex flex-col sm:flex-row items-start gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-32 h-32 rounded-2xl object-cover shrink-0"
              />
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 inline-block">
                  {item.distance}
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900">{item.title}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Booking CTA Banner */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        <div className="bg-[#182C23] rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs text-amber-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Avira Stays 3BHK Farmhouse</span>
            </div>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Ready for Your Farmhouse Getaway?
            </h2>

            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              Book directly with the owner on WhatsApp (+91 9154985626) or via Airbnb.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
              <button
                onClick={() => onOpenBooking('villa-01')}
                className="min-h-[44px] px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Book on WhatsApp ({PROPERTY_INFO.phone})</span>
              </button>

              <a
                href={PROPERTY_INFO.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <span>Airbnb Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      {selectedItemDetail && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItemDetail(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <img
                src={selectedItemDetail.image}
                alt={selectedItemDetail.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">{selectedItemDetail.title}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{selectedItemDetail.subtitle}</p>
              </div>

              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {selectedItemDetail.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Highlights</p>
                <ul className="space-y-1 text-xs text-stone-700">
                  {selectedItemDetail.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setSelectedItemDetail(null);
                    onOpenBooking('villa-01');
                  }}
                  className="w-full min-h-[44px] py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Book Avira Stays</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
