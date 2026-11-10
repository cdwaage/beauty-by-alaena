"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InquiryCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <Image
        src="/images/gallery8.webp"
        alt="Bride and groom under a veil"
        fill
        loading="lazy"
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gray-900/70" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span className="font-greatvibes text-4xl text-gold block mb-4">
            Ready to Book?
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-white font-light mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="font-montserrat text-sm text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether it&apos;s your wedding day, prom night, or a special celebration — Alaena would love to be part of your story. Inquire today to check availability and get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inquiry" className="btn-gold">
              Submit an Inquiry
            </Link>
          </div>
          <p className="font-montserrat text-xs text-white/50 mt-8">
            Serving Rocklin, Placer County, CA and surrounding areas · Travel available throughout California
          </p>
        </motion.div>
      </div>
    </section>
  );
}
