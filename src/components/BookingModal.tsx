import React, { useState } from 'react';
import {
  X,
  Calendar,
  Users,
  Home,
  Check,
  Plus,
  Minus,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Phone,
  Flame,
  Tv,
  Info
} from 'lucide-react';
import { VILLAS_DATA, PROPERTY_INFO } from '../data/villasData';
import { ADD_ONS_DATA } from '../data/addOnsData';
import { buildWhatsAppBookingUrl, formatWhatsAppDate, formatAddOnLine } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVillaId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialVillaId = 'villa-01',
  initialCheckIn = '',
  initialCheckOut = '',
  initialGuests = 6
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedVillaId, setSelectedVillaId] = useState(initialVillaId);
  const [checkIn, setCheckIn] = useState(initialCheckIn || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(initialCheckOut || new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0]);
  const [adults, setAdults] = useState(initialGuests > 2 ? Math.min(initialGuests, 10) : 6);
  const [children, setChildren] = useState(initialGuests > 6 ? 2 : 0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['addon-projector', 'addon-campfire']);

  // Guest Contact Details (No email address as per instruction)
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  if (!isOpen) return null;

  const currentVilla = VILLAS_DATA.find((v) => v.id === selectedVillaId) || VILLAS_DATA[0];

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 2;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getAddOnSummaryList = () => {
    return selectedAddOns
      .map((id) => {
        const item = ADD_ONS_DATA.find((a) => a.id === id);
        return item ? `${item.name} (${item.price > 0 ? `₹${item.price.toLocaleString()}` : 'Free'})` : '';
      })
      .filter(Boolean)
      .join(', ');
  };

  const generateWhatsAppUrl = () => {
    return buildWhatsAppBookingUrl({
      guestName: fullName.trim() || 'Guest',
      contactPhone: phone.trim() || 'Not provided',
      specialRequests: specialRequests.trim(),
      propertyName: currentVilla.name,
      propertyType: currentVilla.subtitle,
      checkIn,
      checkOut,
      nights,
      adults,
      children,
      selectedAddOnIds: selectedAddOns
    });
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      return;
    }
    const url = generateWhatsAppUrl();
    window.open(url, '_blank');
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl relative flex flex-col justify-between">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#FAF7F2]/95 backdrop-blur-md px-4 sm:px-6 py-3.5 sm:py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-serif tracking-[0.18em] text-xs sm:text-sm font-bold uppercase text-stone-900">
              AVIRA STAYS BOOKING
            </span>
            {step < 3 && (
              <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-[#182C23]/10 text-[#182C23] font-semibold">
                Step {step} of 2
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-7 flex-grow space-y-4">
          {/* STEP 1: Dates, Guests & Optional Add-ons */}
          {step === 1 && (
            <div className="space-y-4 sm:space-y-5 animate-fadeIn">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                  Select Dates & Group Size
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Avira Stays 3BHK Wooden Cottage Farmhouse • 25 mins from ORR, Hyderabad
                </p>
              </div>

              {/* Property Highlights Banner */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200 flex items-center gap-3">
                <img
                  src={currentVilla.mainImage}
                  alt={currentVilla.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 inline-block">
                    3BHK Wooden Cottage Farmhouse
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900 truncate">{currentVilla.name}</h4>
                  <p className="text-[10px] sm:text-[11px] text-stone-500 line-clamp-1">
                    Clean Pool • Gazebo with Village Views • Lush Lawn • Parties Allowed
                  </p>
                </div>
              </div>

              {/* Date Pickers */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="modal-checkin-date" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Check-in Date
                  </label>
                  <input
                    id="modal-checkin-date"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full text-xs font-medium p-2.5 rounded-xl border border-stone-300 focus:ring-1 focus:ring-[#182C23]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-checkout-date" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Check-out Date
                  </label>
                  <input
                    id="modal-checkout-date"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full text-xs font-medium p-2.5 rounded-xl border border-stone-300 focus:ring-1 focus:ring-[#182C23]"
                  />
                </div>
              </div>

              {/* Guests Selector with 44px touch targets */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50/60">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Adults (Age 13+)</span>
                    <p className="text-[10px] text-stone-500">Includes 3 master bedrooms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="min-w-[36px] min-h-[36px] rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 cursor-pointer active:scale-95"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-sm w-6 text-center tabular-nums">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.min(15, adults + 1))}
                      className="min-w-[36px] min-h-[36px] rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 cursor-pointer active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50/60">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Children (Age 0-12)</span>
                    <p className="text-[10px] text-stone-500">Lawn games & pool access</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="min-w-[36px] min-h-[36px] rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 cursor-pointer active:scale-95"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-sm w-6 text-center tabular-nums">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(Math.min(8, children + 1))}
                      className="min-w-[36px] min-h-[36px] rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 cursor-pointer active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Optional Add-Ons Selection */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Optional Add-Ons
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ADD_ONS_DATA.map((addon) => {
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-2.5 active:scale-98 ${
                          isChecked
                            ? 'border-[#182C23] bg-white shadow-xs'
                            : 'border-stone-200 bg-[#F5F0E8] hover:border-stone-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border transition-colors shrink-0 ${
                            isChecked ? 'bg-[#182C23] border-[#182C23] text-white' : 'border-stone-400 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h5 className="text-xs font-bold text-stone-900 truncate">{addon.name}</h5>
                            <span className="text-xs font-bold text-[#182C23] shrink-0">
                              {addon.price > 0 ? `₹${addon.price.toLocaleString()}` : 'Free'}
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-stone-500 font-light leading-snug">
                            {addon.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notice Banner */}
              <div className="bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200/80 flex items-start gap-2.5 text-xs text-stone-700">
                <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-stone-900 text-xs">
                    WhatsApp Owner Dispatch
                  </p>
                  <p className="text-stone-600 font-light text-[11px] leading-relaxed">
                    Your details will be forwarded directly to the owner on WhatsApp ({PROPERTY_INFO.phone}) for quick availability confirmation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Guest Details & Direct WhatsApp Dispatch */}
          {step === 2 && (
            <form onSubmit={handleSendWhatsApp} className="space-y-4 sm:space-y-5 animate-fadeIn">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                  Guest Contact Details
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Provide your name and phone number to send your inquiry straight to the owner on WhatsApp.
                </p>
              </div>

              {/* Form Fields (No email address) */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 space-y-3.5">
                <div>
                  <label htmlFor="modal-guest-name" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="modal-guest-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 focus:ring-1 focus:ring-[#182C23]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-guest-phone" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    id="modal-guest-phone"
                    type="tel"
                    required
                    placeholder="+91 9154985626"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 focus:ring-1 focus:ring-[#182C23]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-special-requests" className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Special Requests / Party Type (Optional)
                  </label>
                  <input
                    id="modal-special-requests"
                    type="text"
                    placeholder="e.g. Birthday party, campfire setup, late arrival"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 focus:ring-1 focus:ring-[#182C23]"
                  />
                </div>
              </div>

              {/* Summary Overview */}
              <div className="bg-[#F4EFE6] rounded-2xl p-4 border border-stone-300/70 space-y-2 text-xs">
                <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[10px] mb-1.5 flex items-center justify-between">
                  <span>WhatsApp Message Preview</span>
                  <span className="text-emerald-800 font-semibold">{nights} Nights ({formatWhatsAppDate(checkIn)} → {formatWhatsAppDate(checkOut)})</span>
                </h4>
                <div className="flex justify-between text-stone-600">
                  <span>Property:</span>
                  <span className="font-semibold text-stone-900">{currentVilla.name} ({currentVilla.subtitle})</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Guests:</span>
                  <span className="font-semibold text-stone-900">{adults} Adults, {children} Children</span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="pt-1 border-t border-stone-300/50">
                    <span className="block text-[10px] uppercase font-bold text-stone-500 mb-1">Selected Add-ons:</span>
                    <div className="space-y-1">
                      {selectedAddOns.map((id) => (
                        <div key={id} className="text-stone-800 font-medium text-[11px]">
                          {formatAddOnLine(id)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="pt-2 border-t border-stone-300 flex justify-between text-stone-700 font-medium">
                  <span>Refundable Security Deposit:</span>
                  <span className="font-bold text-stone-900">₹5,000 (Acknowledged)</span>
                </div>
              </div>

              {/* Primary WhatsApp Dispatch Action */}
              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send on WhatsApp ({PROPERTY_INFO.phone})</span>
              </button>

              {/* Alternative: Airbnb Booking Link */}
              <div className="text-center pt-1">
                <a
                  href={PROPERTY_INFO.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF5A5F] hover:underline"
                >
                  <span>Or book instantly through our verified Airbnb listing</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          )}

          {/* STEP 3: Successful Dispatch Confirmation */}
          {step === 3 && (
            <div className="space-y-4 sm:space-y-5 text-center animate-fadeIn py-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-emerald-800">
                  Inquiry Dispatched via WhatsApp
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-1">
                  Thank You, {fullName || 'Valued Guest'}!
                </h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto mt-1.5 font-light leading-relaxed">
                  Your booking request with dates ({checkIn} to {checkOut}) and {adults + children} guests has been sent to our owner at <strong>{PROPERTY_INFO.phone}</strong>. We will reply shortly to confirm your dates!
                </p>
              </div>

              {/* Quick Action Links */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow cursor-pointer active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Reopen WhatsApp Chat</span>
                </a>
                <a
                  href={`tel:${PROPERTY_INFO.rawPhone}`}
                  className="min-h-[44px] px-6 py-3 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow cursor-pointer active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Owner: {PROPERTY_INFO.phone}</span>
                </a>
                <button
                  onClick={onClose}
                  className="min-h-[44px] px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-full text-xs font-semibold tracking-wider cursor-pointer active:scale-98"
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Navigation Footer */}
        {step < 3 && (
          <div className="bg-[#F0EBE1] px-4 sm:px-6 py-3.5 border-t border-stone-200 flex items-center justify-between pb-safe">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="min-h-[40px] px-4 py-2 rounded-full border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-white transition-colors cursor-pointer"
              >
                Back
              </button>
            ) : (
              <a
                href={PROPERTY_INFO.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#FF5A5F] hover:underline flex items-center gap-1"
              >
                <span>Book on Airbnb</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {step === 1 && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="min-h-[40px] px-6 py-2.5 bg-[#182C23] hover:bg-[#233F32] text-white rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 shadow transition-all cursor-pointer active:scale-98"
              >
                <span>Continue to Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
