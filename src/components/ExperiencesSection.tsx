import React from 'react';
import { Experience } from '../types';
import { EXPERIENCES_DATA } from '../data/experiencesData';

interface ExperiencesSectionProps {
  onSelectExperience: (experience: Experience) => void;
  onViewAllExperiences?: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  onSelectExperience,
  onViewAllExperiences
}) => {
  return (
    <section className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-20" data-purpose="experiences-grid" id="experiences">
      {/* Experiences Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-10 pb-2 sm:pb-4">
        {/* Left Title */}
        <div className="lg:col-span-4 space-y-1">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
            Experiences
          </span>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            More Than a Stay.<br />
            <span className="italic font-normal">It's a Feeling.</span>
          </h2>
        </div>

        {/* Middle Description with vertical hairline */}
        <div className="lg:col-span-5 lg:border-l lg:border-stone-300 lg:pl-8">
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            From refreshing pool swims to Carrom & Chess game sessions, evening campfire BBQ to outdoor projector movies — Avirastays brings you experiences that stay with you long after you leave.
          </p>
        </div>

        {/* Right Playful Script Accent */}
        <div className="lg:col-span-3 flex lg:justify-end">
          <span className="font-script text-2xl sm:text-3xl text-stone-700 -rotate-3 inline-block leading-tight select-none">
            Nature<br />Heals Different<br />Here →
          </span>
        </div>
      </div>

      {/* 6-Card Experiences Grid (2 cols mobile, 3 cols tablet, 6 cols desktop) */}
      <div id="activities" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {EXPERIENCES_DATA.map((exp) => (
          <div
            key={exp.id}
            onClick={() => onSelectExperience(exp)}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-900 border border-stone-300/40 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Background Image */}
            <img
              alt={exp.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
              src={exp.image}
              loading="lazy"
            />

            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

            {/* Icon and Text Label */}
            <div className="absolute inset-0 p-3 flex flex-col items-center justify-end text-center text-white z-10">
              <div className="text-white/90 group-hover:text-amber-300 transition-colors duration-300 transform group-hover:scale-110 mb-1.5">
                {exp.iconType === 'pool' && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M2 14c2.5-1 5 1 7.5 0s5-1 7.5 0 4.5-.5 5 0" />
                    <path d="M6 7v6M10 7v6M6 10h4" />
                  </svg>
                )}
                {exp.iconType === 'bonfire' && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M12 2c0 4-4 6-4 10a6 6 0 0 0 12 0c0-4-4-6-4-10" />
                    <path d="M12 14c-1 0-2 .8-2 2a2 2 0 0 0 4 0c0-1.2-1-2-2-2z" />
                  </svg>
                )}
                {exp.iconType === 'indoor' && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <rect height="18" rx="3" width="18" x="3" y="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <circle cx="15.5" cy="15.5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                  </svg>
                )}
                {exp.iconType === 'outdoor' && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path d="M12 22C12 22 7 18 7 11C7 7 12 3 12 3C12 3 17 7 17 11C17 18 12 22 12 22Z" />
                    <path d="M12 7V17" />
                  </svg>
                )}
              </div>

              <span className="text-xs font-semibold leading-tight drop-shadow-xs">
                {exp.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Experiences Link */}
      {onViewAllExperiences && (
        <div className="mt-8 text-center">
          <button
            onClick={onViewAllExperiences}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#182C23] hover:bg-[#243F32] text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-xs hover:shadow cursor-pointer active:scale-95"
          >
            <span>Explore Farmhouse Experiences</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};
