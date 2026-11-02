export interface SiteConfig {
  propertyName: string;
  brandName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  logoText: string;
  logoAssetPath?: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: {
      street: string;
      locality: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
    whatsappNumber: string;
    whatsappUrl: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  booking: {
    engineUrl: string; // e.g. official Radisson booking link or PMS
    isConfigured: boolean;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    tripadvisor?: string;
  };
  checkInTime: string;
  checkOutTime: string;
}

export interface RoomItem {
  id: string;
  slug: string;
  name: string;
  category: "Superior" | "Business Class" | "Executive Suite" | "Suite";
  tagline: string;
  description: string;
  fullDescription: string;
  featuredImage: string;
  galleryImages: string[];
  specs: {
    size?: string;
    bedType?: string;
    maxOccupancy?: string;
    view?: string;
  };
  highlights: string[];
  amenities: string[];
  isAvailableForBooking: boolean;
}

export interface VenueItem {
  id: string;
  slug: string;
  name: string;
  category: "Banquet & Ballroom" | "Dining & Lounge" | "Meeting & Conference" | "Outdoor Lawn" | "Entertainment";
  tagline: string;
  description: string;
  fullDescription: string;
  featuredImage: string;
  galleryImages: string[];
  isUpcoming?: boolean;
  statusBadge?: string;
  specs: {
    capacity?: string;
    area?: string;
    catering?: string;
    setupStyles?: string[];
  };
  highlights: string[];
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Rooms" | "Dining" | "Venues" | "Exterior" | "Events" | "Guest Experiences";
  src: string;
  alt: string;
  featured?: boolean;
  aspect?: "landscape" | "portrait" | "wide";
}

export interface NavLink {
  label: string;
  href: string;
}
