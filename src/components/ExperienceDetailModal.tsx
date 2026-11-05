import React from 'react';
import { X, Clock, Users, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceDetailModalProps {
  experience: Experience | null;
  onClose: () => void;
  onBookExperience: () => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  experience,
  onClose,
  onBookExperience
}) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl relative">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#FAF7F2]/90 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500">{experience.tag}</span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 leading-none mt-0.5">
              {experience.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Main Photo Banner */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md">
            <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-script text-2xl text-amber-200">{experience.subtitle}</p>
            </div>
          </div>

          {/* Quick Details Ribbon */}
          <div className="bg-[#F0EBE1] rounded-xl p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-stone-800 text-xs border border-stone-300/50">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#182C23]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-500">Timings</p>
                <p className="font-medium">{experience.timing}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#182C23]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-500">Suitable For</p>
                <p className="font-medium">{experience.suitableFor}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-[#182C23]" />
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-500">Access</p>
                <p className="font-medium">All Guests Included</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-serif text-xl font-medium text-stone-900">About this Experience</h4>
            <p className="text-stone-700 text-sm leading-relaxed font-light">
              {experience.fullDescription}
            </p>
          </div>

          {/* Equipment Provided */}
          <div className="space-y-3">
            <h4 className="font-serif text-xl font-medium text-stone-900">Equipment & Facilities Ready</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {experience.equipmentProvided.map((eq, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-stone-200 text-xs text-stone-800">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-[#F4EFE6] rounded-xl p-4 border border-stone-300/60 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">Curated Highlights</h5>
            <ul className="space-y-1.5 text-xs text-stone-600 font-light">
              {experience.highlights.map((h, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#182C23]"></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs text-stone-500">Complimentary with every villa booking</span>
            <button
              onClick={() => {
                onClose();
                onBookExperience();
              }}
              className="px-6 py-2.5 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 shadow transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Stay & Activities</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
