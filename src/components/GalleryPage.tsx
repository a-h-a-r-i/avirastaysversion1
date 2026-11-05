import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Waves,
  Trees,
  MapPin,
  Calendar,
  Phone,
  MessageSquare,
  CheckCircle2,
  X,
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/villasData';

interface GalleryPageProps {
  onBackToHome: () => void;
  onOpenBooking: (villaId?: string) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onBackToHome,
  onOpenBooking,
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Grouped gallery categories with user's Cloudinary photos
  const gallerySections = [
    {
      id: 'pool-outdoor',
      title: 'Private Swimming Pool & Gazebo',
      subtitle: 'Clean outdoor pool, elevated gazebo with stairs for village views & poolside veranda',
      images: [
        {
          id: 'p-1',
          title: 'Sparkling Swimming Pool & Lush Grass',
          caption: 'Clean private outdoor pool with open sky views',
          category: 'pools',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386633/DSC_4388_jfceik.jpg'
        },
        {
          id: 'p-2',
          title: 'Pool Deck & Elevated Gazebo',
          caption: 'Private gazebo with stairs for scenic village views',
          category: 'pools',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386630/DSC_4144_upglui.jpg'
        },
        {
          id: 'p-3',
          title: 'Poolside Veranda & Lawn Grass',
          caption: 'Relaxing outdoor seating right next to the pool',
          category: 'pools',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386654/DSC_4153_h2gp8u.jpg'
        },
        {
          id: 'p-4',
          title: 'Sunny Pool Reflection & Greenery',
          caption: 'Lush surroundings offering privacy and peace',
          category: 'pools',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386653/DSC_4152_gkpmgk.jpg'
        },
        {
          id: 'p-5',
          title: 'Night Pool Glow & Lawn View',
          caption: 'Atmospheric nighttime pool illumination',
          category: 'pools',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386675/DSC_4342_rz67wa.jpg'
        },
        {
          id: 'p-6',
          title: 'Night Pool Reflections & Veranda',
          caption: 'Cozy evenings by the serene pool',
          category: 'pools',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386676/DSC_4329_ap7dot.jpg'
        }
      ]
    },
    {
      id: 'drone-aerial',
      title: 'Aerial & Cottage Architecture',
      subtitle: 'Drone views of the 3BHK wooden farmhouse, 25 mins from ORR in a gated community',
      images: [
        {
          id: 'a-1',
          title: 'Aerial View of 3BHK Wooden Cottage & Pool',
          caption: 'Complete view of Avira Stays cottage, pool, and expansive green lawn',
          category: 'exterior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386641/DJI_20250507171643_0346_D_q1a0o7.jpg'
        },
        {
          id: 'a-2',
          title: 'Drone Landscape & Serene Community',
          caption: 'Peaceful gated neighborhood away from city noise',
          category: 'exterior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386639/DJI_20250507171303_0340_D_medf0n.jpg'
        },
        {
          id: 'a-3',
          title: 'Estate Panoramic Aerial Vista',
          caption: 'Scenic landscape, lush greenery, and open horizons',
          category: 'exterior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386651/DJI_20250507171747_0350_D_xer7qh.jpg'
        },
        {
          id: 'a-4',
          title: 'Cottage Veranda & Wooden Deck',
          caption: 'Handcrafted timber structure and charming wooden porch',
          category: 'exterior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386668/DSC_4272_v2ygor.jpg'
        },
        {
          id: 'a-5',
          title: 'Gazebo Stairs with Village Views',
          caption: 'Climb up for panoramic sunrise and sunset views',
          category: 'exterior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386671/DSC_4230_wd1ysd.jpg'
        },
        {
          id: 'a-6',
          title: 'Illuminated Wooden Cottage at Dusk',
          caption: 'Magical golden glow on the authentic wooden facade',
          category: 'exterior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386679/DSC_4327_i9cmnc.jpg'
        }
      ]
    },
    {
      id: 'interiors',
      title: '3BHK Cottage Interiors & Bedrooms',
      subtitle: 'Natural wood interiors, comfortable bedding, modern bathroom with hot shower & amenities',
      images: [
        {
          id: 'i-1',
          title: 'Master Bedroom Suite in Wood Architecture',
          caption: 'Spacious master bedroom with rich timber paneling and luxury bedding',
          category: 'interior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386662/DSC_4209_rhwnbx.jpg'
        },
        {
          id: 'i-2',
          title: 'Cozy Bedroom with Scenic Views',
          caption: 'Peaceful sleep with natural light and garden outlook',
          category: 'interior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386665/DSC_4206_zgwvl9.jpg'
        },
        {
          id: 'i-3',
          title: 'Wooden Cottage Living Area & Craftsmanship',
          caption: 'Inviting family living hall with authentic woodwork',
          category: 'interior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386665/DSC_4189_ctx5g5.jpg'
        },
        {
          id: 'i-4',
          title: 'Rustic Wooden Cottage Interior',
          caption: 'Warm aesthetic offering cozy comfort and tranquility',
          category: 'interior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386667/DSC_4215_wllyvg.jpg'
        },
        {
          id: 'i-5',
          title: 'Clean Hot Shower & Bathroom',
          caption: 'Private hot water shower and modern hygienic fittings',
          category: 'interior',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386667/DSC_4222_wshdbd.jpg'
        }
      ]
    },
    {
      id: 'night-gatherings',
      title: 'Night Ambience, Twilight & Celebrations',
      subtitle: 'Night aerial illumination, campfire lawn, projector cinema & party vibe',
      images: [
        {
          id: 'n-1',
          title: 'Night Aerial View with Illuminated Pool',
          caption: 'Breathtaking bird-eye view of Avira Stays under the night sky',
          category: 'night',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386647/DJI_20250507201535_0358_D_fjywos.jpg'
        },
        {
          id: 'n-2',
          title: 'Twilight Farmhouse Ambience',
          caption: 'Golden lights reflecting across the lawn and cottage',
          category: 'night',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386675/DSC_4333_kcxwk6.jpg'
        },
        {
          id: 'n-3',
          title: 'Evening Patio & Warm Lighting',
          caption: 'Perfect for BBQ grills, conversations, and relaxing with friends',
          category: 'night',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386672/DSC_4315_d7ae39.jpg'
        },
        {
          id: 'n-4',
          title: 'Starry Night Atmosphere',
          caption: 'Clear skies, outdoor projector movie nights, and calm breezes',
          category: 'night',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386675/DSC_4354_i2z9f9.jpg'
        },
        {
          id: 'n-5',
          title: 'Sunset Golden Hour over Farmhouse',
          caption: 'Mesmerizing sunset tones casting over the wooden cottage',
          category: 'nature',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386676/DSC_4332_f9lzax.jpg'
        },
        {
          id: 'n-6',
          title: 'Lush Green Grass & Patio Lounge',
          caption: 'Lush green lawn grass for cricket, badminton & outdoor games',
          category: 'nature',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386669/DSC_4265_ghq3ah.jpg'
        },
        {
          id: 'n-7',
          title: 'Weekend Gatherings & Celebrations',
          caption: 'Memories created with friends and family at Avira Stays',
          category: 'night',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386651/IMG_20250702_001346_zjkqgf.jpg'
        },
        {
          id: 'n-8',
          title: 'Evening Campfire at Avira Stays',
          caption: 'Warm campfire setup on the lush green lawn under the night stars',
          category: 'night',
          src: 'https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386629/DSC_4386_q6rpl2.jpg'
        }
      ]
    }
  ];

