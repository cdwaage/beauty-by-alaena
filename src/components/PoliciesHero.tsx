'use client';

import { motion } from 'framer-motion';

export default function PoliciesHero() {
  return (
    <section className="relative bg-[#2C2C2C] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201,169,110,0.3) 40px,
              rgba(201,169,110,0.3) 41px
            )`,
          }}
        />
      </div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-['Great_Vibes'] text-3xl text-[#C9A96E] mb-4">
            Transparency &amp; Trust
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Policies &amp; Contract
          </h1>
          <div className="w-20 h-px bg-[#C9A96E] mx-auto mb-8" />
          <p className="font-['Montserrat'] text-white/70 text-base max-w-2xl mx-auto leading-relaxed">
            I believe in complete transparency. These policies protect both of us and ensure your event day runs smoothly. Please read carefully before booking — all clients receive a formal contract 30 days prior to their event.
          </p>
        </motion.div>

        {/* Decorative quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 font-['Cormorant_Garamond'] text-xl italic text-[#C9A96E]/80"
        >
          &ldquo;When we both know the plan, the only thing left to focus on is making you beautiful.&rdquo;
        </motion.blockquote>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
    </section>
  );
}