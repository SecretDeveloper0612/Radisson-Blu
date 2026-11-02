import { RoomItem } from "@/types";

export const roomsData: RoomItem[] = [
  {
    id: "superior-room",
    slug: "superior",
    name: "Superior",
    category: "Superior",
    tagline: "Essential comfort",
    description:
      "A calm, well-appointed sanctuary designed for restful stays, featuring plush bedding, warm ambient lighting, and bespoke work spaces.",
    fullDescription:
      "Designed with understated elegance, the Superior Room balances contemporary luxury and restorative comfort. Natural textures, soothing earth tones, and acoustic insulation create an oasis for business travelers and leisure guests seeking calm and focus after a busy day in Rudrapur.",
    featuredImage: "/hotel-photos/room-superior.jpg",
    galleryImages: [
      "/hotel-photos/room-superior.jpg",
      "/hotel-photos/room-business.jpg",
      "/hotel-photos/room-exec-living.jpg",
    ],
    specs: {
      size: "32 – 36 sq.m",
      bedType: "King Bed or Twin Beds",
      maxOccupancy: "Up to 2 Adults, 1 Child",
      view: "City / Courtyard View",
    },
    highlights: [
      "Custom orthopaedic plush mattress",
      "Ergonomic work desk with multi-plug universal sockets",
      "Rain shower with premium herbal bath rituals",
      "High-definition smart streaming television",
    ],
    amenities: [
      "Complimentary high-speed Wi-Fi",
      "In-room coffee & tea brewing station",
      "Electronic laptop-sized digital safe",
      "Individually controlled climate automation",
      "Iron & ironing board on request",
      "Minibar & curated refreshments",
      "24-Hour in-room dining service",
      "Daily housekeeping & evening turndown",
    ],
    isAvailableForBooking: true,
  },
  {
    id: "business-class-room",
    slug: "business-class",
    name: "Business Class",
    category: "Business Class",
    tagline: "Work-ready convenience",
    description:
      "Tailored for corporate executives with dedicated executive desk amenities, express garment services, and seamless connectivity.",
    fullDescription:
      "Engineered specifically for the demanding schedule of modern corporate leaders visiting SIDCUL Rudrapur and neighboring industrial hubs. The Business Class room combines superior spatial flow, an expansive workspace, lounge seating, and refined soundproofing for productive work and uninterrupted relaxation.",
    featuredImage: "/hotel-photos/room-business.jpg",
    galleryImages: [
      "/hotel-photos/room-business.jpg",
      "/hotel-photos/room-exec-living.jpg",
      "/hotel-photos/room-superior.jpg",
    ],
    specs: {
      size: "40 – 44 sq.m",
      bedType: "King Bed",
      maxOccupancy: "Up to 2 Adults",
      view: "Panoramic View",
    },
    highlights: [
      "Enhanced high-speed dedicated bandwidth",
      "Nespresso coffee machine & premium tea selection",
      "Executive lounge access privileges",
      "Complimentary business garment pressing service",
    ],
    amenities: [
      "Ergonomic executive leather task chair",
      "Dual-line telephone with voicemail",
      "Sound-insulated double-glazed windows",
      "Bespoke marble bathroom with rain shower",
      "Smart 55-inch 4K LED TV with screen casting",
      "Welcome fruit basket & mineral water",
      "24-Hour express concierge assistance",
      "Automated blackout curtains",
    ],
    isAvailableForBooking: true,
  },
  {
    id: "executive-suite",
    slug: "executive-suite",
    name: "Executive Suite",
    category: "Executive Suite",
    tagline: "More room to unwind",
    description:
      "An expansive two-bay suite featuring a distinct living salon, guest powder room, and private bedroom retreat.",
    fullDescription:
      "The Executive Suite offers an elevated sense of space and residential comfort. With a separate living room suited for hosting small discussions or relaxing with family, this suite boasts generous proportions, bespoke hardwood finishes, and panoramic vistas of Rudrapur and the Himalayan foothills.",
    featuredImage: "/hotel-photos/room-exec-living.jpg",
    galleryImages: [
      "/hotel-photos/room-exec-living.jpg",
      "/hotel-photos/room-suite.jpg",
      "/hotel-photos/room-business.jpg",
    ],
    specs: {
      size: "60 – 68 sq.m",
      bedType: "California King Bed",
      maxOccupancy: "Up to 3 Adults or 2 Adults + 2 Children",
      view: "Lush Greenery & City Horizon",
    },
    highlights: [
      "Separate living salon & guest powder room",
      "Walk-in dressing wardrobe with vanity mirrors",
      "Deep soaking bathtub & rainfall shower alcove",
      "Personalized butler service on request",
    ],
    amenities: [
      "Dual 55-inch Ultra HD Smart televisions",
      "Premium Bluetooth soundbar system",
      "Gourmet private minibar & capsule coffee bar",
      "Luxury bathrobes & plush velvet slippers",
      "Nightly aromatherapy turndown rituals",
      "Complimentary high-speed Wi-Fi 6",
      "Executive dining table for private in-suite dinners",
      "Late check-out subject to availability",
    ],
    isAvailableForBooking: true,
  },
  {
    id: "presidential-suite",
    slug: "suite",
    name: "Suite",
    category: "Suite",
    tagline: "An elevated stay",
    description:
      "The pinnacle of Radisson luxury, featuring grand proportions, bespoke master quarters, opulent living spaces, and VIP hospitality.",
    fullDescription:
      "The grand Suite represents the zenith of refined hospitality in Uttarakhand. Crafted for dignitaries, VIPs, and memorable celebrations, it blends contemporary architectural finishes with artisanal Indian detailing, offering unmatched privacy, supreme comfort, and attentive service.",
    featuredImage: "/hotel-photos/room-presidential.jpg",
    galleryImages: [
      "/hotel-photos/room-presidential.jpg",
      "/hotel-photos/room-suite.jpg",
      "/hotel-photos/room-exec-living.jpg",
    ],
    specs: {
      size: "85 – 110 sq.m",
      bedType: "Royal King Bed",
      maxOccupancy: "Up to 3 Adults",
      view: "Top-Floor Panoramic City & Mountain Vista",
    },
    highlights: [
      "Private dining salon and pantry facility",
      "Master marble bathroom with whirlpool jacuzzi & rain shower",
      "Dedicated VIP concierge and chauffeur arrival service",
      "Curated chef welcome amuses-bouches",
    ],
    amenities: [
      "Custom designer furniture and Italian marble flooring",
      "Bespoke sound ecosystem and home theatre integration",
      "Private study & conference-ready alcove",
      "In-suite cocktail bar & sommelier wine chiller",
      "Complimentary airport/railway transfers",
      "Luxury organic bath amenities",
      "24-Hour dedicated suite attendant",
      "Unrestricted executive lounge privileges",
    ],
    isAvailableForBooking: true,
  },
];
