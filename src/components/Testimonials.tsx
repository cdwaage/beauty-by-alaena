"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kayla M.",
    event: "Bride",
    text: "Alaena made me feel like the most beautiful version of myself on my wedding day. She was calm, professional, and made the entire bridal suite feel relaxed and joyful. My hair and makeup lasted all night — I couldn't have asked for more.",
    stars: 5,
  },
  {
    name: "Destiny R.",
    event: "Prom",
    text: "I was so nervous about my prom look but Alaena completely put me at ease. She listened to exactly what I wanted and delivered beyond my expectations. Every single one of my friends was asking who did my makeup!",
    stars: 5,
  },
  {
    name: "Maria G.",
    event: "Mother of the Bride",
    text: "As the mother of the bride, I wanted to look polished without overdoing it. Alaena nailed it perfectly. She was incredibly professional and made sure my daughter and I both felt stunning. Highly recommend her for any wedding party.",
    stars: 5,
  },
  {
    name: "Sofia L.",
    event: "Quinceañera",
    text: "Alaena did my quinceañera hair and makeup and I was absolutely glowing. She took the time to do a trial beforehand and incorporated all my feedback. On the day, everything was flawless from start to finish.",
    stars: 5,
  },
  {
    name: "Brianna T.",
    event: "Bridesmaid",
    text: "Our whole bridal party was done by Alaena and we all looked incredible. She kept the energy so positive and fun while being super efficient. The bride looked breathtaking — we all did!",
    stars: 5,
  },
  {
    name: "Ashley W.",
    event: "Photoshoot",
    text: "I hired Alaena for a professional photoshoot and the photos turned out stunning. She understood exactly what looks good on camera and delivered the perfect look for every outfit change. Worth every penny.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Kind Words</span>
          <div className="divider-gold" />
          <h2 className="section-title">What My Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream p-8 border border-cream-dark flex flex-col"
            >
              <StarRating count={t.stars} />
              <blockquote className="font-cormorant text-lg text-gray-700 leading-relaxed my-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="border-t border-cream-dark pt-4">
                <p className="font-montserrat text-sm font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="font-montserrat text-xs text-gold tracking-wide uppercase mt-0.5">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}