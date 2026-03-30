interface SectionDividerProps {
  variant?: 'light' | 'dark' | 'gold'
  className?: string
}

export default function SectionDivider({ variant = 'gold', className = '' }: SectionDividerProps) {
  const colors = {
    light: 'border-warm-white/30',
    dark: 'border-brand-dark/20',
    gold: 'border-secondary/40',
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`flex-1 border-t ${colors[variant]}`} />
      <div className="flex items-center gap-1.5">
        <span className={`block w-1 h-1 rounded-full ${variant === 'light' ? 'bg-warm-white/50' : variant === 'dark' ? 'bg-brand-dark/30' : 'bg-secondary/60'}`} />
        <span className={`block w-1.5 h-1.5 rounded-full ${variant === 'light' ? 'bg-warm-white/70' : variant === 'dark' ? 'bg-brand-dark/50' : 'bg-secondary'}`} />
        <span className={`block w-1 h-1 rounded-full ${variant === 'light' ? 'bg-warm-white/50' : variant === 'dark' ? 'bg-brand-dark/30' : 'bg-secondary/60'}`} />
      </div>
      <div className={`flex-1 border-t ${colors[variant]}`} />
    </div>
  )
}
