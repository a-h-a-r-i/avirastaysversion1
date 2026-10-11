import React, { useState } from 'react';
import { X, Bed, Users, Waves, Wifi, Check, Sparkles, MapPin, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Villa } from '../types';

interface VillaDetailModalProps {
  villa: Villa | null;
  onClose: () => void;
  onBookNow: (villaId: string) => void;
}

export const VillaDetailModal: React.FC<VillaDetailModalProps> = ({ villa, onClose, onBookNow }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  if (!villa) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-stone-300/80 shadow-2xl relative">
        {/* Sticky Close & Action Header */}
        <div className="sticky top-0 z-20 bg-[#FAF7F2]/90 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#182C23] text-amber-100 text-xs font-semibold flex items-center justify-center">
              {villa.number}
            </span>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 leading-none">
                {villa.name}
              </h3>
              <span className="text-xs text-stone-500">{villa.subtitle}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full border transition-colors ${
                isSaved ? 'bg-rose-50 border-rose-200 text-rose-600' : 'bg-white border-stone-200 text-stone-500 hover:text-stone-800'
              }`}
              title="Save to favorites"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Photo Carousel & Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md">
              <img
                src={villa.galleryImages[activeImageIndex] || villa.mainImage}
                alt={villa.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-xs font-medium">
                Photo {activeImageIndex + 1} of {villa.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
              {villa.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#182C23] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Villa Specs Highlights Bar */}
          <div className="bg-[#F0EBE1] rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 border border-stone-300/60 text-stone-800">
            <div className="flex items-center gap-3">
              <Bed className="w-5 h-5 text-[#182C23]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-500">Bedrooms</p>
                <p className="text-xs font-semibold">{villa.specs.bedrooms}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#182C23]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-500">Max Capacity</p>
                <p className="text-xs font-semibold">{villa.specs.guests}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Waves className="w-5 h-5 text-[#182C23]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-500">Pool Experience</p>
                <p className="text-xs font-semibold">Private & Heated</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wifi className="w-5 h-5 text-[#182C23]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-500">Connectivity</p>
                <p className="text-xs font-semibold">350 Mbps Starlink</p>
              </div>
            </div>
          </div>

          {/* Description & Narrative */}
          <div className="space-y-3">
            <h4 className="font-serif text-2xl font-normal text-stone-900">
              The Sanctuary Experience
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed font-light">
              {villa.longDescription}
            </p>
          </div>

          {/* Included Luxury Amenities Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-2xl font-normal text-stone-900">
                Villa Amenities & Features
              </h4>
              <span className="text-xs text-stone-500 font-medium">100% Private to your group</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {villa.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-stone-200/80 text-xs text-stone-800">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* House Guidelines & Rules */}
          <div className="bg-[#F4EFE6] rounded-2xl p-5 border border-stone-300/60 space-y-3">
            <div className="flex items-center gap-2 text-stone-900">
              <ShieldCheck className="w-4 h-4 text-[#182C23]" />
              <h5 className="text-xs font-bold uppercase tracking-wider">Stay Information & Peace Etiquette</h5>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 font-light">
              {villa.houseRules.map((rule, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#182C23]"></span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Action Footer */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-bold text-stone-900">${villa.pricePerNight}</span>
                <span className="text-xs text-stone-500">/ night (entire private estate)</span>
              </div>
              <p className="text-[11px] text-stone-500">Includes breakfast basket, estate caretaker & daily housekeeping</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-3 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100"
              >
                Close Tour
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookNow(villa.id);
                }}
                className="w-1/2 sm:w-auto px-7 py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Reserve {villa.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
