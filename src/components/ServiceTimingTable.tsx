import ScrollReveal from './ScrollReveal'
import { Clock } from 'lucide-react'

const timingData = [
  {
    role: 'Bride',
    hair: '1 hr',
    makeup: '1.5 hrs',
    hairMin: 60,
    makeupMin: 90,
  },
  {
    role: 'Bridesmaid / Mother',
    hair: '45 min',
    makeup: '1 hr',
    hairMin: 45,
    makeupMin: 60,
  },
  {
    role: 'Prom / Event Individual',
    hair: '45 min',
    makeup: '1 hr',
    hairMin: 45,
    makeupMin: 60,
  },
  {
    role: 'Flower Girl (8 & under)',
    hair: '20 min',
    makeup: '20 min',
    hairMin: 20,
    makeupMin: 20,
  },
]

export default function ServiceTimingTable() {
  return (
    <ScrollReveal>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Clock size={22} className="text-secondary" />
          <h3 className="font-heading text-3xl text-brand-dark">Service Timing Guide</h3>
        </div>

        <p className="font-body text-sm text-muted mb-8 leading-relaxed">
          Use this guide to help plan your wedding day or event timeline. Times are approximate
          and may vary based on hair type, complexity, and style chosen.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary/20 bg-primary/5">
                <th className="py-4 px-5 text-left font-body text-xs tracking-widest uppercase text-muted">Role</th>
                <th className="py-4 px-5 text-center font-body text-xs tracking-widest uppercase text-muted">Hair</th>
                <th className="py-4 px-5 text-center font-body text-xs tracking-widest uppercase text-muted">Makeup</th>
                <th className="py-4 px-5 text-center font-body text-xs tracking-widest uppercase text-muted">Both</th>
              </tr>
            </thead>
            <tbody>
              {timingData.map((row) => (
                <tr key={row.role} className="border-b border-primary/10 hover:bg-primary/3 transition-colors">
                  <td className="py-4 px-5 font-heading text-lg text-brand-dark">{row.role}</td>
                  <td className="py-4 px-5 text-center font-body text-sm text-charcoal">{row.hair}</td>
                  <td className="py-4 px-5 text-center font-body text-sm text-charcoal">{row.makeup}</td>
                  <td className="py-4 px-5 text-center font-body text-sm font-medium text-primary">
                    {Math.floor((row.hairMin + row.makeupMin) / 60) > 0
                      ? `${Math.floor((row.hairMin + row.makeupMin) / 60)}hr ${(row.hairMin + row.makeupMin) % 60 > 0 ? `${(row.hairMin + row.makeupMin) % 60}min` : ''}`
                      : `${row.hairMin + row.makeupMin} min`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-5 bg-secondary/10 border border-secondary/20">
          <p className="font-body text-sm text-muted leading-relaxed">
            <strong className="text-brand-dark">Planning tip:</strong> Always add a 15–20 minute buffer for the bride
            and consider staggering start times so everyone is ready before your ceremony begins.
            Alaena will help you build a detailed day-of timeline once your booking is confirmed.
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}
