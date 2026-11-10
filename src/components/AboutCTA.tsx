'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Instagram } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-24 text-white relative overflow-hidden">
      <Image
        src="/images/gallery28.webp"
        alt="Braided low updo on the mother of the bride"
        fill
        loading="lazy"
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#2C2320]/70" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-['Great_Vibes'] text-3xl text-[#C9A96E] mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Ready to Begin Your<br />Beauty Journey?
          </h2>
          <div className="w-20 h-px bg-[#C9A96E] mx-auto mb-8" />
          <p className="font-['Montserrat'] text-white/70 text-sm max-w-lg mx-auto mb-12 leading-relaxed">
            I&apos;d love to be a part of your most beautiful moments. Fill out my inquiry form and I&apos;ll get back to you within 24 hours to discuss your vision.
          </p>

          {/* CTA Button */}
          <a
            href="/inquiry"
            className="inline-block bg-[#C9A96E] text-white font-['Montserrat'] text-sm tracking-widest uppercase px-12 py-4 rounded-full hover:bg-[#B8956A] transition-colors duration-300 mb-12"
          >
            Submit an Inquiry
          </a>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:beautybyalaena@gmail.com"
              className="flex items-center gap-2 font-['Montserrat'] text-sm text-white/60 hover:text-[#C9A96E] transition-colors"
            >
              <Mail className="w-4 h-4" />
              beautybyalaena@gmail.com
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <span className="hidden sm:block text-white/20">|</span>
            <a
              href="https://www.instagram.com/_beautybyalaena/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-['Montserrat'] text-sm text-white/60 hover:text-[#C9A96E] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @_beautybyalaena
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}