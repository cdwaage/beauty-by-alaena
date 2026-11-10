"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pricingCategories = [
  {
    category: "Bridal",
    items: [
      { label: "Bride — Hair", price: "$250" },
      { label: "Bride — Makeup", price: "$250" },
      { label: "Bridesmaid/Mother — Hair", price: "$175" },
      { label: "Bridesmaid/Mother — Makeup", price: "$175" },
      { label: "Flower Girl (8 & under) — Hair", price: "$100" },
      { label: "Flower Girl (8 & under) — Makeup", price: "$100" },
    ],
    note: "Minimum 4 services to book. Trial available.",
    href: "/services#bridal",
    accent: "bg-stone-50",
  },
  {
    category: "Prom & Special Events",
    items: [
      { label: "Individual — Hair", price: "$150" },
      { label: "Individual — Makeup", price: "$150" },
    ],
    note: "Prom · Homecoming · Quinceañera · Photoshoot · Birthday · Gala",
    href: "/services#events",
    accent: "bg-cream",
  },
  {
    category: "Trials",
    items: [
      { label: "Trial — Hair Only", price: "$115" },
      { label: "Trial — Makeup Only", price: "$115" },
      { label: "Trial — Hair & Makeup", price: "$220" },
    ],
    note: "Conducted at the home studio. Strongly recommended for bridal.",
    href: "/services#trials",
    accent: "bg-stone-50",
  },
];

function PricingCard({
  category,
  items,
  note,
  href,
  accent,
  delay,
}: (typeof pricingCategories)[0] & { delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={`${accent} border border-cream-dark p-8 flex flex-col`}
    >
      <h3 className="font-cormorant text-2xl font-medium text-gray-900 mb-1">
        {category}
      </h3>
      <div className="w-8 h-px bg-gold mb-6" />
      <ul className="flex-1 space-y-3 mb-6">
        {items.map((item) => (
          <li key={item.label} className="flex justify-between items-center">
            <span className="font-montserrat text-sm text-gray-600">
              {item.label}
            </span>
            <span className="font-cormorant text-xl font-semibold text-brown ml-4">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
      <p className="font-montserrat text-xs text-gray-500 italic mb-6 leading-relaxed">
        {note}
      </p>
      <Link
        href={href}
        className="font-montserrat text-xs tracking-widest uppercase text-brown hover:text-gold transition-colors border-b border-brown/30 hover:border-gold pb-0.5 self-start"
      >
        Full Details →
      </Link>
    </motion.div>
  );
}

export default function PricingPreview() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Transparent Pricing</span>
          <div className="divider-gold" />
          <h2 className="section-title">Investment in Your Beauty</h2>
          <p className="font-montserrat text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            No hidden fees. No surprises. Just beautiful, professional artistry at
            clear, upfront prices — so you can plan with confidence.
          </p>
          <div className="mt-4 inline-block bg-gold/10 border border-gold/30 px-6 py-3">
            <p className="font-montserrat text-xs text-brown tracking-wide">
              <strong>$100 retainer</strong> required to secure your date · Payment due day-of
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-cream-dark">
          {pricingCategories.map((cat, i) => (
            <PricingCard key={cat.category} {...cat} delay={i * 0.15} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            View Full Pricing & Details
          </Link>
        </div>
      </div>
    </section>
  );
}