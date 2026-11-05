import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AmenitiesRibbon } from './components/AmenitiesRibbon';
import { VillasSection } from './components/VillasSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ValuesAtmosphereSection } from './components/ValuesAtmosphereSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VillaDetailPage } from './components/VillaDetailPage';
import { ExperiencesPage } from './components/ExperiencesPage';
import { ActivitiesPage } from './components/ActivitiesPage';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { SomaBrochurePage } from './components/SomaBrochurePage';
import { ExperienceDetailModal } from './components/ExperienceDetailModal';
import { BookingModal } from './components/BookingModal';
import { Villa, Experience } from './types';
import { VILLAS_DATA } from './data/villasData';
import { ambientAudio } from './utils/audioSynth';
import { FileText, ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'experiences' | 'activities' | 'gallery' | 'about' | 'contact' | 'brochure'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('brochure') || path.includes('soma') || search.includes('brochure') || hash.includes('brochure')) {
        return 'brochure';
      }
    }
    return 'home';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Booking initial state params
  const [bookingVillaId, setBookingVillaId] = useState('villa-01');
  const [bookingCheckIn, setBookingCheckIn] = useState('');
  const [bookingCheckOut, setBookingCheckOut] = useState('');
  const [bookingGuests, setBookingGuests] = useState(6);

  // Listen to popstate and hash changes to activate brochure route
  useEffect(() => {
    const checkUrlRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('brochure') || path.includes('soma') || search.includes('brochure') || hash.includes('brochure')) {
        setCurrentPage('brochure');
      }
    };
    checkUrlRoute();
    window.addEventListener('popstate', checkUrlRoute);
    window.addEventListener('hashchange', checkUrlRoute);
    return () => {
      window.removeEventListener('popstate', checkUrlRoute);
      window.removeEventListener('hashchange', checkUrlRoute);
    };
  }, []);

  // Track active section on scroll if on home landing
  useEffect(() => {
    if (selectedVilla || currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'villas', 'experiences', 'activities', 'gallery', 'about', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedVilla, currentPage]);

  const handleToggleAudio = () => {
    const newState = ambientAudio.toggle();
    setIsAudioPlaying(newState);
  };

  const handleOpenBooking = (villaId?: string) => {
    if (villaId) {
      setBookingVillaId(villaId);
    } else if (selectedVilla) {
      setBookingVillaId(selectedVilla.id);
    }
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithDetails = (
    villaId?: string,
    checkIn?: string,
    checkOut?: string,
    guests?: number
  ) => {
    if (villaId) setBookingVillaId(villaId);
    if (checkIn) setBookingCheckIn(checkIn);
    if (checkOut) setBookingCheckOut(checkOut);
    if (guests) setBookingGuests(guests);
    setIsBookingOpen(true);
  };

  const handleExploreVillas = () => {
    setSelectedVilla(null);
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById('villas');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      setSelectedVilla(null);
      setCurrentPage('contact');
      setActiveSection('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'about') {
      setSelectedVilla(null);
      setCurrentPage('about');
      setActiveSection('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'gallery') {
      setSelectedVilla(null);
      setCurrentPage('gallery');
      setActiveSection('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'activities') {
      setSelectedVilla(null);
      setCurrentPage('activities');
      setActiveSection('activities');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'experiences') {
      setSelectedVilla(null);
      setCurrentPage('experiences');
      setActiveSection('experiences');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'home') {
      setSelectedVilla(null);
      setCurrentPage('home');
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating to other sections on home (villas)
    setSelectedVilla(null);
    setCurrentPage('home');
    setActiveSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectVilla = (villa: Villa) => {
    setSelectedVilla(villa);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute active header indicator
  const getHeaderActiveSection = () => {
    if (selectedVilla) return 'villas';
    if (currentPage === 'contact') return 'contact';
    if (currentPage === 'about') return 'about';
    if (currentPage === 'gallery') return 'gallery';
    if (currentPage === 'experiences') return 'experiences';
    if (currentPage === 'activities') return 'activities';
    return activeSection;
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-800 font-sans selection:bg-[#182C23] selection:text-white flex flex-col justify-between">
      {/* 1. Header Navigation - Hidden on brochure page as it has its own dedicated header */}
      {currentPage !== 'brochure' && (
        <Header
          onOpenBooking={() => handleOpenBooking()}
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={handleToggleAudio}
          activeSection={getHeaderActiveSection()}
          onNavigateToSection={handleNavigateToSection}
        />
      )}

      <main className="flex-grow">
        {selectedVilla ? (
          /* Full-Page Villa Detail View */
          <VillaDetailPage
            villa={selectedVilla}
            onBackToHome={() => {
              setSelectedVilla(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectVilla={handleSelectVilla}
            onOpenBooking={handleOpenBookingWithDetails}
          />
        ) : currentPage === 'contact' ? (
          /* Full Contact Page */
          <ContactPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={(villaId) => handleOpenBooking(villaId)}
            onNavigateToSection={handleNavigateToSection}
          />
        ) : currentPage === 'about' ? (
          /* Full About Page */
          <AboutPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={(villaId) => handleOpenBooking(villaId)}
            onNavigateToSection={handleNavigateToSection}
          />
        ) : currentPage === 'gallery' ? (
          /* Full Gallery Page */
          <GalleryPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={(villaId) => handleOpenBooking(villaId)}
            onNavigateToSection={handleNavigateToSection}
          />
        ) : currentPage === 'activities' ? (
          /* Full Activities Page */
          <ActivitiesPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={(villaId) => handleOpenBooking(villaId)}
            onNavigateToSection={handleNavigateToSection}
          />
        ) : currentPage === 'experiences' ? (
          /* Full Experiences Page */
          <ExperiencesPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={(villaId) => handleOpenBooking(villaId)}
            onSelectExperience={(exp) => setSelectedExperience(exp)}
            onNavigateToSection={handleNavigateToSection}
          />
        ) : currentPage === 'brochure' ? (
          /* Dedicated Soma Villas Brochure Landing Page */
          <SomaBrochurePage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          /* Landing Home Experience */
          <>
            {/* 2. Hero Section */}
            <Hero
              onExploreVillas={handleExploreVillas}
              onOpenBookingWithDetails={handleOpenBookingWithDetails}
            />

            {/* 3. Amenities Horizontal Ribbon */}
            <AmenitiesRibbon
              onSelectCategory={(catId) => {
                if (catId === 'swimming-pools' || catId === 'private-farmhouses') {
                  handleExploreVillas();
                } else if (catId === 'games') {
                  handleNavigateToSection('activities');
                } else {
                  handleNavigateToSection('experiences');
                }
              }}
            />

            {/* 4. Our Villas Section */}
            <VillasSection
              onSelectVilla={handleSelectVilla}
              onBookVilla={(villaId) => handleOpenBooking(villaId)}
            />

            {/* 5. Experiences & Activities Section */}
            <ExperiencesSection
              onSelectExperience={(exp) => setSelectedExperience(exp)}
              onViewAllExperiences={() => handleNavigateToSection('experiences')}
            />

            {/* 6. Brand Values & Atmosphere Section */}
            <ValuesAtmosphereSection />

            {/* 7. Visual Sanctuary Gallery */}
            <GallerySection
              onViewFullGallery={() => handleNavigateToSection('gallery')}
            />

            {/* 8. Contact & FAQ Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 9. Site Footer */}
      {currentPage === 'home' && (
        <Footer onOpenBooking={() => handleOpenBooking()} />
      )}

      {/* Experience Detail Modal */}
      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onBookExperience={() => {
          setSelectedExperience(null);
          handleOpenBooking();
        }}
      />

      {/* Interactive Booking Checkout Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVillaId={bookingVillaId}
        initialCheckIn={bookingCheckIn}
        initialCheckOut={bookingCheckOut}
        initialGuests={bookingGuests}
      />

      {/* Quick UI Switcher between Avira Stays and Soma Villas Brochure UI */}
      <div className="fixed bottom-5 right-5 z-40">
        {currentPage !== 'brochure' ? (
          <button
            onClick={() => {
              setCurrentPage('brochure');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#1C2E24] hover:bg-[#15231B] text-white px-4 py-2.5 rounded-full shadow-xl border border-stone-600/40 flex items-center gap-2 text-xs font-medium cursor-pointer transition-all hover:scale-105 active:scale-95"
            title="View Soma Villas Brochure Page"
          >
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span>Soma Villas Brochure UI</span>
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#2D3E32] hover:bg-[#1E2B22] text-white px-4 py-2.5 rounded-full shadow-xl border border-stone-600/40 flex items-center gap-2 text-xs font-medium cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Avira Stays</span>
          </button>
        )}
      </div>
    </div>
  );
}
