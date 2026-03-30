import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import GalleryPreview from "@/components/GalleryPreview";
import InquiryCTA from "@/components/InquiryCTA";
import InstagramSection from "@/components/InstagramSection";
import Link from "next/link";

function PricingPreviewInline() {
  return (
    <section className="py-24 bg-[#FAF6F1]" id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-['Great_Vibes'] text-4xl text-[#C9A96E] mb-2">Transparent Pricing</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#2C2C2C] mb-4">
            Services & Rates
          </h2>
          <p className="font-['Montserrat'] text-[#6B6B6B] text-sm tracking-widest uppercase">
            No hidden fees — everything you need to plan your look
          </p>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Key Policy Callout — shown before pricing tables */}
        <div className="bg-[#8B6F4E] text-white rounded-2xl px-8 py-6 mb-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <div>
            <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#C9A96E]">
              $100 Retainer
            </p>
            <p className="font-['Montserrat'] text-xs text-white/80 mt-1 tracking-wider uppercase">
              Required to secure your date — does <span className="font-bold underline">not</span> go toward your total
            </p>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/30" />
          <div>
            <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#C9A96E]">
              Minimum 4 Services
            </p>
            <p className="font-['Montserrat'] text-xs text-white/80 mt-1 tracking-wider uppercase">
              Required to book a wedding date
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Bridal Pricing */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E8DDD0] overflow-hidden">
            <div className="bg-[#8B6F4E] px-8 py-6">
              <p className="font-['Great_Vibes'] text-3xl text-[#C9A96E] mb-1">Bridal</p>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white">
                Wedding Day Services
              </h3>
              <p className="font-['Montserrat'] text-xs text-white/70 mt-1 tracking-wider uppercase">
                Minimum 4 services required to book
              </p>
            </div>
            <div className="px-8 py-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E8DDD0]">
                    <th className="font-['Montserrat'] text-xs tracking-widest uppercase text-[#8B6F4E] text-left pb-3">
                      Service
                    </th>
                    <th className="font-['Montserrat'] text-xs tracking-widest uppercase text-[#8B6F4E] text-center pb-3">
                      Hair
                    </th>
                    <th className="font-['Montserrat'] text-xs tracking-widest uppercase text-[#8B6F4E] text-center pb-3">
                      Makeup
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F0EAE2]">
                    <td className="font-['Cormorant_Garamond'] text-lg text-[#2C2C2C] py-4">
                      Bride
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $250
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $250
                    </td>
                  </tr>
                  <tr className="border-b border-[#F0EAE2]">
                    <td className="py-4">
                      <p className="font-['Cormorant_Garamond'] text-lg text-[#2C2C2C]">
                        Bridesmaid / Mother
                      </p>
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $150
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $150
                    </td>
                  </tr>
                  <tr className="border-b border-[#F0EAE2]">
                    <td className="py-4">
                      <p className="font-['Cormorant_Garamond'] text-lg text-[#2C2C2C]">
                        Flower Girl
                      </p>
                      <p className="font-['Montserrat'] text-xs text-[#9B9B9B]">8 & under</p>
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $90
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $90
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <p className="font-['Cormorant_Garamond'] text-lg text-[#2C2C2C]">Trial</p>
                      <p className="font-['Montserrat'] text-xs text-[#C9A96E] font-semibold mt-0.5">
                        Both together: $220
                      </p>
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#C9A96E] text-center py-4">
                      $115
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#C9A96E] text-center py-4">
                      $115
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 pt-4 border-t border-[#F0EAE2] bg-[#FAF6F1] rounded-lg px-4 py-3">
                <p className="font-['Montserrat'] text-xs text-[#8B6F4E] font-semibold uppercase tracking-wider">
                  ⚠ Wedding Booking Requirement
                </p>
                <p className="font-['Montserrat'] text-xs text-[#6B6B6B] mt-1">
                  A minimum of <strong>4 services</strong> is required to book a wedding date. A{" "}
                  <strong>$100 retainer</strong> secures your date and does{" "}
                  <strong>not</strong> apply toward your total balance.
                </p>
              </div>
            </div>
          </div>

          {/* Prom & Special Events Pricing */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E8DDD0] overflow-hidden">
            <div className="bg-[#2C2C2C] px-8 py-6">
              <p className="font-['Great_Vibes'] text-3xl text-[#C9A96E] mb-1">Prom & Events</p>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white">
                Special Event Services
              </h3>
              <p className="font-['Montserrat'] text-xs text-white/70 mt-1 tracking-wider uppercase">
                Prom · Homecoming · Quinceañera · Gala & more
              </p>
            </div>
            <div className="px-8 py-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E8DDD0]">
                    <th className="font-['Montserrat'] text-xs tracking-widest uppercase text-[#8B6F4E] text-left pb-3">
                      Service
                    </th>
                    <th className="font-['Montserrat'] text-xs tracking-widest uppercase text-[#8B6F4E] text-center pb-3">
                      Hair
                    </th>
                    <th className="font-['Montserrat'] text-xs tracking-widest uppercase text-[#8B6F4E] text-center pb-3">
                      Makeup
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F0EAE2]">
                    <td className="font-['Cormorant_Garamond'] text-lg text-[#2C2C2C] py-4">
                      Individual
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $150
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#8B6F4E] text-center py-4">
                      $150
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <p className="font-['Cormorant_Garamond'] text-lg text-[#2C2C2C]">Trial</p>
                      <p className="font-['Montserrat'] text-xs text-[#C9A96E] font-semibold mt-0.5">
                        Both together: $220
                      </p>
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#C9A96E] text-center py-4">
                      $115
                    </td>
                    <td className="font-['Montserrat'] text-base font-semibold text-[#C9A96E] text-center py-4">
                      $115
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-6 pt-6 border-t border-[#F0EAE2]">
                <p className="font-['Montserrat'] text-xs text-[#6B6B6B] uppercase tracking-wider mb-3">
                  Events we serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Prom", "Homecoming", "Quinceañera", "Photoshoot", "Birthday", "Gala"].map(
                    (event) => (
                      <span
                        key={event}
                        className="font-['Montserrat'] text-xs text-[#8B6F4E] bg-[#FAF6F1] border border-[#E8DDD0] rounded-full px-3 py-1"
                      >
                        {event}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F0EAE2] bg-[#FAF6F1] rounded-lg px-4 py-3">
                <p className="font-['Montserrat'] text-xs text-[#8B6F4E] font-semibold uppercase tracking-wider">
                  Booking Requirements
                </p>
                <p className="font-['Montserrat'] text-xs text-[#6B6B6B] mt-1">
                  A <strong>$100 retainer</strong> and <strong>signed contract</strong> is required to secure your date.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional fees callout */}
        <div className="bg-white border border-[#E8DDD0] rounded-2xl px-8 py-6 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2C2C2C] mb-1">
              $2/mile
            </p>
            <p className="font-['Montserrat'] text-xs text-[#6B6B6B] uppercase tracking-wider">
              Travel fee (round trip, CA)
            </p>
            <p className="font-['Montserrat'] text-xs text-[#9B9B9B] mt-1">
              Free within 30 mi radius
            </p>
          </div>
          <div className="border-t md:border-t-0 md:border-l md:border-r border-[#E8DDD0] md:px-6 pt-4 md:pt-0">
            <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2C2C2C] mb-1">
              $100 Retainer
            </p>
            <p className="font-['Montserrat'] text-xs text-[#6B6B6B] uppercase tracking-wider">
              Non-refundable to secure date
            </p>
            <p className="font-['Montserrat'] text-xs text-[#C9A96E] font-semibold mt-1">
              Does NOT apply toward total
            </p>
          </div>
          <div className="border-t md:border-t-0 border-[#E8DDD0] pt-4 md:pt-0">
            <p className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#2C2C2C] mb-1">
              Cash · Venmo · CashApp
            </p>
            <p className="font-['Montserrat'] text-xs text-[#6B6B6B] uppercase tracking-wider">
              Payment methods
            </p>
            <p className="font-['Montserrat'] text-xs text-[#9B9B9B] mt-1">
              ApplePay & check also accepted
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block font-['Montserrat'] text-sm tracking-widest uppercase bg-[#8B6F4E] text-white px-10 py-4 rounded-full hover:bg-[#7A6040] transition-colors duration-300 mr-4"
          >
            Full Pricing & Services
          </Link>
          <Link
            href="/inquiry"
            className="inline-block font-['Montserrat'] text-sm tracking-widest uppercase border border-[#8B6F4E] text-[#8B6F4E] px-10 py-4 rounded-full hover:bg-[#8B6F4E] hover:text-white transition-colors duration-300"
          >
            Book an Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <PricingPreviewInline />
      <WhyChooseMe />
      <Testimonials />
      <GalleryPreview />
      <InstagramSection />
      <InquiryCTA />
    </>
  );
}