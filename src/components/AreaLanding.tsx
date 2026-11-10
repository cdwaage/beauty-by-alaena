import Image from "next/image";
import Link from "next/link";
import AreasWeServe from "@/components/AreasWeServe";
import type { LocalPage } from "@/lib/local-pages";

const bridalRates = [
  ["Bride", "$250", "$250", "$500"],
  ["Bridesmaid / mother of the bride or groom", "$150", "$150", "$300"],
  ["Flower girl (8 & under)", "$90", "$90", "$180"],
] as const;

const eventRates = [
  ["Prom, homecoming, quinceañera, or other event", "$150", "$150", "$300"],
] as const;

function faqJsonLd(page: LocalPage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function RateTable({ page }: { page: LocalPage }) {
  const rates = page.rateKind === "bridal" ? bridalRates : eventRates;

  return (
    <div className="overflow-x-auto border border-cream-dark">
      <table className="w-full">
        <thead>
          <tr className="bg-cream">
            <th
              scope="col"
              className="text-left font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4"
            >
              Service
            </th>
            <th
              scope="col"
              className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4"
            >
              Hair
            </th>
            <th
              scope="col"
              className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4"
            >
              Makeup
            </th>
            <th
              scope="col"
              className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4"
            >
              Both
            </th>
          </tr>
        </thead>
        <tbody>
          {rates.map((row) => (
            <tr key={row[0]} className="border-t border-cream-dark">
              <th
                scope="row"
                className="text-left font-montserrat text-sm font-normal text-gray-700 p-4"
              >
                {row[0]}
              </th>
              <td className="text-center font-cormorant text-2xl text-brown p-4">
                {row[1]}
              </td>
              <td className="text-center font-cormorant text-2xl text-brown p-4">
                {row[2]}
              </td>
              <td className="text-center font-cormorant text-2xl text-gold p-4">
                {row[3]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AreaLanding({ page }: { page: LocalPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page)) }}
      />

      <section className="bg-[#2C2C2C] text-white pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-widest uppercase text-white/50 mb-4">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/services/" className="hover:text-gold">
              Services
            </Link>
          </p>
          <p className="font-greatvibes text-4xl text-gold mb-3">{page.eyebrow}</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light mb-6">
            {page.h1}
          </h1>
          <p className="font-montserrat text-sm text-white/75 leading-relaxed">
            {page.lede}
          </p>
          <Link href="/inquiry/" className="btn-gold inline-block mt-8">
            Request a date
          </Link>
        </div>
      </section>

      <article className="bg-cream">
        {page.sections.map((section) => (
          <section key={section.heading} className="section-padding pb-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-gray-900 mb-6">
                {section.heading}
              </h2>
              <div className="space-y-5 font-montserrat text-sm text-gray-600 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section-padding" id="included">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-gray-900 mb-6">
              What is included
            </h2>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed mb-6">
              {page.ratesIntro}
            </p>
            <RateTable page={page} />
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed mt-4">
              <Link href="/services/" className="text-brown hover:text-gold">
                See the full menu, timing, and travel rules
              </Link>
            </p>
          </div>
        </section>

        <section className="section-padding bg-white" id="trial">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-gray-900 mb-6">
              The trial at the Rocklin studio
            </h2>
            <div className="space-y-5 font-montserrat text-sm text-gray-600 leading-relaxed">
              {page.trialParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" id="booking">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-gray-900 mb-6">
              How booking works
            </h2>
            <div className="space-y-5 font-montserrat text-sm text-gray-600 leading-relaxed">
              {page.bookingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ol className="mt-6 space-y-4">
              {page.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-cormorant text-2xl text-gold leading-none">
                    {index + 1}
                  </span>
                  <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            <p className="font-montserrat text-sm text-gray-500 mt-6">
              Payment accepted: cash, Venmo, Cash App, Apple Pay, and check.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
              Portfolio looks
            </h2>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-8">
              Examples of Alaena&apos;s hair and makeup. These photos are not labeled
              by city, and they are not a claim that a look was done at a
              particular place.
            </p>
            <ul
              className={`grid grid-cols-2 gap-3 ${
                page.images.length > 3 ? "md:grid-cols-4" : "md:grid-cols-3"
              }`}
            >
              {page.images.map((image) => (
                <li key={image.src} className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </li>
              ))}
            </ul>
            <p className="text-center mt-8">
              <Link href="/gallery/" className="btn-outline inline-block">
                View the gallery
              </Link>
            </p>
          </div>
        </section>

        <section className="section-padding" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Questions
            </h2>
            <div className="space-y-8">
              {page.faqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="font-cormorant text-2xl text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#2C2C2C] text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-greatvibes text-4xl text-gold mb-2">Your date</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
              {page.ctaHeading}
            </h2>
            <p className="font-montserrat text-sm text-white/75 leading-relaxed mb-8">
              {page.ctaText}
            </p>
            <Link href="/inquiry/" className="btn-gold inline-block">
              Request a date
            </Link>
            <p className="font-montserrat text-xs text-white/50 mt-6">
              <Link href="/services/" className="hover:text-gold">
                Services and pricing
              </Link>
            </p>
          </div>
        </section>
      </article>

      <AreasWeServe currentPath={page.path} />
    </>
  );
}
