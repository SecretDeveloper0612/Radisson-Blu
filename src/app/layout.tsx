import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080097",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://radissonhotelrudrapur.com"),
  title: {
    default: `${siteConfig.propertyName} — Luxury Hotel, Banquets & Dining`,
    template: `%s | ${siteConfig.propertyName}`,
  },
  description: siteConfig.shortDescription,
  keywords: [
    "Radisson Hotel Rudrapur",
    "Hotel in Rudrapur Uttarakhand",
    "Rudrapur banquet hall",
    "Sapphire banquet Rudrapur",
    "NH 87 restaurant Rudrapur",
    "luxury hotel Sidcul Rudrapur",
    "wedding venue Rudrapur",
    "corporate meeting room Rudrapur",
  ],
  authors: [{ name: "VYAH By Radisson" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://radissonhotelrudrapur.com",
    siteName: siteConfig.propertyName,
    title: `${siteConfig.propertyName} — A Stay, Beautifully Reimagined`,
    description: siteConfig.shortDescription,
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "VYAH By Radisson",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} h-full scroll-smooth font-poppins`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-poppins text-luxury-primary antialiased bg-warm-ivory selection:bg-[#C6A568] selection:text-[#04005E]"
      >
        <Header />
        <main className="flex-1 w-full flex flex-col font-poppins">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
