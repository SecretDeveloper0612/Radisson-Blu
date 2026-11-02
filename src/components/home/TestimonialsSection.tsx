import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  source: string;
  quote: string;
  tag: string;
}

const ROW_ONE_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram Malhotra",
    role: "Managing Director",
    location: "Gurugram, HR",
    rating: 5,
    date: "Stayed Oct 2024",
    source: "Google Review",
    quote:
      "The benchmark for hospitality in Uttarakhand. Impeccable executive suites, seamless airport transfers from Pantnagar, and prompt banquet arrangements for our corporate conference.",
    tag: "Business Trip",
  },
  {
    id: "t2",
    name: "Dr. Ananya & Rohit Sen",
    role: "Destination Wedding Hosts",
    location: "New Delhi",
    rating: 5,
    date: "Hosted Sep 2024",
    source: "TripAdvisor",
    quote:
      "We hosted our 3-day royal wedding at the Grand Ballroom and lush lawn. The catering theatre, decor precision, and personal attention made our families feel like royalty.",
    tag: "Wedding & Celebration",
  },
  {
    id: "t3",
    name: "Siddharth Joshi",
    role: "Plant Head, Tata Motors Vendor",
    location: "SIDCUL Rudrapur",
    rating: 5,
    date: "Frequent Guest",
    source: "Verified Guest",
    quote:
      "A peaceful oasis after long factory review shifts. High-speed Wi-Fi, acoustically insulated quiet rooms, and the breakfast buffet at Mosaic is consistently five-star.",
    tag: "Corporate Stay",
  },
  {
    id: "t4",
    name: "Pooja & Karan Mehra",
    role: "Weekend Leisure Travelers",
    location: "Chandigarh",
    rating: 5,
    date: "Stayed Aug 2024",
    source: "Booking.com",
    quote:
      "Stopped here en route to Nainital and ended up staying an extra day! The temperature-controlled pool, luxury spa therapies, and kebabs at the terrace restaurant were exceptional.",
    tag: "Leisure Getaway",
  },
  {
    id: "t5",
    name: "Rajesh Singhania",
    role: "Senior Director",
    location: "Mumbai",
    rating: 5,
    date: "Stayed Nov 2024",
    source: "Google Review",
    quote:
      "Hospitality at its pinnacle. The concierge arranged our Corbett safari and hill transit effortlessly. Warm, courteous staff who remember your preferences down to morning coffee.",
    tag: "Family Vacation",
  },
];

