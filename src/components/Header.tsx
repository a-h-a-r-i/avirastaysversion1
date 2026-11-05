import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles, ArrowRight, Phone, MessageSquare, MapPin, Instagram } from 'lucide-react';
import { PROPERTY_INFO } from '../data/villasData';

interface HeaderProps {
  onOpenBooking: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  activeSection: string;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  isAudioPlaying,
  onToggleAudio,
  activeSection,
  onNavigateToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Our Cottage', href: '#villas', id: 'villas' },
    { name: 'Experiences', href: '#experiences', id: 'experiences' },
    { name: 'Activities', href: '#activities', id: 'activities' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    }
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full sticky top-0 z-50 transition-all duration-300">
        <div className="w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80">
          <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-16 sm:h-20 flex items-center justify-between">
            {/* Brand Logo with Botanical Crest */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none cursor-pointer select-none"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#182C23]/5 flex items-center justify-center text-stone-900 group-hover:bg-[#182C23] group-hover:text-amber-100 transition-colors duration-300 shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="none" opacity="0.1" />
                  <path d="M12 22C12 22 7 18 7 11C7 7 12 3 12 3C12 3 17 7 17 11C17 18 12 22 12 22Z" />
                  <path d="M12 7V17" />
                  <path d="M9.5 12L14.5 10" />
                  <path d="M9.5 14L14.5 16" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] sm:tracking-[0.22em] text-base sm:text-lg font-bold uppercase text-stone-900 leading-none">
                  AVIRASTAYS
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-stone-500 font-semibold mt-0.5 sm:mt-1">
                  Farmhouses For A Better You
                </span>
              </div>
            </a>

            {/* Centered Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] tracking-wide text-stone-700 font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || (link.id === 'home' && (!activeSection || activeSection === 'home'));
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`transition-all duration-200 py-1 relative cursor-pointer ${
                      isActive
                        ? 'text-stone-900 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#182C23]'
                        : 'hover:text-stone-950 text-stone-600'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Ambient Soundscape Toggle (Desktop/Tablet) */}
              <button
                type="button"
                onClick={onToggleAudio}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300/80 bg-stone-100/70 hover:bg-stone-200 text-stone-700 text-xs transition-colors cursor-pointer"
                title={isAudioPlaying ? 'Mute ambient nature sounds' : 'Play peaceful retreat ambience'}
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
                    <span className="text-[11px] font-medium text-emerald-900">Nature Audio On</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                    <span className="text-[11px] font-medium text-stone-500">Play Audio</span>
                  </>
                )}
              </button>

              {/* WhatsApp Owner Button (Desktop & Tablet) */}
              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold shadow-2xs transition-transform active:scale-95 cursor-pointer"
                title="Chat with owner on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              {/* Primary CTA: Book Stay (Desktop) */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                <span>Book Your Stay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={handleToggleMobileMenu}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-stone-100 border border-stone-200 text-stone-800 hover:bg-stone-200 active:scale-95 transition-all focus:outline-none cursor-pointer select-none"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.2] text-stone-900" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.2] text-stone-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Rendered outside header bar with z-[90]) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 z-[90] bg-black/60 backdrop-blur-xs flex flex-col justify-start animate-fadeIn">
          <div className="bg-[#FAF7F2] border-b border-stone-300 px-4 sm:px-6 pt-4 pb-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Quick Contact Ribbon inside drawer */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-stone-400 block leading-tight">Direct Owner Call</span>
                  <a href={`tel:${PROPERTY_INFO.rawPhone}`} className="text-xs font-bold text-stone-900">
                    {PROPERTY_INFO.phone}
                  </a>
                </div>
              </div>
              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center gap-1.5 shadow-2xs active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col divide-y divide-stone-200/70 rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-2xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || (link.id === 'home' && (!activeSection || activeSection === 'home'));
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`w-full min-h-[48px] px-4 py-3.5 flex items-center justify-between text-sm font-medium transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#182C23]/5 text-[#182C23] font-bold'
                        : 'text-stone-700 hover:bg-stone-50 active:bg-stone-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-stone-400 text-xs font-bold">→</span>
                  </button>
                );
              })}
            </nav>

            {/* Audio Toggle & Primary Book Actions */}
            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  onToggleAudio();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-300 text-xs font-medium text-stone-700 bg-white shadow-2xs active:bg-stone-100 cursor-pointer"
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-700 animate-pulse" />
                    <span className="font-semibold text-emerald-900">Nature Audio On (Tap to Mute)</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-stone-400" />
                    <span>Play Nature Ambience</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full min-h-[48px] py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-xl text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book Your Stay (3BHK Cottage)</span>
              </button>
            </div>

            {/* Footer mini links */}
            <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-stone-500 font-medium">
              <a href={PROPERTY_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-stone-900">
                <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                <span>25m from ORR</span>
              </a>
              <span>•</span>
              <a href={PROPERTY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-stone-900">
                <Instagram className="w-3.5 h-3.5 text-pink-700" />
                <span>@avy_ira</span>
              </a>
            </div>
          </div>

          {/* Touch-outside to close backdrop */}
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
};
