'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryImage } from './GalleryGrid'

interface GalleryLightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length)
  }, [currentIndex, images.length, onNavigate])

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length)
  }, [currentIndex, images.length, onNavigate])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, handlePrev, handleNext])

  const current = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/10 hover:bg-white/25 flex items-center justify-center text-white rounded-full transition-all duration-200"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Prev Button */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev() }}
          className="absolute left-4 md:left-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/25 flex items-center justify-center text-white rounded-full transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-3xl max-h-[85vh] w-full mx-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative" style={{ aspectRatio: '3/4', maxHeight: '85vh' }}>
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
            <p className="font-heading text-xl text-white">{current.label}</p>
            <p className="font-body text-xs text-white/60 mt-0.5 uppercase tracking-widest">{current.category}</p>
          </div>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); handleNext() }}
          className="absolute right-4 md:right-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/25 flex items-center justify-center text-white rounded-full transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-white/50 tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
