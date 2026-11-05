import React from 'react';

interface AmenitiesRibbonProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const AmenitiesRibbon: React.FC<AmenitiesRibbonProps> = ({ onSelectCategory }) => {
  const amenities = [
    {
      id: 'private-farmhouses',
      title: '3BHK Wooden',
      subtitle: 'Cottage',
      description: 'Exclusive standalone villa with zero shared boundaries.',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )
    },
    {
      id: 'swimming-pools',
      title: 'Private Clean',
      subtitle: 'Swimming Pool',
      description: 'Clean outdoor swimming pool for refreshing day & night swims.',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path d="M2 14c2.5-1 5 1 7.5 0s5-1 7.5 0 4.5-.5 5 0" />
          <path d="M2 18c2.5-1 5 1 7.5 0s5-1 7.5 0 4.5-.5 5 0" />
          <path d="M6 6v5M10 6v5M6 9h4" />
        </svg>
      )
    },
    {
      id: 'games',
      title: 'Carrom, Chess &',
      subtitle: 'Indoor Games',
      description: 'Carrom, Chess & indoor board games included.',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <rect height="12" rx="4" width="20" x="2" y="6" />
          <path d="M6 12h4m-2-2v4m9-2h.01m2.99 0h.01" />
        </svg>
      )
    },
    {
      id: 'surroundings',
      title: 'Lush Green',
      subtitle: 'Lawn Grass',
      description: 'Acres of peaceful surroundings & elevated village view gazebo.',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path d="M12 10a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4Z" />
          <path d="M12 2a5 5 0 0 0-5 5c0 .7.1 1.4.4 2A6 6 0 0 0 4 14a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6 6 6 0 0 0-3.4-5A5 5 0 0 0 12 2Z" />
        </svg>
      )
    },
    {
      id: 'families',
      title: 'Parties &',
      subtitle: 'Family Bonding',
      description: 'Generous 3 master bedrooms & expansive dining areas.',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'experiences',
      title: 'Campfire, BBQ &',
      subtitle: 'HD Projector',
      description: 'Campfire wood, BBQ coal & outdoor movie projector setups.',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#F5F0E8] border-b border-stone-300/60 py-5 sm:py-6 shadow-xs" data-purpose="features-ribbon">
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:divide-x lg:divide-stone-300/70">
          {amenities.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory && onSelectCategory(item.id)}
              className="flex items-center gap-3 p-2.5 group cursor-pointer hover:bg-white/60 rounded-xl transition-all active:scale-98"
            >
              <div className="text-stone-700 shrink-0 group-hover:text-[#182C23] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-xs font-medium text-stone-800 leading-snug">
                  {item.title}<br />
                  <span className="font-semibold text-stone-900 truncate block">{item.subtitle}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
