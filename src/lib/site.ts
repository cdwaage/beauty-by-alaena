import type { Metadata } from "next";

export const siteUrl = "https://beautybyalaena.com";

export const instagramUrl = "https://www.instagram.com/_beautybyalaena";

/** Email used in structured data and llms.txt. */
export const businessEmail = "beautybyalaena@gmail.com";

export const ogImage = {
  url: `${siteUrl}/images/og.jpg`,
  width: 685,
  height: 1200,
  alt: "Alaena, hair and makeup artist based in Rocklin, Placer County",
};

/** Local cities only. Destination travel is described on the page, not here. */
export const serviceAreas = [
  "Rocklin",
  "Roseville",
  "Granite Bay",
  "Lincoln",
  "Loomis",
  "Auburn",
  "Folsom",
  "El Dorado Hills",
  "Sacramento",
] as const;

export const reviewLinks: { label: string; href: string }[] = [
  { label: "Review on Google", href: "" },
  { label: "Review on The Knot", href: "" },
  { label: "Review on WeddingWire", href: "" },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Which cities do you come to for hair and makeup?",
    answer:
      "Alaena is based in Rocklin, in Placer County, and she travels to you. She regularly serves Rocklin, Roseville, Granite Bay, Lincoln, Loomis, Auburn, Folsom, El Dorado Hills, and Sacramento for weddings, proms, quinceañeras, and other events.",
  },
  {
    question: "How does travel work on the wedding or event day?",
    answer:
      "She comes to your getting-ready location. Trials are held at her home studio in Rocklin. Travel within 30 miles of the studio is included, and travel past that is arranged when you book. The details are confirmed before your date is held.",
  },
  {
    question: "Can I book a hair and makeup trial?",
    answer:
      "Yes. Trials are available for brides and for prom, quinceañera, and other event clients, and they are held at her home studio in Rocklin. A trial is a time to plan the look before the event. Brides are encouraged to schedule one.",
  },
  {
    question: "How far ahead should I inquire?",
    answer:
      "There is no single lead time that fits every date. Share your date when you have it, and Alaena will tell you whether she is open. A retainer and a signed contract hold the date, and the contract is requested at least 30 days before the event.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Yes. Alaena is based in Rocklin and Roseville and travels for destination weddings, including Lake Tahoe bridal hair and makeup, Napa and Sonoma weddings, and celebrations anywhere in the United States. Travel fees for destination weddings are quoted per event.",
  },
];

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const canonical = `${siteUrl}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Beauty by Alaena",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "HairSalon"],
  name: "Beauty by Alaena",
  description:
    "Hair and makeup artist based in Rocklin, Placer County, California. Alaena travels to clients for weddings, proms, quinceañeras, and events, and travels for destination weddings.",
  url: `${siteUrl}/`,
  email: businessEmail,
  image: ogImage.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rocklin",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7908,
    longitude: -121.2358,
  },
  sameAs: [instagramUrl],
  areaServed: serviceAreas.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "California" },
  })),
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
          description: "Makeup application for proms and special events",
        },
        price: "150",
        priceCurrency: "USD",
      },
    ],
  },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
