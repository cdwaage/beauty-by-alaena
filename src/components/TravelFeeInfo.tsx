import ScrollReveal from './ScrollReveal'
import { MapPin, Plane, Car, Home } from 'lucide-react'

export default function TravelFeeInfo() {
  return (
    <ScrollReveal>
      <div className="bg-secondary/10 border border-secondary/25 p-8">
        <div className="flex items-center gap-3 mb-6">
          <MapPin size={22} className="text-primary" />
          <h3 className="font-heading text-3xl text-brand-dark">Travel Fee Information</h3>
        </div>

        <p className="font-body text-sm text-muted mb-6 leading-relaxed">
          Trial appointments are held at Alaena&apos;s home studio in the Rocklin, Placer County, CA area — no travel fee for trials. For event-day services, Alaena travels to you. Travel fees apply for locations beyond 30 miles from her studio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Home Studio Trials */}
          <div className="flex items-start gap-4 p-5 bg-surface border border-primary/10">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Home size={18} className="text-primary" />
            </div>
            <div>
              <h4 className="font-heading text-xl text-brand-dark mb-1">Trials</h4>
              <p className="font-body text-2xl font-semibold text-primary mb-2">At Home Studio</p>
              <p className="font-body text-xs text-muted leading-relaxed">
                All trial appointments are held at Alaena&apos;s home studio. No travel fee applies for trials.
              </p>
            </div>
          </div>

          {/* California Travel */}
          <div className="flex items-start gap-4 p-5 bg-surface border border-primary/10">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Car size={18} className="text-primary" />
            </div>
            <div>
              <h4 className="font-heading text-xl text-brand-dark mb-1">Within California</h4>
              <p className="font-body text-2xl font-semibold text-primary mb-2">$2<span className="text-sm font-normal text-muted">/mile round trip</span></p>
              <p className="font-body text-xs text-muted leading-relaxed">
                For events beyond 30 miles from her studio. Fee is calculated on round-trip mileage from Alaena&apos;s studio to your event location.
              </p>
            </div>
          </div>

          {/* Out-of-State Travel */}
          <div className="flex items-start gap-4 p-5 bg-surface border border-primary/10">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Plane size={18} className="text-primary" />
            </div>
            <div>
              <h4 className="font-heading text-xl text-brand-dark mb-1">Outside California</h4>
              <p className="font-heading text-lg text-primary mb-2">At Cost</p>
              <p className="font-body text-xs text-muted leading-relaxed">
                Round-trip flights + hotel accommodations + Uber/rideshare fees. All costs quoted upon inquiry before any contract is signed.
              </p>
            </div>
          </div>
        </div>

        <p className="font-body text-xs text-muted mt-5 italic">
          The 30-mile radius is measured from Alaena&apos;s home studio in Rocklin, Placer County, CA. All travel fees are discussed transparently before any contract is signed.
        </p>
      </div>
    </ScrollReveal>
  )
}