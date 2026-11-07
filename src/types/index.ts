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
    banquetEmail?: string;
    reservationsEmail?: string;
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

export interface VenueSubHall {
  name: string;
  area: string;
  dimensions?: string;
  length?: string;
  width?: string;
  height?: string;
  theatre?: number | string;
  classroom?: number | string;
  cluster?: number | string;
  ushape?: number | string;
  hollowBlock?: number | string;
  sitDown?: number | string;
  social?: number | string;
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
    dimensions?: string;
    catering?: string;
    setupStyles?: string[];
  };
  subHalls?: VenueSubHall[];
  highlights: string[];
  features: string[];
  amenities?: string[];
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
