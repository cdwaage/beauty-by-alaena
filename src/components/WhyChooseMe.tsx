"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Star, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personalized Artistry",
    desc: "Every look is custom-crafted to complement your unique features, skin tone, and vision — never a one-size-fits-all approach.",
  },
  {
    icon: Star,
    title: "Professional & Reliable",
    desc: "Years of experience with weddings, proms, and events across Northern California. You can count on Alaena to be prepared, on time, and on point.",
  },
  {
    icon: Clock,
    title: "Stress-Free Experience",
    desc: "From trials to day-of service, Alaena keeps the energy calm and joyful. Getting ready should be part of the celebration.",
  },
  {
    icon: MapPin,
    title: "Flexible Location",
    desc: "Trials at her home studio. Travel available throughout California — so your perfect look comes to you, wherever you are.",
  },
];

export default function WhyChooseMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/gallery6.webp"
                alt="Bride and bridal party in matching yellow sets with soft styled hair"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/40 -z-10" />
            {/* Badge */}
            <div className="absolute top-6 -right-4 bg-white shadow-xl px-6 py-4 text-center">
              <span className="font-greatvibes text-3xl text-gold block">Rocklin</span>
              <span className="font-montserrat text-xs tracking-widest uppercase text-gray-500 block">Based · CA Travel</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <span className="section-subtitle">Why Choose Alaena</span>
            <div className="w-8 h-px bg-gold my-4" />
            <h2 className="section-title mb-6">
              Beauty That Tells<br />Your Story
            </h2>
            <p className="font-montserrat text-sm text-gray-600 leading-relaxed mb-10">
              Alaena is a passionate hair and makeup artist based in Rocklin, Placer County, CA, dedicated to making every client feel seen, celebrated, and absolutely stunning. Whether you&apos;re walking down the aisle, hitting the dance floor at prom, or stepping into your quinceañera, she brings artistry, warmth, and precision to every appointment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 flex items-center justify-center">
                    <feature.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-montserrat text-xs text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}