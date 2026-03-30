"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";


export interface GalleryImage {
  src: string
  alt: string
  label: string
  category: string
}
type Category = "All" | "Bridal" | "Prom" | "Special Events";

const galleryImages = [
  // Bridal
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85",
    alt: "Elegant bridal updo with soft curls",
    category: "Bridal" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=85",
    alt: "Natural glam bridal makeup",
    category: "Bridal" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=85",
    alt: "Romantic bridal hair and full glam makeup",
    category: "Bridal" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    alt: "Soft bridal waves and dewy makeup",
    category: "Bridal" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=85",
    alt: "Classic bridal look — timeless and elegant",
    category: "Bridal" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=85",
    alt: "Bridal party getting ready — hair and makeup",
    category: "Bridal" as Category,
  },
  // Prom
  {
    src: "https://images.unsplash.com/photo-1519741347686-c1e331d8b6f4?w=800&q=85",
    alt: "Glamorous prom night hair and makeup",
    category: "Prom" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85",
    alt: "Bold prom makeup with dramatic lashes",
    category: "Prom" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&q=85",
    alt: "Homecoming glam — smoky eye and sleek hair",
    category: "Prom" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800&q=85",
    alt: "Prom hair — voluminous curls",
    category: "Prom" as Category,
  },
  // Special Events
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=85",
    alt: "Quinceañera hair and makeup",
    category: "Special Events" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1596704017254-9b5e2a025acf?w=800&q=85",
    alt: "Birthday gala glam look",
    category: "Special Events" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85",
    alt: "Photoshoot ready — editorial makeup",
    category: "Special Events" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=85",
    alt: "Gala event — elegant hair and makeup",
    category: "Special Events" as Category,
  },
  {
    src: "https://images.unsplash.com/photo-1617784900927-4e26bdfd6ed6?w=800&q=85",
    alt: "Special event glam — warm tones and sleek style",
    category: "Special Events" as Category,
  },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters: Category[] = ["All", "Bridal", "Prom", "Special Events"];

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-montserrat text-xs tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-brown text-white border-brown"
                  : "border-brown/40 text-brown hover:bg-brown hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end justify-start p-4">
                  <span className="font-montserrat text-xs tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-2xl text-gray-700 mb-2 italic">
            See even more work on Instagram
          </p>
          <a
            href="https://www.instagram.com/_beautybyalaena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary mt-4"
          >
            <Instagram size={16} />
            @_beautybyalaena
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4 text-center">
                <span className="font-montserrat text-xs tracking-widest uppercase text-gold">
                  {filtered[lightboxIndex].category}
                </span>
                <p className="font-cormorant text-lg text-white mt-1">
                  {filtered[lightboxIndex].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}