'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Instagram, ExternalLink, X } from 'lucide-react'
import GalleryHero from '@/components/GalleryHero'

const galleryAlts: Record<number, string> = {
  1: "Artist placing a bride's veil before the ceremony",
  2: "Bride and wedding party posed outdoors after hair and makeup",
  3: "Low bridal bun with pearl hair pins",
  4: "Sleek low bun with face-framing pieces",
  5: "Textured blonde updo with pearl pins",
  6: "Bride and bridal party in matching yellow sets with soft styled hair",
  7: "Bride with soft curled hair, a veil, and a white rose bouquet",
  8: "Bride and groom under a veil",
  9: "Long glossy waves styled for a wedding morning",
  10: "Bride with long dark waves in a beaded gown",
  11: "Voluminous blonde updo",
  12: "Bride in a lace gown with a long veil and her bridal party",
  20: "Soft glam makeup with a half-up style and face-framing curls",
  21: "Twisted low bun with caramel highlights",
  22: "Soft glam makeup with a loose updo and face-framing waves",
  23: "Half-up hairstyle with long loose curls",
  24: "Polished low bun with a side piece",
  25: "Bride and groom on the reception dance floor",
  26: "Artist finishing curled hair in front of a mirror",
  27: "Mother and daughter with soft updos and natural makeup",
  28: "Braided low updo on the mother of the bride",
  29: "Artist curling a bride's hair on the morning of the wedding",
  30: "Textured dark bridal updo",
  31: "Natural glam makeup with a sleek center-parted style",
  32: "Soft glam eye makeup during a trial",
  33: "Soft glam makeup with blonde waves",
  34: "Glam makeup with a soft eye and loose waves",
}

const images = Object.entries(galleryAlts)
  .map(([id, alt]) => ({
    id: Number(id),
    src: `/images/gallery${id}.webp`,
    alt,
  }))
  .sort((a, b) => a.id - b.id)

export default function GalleryClient() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const current = lightbox !== null ? images[lightbox] : null

  return (
    <main className="min-h-screen bg-cream">
      <GalleryHero />

      {/* Masonry grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-['Montserrat'] text-xs tracking-widest uppercase bg-brown/80 px-3 py-1 rounded-full transition-all duration-300">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-4 flex flex-col items-center text-center border-t border-brown/10">
        <Instagram className="w-7 h-7 text-gold mx-auto mb-4" />
        <p className="font-['Montserrat'] text-sm text-gray-600 mb-5">
          See more on <span className="text-brown font-semibold">@_beautybyalaena</span>
        </p>
        <a
          href="https://instagram.com/_beautybyalaena"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brown text-white font-['Montserrat'] text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-brown/90 transition-all duration-300 shadow-md"
        >
          <Instagram className="w-4 h-4" />
          Follow on Instagram
        </a>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-2xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={900}
                height={1200}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
