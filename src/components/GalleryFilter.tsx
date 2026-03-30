'use client'

import { useState } from 'react'
import GalleryGrid from './GalleryGrid'
import InstagramCTA from './InstagramCTA'

type Filter = 'all' | 'bridal' | 'prom' | 'events'

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'bridal', label: 'Bridal' },
  { value: 'prom', label: 'Prom' },
  { value: 'events', label: 'Special Events' },
]

export default function GalleryFilter() {
  const [active, setActive] = useState<Filter>('all')

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`font-body text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-300 ${
              active === f.value
                ? 'bg-primary text-white'
                : 'border border-primary/30 text-muted hover:border-primary hover:text-primary'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* Instagram CTA */}
      <div className="mt-16">
        <InstagramCTA />
      </div>
    </div>
  )
}
