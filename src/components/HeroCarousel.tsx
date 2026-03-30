"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/Photo1.png",
    alt: "Beautiful bride on her wedding day — Beauty by Alaena",
    category: "Bridal",
    headline: "Your Most Beautiful Day",
    sub: "Bridal hair & makeup tailored to you",
    objectPosition: "center top",
  },
  {
    src: "/images/Photo2.jpeg",
    alt: "Bride and groom — Beauty by Alaena",
    category: "Bridal",
    headline: "Timeless Bridal Beauty",
    sub: "From intimate ceremonies to grand celebrations",
    objectPosition: "center center",
  },
  {
    src: "/images/Photo3.jpeg",
    alt: "Alaena at work — professional hair and makeup artistry",
    category: "Bridal",
    headline: "Radiant from Every Angle",
    sub: "Hair & makeup that photographs beautifully",
    objectPosition: "center top",
  },
  {
    src: "/images/Photo4.jpeg",
    alt: "Elegant updo hairstyle — Beauty by Alaena",
    category: "Prom",
    headline: "Your Night to Shine",
    sub: "Prom & homecoming glam that turns heads",
    objectPosition: "center center",
  },
  {
    src: "/images/Photo6.jpeg",
    alt: "Beauty artistry in action — Beauty by Alaena",
    category: "Bridal",
    headline: "Unforgettable Memories",
    sub: "Confidence starts with feeling beautiful",
    objectPosition: "center center",
  },
  {
    src: "/images/Photo7.jpeg",
    alt: "Hair and makeup for every occasion — Beauty by Alaena",
    category: "Special Events",
    headline: "Every Occasion, Elevated",
    sub: "",
    objectPosition: "center top",
  },
];

const autoplayOptions = Autoplay({ delay: 5000, stopOnInteraction: false });

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [autoplayOptions]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="embla__slide relative h-full"
              style={{ flex: "0 0 100%", minWidth: 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover"
                style={{ objectPosition: slide.objectPosition }}
                sizes="100vw"
                unoptimized
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: selectedIndex === i ? 1 : 0,
                    y: selectedIndex === i ? 0 : 20,
                  }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-montserrat text-xs tracking-[0.3em] uppercase text-gold mb-4"
                >
                  {slide.category}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: selectedIndex === i ? 1 : 0,
                    y: selectedIndex === i ? 0 : 30,
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-4"
                >
                  {slide.headline}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: selectedIndex === i ? 1 : 0,
                    y: selectedIndex === i ? 0 : 20,
                  }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="font-montserrat text-sm md:text-base text-white/80 tracking-wide mb-10 max-w-md"
                >
                  {slide.sub}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: selectedIndex === i ? 1 : 0,
                    y: selectedIndex === i ? 0 : 20,
                  }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/inquiry" className="btn-gold">
                    Book an Inquiry
                  </Link>
                  <Link
                    href="/services"
                    className="border border-white text-white px-8 py-3 font-montserrat font-medium tracking-widest text-sm uppercase transition-all duration-300 hover:bg-white hover:text-gray-900"
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 text-white z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 text-white z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              selectedIndex === i
                ? "w-6 h-2 bg-gold"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="font-montserrat text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}