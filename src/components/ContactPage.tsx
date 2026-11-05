import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle2,
  Plus,
  Minus,
  Car,
  ExternalLink,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Flame,
  Tv
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/villasData';

interface ContactPageProps {
  onBackToHome: () => void;
  onOpenBooking: (villaId?: string) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onNavigateToSection,
}) => {
  // Form State (Email removed as requested)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: '3bhk-booking',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const faqs = [
    {
      question: 'How do I make a reservation for Avira Stays?',
      answer:
        'Direct bookings do not require credit cards on our site. Simply enter your dates and group details through the "Book Your Stay" button or the contact form, and it directly sends your booking inquiry to the owner via WhatsApp at +91 9154985626. Alternatively, you can book instantly on our official Airbnb listing.',
    },
    {
      question: 'Is there a security deposit required?',
      answer:
        'Yes. A refundable security deposit of ₹5,000 will be collected from the guest upon check-in and is fully refunded after checkout inspection.',
    },
    {
      question: 'Are parties and celebrations allowed?',
      answer:
        'Yes! Parties and celebratory getaways are allowed. We kindly ask all guests to ensure the cottage property, pool, lawn, and amenities are respected and not damaged.',
    },
    {
      question: 'What are the charges for Projector, Campfire & BBQ Coal?',
      answer:
        '● Outdoor HD Projector: ₹1,000 (Available till 12 AM only, collected back due to night rain and dust factors).\n● Seasoned wood for campfire: ₹500 (15 Kgs).\n● Barbeque coal: ₹200 (2 Kg).\n\nCarrom & Chess games, clean pool, kitchenware, RO water, generator backup, and caretaker are all included!',
    },
    {
      question: 'How far is Avira Stays and what is nearby?',
      answer:
        'Avira Stays is just 25 minutes smooth drive from the Outer Ring Road (ORR), Hyderabad in a serene gated community with a watchman and main security gate. Browntown Resort restaurant and spa are just a 2-minute walk away!',
    },
    {
      question: 'What amenities and kitchen facilities are provided?',
      answer:
        'We provide a private outdoor swimming pool, cozy wood-burning fireplace, full kitchen with modern appliances and cookware, private hot showers, fast WiFi, free parking, smart TV, coffee station, luxury bedding, in-unit washer/dryer, and garden access.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build formatted message for WhatsApp
    const message =
`🌿 *AVIRA STAYS | INQUIRY*

Hello Avira Stays Team! 👋

I would like to enquire about Avira Stays. Please find my details below.

━━━━━━━━━━━━━━━━━━

👤 *GUEST DETAILS*
• Name: ${formData.name.trim()}
• Contact: ${formData.phone.trim()}
• Topic / Interest: ${formData.interest}
${formData.message.trim() ? `• Message: ${formData.message.trim()}\n` : ''}
🏡 *PROPERTY DETAILS*
• Property: AVY ABODE
• Type: 3BHK Wooden Cottage Farmhouse

━━━━━━━━━━━━━━━━━━

📩 *KINDLY CONFIRM*
• Availability and pricing details
• Farmhouse policies and reservation details

Thank you! Looking forward to hearing from Avira Stays. 🌿✨`;

    const whatsappUrl = `https://wa.me/${PROPERTY_INFO.rawPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 4);

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen animate-fadeIn font-sans pb-24 lg:pb-16">
      {/* 1. Hero Section */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-6 sm:pt-8 mb-10 sm:mb-12">
        {/* Top Eyebrow & Hero Header */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
            GET IN TOUCH WITH AVIRA STAYS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-tight">
            We’d Love<br className="hidden sm:inline" /> to Hear From You
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl pt-1 leading-relaxed">
            Escape to our 3BHK wooden cottage farmhouse, 25 mins from ORR. Connect with the owner directly on WhatsApp or book via Airbnb.
          </p>
        </div>
      </div>

      {/* 2. 4 Quick Contact Channels Grid */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Channel 1: WhatsApp Owner (Primary) */}
          <a
            href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 fill-white" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-medium block">WhatsApp Owner</span>
              <p className="font-serif text-base font-bold text-stone-900 flex items-center gap-1 group-hover:text-emerald-900">
                <span>{PROPERTY_INFO.phone}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </p>
              <span className="text-[11px] text-stone-400 font-light block">
                Instant Chat & Booking
              </span>
            </div>
          </a>

          {/* Channel 2: Call Owner */}
          <a
            href={`tel:${PROPERTY_INFO.rawPhone}`}
            className="group bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#182C23] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-medium block">Call Us Directly</span>
              <p className="font-serif text-base font-bold text-stone-900 group-hover:text-emerald-950">
                {PROPERTY_INFO.phone}
              </p>
              <span className="text-[11px] text-stone-400 font-light block">
                Direct Owner Contact
              </span>
            </div>
          </a>

          {/* Channel 3: Airbnb Listing */}
          <a
            href={PROPERTY_INFO.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#FF5A5F] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-medium block">Book on Airbnb</span>
              <p className="font-serif text-sm sm:text-base font-bold text-stone-900 truncate group-hover:text-[#FF5A5F]">
                Avira Stays on Airbnb
              </p>
              <span className="text-[11px] text-stone-400 font-light block">
                Verified Listing & Reviews
              </span>
            </div>
          </a>

          {/* Channel 4: Visit Us / Google Maps */}
          <a
            href={PROPERTY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#182C23] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-medium block">Google Maps Location</span>
              <p className="font-serif text-sm font-bold text-stone-900 leading-snug">
                Avira Stays Farmhouse
              </p>
              <span className="text-[11px] text-stone-500 font-light block">
                25 mins from ORR, Hyderabad
              </span>
              <span className="text-[11px] font-semibold text-emerald-900 flex items-center gap-1 pt-0.5">
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* 3. Split Main Section: Contact Form (Left) & Sign Image + Map (Right) */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Form (No Email) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
                QUICK WHATSAPP INQUIRY
              </span>
              <h2 className="font-serif text-3xl font-normal text-stone-900">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                Enter your details to chat directly with the owner on WhatsApp.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200/80 space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Opening WhatsApp Chat!
                </h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Your inquiry is ready to send to our owner at <strong>{PROPERTY_INFO.phone}</strong>. We look forward to welcoming you!
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shadow"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#182C23] focus:border-[#182C23] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+91 9154985626"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#182C23] focus:border-[#182C23] transition-all"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="contact-interest" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Occasion / Purpose
                  </label>
                  <select
                    id="contact-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#182C23] focus:border-[#182C23] transition-all appearance-none text-stone-700 cursor-pointer"
                  >
                    <option value="3bhk-booking">3BHK Farmhouse Stay / Weekend Getaway</option>
                    <option value="birthday-party">Birthday Party / Celebration (Parties Allowed)</option>
                    <option value="family-reunion">Family Reunion / Campfire Gathering</option>
                    <option value="projector-bbq">BBQ & Outdoor Projector Movie Night</option>
                    <option value="corporate-team">Corporate Day Outing</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-stone-500 absolute right-4 top-[38px] pointer-events-none" />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Message / Travel Dates (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us your desired dates, number of guests, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#182C23] focus:border-[#182C23] transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send on WhatsApp ({PROPERTY_INFO.phone})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer"
                  >
                    <span>Check Dates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Signboard Image & Interactive Map Box */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Signboard Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 aspect-[16/9] group">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Avira Stays Good People Great Stays Signboard"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Wooden Sign Overlay Look */}
              <div className="absolute inset-0 flex items-center justify-start p-8">
                <div className="bg-[#5C3D28]/85 backdrop-blur-xs border-2 border-[#8B5E3C] px-6 py-5 rounded-xl text-center text-amber-100 shadow-xl space-y-1 rotate-[-1deg]">
                  <p className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                    Good
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                    People
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                    Great Stays
                  </p>
                  <p className="font-script text-2xl text-amber-200 pt-1">
                    ♡
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Map Card with Live Google Maps Pin Link */}
            <div
              id="map-section"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-5 items-center"
            >
              {/* Map Illustration / Visual on Left */}
              <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E8F0EA] border border-stone-200 flex items-center justify-center">
                {/* Visual Map graphic */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 220" fill="none">
                  <rect width="300" height="220" fill="#EBF3ED" />
                  <path d="M0 40 Q 80 80, 140 30 T 300 60 L 300 0 L 0 0 Z" fill="#DEEBE1" />
                  <path d="M0 160 Q 120 120, 200 180 T 300 150 L 300 220 L 0 220 Z" fill="#DEEBE1" />

                  {/* Highway Routes */}
                  <path d="M40 0 C 60 70, 110 100, 180 110 L 290 120" stroke="#CBDDD1" strokeWidth="6" strokeLinecap="round" />
                  <path d="M40 0 C 60 70, 110 100, 180 110 L 290 120" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
                  <path d="M180 110 L 190 220" stroke="#CBDDD1" strokeWidth="5" />
                  <path d="M180 110 L 190 220" stroke="#FFF" strokeWidth="2.5" strokeDasharray="5 3" />

                  <text x="35" y="45" fill="#4B6354" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Browntown Resort</text>
                  <text x="30" y="150" fill="#4B6354" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Gated Community</text>
                  <text x="135" y="195" fill="#4B6354" fontSize="10" fontWeight="bold" fontFamily="sans-serif">ORR 25 Mins</text>
                  <text x="210" y="55" fill="#203328" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Hyderabad</text>
                </svg>

                {/* Main Avira Stays Farmhouse Pin */}
                <a
                  href={PROPERTY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full shadow-lg border border-red-300 hover:scale-105 transition-transform"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-red-600 flex items-center justify-center text-white">
                    <MapPin className="w-2.5 h-2.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-stone-900 block leading-tight">
                      Avira Stays
                    </span>
                    <span className="text-[8px] text-emerald-800 font-semibold block">
                      Click to Open Maps
                    </span>
                  </div>
                </a>
              </div>

              {/* Map Info Box on Right */}
              <div className="md:col-span-6 space-y-3 text-left">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Avira Stays Location
                  </h3>
                  <p className="text-xs text-stone-600 font-light leading-relaxed mt-1">
                    3BHK Wooden Cottage Farmhouse<br />
                    25 mins from ORR, Hyderabad<br />
                    (2-min walk to Browntown Resort & Spa)
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href={PROPERTY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold transition-colors shadow-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center gap-2 text-stone-600 text-[11px]">
                  <Car className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>25 mins smooth drive from ORR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Frequently Asked Questions (FAQ) Section */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 mb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Text & Botanical Sketch */}
          <div className="lg:col-span-4 space-y-3 relative">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
              COMMON QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
              Frequently Asked<br />Questions
            </h2>

            <div className="pt-4 space-y-2 text-xs text-stone-600 font-light">
              <p>Have specific requirements for parties, projector cinema, or campfire wood? We're always available on WhatsApp!</p>
            </div>

            {/* Botanical sketch accent */}
            <div className="pt-4 text-stone-800 opacity-20 w-32 h-32 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 90 Q 50 10 90 90" />
                <path d="M30 60 Q 50 30 70 60" />
                <circle cx="50" cy="40" r="8" />
              </svg>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 space-y-3">
            {displayedFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors"
                  >
                    <span className="font-serif text-sm sm:text-base font-medium text-stone-900">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* View More FAQs Toggle Link */}
            <div className="pt-2 text-right">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
              >
                <span>{showAllFaqs ? 'Show Less FAQs' : 'View More FAQs'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Sunset Panorama CTA Banner */}
      <div className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[170px] sm:min-h-[190px] flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-12 gap-6">
          {/* Panoramic Sunset Mountain Background */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="Sunset Valley Panorama"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75"></div>

          {/* Left Text */}
          <div className="relative z-10 space-y-1.5 text-white max-w-lg">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Ready to Escape to Nature?
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 font-light">
              Connect directly with the owner on WhatsApp ({PROPERTY_INFO.phone}) or book on Airbnb.
            </p>
          </div>

          {/* Right Script Watermark & Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
            <a
              href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${PROPERTY_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/15 text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Us ({PROPERTY_INFO.phone})</span>
            </a>
          </div>

          {/* Calligraphy watermark right */}
          <div className="absolute top-4 right-6 text-white text-right hidden lg:block pointer-events-none opacity-90">
            <p className="font-script text-2xl text-white -rotate-3">
              “Good Stays<br />Brighter Days ♡”
            </p>
          </div>
        </div>
      </div>

      {/* 6. Minimalist Bottom Footer */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 pt-6 border-t border-stone-300/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
          {/* Logo on Left */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#182C23]/10 flex items-center justify-center text-stone-900">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 22C12 22 7 18 7 11C7 7 12 3 12 3C12 3 17 7 17 11C17 18 12 22 12 22Z" />
                <path d="M12 7V17" />
                <path d="M9.5 12L14.5 10" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-[0.2em] uppercase text-stone-900 block leading-tight">
                AVIRA STAYS
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-stone-500 font-semibold block">
                3BHK WOODEN COTTAGE FARMHOUSE
              </span>
            </div>
          </div>

          {/* Navigation Links in Center */}
          <nav className="flex items-center flex-wrap justify-center gap-6 sm:gap-8 text-xs font-medium text-stone-700">
            <button
              onClick={onBackToHome}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('villas');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Our Cottage
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('experiences');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Experiences
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('activities');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Activities
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('gallery');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => {
                if (onNavigateToSection) onNavigateToSection('about');
              }}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              About
            </button>
            <button className="text-stone-950 font-bold border-b border-stone-900 pb-0.5 cursor-pointer">
              Contact
            </button>
          </nav>

          {/* Social Icons & Instagram Link */}
          <div className="flex items-center gap-5 text-stone-700">
            <div className="flex items-center gap-3">
              <a
                href={PROPERTY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:text-pink-600 hover:border-pink-500 transition-colors"
                aria-label="Instagram @avy_ira"
                title="Instagram @avy_ira"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:text-emerald-600 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={PROPERTY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:text-stone-950 hover:border-stone-500 transition-colors"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>

            {/* Script Signature */}
            <div className="hidden sm:block text-right border-l border-stone-200 pl-4">
              <p className="font-script text-base text-stone-800 -rotate-2 leading-tight">
                Nature<br />People<br />Better Times ♡
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 pb-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
          <span>© 2025 Avira Stays. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href={PROPERTY_INFO.airbnbUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-800 transition-colors">
              Airbnb Listing
            </a>
            <span>|</span>
            <a href={PROPERTY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-800 transition-colors">
              Instagram @avy_ira
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
