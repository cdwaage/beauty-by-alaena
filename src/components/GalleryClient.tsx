'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Instagram, ExternalLink, X } from 'lucide-react'
import GalleryHero from '@/components/GalleryHero'

const extensions: Record<number, string> = {
  1: 'JPG', 2: 'JPG', 3: 'jpeg', 4: 'jpeg', 5: 'jpeg', 6: 'jpeg',
  7: 'png', 8: 'jpeg', 9: 'jpeg', 10: 'jpeg', 11: 'jpeg', 12: 'JPG',
  13: 'jpeg', 14: 'jpeg', 15: 'jpeg', 16: 'jpeg', 17: 'jpeg', 18: 'jpeg',
  19: 'jpeg', 20: 'jpeg', 21: 'png', 22: 'png', 23: 'png', 24: 'jpeg',
  25: 'jpeg', 26: 'jpeg', 27: 'jpeg', 28: 'jpeg', 29: 'jpeg', 30: 'JPG',
  31: 'png', 32: 'png', 33: 'png', 34: 'png',
}

const images = Array.from({ length: 34 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery${i + 1}.${extensions[i + 1]}`,
  alt: `Beauty by Alaena — look ${i + 1}`,
})).filter(img => ![13, 14, 15, 16, 17, 18, 19].includes(img.id))

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
