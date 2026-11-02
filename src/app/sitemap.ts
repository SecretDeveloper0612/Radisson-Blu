import { MetadataRoute } from "next";
import { venuesData } from "@/data/venues";
import { roomsData } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://radissonhotelrudrapur.com";

  const staticRoutes = [
    "",
    "/venues",
    "/rooms",
    "/gallery",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-23"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const venueRoutes = venuesData.map((venue) => ({
    url: `${baseUrl}/venues/${venue.slug}`,
    lastModified: new Date("2026-10-23"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const roomRoutes = roomsData.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date("2026-10-23"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...venueRoutes, ...roomRoutes];
}
