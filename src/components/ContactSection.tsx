import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Send, Check, ChevronDown, ExternalLink } from 'lucide-react';
import { PROPERTY_INFO } from '../data/villasData';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Family Getaway');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do bookings work on Avira Stays?',
      a: 'Bookings do not require on-site credit cards. Fill in your dates and requirements, and it directly sends your booking details to the owner via WhatsApp (+91 9154985626) for quick availability confirmation, or you can book via our verified Airbnb link.'
    },
    {
      q: 'Is there a security deposit and what is the policy on parties?',
      a: 'A refundable security deposit of ₹5,000 will be collected from the guest upon check-in. Parties and family celebrations are allowed, provided the property is cared for and not damaged.'
    },
    {
      q: 'What are the charges for add-ons like Projector, Campfire & BBQ?',
      a: '● Projector: ₹1,000 (Available till 12 AM only, collected back due to rain/dust factors).\n● Campfire firewood: ₹500 (15 Kgs).\n● Barbeque coal: ₹200 (2 Kg).\n● Kitchenware, RO drinking water, power generator & caretaker are all included.'
    },
    {
      q: 'Where is the farmhouse located and what is nearby?',
      a: 'Avira Stays is located 25 mins from ORR, Hyderabad in a serene community with lush green lawn grass, watchman and main security gate. Browntown Resort restaurant and spa are just a 2-minute walk away!'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    const message =
`🌿 *AVIRA STAYS | GENERAL INQUIRY*

Hello Avira Stays Team! 👋

I would like to enquire about Avira Stays. Please find my inquiry details below.

━━━━━━━━━━━━━━━━━━

👤 *GUEST DETAILS*
• Name: ${inquiryName.trim()}
• Contact: ${inquiryPhone.trim()}
• Occasion / Event: ${inquiryType}
${inquiryMessage.trim() ? `• Message / Preferred Dates: ${inquiryMessage.trim()}\n` : ''}
🏡 *PROPERTY DETAILS*
• Property: AVY ABODE
• Type: 3BHK Wooden Cottage Farmhouse

━━━━━━━━━━━━━━━━━━

📩 *KINDLY CONFIRM*
• Availability and pricing for my requested dates
• Farmhouse policies and reservation details

Thank you! Looking forward to hearing from Avira Stays. 🌿✨`;

    const whatsappUrl = `https://wa.me/${PROPERTY_INFO.rawPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-20" data-purpose="contact-and-faq">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-500 block">
          Connect with Owner
        </span>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
          Plan Your Next <span className="italic font-normal">Unforgettable Escape</span>
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-light max-w-xl mx-auto leading-relaxed">
          Reach out directly to the owner on WhatsApp ({PROPERTY_INFO.phone}) for instant confirmations, party planning, and bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Contact Form & WhatsApp Details */}
        <div className="lg:col-span-6 bg-[#F5F0E8] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-stone-300/80 shadow-xs space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between border-b border-stone-300/60 pb-3 sm:pb-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">Direct WhatsApp Inquiry</h3>
              <p className="text-xs text-stone-500 mt-0.5">Quick responses directly from owner</p>
            </div>
            <a
              href={`https://wa.me/${PROPERTY_INFO.rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-[11px] font-semibold tracking-wide shadow hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>{PROPERTY_INFO.phone}</span>
            </a>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 text-center text-emerald-900 space-y-2 animate-fadeIn">
              <Check className="w-8 h-8 mx-auto text-emerald-700" />
              <h4 className="font-bold text-sm">WhatsApp Opened!</h4>
              <p className="text-xs text-emerald-800">
                Thank you, {inquiryName}. Your inquiry has been sent to our owner at {PROPERTY_INFO.phone}. We look forward to hosting you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label htmlFor="inquiry-full-name" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="inquiry-full-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 bg-white focus:ring-1 focus:ring-[#182C23]"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-phone-number" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="inquiry-phone-number"
                    type="tel"
                    required
                    placeholder="+91 9154985626"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 bg-white focus:ring-1 focus:ring-[#182C23]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-occasion-type" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  Occasion / Trip Type
                </label>
                <select
                  id="inquiry-occasion-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 bg-white focus:ring-1 focus:ring-[#182C23] cursor-pointer"
                >
                  <option value="Family Weekend Getaway">Family Weekend Getaway</option>
                  <option value="Birthday Party / Celebration">Birthday Party / Celebration (Parties Allowed)</option>
                  <option value="Friends Reunion & Campfire">Friends Reunion & Campfire</option>
                  <option value="Pool Party & BBQ">Pool Party & BBQ</option>
                  <option value="Projector Movie Night">Projector Movie Night</option>
                  <option value="Corporate Offsite">Corporate Day Outing</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-message-text" className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  Message / Preferred Dates & Group Size
                </label>
                <textarea
                  id="inquiry-message-text"
                  rows={3}
                  placeholder="Tell us about your expected travel dates, number of guests, or add-ons (Projector, Campfire wood, BBQ coal)..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 bg-white focus:ring-1 focus:ring-[#182C23] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow transition-all cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send Details on WhatsApp ({PROPERTY_INFO.phone})</span>
              </button>
            </form>
          )}

          {/* Direct Estate Info Ribbon */}
          <div className="pt-3 border-t border-stone-300/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
            <a
              href={PROPERTY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-900 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#182C23] shrink-0" />
              <span>25 mins from ORR, Hyderabad (Google Maps)</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#182C23] shrink-0" />
              <span>Browntown Resort 2-Min Walk</span>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-4">
          <div className="mb-1">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-400">Everything you need to know</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#FAF7F2] rounded-2xl border border-stone-200/90 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-800 hover:text-stone-950 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 ml-2 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#182C23]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 sm:px-4 pb-4 pt-1 text-xs text-stone-600 font-light leading-relaxed border-t border-stone-200/50 animate-fadeIn whitespace-pre-line">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Airbnb Callout */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-stone-900 block">Prefer booking via Airbnb?</span>
              <span className="text-[11px] text-stone-500 font-light">View our official listing, verified calendar & guest reviews.</span>
            </div>
            <a
              href={PROPERTY_INFO.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] px-4 py-2 bg-[#FF5A5F] hover:bg-[#E0484D] text-white rounded-full text-xs font-semibold shrink-0 flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <span>Airbnb Listing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
