'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#2C2C2C]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about2.jpeg"
          alt="Beauty by Alaena studio"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#2C2C2C]/30" />
      </div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-['Great_Vibes'] text-3xl text-white mb-4">
            The Artist Behind the Brush
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold mb-6 leading-tight">
            Meet Alaena
          </h1>
          <div className="w-20 h-px bg-white mx-auto mb-8" />
          <p className="font-['Montserrat'] text-white text-base max-w-xl mx-auto leading-relaxed">
            Rocklin&apos;s trusted hair &amp; makeup artist for weddings, prom, and every moment worth remembering.
          </p>
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
    </section>
  );
}