  const allImagesList = gallerySections.flatMap((sec) => sec.images);

  const filteredSections = gallerySections.filter((section) => {
    if (selectedCategoryFilter !== 'all') {
      return section.images.some((img) => img.category === selectedCategoryFilter);
    }
    return true;
  });

  const handleOpenLightbox = (imageSrc: string) => {
    const idx = allImagesList.findIndex((img) => img.src === imageSrc);
    if (idx !== -1) setLightboxIndex(idx);
    else setLightboxIndex(0);
  };

  const handleNextLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % allImagesList.length);
    }
  };

  const handlePrevLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) - 1 + allImagesList.length) % allImagesList.length);
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen animate-fadeIn font-sans pb-24 lg:pb-16">
      {/* 1. Hero Section */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-4 sm:pt-6 mb-8">
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="hover:text-stone-900 transition-colors flex items-center gap-1 text-stone-600 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-stone-400">›</span>
            <span className="text-stone-900 font-semibold">Gallery</span>
          </div>

          <div className="text-stone-500 text-xs hidden sm:block">
            <span>Avira Stays 3BHK Wooden Cottage</span>
          </div>
        </div>

        <div className="mb-5 space-y-2">
          <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-tight">
            Visual Gallery
          </h1>
          <p className="font-serif italic text-base sm:text-2xl text-stone-700 font-normal">
            A Glimpse Into Unforgettable Farmhouse Moments
          </p>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl">
            Explore our authentic 3BHK wooden cottage, clean private pool, gazebo with village views, lush lawn grass, and magical evening twilight setups.
          </p>
        </div>

        {/* Hero Panorama */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 group">
          <img
            src="https://res.cloudinary.com/dwa7dplgg/image/upload/v1787386641/DJI_20250507171643_0346_D_q1a0o7.jpg"
            alt="Avira Stays 3BHK Wooden Cottage Farmhouse Aerial View"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15 pointer-events-none"></div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white pointer-events-none">
            <p className="font-script text-2xl sm:text-4xl text-amber-200/95 -rotate-2 drop-shadow-md">
              “Come, Touch the Grass<br />Refresh & Bond with Family ♡”
            </p>
          </div>
        </div>
      </div>

      {/* 2. Filter Bar (Horizontal swipeable on mobile) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="bg-white rounded-2xl sm:rounded-full border border-stone-200/90 shadow-xs p-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: `All Photos (${allImagesList.length})` },
            { id: 'pools', label: 'Pool & Gazebo' },
            { id: 'exterior', label: 'Drone & Exterior' },
            { id: 'interior', label: '3BHK Interiors' },
            { id: 'night', label: 'Night & Twilight' },
            { id: 'nature', label: 'Lawn & Sunsets' }
          ].map((cat) => {
            const isSelected = selectedCategoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#182C23] text-white shadow-xs'
                    : 'hover:bg-stone-100 text-stone-700'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Categorized Gallery Showcase Sections */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14 mb-16 sm:mb-20">
        {filteredSections.map((section) => {
          const sectionDisplayImages = selectedCategoryFilter === 'all'
            ? section.images
            : section.images.filter((img) => img.category === selectedCategoryFilter);

          if (sectionDisplayImages.length === 0) return null;

          return (
            <div key={section.id} className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-2.5 gap-1">
                <div>
                  <h2 className="font-serif text-xl sm:text-3xl font-normal text-stone-900 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-xs text-stone-500 font-light mt-0.5">
                    {section.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => handleOpenLightbox(sectionDisplayImages[0].src)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 transition-colors cursor-pointer self-start sm:self-auto pt-1 sm:pt-0"
                >
                  <span>View Fullscreen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                {sectionDisplayImages.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => handleOpenLightbox(img.src)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/80 shadow-xs cursor-pointer hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-4 text-white">
                      <p className="text-xs font-serif font-medium leading-snug drop-shadow-xs line-clamp-1">
                        {img.title}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-stone-300 line-clamp-1 mt-0.5 font-light">
                        {img.caption}
                      </p>
                    </div>

                    <div className="absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Booking & Contact CTA Strip */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        <div className="bg-[#182C23] rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs text-amber-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Avira Stays 3BHK Farmhouse Sanctuary</span>
            </div>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Ready to Experience the Farmhouse in Person?
            </h2>

            <p className="text-stone-300 text-xs sm:text-base font-light max-w-xl leading-relaxed">
              Book directly with the owner on WhatsApp or reserve via Airbnb. Enjoy the private pool, lush lawn, projector nights, and peaceful getaway just 25 minutes from ORR.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={() => onOpenBooking('villa-01')}
                className="min-h-[48px] px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp ({PROPERTY_INFO.phone})</span>
              </button>

              <a
                href={PROPERTY_INFO.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <span>Book on Airbnb</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={PROPERTY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Lightbox Modal */}
      {lightboxIndex !== null && allImagesList[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button (min 44px) */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer z-30"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevLightbox}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer z-30"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextLightbox}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer z-30"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main content */}
          <div
            className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[70vh] sm:max-h-[75vh]">
              <img
                src={allImagesList[lightboxIndex].src}
                alt={allImagesList[lightboxIndex].title}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-3 text-center text-white space-y-1 max-w-xl px-4">
              <p className="font-serif text-base sm:text-xl font-normal">
                {allImagesList[lightboxIndex].title}
              </p>
              <p className="text-xs text-stone-300 font-light">
                {allImagesList[lightboxIndex].caption}
              </p>
              <p className="text-[10px] text-stone-400 font-mono pt-0.5">
                {lightboxIndex + 1} / {allImagesList.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
