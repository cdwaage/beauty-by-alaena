"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const previewImages = [
  {
    src: "/images/gallery1.JPG",
    alt: "Bridal updo with elegant accessories",
    category: "Bridal",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery7.png",
    alt: "Classic bridal makeup look",
    category: "Bridal",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery9.jpeg",
    alt: "Glamorous prom hair and makeup",
    category: "Prom",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery25.jpeg",
    alt: "Soft glam prom makeup",
    category: "Prom",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery28.jpeg",
    alt: "Special event glam look",
    category: "Special Events",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery33.png",
    alt: "Photoshoot ready hair and makeup",
    category: "Special Events",
    span: "col-span-1 row-span-1",
  },
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">The Work</span>
          <div className="divider-gold" />
          <h2 className="section-title">Portfolio Preview</h2>
          <p className="font-montserrat text-sm text-gray-500 mt-4 max-w-md mx-auto">
            A glimpse into the artistry behind every look — from intimate weddings to unforgettable prom nights.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {previewImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${i === 0 ? "row-span-2" : ""}`}
              style={{ aspectRatio: i === 0 ? "3/4" : "4/3" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-montserrat text-xs tracking-widest uppercase text-gold">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-outline">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}