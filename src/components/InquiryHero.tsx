"use client";

import { motion } from "framer-motion";

export default function InquiryHero() {
  return (
    <section className="relative h-72 md:h-80 overflow-hidden bg-[#2C2320]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-greatvibes text-4xl text-gold mb-2"
        >
          Let&apos;s Connect
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-cormorant text-4xl md:text-5xl text-white font-light"
        >
          Submit an Inquiry
        </motion.h1>
      </div>
    </section>
  );
}