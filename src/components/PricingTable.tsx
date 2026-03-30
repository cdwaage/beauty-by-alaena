import ScrollReveal from './ScrollReveal'
import SectionDivider from './SectionDivider'
import Link from 'next/link'

interface PricingRowProps {
  label: string
  hair: string
  makeup: string
  both?: string
  note?: string
}

function PricingRow({ label, hair, makeup, both, note }: PricingRowProps) {
  return (
    <tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors duration-150">
      <td className="py-4 px-4 font-heading text-lg text-brand-dark">
        {label}
        {note && <span className="block font-body text-xs text-muted mt-0.5">{note}</span>}
      </td>
      <td className="py-4 px-4 text-center font-body text-sm font-medium text-primary">{hair}</td>
      <td className="py-4 px-4 text-center font-body text-sm font-medium text-primary">{makeup}</td>
      {both !== undefined && (
        <td className="py-4 px-4 text-center font-body text-sm font-semibold text-secondary">{both}</td>
      )}
    </tr>
  )
}

interface PricingTableProps {
  compact?: boolean
}

export default function PricingTable({ compact = false }: PricingTableProps) {
  return (
    <div className="space-y-16">
      {/* Bridal Pricing */}
      <ScrollReveal>
        <div>
          <div className="mb-6">
            <span className="font-script text-3xl text-secondary">Bridal</span>
            <h3 className="font-heading text-3xl text-brand-dark mt-1">Wedding Services</h3>
            <p className="font-body text-sm text-muted mt-2">Minimum 4 services required to book a wedding</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-3 px-4 text-left font-body text-xs tracking-widest uppercase text-muted">Service</th>
                  <th className="py-3 px-4 text-center font-body text-xs tracking-widest uppercase text-muted">Hair</th>
                  <th className="py-3 px-4 text-center font-body text-xs tracking-widest uppercase text-muted">Makeup</th>
                </tr>
              </thead>
              <tbody>
                <PricingRow label="Bride" hair="$250" makeup="$250" />
                <PricingRow label="Bridesmaid / Mother of the Bride" hair="$150" makeup="$150" />
                <PricingRow label="Flower Girl" hair="$90" makeup="$90" note="Ages 8 & under" />
                <PricingRow label="Trial Session" hair="$115" makeup="$115" />
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-secondary/10 border-l-2 border-secondary">
            <p className="font-body text-sm text-muted">
              <strong className="text-brand-dark">Trial — Hair & Makeup Together:</strong> $220 (save $10 when combined)
            </p>
          </div>
        </div>
      </ScrollReveal>

      <SectionDivider variant="gold" />

      {/* Prom & Special Events Pricing */}
      <ScrollReveal delay={0.1}>
        <div>
          <div className="mb-6">
            <span className="font-script text-3xl text-secondary">Prom & Events</span>
            <h3 className="font-heading text-3xl text-brand-dark mt-1">Special Event Services</h3>
            <p className="font-body text-sm text-muted mt-2">
              Prom · Homecoming · Quinceañera · Photoshoot · Birthday · Gala
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-3 px-4 text-left font-body text-xs tracking-widest uppercase text-muted">Service</th>
                  <th className="py-3 px-4 text-center font-body text-xs tracking-widest uppercase text-muted">Hair</th>
                  <th className="py-3 px-4 text-center font-body text-xs tracking-widest uppercase text-muted">Makeup</th>
                </tr>
              </thead>
              <tbody>
                <PricingRow label="Individual" hair="$150" makeup="$150" />
                <PricingRow label="Trial Session" hair="$115" makeup="$115" />
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-secondary/10 border-l-2 border-secondary">
            <p className="font-body text-sm text-muted">
              <strong className="text-brand-dark">Trial — Hair & Makeup Together:</strong> $220 (save $10 when combined)
            </p>
          </div>
        </div>
      </ScrollReveal>

      {!compact && (
        <>
          <SectionDivider variant="gold" />

          {/* Additional Fees */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="mb-6">
                <span className="font-script text-3xl text-secondary">Additional</span>
                <h3 className="font-heading text-3xl text-brand-dark mt-1">Fees & Add-Ons</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Day-of Additions', price: '+$50/service', desc: 'Adding services the day of the event' },
                  { label: 'Overtime Fee', price: '$50/hr', desc: 'After the scheduled "ready by" time' },
                  { label: 'Large Party Assistant', price: '$150', desc: 'Required for very large parties' },
                ].map((fee) => (
                  <div key={fee.label} className="flex items-start justify-between p-4 border border-primary/15 bg-surface">
                    <div>
                      <p className="font-heading text-lg text-brand-dark">{fee.label}</p>
                      <p className="font-body text-xs text-muted mt-0.5">{fee.desc}</p>
                    </div>
                    <span className="font-body text-base font-semibold text-primary ml-4 flex-shrink-0">{fee.price}</span>
                  </div>
                ))}
                <div className="flex items-start justify-between p-4 border border-secondary/30 bg-secondary/5">
                  <div>
                    <p className="font-heading text-lg text-brand-dark">Booking Retainer</p>
                    <p className="font-body text-xs text-muted mt-0.5">Required to secure your date — non-refundable and does <strong>not</strong> apply toward your total</p>
                  </div>
                  <span className="font-body text-base font-semibold text-primary ml-4 flex-shrink-0">$100</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </>
      )}

      <ScrollReveal delay={0.2}>
        <div className="text-center pt-4">
          <Link href="/inquiry" className="btn-primary inline-block">
            Send an Inquiry
          </Link>
          <p className="font-body text-xs text-muted mt-4">
            Payment accepted: Cash · Venmo · CashApp · Apple Pay · Check
          </p>
        </div>
      </ScrollReveal>
    </div>
  )
}
