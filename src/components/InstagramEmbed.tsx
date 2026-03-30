'use client'

import { useEffect } from 'react'
import InstagramCTA from './InstagramCTA'

// To embed real Instagram posts, replace these with actual Instagram post URLs from @_beautybyalaena
// Example: 'https://www.instagram.com/p/SHORTCODE/'
const instagramPosts: string[] = [
  // Add real Instagram post URLs here when available
  // 'https://www.instagram.com/p/ABC123/',
  // 'https://www.instagram.com/reel/XYZ456/',
]

export default function InstagramEmbed() {
  useEffect(() => {
    if (instagramPosts.length === 0) return

    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (instagramPosts.length === 0) {
    return (
      <div className="py-12">
        <div className="text-center mb-8">
          <h3 className="font-heading text-3xl text-brand-dark mb-3">Featured on Instagram</h3>
          <p className="font-body text-sm text-muted">
            The latest looks from @_beautybyalaena
          </p>
        </div>
        <InstagramCTA variant="light" />
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h3 className="font-heading text-3xl text-brand-dark mb-3">Featured on Instagram</h3>
        <p className="font-body text-sm text-muted">
          Real posts from @_beautybyalaena
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {instagramPosts.map((postUrl, index) => (
          <blockquote
            key={index}
            className="instagram-media w-full max-w-sm"
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '100%',
              minWidth: '326px',
              padding: '0',
              width: '100%',
            }}
          />
        ))}
      </div>

      <div className="mt-10">
        <InstagramCTA variant="light" />
      </div>
    </div>
  )
}