const ROW_TWO_TESTIMONIALS: Testimonial[] = [
  {
    id: "t6",
    name: "Meenakshi Chawla",
    role: "Culinary Blogger & Critic",
    location: "Dehradun",
    rating: 5,
    date: "Dined Oct 2024",
    source: "Zomato Gold",
    quote:
      "The live teppanyaki counter and authentic Awadhi slow-cooked gravies at their specialty restaurant rival top luxury kitchens in Delhi. Outstanding culinary finesse.",
    tag: "Fine Dining",
  },
  {
    id: "t7",
    name: "Harpreet Singh Dhillon",
    role: "Annual Agro Summit Organizer",
    location: "Kashipur",
    rating: 5,
    date: "Event Hosted Oct 2024",
    source: "Verified Planner",
    quote:
      "Seamless audio-visual setups, pillarless hall with high ceilings, and valet parking management for over 400 delegates. No other venue in the Kumaon belt comes close.",
    tag: "MICE & Conventions",
  },
  {
    id: "t8",
    name: "Elena Rostova",
    role: "International Automotive Auditor",
    location: "Frankfurt / Rudrapur",
    rating: 5,
    date: "Stayed 2 Weeks",
    source: "Radisson Rewards",
    quote:
      "Outstanding international standard hygiene, ultra-comfortable plush bedding, modern gym facilities, and polite English-speaking concierge. Felt safe and thoroughly cared for.",
    tag: "Long Stay Guest",
  },
  {
    id: "t9",
    name: "Aditya & Shreya Tiwari",
    role: "Anniversary Celebration",
    location: "Bareilly, UP",
    rating: 5,
    date: "Stayed Sep 2024",
    source: "TripAdvisor",
    quote:
      "Booked the Presidential Suite for our milestone anniversary. The team surprised us with handmade chocolates, petal arrangements, and a private candlelight poolside dinner.",
    tag: "Romantic Getaway",
  },
  {
    id: "t10",
    name: "Col. Sanjeev Varma (Retd.)",
    role: "Kumaon Tour Member",
    location: "Lucknow",
    rating: 5,
    date: "Stayed Oct 2024",
    source: "Google Review",
    quote:
      "Prime location right along the Nainital highway yet shielded from street noise. The hospitality, spotless rooms, and warm smiles made our homecoming to Uttarakhand unforgettable.",
    tag: "Transit & Leisure",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-[320px] sm:w-[400px] shrink-0 p-6 sm:p-7 rounded-2xl bg-white border border-[#E4DED2] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(16,43,40,0.08)] hover:border-[#AA8B54]/50 transition-shadow duration-200 flex flex-col justify-between group transform-gpu select-none">
      <div>
        {/* Header: Stars & Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#C6A568] text-[#C6A568]"
              />
            ))}
          </div>
          <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#080097]/5 text-[#080097] border border-[#080097]/10">
            {item.tag}
          </span>
        </div>

        {/* Quote */}
        <div className="relative mb-6">
          <Quote className="w-8 h-8 text-[#C6A568]/15 absolute -top-2 -left-1 pointer-events-none group-hover:text-[#C6A568]/30 transition-colors" />
          <p className="text-sm sm:text-[15px] text-[#0A0835] leading-relaxed relative z-10 font-light">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Author Footer */}
      <div className="pt-4 border-t border-[#E4DED2]/70 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#080097] text-[#C6A568] font-serif font-medium flex items-center justify-center text-sm shadow-sm group-hover:bg-[#0E05B5] transition-colors">
            {item.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-semibold text-xs sm:text-sm text-[#080097]">
                {item.name}
              </h4>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#AA8B54]" />
            </div>
            <p className="text-[11px] text-[#77766D] leading-tight mt-0.5">
              {item.role} • {item.location}
            </p>
          </div>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[#AA8B54] font-medium hidden sm:inline-block">
          {item.source}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  // Duplicate arrays to create continuous infinite loops
  const rowOneItems = [...ROW_ONE_TESTIMONIALS, ...ROW_ONE_TESTIMONIALS];
  const rowTwoItems = [...ROW_TWO_TESTIMONIALS, ...ROW_TWO_TESTIMONIALS];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#0A0835] relative overflow-hidden border-t border-[#E8E8F0] [contain:paint]">
      <Container>
        <SectionHeading
          eyebrow="GUEST STORIES & EXPERIENCES"
          title="Warm words from cherished stays."
          description="Read genuine memories and experiences shared by global business leaders, wedding couples, culinary explorers, and leisure vacationers."
          align="center"
          className="mb-12 sm:mb-16"
        />
      </Container>

      {/* Dual Infinite Carousels */}
      <div className="space-y-6 relative [contain:layout_paint]">
        {/* Edge Gradient Mask for seamless fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Carousel 1: Left Direction Infinite Loop */}
        <div className="overflow-hidden flex pause-hover select-none [contain:paint]">
          <div className="animate-marquee-left flex gap-5 sm:gap-6 pl-4 transform-gpu">
            {rowOneItems.map((item, index) => (
              <TestimonialCard key={`row1-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Carousel 2: Right Direction Infinite Loop */}
        <div className="overflow-hidden flex pause-hover select-none [contain:paint]">
          <div className="animate-marquee-right flex gap-5 sm:gap-6 pl-4 transform-gpu">
            {rowTwoItems.map((item, index) => (
              <TestimonialCard key={`row2-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
