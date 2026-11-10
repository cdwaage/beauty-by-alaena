"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

export default function PricingTables() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white" id="bridal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Full Pricing</span>
          <div className="divider-gold" />
          <h2 className="section-title">Service Menu</h2>
          <p className="font-montserrat text-sm text-gray-500 mt-4 max-w-xl mx-auto">
            You can book hair only, makeup only, or both. All prices are per person.
          </p>
        </motion.div>

        {/* Bridal Pricing */}
        <div className="mb-20" id="bridal">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-cormorant text-3xl text-gray-900">Bridal Services</h3>
            <div className="flex-1 h-px bg-cream-dark" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cream">
                  <th className="text-left font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Service
                  </th>
                  <th className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Hair
                  </th>
                  <th className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Makeup
                  </th>
                  <th className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Both
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Bride", hair: "$250", makeup: "$250", both: "$500" },
                  { label: "Bridesmaid / Mother of Bride or Groom", hair: "$175", makeup: "$175", both: "$350" },
                  { label: "Flower Girl (8 & under)", hair: "$100", makeup: "$100", both: "$200" },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-cream-dark ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}
                  >
                    <td className="font-montserrat text-sm text-gray-700 p-4">
                      {row.label}
                    </td>
                    <td className="text-center font-cormorant text-2xl font-semibold text-brown p-4">
                      {row.hair}
                    </td>
                    <td className="text-center font-cormorant text-2xl font-semibold text-brown p-4">
                      {row.makeup}
                    </td>
                    <td className="text-center font-cormorant text-2xl font-bold text-gold p-4">
                      {row.both}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-cream p-6 flex flex-wrap gap-6">
            <div className="flex items-start gap-2">
              <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
              <span className="font-montserrat text-sm text-gray-600">
                <strong>Minimum 4 services</strong> required to book a wedding date
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
              <span className="font-montserrat text-sm text-gray-600">
                Trial <strong>strongly recommended</strong> for all brides
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
              <span className="font-montserrat text-sm text-gray-600">
                $150 assistant fee may apply for large parties
              </span>
            </div>
          </div>
        </div>

        {/* Prom & Events Pricing */}
        <div className="mb-20" id="events">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-cormorant text-3xl text-gray-900">Prom & Special Events</h3>
            <div className="flex-1 h-px bg-cream-dark" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cream">
                  <th className="text-left font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Service
                  </th>
                  <th className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Hair
                  </th>
                  <th className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Makeup
                  </th>
                  <th className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Both
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Individual (Prom / Homecoming / Event)", hair: "$150", makeup: "$150", both: "$300" },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-cream-dark ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}
                  >
                    <td className="font-montserrat text-sm text-gray-700 p-4">
                      {row.label}
                    </td>
                    <td className="text-center font-cormorant text-2xl font-semibold text-brown p-4">
                      {row.hair}
                    </td>
                    <td className="text-center font-cormorant text-2xl font-semibold text-brown p-4">
                      {row.makeup}
                    </td>
                    <td className="text-center font-cormorant text-2xl font-bold text-gold p-4">
                      {row.both}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-cream p-6">
            <p className="font-montserrat text-sm text-gray-600">
              <strong>Events covered:</strong> Prom · Homecoming · Quinceañera · Photoshoot · Birthday · Gala · Any Special Occasion
            </p>
          </div>
        </div>

        {/* Trials */}
        <div id="trials">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-cormorant text-3xl text-gray-900">Trials</h3>
            <div className="flex-1 h-px bg-cream-dark" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cream">
                  <th className="text-left font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Trial Type
                  </th>
                  <th className="text-center font-montserrat text-xs tracking-widest uppercase text-gray-500 p-4">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Hair Trial Only", price: "$115" },
                  { label: "Makeup Trial Only", price: "$115" },
                  { label: "Hair & Makeup Trial", price: "$220" },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-cream-dark ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}
                  >
                    <td className="font-montserrat text-sm text-gray-700 p-4">
                      {row.label}
                    </td>
                    <td className="text-center font-cormorant text-2xl font-bold text-gold p-4">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-cream p-6">
            <p className="font-montserrat text-sm text-gray-600">
              Trials are conducted at Alaena&apos;s home studio. They are available for both bridal and special event clients and are <strong>strongly recommended for brides</strong>.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="font-montserrat text-sm text-gray-500 mb-6">
            Ready to check availability and get a custom quote?
          </p>
          <Link href="/inquiry" className="btn-primary">
            Submit an Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}