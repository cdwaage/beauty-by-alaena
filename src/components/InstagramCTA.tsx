import { Instagram } from 'lucide-react'

interface InstagramCTAProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function InstagramCTA({ variant = 'light', className = '' }: InstagramCTAProps) {
  const isLight = variant === 'light'

  return (
    <div className={`flex flex-col items-center text-center gap-5 py-10 ${className}`}>
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${isLight ? 'bg-primary/10' : 'bg-white/10'}`}>
        <Instagram size={26} className={isLight ? 'text-primary' : 'text-white'} />
      </div>

      <div>
        <p className={`font-script text-3xl mb-1 ${isLight ? 'text-secondary' : 'text-secondary'}`}>
          See More on Instagram
        </p>
        <p className={`font-body text-sm max-w-sm mx-auto leading-relaxed ${isLight ? 'text-muted' : 'text-white/70'}`}>
          Follow along for the latest bridal, prom, and special event looks — plus behind-the-scenes moments.
        </p>
      </div>

      <a
        href="https://instagram.com/_beautybyalaena"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 font-body text-xs tracking-widest uppercase px-8 py-3.5 transition-all duration-300 ${
          isLight
            ? 'bg-primary text-white hover:bg-brand-dark'
            : 'bg-white text-brand-dark hover:bg-secondary'
        }`}
      >
        <Instagram size={15} />
        @_beautybyalaena
      </a>
    </div>
  )
}
