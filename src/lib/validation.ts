import { z } from "zod";

export const bookingFormSchema = z
  .object({
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
    guests: z.number().min(1, "At least 1 guest required").max(10, "Max 10 guests"),
    rooms: z.number().min(1, "At least 1 room required").max(5, "Max 5 rooms"),
  })
  .refine(
    (data) => {
      const checkInDate = new Date(data.checkIn);
      const checkOutDate = new Date(data.checkOut);
      return checkOutDate > checkInDate;
    },
    {
      message: "Check-out date must be later than check-in date",
      path: ["checkOut"],
    }
  );

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export const enquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .max(16, "Phone number is too long"),
  enquiryType: z.enum([
    "General Enquiry",
    "Room Booking",
    "Dining",
    "Meeting",
    "Banquet or Celebration",
    "Other",
  ]),
  eventDate: z.string().optional(),
  estimatedGuests: z.string().optional(),
  venuePreference: z.string().optional(),
  message: z
    .string()
    .min(10, "Please enter a descriptive message (at least 10 characters)")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>;
