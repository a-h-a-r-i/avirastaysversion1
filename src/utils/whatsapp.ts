import { PROPERTY_INFO } from '../data/villasData';
import { ADD_ONS_DATA } from '../data/addOnsData';

export interface BookingInquiryParams {
  guestName: string;
  contactPhone: string;
  specialRequests?: string;
  propertyName?: string;
  propertyType?: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  children: number;
  selectedAddOnIds?: string[];
}

/**
 * Formats a date string into "13 October 2026" format without timezone shifts
 */
export const formatWhatsAppDate = (dateStr: string): string => {
  if (!dateStr) return 'To be confirmed';

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr.trim());
  if (match) {
    const year = parseInt(match[1], 10);
    const monthIndex = parseInt(match[2], 10) - 1;
    const day = parseInt(match[3], 10);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    if (monthIndex >= 0 && monthIndex < 12) {
      return `${day} ${monthNames[monthIndex]} ${year}`;
    }
  }

  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  }

  return dateStr;
};

/**
 * Format an add-on item matching the user's exact specification
 */
export const formatAddOnLine = (id: string): string => {
  switch (id) {
    case 'addon-projector':
      return '• 🎬 Outdoor Cinema Projector & Screen — ₹1,000';
    case 'addon-campfire':
      return '• 🔥 Campfire Wood (15 kg) — ₹500';
    case 'addon-bbq-coal':
      return '• 🍖 Barbeque Coal (2 kg) — ₹200';
    case 'addon-games':
      return '• 🎮 Indoor Games Kit — Complimentary';
    default: {
      const found = ADD_ONS_DATA.find((a) => a.id === id);
      if (!found) return `• ✨ ${id}`;
      const priceText = found.price > 0 ? `₹${found.price.toLocaleString()}` : 'Complimentary';
      return `• ✨ ${found.name} — ${priceText}`;
    }
  }
};

/**
 * Generates the WhatsApp booking inquiry text matching the user's template
 */
export const buildWhatsAppBookingMessage = (params: BookingInquiryParams): string => {
  const {
    guestName,
    contactPhone,
    specialRequests,
    propertyName = 'AVY ABODE',
    propertyType = '3BHK Wooden Cottage Farmhouse',
    checkIn,
    checkOut,
    nights,
    adults,
    children,
    selectedAddOnIds = []
  } = params;

  const formattedCheckIn = formatWhatsAppDate(checkIn);
  const formattedCheckOut = formatWhatsAppDate(checkOut);
  const durationText = `${nights} Night${nights === 1 ? '' : 's'}`;

  // Format add-ons
  let addOnsSection = '';
  if (selectedAddOnIds.length > 0) {
    addOnsSection = selectedAddOnIds.map((id) => formatAddOnLine(id)).join('\n');
  } else {
    addOnsSection = '• None selected (Standard stay)';
  }

  // Format special requests note if present
  const guestNoteLine = specialRequests && specialRequests.trim()
    ? `\n• Special Request: ${specialRequests.trim()}`
    : '';

  const message =
`🌿 *AVIRA STAYS | BOOKING INQUIRY*

Hello Avira Stays Team! 👋

I would like to enquire about booking your property. Please find my booking details below.

━━━━━━━━━━━━━━━━━━

👤 *GUEST DETAILS*
• Name: ${guestName || 'Guest'}
• Contact: ${contactPhone || 'Provided upon inquiry'}${guestNoteLine}

🏡 *PROPERTY DETAILS*
• Property: ${propertyName}
• Type: ${propertyType}

📅 *STAY DETAILS*
• Check-in: ${formattedCheckIn}
• Check-out: ${formattedCheckOut}
• Duration: ${durationText}
• Guests: ${adults} Adults
• Children: ${children}

✨ *SELECTED ADD-ONS*
${addOnsSection}

💰 *SECURITY DEPOSIT*
• Refundable Deposit: ₹5,000
• Acknowledged: Yes

━━━━━━━━━━━━━━━━━━

📩 *KINDLY CONFIRM*
• Availability for the selected dates
• Total booking amount, including add-ons
• Security deposit and refund terms
• Reservation confirmation and payment details

Thank you! Looking forward to a wonderful stay at Avira Stays. 🌿✨`;

  return message;
};

/**
 * Helper to build the direct wa.me link
 */
export const buildWhatsAppBookingUrl = (params: BookingInquiryParams): string => {
  const message = buildWhatsAppBookingMessage(params);
  return `https://wa.me/${PROPERTY_INFO.rawPhone}?text=${encodeURIComponent(message)}`;
};
