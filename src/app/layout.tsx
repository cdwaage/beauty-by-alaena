import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessJsonLd, ogImage, siteUrl } from "@/lib/site";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beauty by Alaena — Hair & Makeup Artist in Rocklin, Placer County",
    template: "%s | Beauty by Alaena",
  },
  description:
    "Alaena is a hair and makeup artist based in Rocklin, Placer County. She travels to clients for weddings, proms, quinceañeras, and events, and for destination weddings.",
  keywords: [
    "hair and makeup artist Rocklin",
    "bridal makeup Rocklin",
    "wedding hair Placer County",
    "prom hair Rocklin",
    "quinceañera makeup Rocklin",
    "bridal makeup Roseville",
    "wedding makeup Folsom",
    "hair and makeup Granite Bay",
    "bridal artist Lincoln CA",
    "destination wedding makeup artist",
    "Lake Tahoe bridal hair and makeup",
    "Napa wedding hair and makeup",
    "Sonoma bridal makeup",
    "Beauty by Alaena",
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
    title: "Beauty by Alaena — Hair & Makeup Artist in Rocklin, Placer County",
    description:
      "Alaena is a hair and makeup artist based in Rocklin, Placer County. She travels to clients for weddings, proms, quinceañeras, and events.",
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Beauty by Alaena",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty by Alaena — Hair & Makeup Artist in Rocklin, Placer County",
    description:
      "Rocklin, Placer County hair and makeup for weddings, proms, quinceañeras, and destination events.",
    images: [ogImage.url],
  },
  alternates: {
    canonical: `${siteUrl}/`,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
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