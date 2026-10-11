export interface Villa {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  bedrooms: number;
  maxGuests: number;
  bathrooms: number;
  sqft: number;
  poolType: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  mainImage: string;
  galleryImages: string[];
  specs: {
    bedrooms: string;
    guests: string;
    pool: string;
    view: string;
    wifi: string;
  };
  amenities: string[];
  features: string[];
  highlights: string[];
  houseRules: string[];
  location: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  fullDescription: string;
  image: string;
  iconType: string;
  timing: string;
  duration: string;
  equipmentProvided: string[];
  suitableFor: string;
  highlights: string[];
}

export interface AmenityPillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface BookingDetails {
  villaId: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  selectedAddOns: string[];
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface AddOnExperience {
  id: string;
  name: string;
  price: number;
  per: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'villas' | 'pools' | 'nature' | 'dining' | 'activities' | 'exterior' | 'interior' | 'night';
  villaName?: string;
}
