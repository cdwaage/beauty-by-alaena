import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beautybyalaena.com"),
  title: {
    default: "Beauty by Alaena — Hair & Makeup Artist | Rocklin, Placer County, CA",
    template: "%s | Beauty by Alaena",
  },
  description:
    "Rocklin-based hair and makeup artist specializing in weddings, proms, quinceañeras, and special events. Elegant, timeless beauty by Alaena. Book your trial today.",
  keywords: [
    "hair makeup artist Rocklin",
    "bridal makeup Rocklin",
    "prom hair Rocklin",
    "wedding hair makeup CA",
    "quinceañera makeup Rocklin",
    "special event hair Rocklin",
    "Beauty by Alaena",
    "Rocklin bridal artist",
    "bridal hair makeup Sacramento",
    "wedding makeup artist Sacramento",
    "bridal hair makeup San Francisco Bay Area",
    "wedding hair makeup Los Angeles",
    "bridal artist San Jose",
    "hair makeup artist Folsom",
    "bridal makeup Roseville",
    "wedding hair makeup El Dorado Hills",
    "hair makeup artist Granite Bay",
    "bridal artist Lincoln CA",
    "wedding makeup Napa Sonoma",
    "bridal hair makeup Tahoe",
    "destination wedding hair makeup California",
    "travel makeup artist California",
    "destination bridal artist nationwide",
  ],
  authors: [{ name: "Alaena", url: "https://beautybyalaena.com" }],
  creator: "Alaena",
  publisher: "Beauty by Alaena",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Beauty by Alaena — Hair & Makeup Artist | Rocklin, Placer County, CA",
    description:
      "Rocklin-based hair and makeup artist specializing in weddings, proms, quinceañeras, and special events. Elegant, timeless beauty by Alaena.",
    type: "website",
    url: "https://beautybyalaena.com",
    siteName: "Beauty by Alaena",
    locale: "en_US",
    images: [
      {
        url: "https://beautybyalaena.pages.dev/images/about2.jpeg",
        width: 1200,
        height: 630,
        alt: "Beauty by Alaena — Hair & Makeup Artist Rocklin, Placer County, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty by Alaena — Hair & Makeup Artist | Rocklin, Placer County, CA",
    description:
      "Rocklin-based hair and makeup artist specializing in weddings, proms, and special events.",
    images: ["https://beautybyalaena.pages.dev/images/about2.jpeg"],
  },
  alternates: {
    canonical: "https://beautybyalaena.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "",
  },
  category: "beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable}`}
    >
      <head>
        <meta name="theme-color" content="#FAF6F1" />
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Beauty by Alaena",
              description:
                "Rocklin-based hair and makeup artist specializing in weddings, proms, quinceañeras, and special events.",
              url: "https://beautybyalaena.com",
              email: "beautybyalaena@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rocklin",
                addressRegion: "CA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.5816,
                longitude: -121.4944,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "20:00",
              },
              priceRange: "$$",
              image: "https://beautybyalaena.com/images/about2.jpeg",
              sameAs: ["https://www.instagram.com/_beautybyalaena"],
              areaServed: [
                { "@type": "City", name: "Rocklin", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Roseville", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Folsom", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "El Dorado Hills", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Granite Bay", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Lincoln", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Sacramento", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "San Francisco", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "San Jose", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Oakland", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Los Angeles", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "San Diego", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Napa", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Sonoma", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Lake Tahoe", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "City", name: "Fresno", containedInPlace: { "@type": "State", name: "California" } },
                { "@type": "State", name: "California" },
                { "@type": "Country", name: "United States" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Hair & Makeup Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bridal Hair",
                      description: "Professional bridal hair styling",
                    },
                    price: "250",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bridal Makeup",
                      description: "Professional bridal makeup application",
                    },
                    price: "250",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Prom & Special Event Hair",
                      description: "Hair styling for proms and special events",
                    },
                    price: "150",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Prom & Special Event Makeup",
                      description:
                        "Makeup application for proms and special events",
                    },
                    price: "150",
                    priceCurrency: "USD",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-montserrat bg-cream text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}