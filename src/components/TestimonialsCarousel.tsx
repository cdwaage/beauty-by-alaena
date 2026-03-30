'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Jessica M.',
    event: 'Bride',
    text: "Alaena did my bridal hair and makeup and I felt absolutely breathtaking on my wedding day. She was professional, calm, and made the entire morning so fun and stress-free. My hair held all night and my makeup was flawless in every single photo. I can't thank her enough!",
    stars: 5,
  },
  {
    name: 'Kayla R.',
    event: 'Prom',
    text: "I hired Alaena for prom and she completely transformed me! The updo was exactly what I wanted — I showed her a photo and she nailed it. My makeup lasted all night through dancing and everything. Every one of my friends kept asking who did my hair and makeup!",
    stars: 5,
  },
  {
    name: 'Sarah & Her Bridesmaids',
    event: 'Wedding Party',
    text: "Alaena did hair and makeup for me and all four of my bridesmaids. She was on time, incredibly organized, and made each of us look and feel amazing. We all had totally different styles but she made sure each look was perfect for that person. Our photos are stunning!",
    stars: 5,
  },
  {
    name: 'Daniela V.',
    event: 'Quinceañera',
    text: "Alaena did my hair for my quinceañera and I got so many compliments! She listened to exactly what I wanted and the updo with the flowers and crystals was even more beautiful than I imagined. I felt like a princess the entire night. Would absolutely book her again!",
    stars: 5,
  },
  {
    name: 'Amanda T.',
    event: 'Bride',
    text: "I've been wanting to find a talented local artist for years and Alaena is it. She did my hair and makeup for my wedding and I've never felt more beautiful. She's incredibly detail-oriented, uses amazing products, and genuinely cares about her clients. Highly recommend!",
    stars: 5,
  },
  {
    name: 'Priya L.',
    event: 'Photoshoot',
    text: "Alaena did my hair and makeup for a professional headshot session and the results were incredible. She knew exactly how to do makeup that would photograph beautifully. The whole process was so relaxing and she made sure I was completely happy before we started shooting.",
    stars: 5,
  },
]

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-24 bg-brand-dark text-warm-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-script text-3xl text-secondary block mb-2">Client Love</span>
          <h2 className="font-heading text-5xl text-warm-white">What They&apos;re Saying</h2>
        </div>

        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((t, index) => (
                <div key={index} className="embla__slide px-4 md:px-12">
                  <div className="text-center py-8">
                    <Quote size={36} className="text-secondary/50 mx-auto mb-6" />
                    <p className="font-heading text-xl md:text-2xl text-warm-white/90 leading-relaxed mb-8 italic max-w-3xl mx-auto">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <span key={i} className="text-secondary text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-heading text-xl text-secondary">{t.name}</p>
                    <p className="font-body text-xs tracking-widest uppercase text-warm-white/50 mt-1">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Testimonial ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? 'w-6 h-1.5 bg-secondary'
                  : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
