'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const INSTAGRAM_HANDLE = '_beautybyalaena';
const INSTAGRAM_URL = 'https://www.instagram.com/_beautybyalaena/';

export default function InstagramSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Instagram className="w-9 h-9 text-[#C9A96E] mx-auto mb-4" strokeWidth={1.5} />
          <p className="font-['Great_Vibes'] text-3xl text-[#C9A96E] mb-3">Follow Along</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#2C2C2C] font-semibold mb-4">
            @{INSTAGRAM_HANDLE}
          </h2>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mb-6" />
          <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed mb-10">
            The latest bridal looks, prom glam, and behind-the-scenes moments — updated regularly. Follow along for daily beauty inspiration.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B6F4E] text-white font-['Montserrat'] text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-[#7A6142] transition-all duration-300 shadow-md mb-6"
          >
            <Instagram className="w-4 h-4" />
            View on Instagram
          </a>
          <div className="mt-8 pt-8 border-t border-[#EDE8E1]">
            <p className="font-['Montserrat'] text-sm text-[#6B6B6B] mb-4">
              Love what you see? Let&apos;s create your perfect look together.
            </p>
            <a
              href="/inquiry"
              className="inline-block border border-[#8B6F4E] text-[#8B6F4E] font-['Montserrat'] text-sm tracking-widest uppercase px-10 py-3 rounded-full hover:bg-[#8B6F4E] hover:text-white transition-all duration-300"
            >
              Inquire Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
