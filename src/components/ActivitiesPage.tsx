import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Flame,
  Waves,
  Gamepad2,
  Users,
  Trees,
  MapPin,
  Calendar,
  Phone,
  MessageSquare,
  Star,
  CheckCircle2,
  X,
  Target,
  CircleDot,
  Dices,
  Coffee,
  Heart,
  RotateCcw,
  Sun,
  Tv,
  ExternalLink
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/villasData';

interface ActivitiesPageProps {
  onBackToHome: () => void;
  onOpenBooking: (villaId?: string) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({
  onBackToHome,
  onOpenBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedActivity, setSelectedActivity] = useState<{
    title: string;
    subtitle: string;
    image: string;
    description: string;
    highlights: string[];
    category: string;
  } | null>(null);

  // Filter Categories Pills
  const filterTabs = [
    { id: 'all', label: 'All Activities' },
    { id: 'pool', label: 'Private Swimming Pool' },
    { id: 'bbq', label: 'Campfire & BBQ' },
    { id: 'indoor', label: 'Indoor Games (Carrom & Chess)' },
    { id: 'projector', label: 'Projector Cinema' },
    { id: 'gazebo', label: 'Gazebo & Village Views' },
  ];

  // Activities List
  const activitiesList = [
    {
      id: 'swimming-pool',
      title: 'Private Swimming Pool',
      subtitle: 'Clean, sparkling & private outdoor pool',
      categories: ['all', 'pool'],
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386651/DJI_20250507171747_0350_D_xer7qh.jpg',
      icon: <Waves className="w-5 h-5 text-stone-700" />,
      description:
        'Enjoy a private outdoor swimming pool maintained sparkling clean. Perfect for afternoon swims, sun-lounging, and poolside relaxation.',
      highlights: ['100% private to your group', 'Clean sparkling pool water', 'Poolside veranda seating', 'Night pool illumination']
    },
    {
      id: 'bonfire-bbq',
      title: 'Campfire & BBQ Grill',
      subtitle: 'Charcoal grills & evening campfire on lawn',
      categories: ['all', 'bbq'],
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386633/DSC_4388_jfceik.jpg',
      icon: <Flame className="w-5 h-5 text-stone-700" />,
      description:
        'Kindle a campfire with seasoned wood on the open green grass lawn. Prepare smoky barbecue skewers over coal under the open night sky.',
      highlights: ['Campfire wood (₹500 for 15Kg)', 'Barbeque coal (₹200 for 2Kg)', 'Cast iron BBQ grill setup', 'Lawn seating & night ambiance']
    },
    {
      id: 'indoor-games',
      title: 'Indoor Games (Carrom & Chess)',
      subtitle: 'Relaxed games inside the wooden cottage',
      categories: ['all', 'indoor'],
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386675/DSC_4354_i2z9f9.jpg',
      icon: <Dices className="w-5 h-5 text-stone-700" />,
      description:
        'Cozy indoor entertainment featuring championship Carrom board, wooden Chess kit, and relaxed lounge seating inside the 3BHK cottage.',
      highlights: ['Carrom board with coins & powder', 'Chess set included', 'Comfortable cottage living hall', 'Smart TV entertainment']
    },
    {
      id: 'projector-cinema',
      title: 'Outdoor Projector Cinema',
      subtitle: 'Movie night under the starry night sky',
      categories: ['all', 'projector'],
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386647/DJI_20250507201535_0358_D_fjywos.jpg',
      icon: <Tv className="w-5 h-5 text-stone-700" />,
      description:
        'Watch your favorite movies or matches on the large outdoor projector screen on the lawn. (Chargeable at ₹1,000, available till 12 AM only due to rain & dust protection).',
      highlights: ['HD Projector & screen (₹1,000)', 'Available till 12 AM', 'Surround sound audio', 'Great for parties & celebrations']
    },
    {
      id: 'gazebo-terrace',
      title: 'Gazebo & Village Views',
      subtitle: 'Elevated view deck with stairs',
      categories: ['all', 'gazebo'],
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386671/DSC_4230_wd1ysd.jpg',
      icon: <Trees className="w-5 h-5 text-stone-700" />,
      description:
        'Climb the stairs up to the scenic gazebo terrace overlooking tranquil village horizons. Enjoy fresh breeze, morning tea, and golden sunsets.',
      highlights: ['Stairs to elevated deck', 'Village panorama views', 'Peaceful morning tea spot', 'Sunset photography']
    },
    {
      id: 'lawn-grass',
      title: 'Lush Green Lawn Grass',
      subtitle: 'Touch the grass, refresh & bond',
      categories: ['all', 'gazebo'],
      image: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386669/DSC_4265_ghq3ah.jpg',
      icon: <Sun className="w-5 h-5 text-stone-700" />,
      description:
        'Spacious, manicured green grass lawn for relaxing, morning strolls, picnics, and memorable family time in a secure gated community.',
      highlights: ['Touch the grass, refresh', 'Secure gated community with watchman', '25 mins from ORR', 'Browntown resort 2-min walk']
    }
  ];

  const filteredActivities =
    activeFilter === 'all'
      ? activitiesList
      : activitiesList.filter((a) => a.categories.includes(activeFilter));

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen animate-fadeIn font-sans pb-16">
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-6 sm:pt-8 mb-16 sm:mb-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="hover:text-stone-900 transition-colors flex items-center gap-1 text-stone-600 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-stone-400">›</span>
            <span className="text-stone-900 font-semibold">Activities & Amenities</span>
          </div>

          <div className="text-stone-500 text-xs hidden sm:block">
            <span>Pool · Campfire · BBQ · Projector · Carrom · Chess</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-1">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-800 block">
              AVIRA STAYS ACTIVITIES
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
              Farmhouse Activities
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl pt-1">
              Clean private swimming pool, campfire, BBQ, Carrom & Chess indoor games, and outdoor movie projector.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#182C23] text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Activities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => setSelectedActivity(act)}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img
                    src={act.image}
                    alt={act.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-800 shadow-xs">
                    {act.icon}
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-2">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{act.subtitle}</p>
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-2">
                    {act.description}
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

      {/* 4. Booking CTA Box */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        <div className="bg-[#182C23] rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs text-amber-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Avira Stays 3BHK Farmhouse</span>
            </div>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Ready for a Relaxing Getaway?
            </h2>

            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              Book directly with the owner on WhatsApp (+91 9154985626) or via Airbnb. Parties and family celebrations allowed!
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

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">{selectedActivity.title}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{selectedActivity.subtitle}</p>
              </div>

              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {selectedActivity.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Highlights</p>
                <ul className="space-y-1 text-xs text-stone-700">
                  {selectedActivity.highlights.map((h, i) => (
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
                    setSelectedActivity(null);
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
