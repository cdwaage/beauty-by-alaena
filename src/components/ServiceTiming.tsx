"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock } from "lucide-react";

const timings = [
  { service: "Bride — Hair", duration: "1 hour" },
  { service: "Bride — Makeup", duration: "1.5 hours" },
  { service: "Bridesmaid / Event — Hair", duration: "45 minutes" },
  { service: "Bridesmaid / Event — Makeup", duration: "1 hour" },
  { service: "Flower Girl — Hair", duration: "20 minutes" },
  { service: "Flower Girl — Makeup", duration: "20 minutes" },
];

export default function ServiceTiming() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="text-gold" size={28} />
            <h2 className="font-cormorant text-3xl md:text-4xl text-gray-900">
              Service Timing Guide
            </h2>
          </div>
          <p className="font-montserrat text-sm text-gray-500 max-w-xl mx-auto">
            Use these estimates to plan your event day timeline. Alaena works efficiently without ever rushing — quality is always the priority.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {timings.map((t, i) => (
            <motion.div
              key={t.service}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-cream-dark p-6 text-center"
            >
              <h3 className="font-cormorant text-xl text-gray-900 mb-2">
                {t.service}
              </h3>
              <div className="w-8 h-px bg-gold mx-auto mb-2" />
              <p className="font-montserrat text-sm font-semibold text-brown">
                {t.duration}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white border border-gold/20 p-6 text-center">
          <p className="font-montserrat text-sm text-gray-600">
            <strong>Pro tip:</strong> Add a 30–60 minute buffer before be-ready time for a stress-free wedding morning. For 6+ services, an assistant fee of $150 may apply to keep everything on schedule.
          </p>
        </div>
      </div>
    </section>
  );
}