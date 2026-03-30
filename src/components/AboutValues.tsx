'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Clock, Star, Shield, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description:
      'Beauty is my calling. Every client who sits in my chair receives my full heart, creativity, and dedication — because you deserve to feel extraordinary on your most important day.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description:
      'Years of training and hands-on experience with brides, prom royalty, and event clients across Northern California have sharpened my craft to a fine art.',
  },
  {
    icon: Clock,
    title: 'Timely & Reliable',
    description:
      'I know your schedule is precious. I arrive on time, work efficiently, and ensure every member of your party is camera-ready well before your "ready by" time.',
  },
  {
    icon: Star,
    title: 'Personalized Service',
    description:
      'No two faces are the same, and no two looks should be either. I collaborate with you to create a style that honors your vision while enhancing your natural beauty.',
  },
  {
    icon: Shield,
    title: 'Safe & Clean',
    description:
      'I maintain a rigorous sanitation standard — all brushes, tools, and products are professionally cleaned between every client. Your safety is non-negotiable.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Experience',
    description:
      'From your trial to your event day, every touchpoint is designed to feel effortless, calm, and luxurious. This is your moment — I\'m here to make it perfect.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutValues() {
  return (
    <section className="py-24 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-['Great_Vibes'] text-3xl text-[#C9A96E] mb-3">
            What Sets Me Apart
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#2C2C2C] font-semibold mb-4">
            The Beauty by Alaena Difference
          </h2>
          <div className="w-20 h-px bg-[#C9A96E] mx-auto mb-6" />
          <p className="font-['Montserrat'] text-[#6B6B6B] max-w-2xl mx-auto text-base leading-relaxed">
            Choosing your beauty artist is one of the most important decisions you&apos;ll make for your big day. Here&apos;s why brides and clients across Rocklin trust me.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#EDE8E1] group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FAF6F1] border border-[#C9A96E]/30 flex items-center justify-center mb-5 group-hover:bg-[#C9A96E]/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C9A96E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2C2C2C] mb-3">
                  {value.title}
                </h3>
                <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/inquiry"
            className="inline-block bg-[#8B6F4E] text-white font-['Montserrat'] text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-[#7A6142] transition-colors duration-300"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}