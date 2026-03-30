"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane } from "lucide-react";

export default function TravelFees() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cormorant text-3xl md:text-4xl text-gray-900 mb-4">
            Travel Information
          </h2>
          <p className="font-montserrat text-sm text-gray-500 max-w-xl mx-auto">
            Alaena is based in Rocklin, Placer County, CA and available to travel for your event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-cream-dark p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                <MapPin className="text-gold" size={20} />
              </div>
              <h3 className="font-cormorant text-2xl text-gray-900">
                Within California
              </h3>
            </div>
            <ul className="space-y-3 font-montserrat text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                Trials conducted at Alaena&apos;s home studio (no travel fee)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                Travel within 30 miles: <strong>Included at no charge</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                Beyond 30 miles: <strong>$2 per mile, round trip</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                Calculated from Rocklin, Placer County, CA to event location
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white border border-cream-dark p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                <Plane className="text-gold" size={20} />
              </div>
              <h3 className="font-cormorant text-2xl text-gray-900">
                Outside California
              </h3>
            </div>
            <ul className="space-y-3 font-montserrat text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                Round-trip flight expenses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                Hotel accommodations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                Uber / transportation fees
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">·</span>
                All out-of-state travel costs included in quote
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}