import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  propertyName: "Radisson Blu Hotel Rudrapur",
  brandName: "Radisson Blu",
  tagline: "Distinguished Five-Star Destination in Uttarakhand",
  shortDescription:
    "Nestled in the heart of Uttarakhand's industrial hub, Radisson Blu Hotel Rudrapur is a distinguished five-star destination renowned for its elegant hospitality, contemporary comforts, and exceptional event experiences.",
  fullDescription:
    "Nestled in the heart of Uttarakhand's industrial hub, Radisson Blu Hotel Rudrapur is a distinguished five-star destination renowned for its elegant hospitality, contemporary comforts, and exceptional event experiences. Featuring 124 well-appointed rooms and suites, world-class dining at Kumaon Café, Pastry Shop, and K2 Bar, along with Mastak Spa & Salon and over 61,000 sq.ft. of grand banqueting spaces.",
  logoText: "VYAH By Radisson",
  logoAssetPath: undefined, // Leave undefined to use clean typography branding unless official SVG is provided

  contact: {
    phone: "+919205911889",
    phoneDisplay: "+91 9205911889",
    email: "banquetsales@rdrudrapur.com",
    banquetEmail: "banquetsales@rdrudrapur.com",
    reservationsEmail: "reservations@rdrudrapur.com",
    address: {
      street: "Plot No. A, IIE, Pantnagar, NH-87",
      locality: "IIE, Pantnagar",
      city: "Rudrapur",
      state: "Uttarakhand",
      pincode: "263153",
      country: "India",
      full: "Radisson Blu Hotel Rudrapur, Plot No. A, IIE, Pantnagar, NH-87, Rudrapur 263153, India",
    },
    whatsappNumber: "+919205911889",
    whatsappUrl: "https://wa.me/919205911889?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Radisson%20Blu%20Hotel%20Rudrapur",
    // Embed URL can be updated with property's verified Google Place CID/Embed URL
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.4285800000003!2d79.355!3d28.981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0832070000001%3A0x808544c8c7c907cb!2sRadisson%20Blu%20Hotel%20Rudrapur!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl:
      "https://maps.google.com/?q=Radisson+Blu+Hotel+Rudrapur,+Plot+No.+A,+IIE,+Pantnagar,+NH-87,+Rudrapur+263153,+India",
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
