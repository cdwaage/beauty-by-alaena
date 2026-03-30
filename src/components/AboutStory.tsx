'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-8 lg:pt-0"
          >
            <p className="font-['Great_Vibes'] text-3xl text-[#C9A96E] mb-3">My Story</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#2C2C2C] font-semibold mb-6 leading-tight">
              Passion Turned Profession
            </h2>
            <div className="w-16 h-px bg-[#C9A96E] mb-8" />

            <div className="space-y-5 font-['Montserrat'] text-[#6B6B6B] text-sm leading-relaxed">
              <p>
                Hi, I&apos;m Alaena — a hair and makeup artist based in Rocklin, Placer County, CA, specializing in weddings, proms, quinceañeras, and every special event in between. I am one of seven sisters, so beauty has been my passion for as long as I can remember, and I&apos;m so grateful to have turned that passion into a career I truly love.
              </p>
              <p>
                What started as a love for transforming friends and family for their big moments grew into a full-time commitment to helping every client feel their most confident and radiant. I believe that beauty is deeply personal — and my job is to listen, collaborate, and create a look that feels authentically <em>you</em>.
              </p>
              <p>
                I work out of my home studio in Rocklin for trials, and I travel to your venue or location on your event day. For events beyond 30 miles, I charge a travel fee so there are never any surprises — just seamless service from start to finish.
              </p>
              <p>
                Whether you&apos;re a bride stepping into the most important day of your life, a prom queen making her grand entrance, or anyone who simply wants to feel extraordinary — I am here for you. Let&apos;s create something beautiful together.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/inquiry"
                className="inline-block bg-[#8B6F4E] text-white font-['Montserrat'] text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#7A6142] transition-colors duration-300 text-center"
              >
                Work With Me
              </a>
              <a
                href="/services"
                className="inline-block border border-[#8B6F4E] text-[#8B6F4E] font-['Montserrat'] text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#8B6F4E] hover:text-white transition-all duration-300 text-center"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}