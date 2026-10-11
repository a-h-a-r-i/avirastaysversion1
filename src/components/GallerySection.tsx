import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA } from '../data/addOnsData';
import { GalleryImage } from '../types';

interface GallerySectionProps {
  onViewFullGallery?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onViewFullGallery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'pools', label: 'Pool & Gazebo' },
    { id: 'exterior', label: 'Aerial & Cottage' },
    { id: 'interior', label: '3BHK Interiors' },
    { id: 'dining', label: 'Twilight & Nights' },
    { id: 'nature', label: 'Lawn & Nature' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((img) => img.category === selectedCategory);

  const handleNextLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredImages.length);
    }
  };

  const handlePrevLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev ?? 0) - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-20" data-purpose="photo-gallery">
      {/* Gallery Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
          Visual Sanctuary
        </span>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
          Moments Captured <span className="italic font-normal">in Pure Peace</span>
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-light max-w-xl mx-auto leading-relaxed">
          Glimpse into the serene surroundings, clean pool, 3BHK wooden interiors, and twilight gatherings at Avira Stays.
        </p>

        {/* Filter Tabs (Horizontal scroll on mobile) */}
        <div className="flex items-center sm:justify-center gap-2 pt-3 overflow-x-auto no-scrollbar pb-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#182C23] text-white shadow-xs'
                  : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {filteredImages.slice(0, 8).map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxIndex(index)}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 ${
              index === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'
            }`}
          >
            <img
              src={item.url}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 sm:p-4 text-white">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-amber-200 font-semibold">
                {item.villaName || 'Avira Stays'}
              </span>
              <p className="font-serif text-xs sm:text-base leading-tight mt-0.5 line-clamp-1">{item.title}</p>
            </div>
            <div className="absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Explore Full Gallery Button */}
      {onViewFullGallery && (
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={onViewFullGallery}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#182C23] hover:bg-[#233F32] text-white text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <span>Explore Full Gallery ({GALLERY_DATA.length} Authentic Photos)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Lightbox Modal with Mobile Touch Ergonomics */}
      {activeLightboxIndex !== null && filteredImages[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn select-none"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button (min 44px) */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer z-30"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevLightbox}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer z-30"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextLightbox}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer z-30"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[activeLightboxIndex].url}
              alt={filteredImages[activeLightboxIndex].title}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-3 text-center text-white space-y-1 px-4">
              <p className="font-serif text-base sm:text-xl">{filteredImages[activeLightboxIndex].title}</p>
              <p className="text-[11px] sm:text-xs text-stone-300">{filteredImages[activeLightboxIndex].villaName || 'Avira Stays Farmhouse'}</p>
              <p className="text-[10px] text-stone-400 font-mono">
                {activeLightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
