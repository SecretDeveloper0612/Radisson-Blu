import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  propertyName: "Radisson Hotel Rudrapur",
  brandName: "Radisson",
  tagline: "A stay, beautifully reimagined.",
  shortDescription:
    "Discover thoughtful comfort, memorable dining, and exceptional spaces for every occasion in the heart of Rudrapur, Uttarakhand.",
  fullDescription:
    "Nestled strategically in Uttarakhand's vibrant industrial and commercial gateway, Radisson Hotel Rudrapur offers international hospitality, sophisticated accommodations, versatile banquet and conference venues, and curated gastronomic experiences.",
  logoText: "VYAH By Radisson",
  logoAssetPath: undefined, // Leave undefined to use clean typography branding unless official SVG is provided

  contact: {
    // Note for Property Management: Replace with verified contact numbers and desk coordinates
    phone: "+91 5944 000000",
    phoneDisplay: "+91 5944 000000",
    email: "reservations@radissonrudrapur.example.com",
    address: {
      street: "Plot No. 1, Industrial Area, Nainital Road",
      locality: "Sidcul / Central Gateway",
      city: "Rudrapur",
      state: "Uttarakhand",
      pincode: "263153",
      country: "India",
      full: "Nainital Road, Rudrapur, Udham Singh Nagar, Uttarakhand 263153, India",
    },
    whatsappNumber: "+919876543210",
    whatsappUrl: "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Radisson%20Hotel%20Rudrapur",
    // Embed URL can be updated with property's verified Google Place CID/Embed URL
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111812.87228965706!2d79.31758532454178!3d28.98393527210214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07e868f0814bd%3A0xe54d6bebf1e4b3c0!2sRudrapur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl:
      "https://maps.google.com/?q=Radisson+Hotel+Rudrapur+Uttarakhand",
  },

  booking: {
    // Official booking engine or brand reservation gateway URL
    engineUrl: "https://www.radissonhotels.com",
    isConfigured: false, // Set to true once verified booking engine link / property code is integrated
  },

  socialLinks: {
    facebook: "https://facebook.com/RadissonHotels",
    instagram: "https://instagram.com/RadissonHotels",
    linkedin: "https://linkedin.com/company/radisson-hotels",
    tripadvisor: "https://tripadvisor.com",
  },

  checkInTime: "14:00 hrs (2:00 PM)",
  checkOutTime: "12:00 hrs (12:00 PM)",
};
