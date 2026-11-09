'use client';

import { motion } from 'framer-motion';
import {
  CreditCard,
  Calendar,
  Users,
  Clock,
  Car,
  AlertTriangle,
  Camera,
  Shield,
  PhoneCall,
} from 'lucide-react';

const sections = [
  {
    icon: CreditCard,
    title: 'Deposits & Booking',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-[#C9A96E]',
    policies: [
      {
        heading: 'Non-Refundable Deposit',
        text: 'A $100 non-refundable deposit is required to secure your date. This deposit does NOT go toward your total balance — it is a booking fee only.',
      },
      {
        heading: 'Contract Requirement',
        text: 'A signed contract is required a minimum of 30 days prior to your event date. No date is confirmed without both the deposit and a signed contract.',
      },
      {
        heading: 'Minimum Services (Weddings)',
        text: 'A minimum of 4 services is required to book a wedding date. This ensures the event is worth both of our time and preparation.',
      },
      {
        heading: 'Payment Methods',
        text: 'Full balance is due the day of your event. Accepted payment methods: Cash, Venmo, CashApp, Apple Pay, or personal check.',
      },
    ],
  },
  {
    icon: Calendar,
    title: 'Cancellations & Changes',
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-500',
    policies: [
      {
        heading: 'Cancellation 30+ Days Out',
        text: 'If you cancel 30 or more days before your event, only the $100 deposit is forfeited. No additional balance is owed.',
      },
      {
        heading: 'Cancellation Within 30 Days',
        text: 'Cancellations made within 30 days of the event require payment of the full remaining balance. Last-minute cancellations that fall below the 4-service minimum are still paid in full.',
      },
      {
        heading: 'All Payments Non-Refundable',
        text: 'All payments made to Beauty by Alaena are non-refundable. This includes the booking deposit and any balances paid. The only exception is a genuine emergency, in which case a full refund will be issued.',
      },
      {
        heading: 'Guest Changes & Additions',
        text: 'Please notify me of any added guests or cancellations at least 1 week prior to the event to allow proper scheduling adjustments.',
      },
    ],
  },
  {
    icon: Users,
    title: 'Day-Of Additions & Large Parties',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-400',
    policies: [
      {
        heading: 'Day-Of Additions',
        text: 'Any services added on the day of the event will incur an additional $50 surcharge per service, on top of the regular service price.',
      },
      {
        heading: 'Below Minimum Cancellations',
        text: 'If last-minute cancellations cause the party to fall below the 4-service minimum for a wedding booking, the full balance is still due.',
      },
      {
        heading: 'Assistant Fee',
        text: 'For large parties requiring an additional artist, a $150 assistant fee will be added to the total. This ensures everyone is ready on time.',
      },
    ],
  },
  {
    icon: Clock,
    title: 'Timing & Overtime',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-400',
    policies: [
      {
        heading: 'Service Timing',
        text: 'Bride hair: 1 hour | Bride makeup: 1.5 hours | Bridesmaid/Event hair: 45 minutes | Bridesmaid/Event makeup: 1 hour | Flower girl hair: 20 minutes | Flower girl makeup: 20 minutes.',
      },
      {
        heading: 'Overtime',
        text: 'Services running past the agreed "ready by" time will be charged at $50 per hour of overtime. Please plan your schedule accordingly.',
      },
      {
        heading: 'Punctuality',
        text: "I arrive on time and expect the party to be ready at their scheduled times. Delays from the client's side may result in overtime charges.",
      },
    ],
  },
  {
    icon: Car,
    title: 'Travel',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-500',
    policies: [
      {
        heading: 'Home Studio (Trials)',
        text: 'Trials are conducted at my home studio in the Rocklin, Placer County area. No travel fee applies for studio visits.',
      },
      {
        heading: 'Local Travel (Within 30 Miles)',
        text: 'Travel within 30 miles of my home studio is included at no additional charge.',
      },
      {
        heading: 'Extended Travel (Within California)',
        text: 'Travel beyond 30 miles of my home studio within California is charged at $2 per mile round trip.',
      },
      {
        heading: 'Out-of-State Travel',
        text: 'For events outside of California, the client covers: round-trip airfare, hotel accommodations, and Uber/rideshare fees.',
      },
    ],
  },
  {
    icon: Camera,
    title: 'Photography & Media',
    color: 'bg-pink-50 border-pink-200',
    iconColor: 'text-pink-400',
    policies: [
      {
        heading: 'Promotional Use',
        text: 'Photos and videos taken by Beauty by Alaena during your service may be used for promotional purposes, including social media and the website portfolio.',
      },
      {
        heading: 'Your Right to Decline',
        text: 'If you prefer your images not be shared publicly, please notify me in writing before your event and I will respect your wishes.',
      },
    ],
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-500',
    policies: [
      {
        heading: 'Allergic Reactions',
        text: 'Beauty by Alaena is not liable for any allergic reactions to products used during services. Please disclose any known allergies or sensitivities before your appointment.',
      },
      {
        heading: 'Clean Work Environment',
        text: 'A safe, clean, and professional work environment is maintained at all times. All brushes and tools are sanitized between every client.',
      },
      {
        heading: 'Client Responsibility',
        text: 'Clients are responsible for disclosing skin conditions, sensitivities, or allergies prior to service. This ensures the safest and best possible experience.',
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function PoliciesContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#FAF6F1] border border-[#C9A96E]/30 rounded-2xl p-8 mb-14 text-center"
        >
          <PhoneCall className="w-8 h-8 text-[#C9A96E] mx-auto mb-4" strokeWidth={1.5} />
          <p className="font-['Cormorant_Garamond'] text-2xl text-[#2C2C2C] mb-3">
            Questions About These Policies?
          </p>
          <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed mb-4">
            I&apos;m happy to walk you through anything before you book. Reach out via email or phone — I respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:beautybyalaena@gmail.com"
              className="font-['Montserrat'] text-sm text-[#8B6F4E] hover:text-[#C9A96E] transition-colors"
            >
              beautybyalaena@gmail.com
            </a>
            <span className="hidden sm:inline text-[#C9A96E]">·</span>
            <a
              href="tel:9167566446"
              className="font-['Montserrat'] text-sm text-[#8B6F4E] hover:text-[#C9A96E] transition-colors"
            >
              916.756.6446
            </a>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className={`rounded-2xl border p-8 ${section.color}`}
              >
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <Icon className={`w-5 h-5 ${section.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold text-[#2C2C2C]">
                    {section.title}
                  </h2>
                </div>

                {/* Policies list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.policies.map((policy) => (
                    <div key={policy.heading} className="bg-white/70 rounded-xl p-5">
                      <h3 className="font-['Montserrat'] text-sm font-semibold text-[#2C2C2C] mb-2 flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                        {policy.heading}
                      </h3>
                      <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed">
                        {policy.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* All Payments Non-Refundable Summary Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold text-[#2C2C2C]">
              Payment & Refund Summary
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white/70 rounded-xl p-5">
              <h3 className="font-['Montserrat'] text-sm font-semibold text-[#2C2C2C] mb-2 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                All Payments Non-Refundable
              </h3>
              <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed">
                All payments made to Beauty by Alaena are non-refundable. This includes the $100 booking deposit and any balances paid. The only exception is a genuine emergency, in which case a full refund will be issued. All other cancellations remain non-refundable regardless of circumstance.
              </p>
            </div>
            <div className="bg-white/70 rounded-xl p-5">
              <h3 className="font-['Montserrat'] text-sm font-semibold text-[#2C2C2C] mb-2 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                Accepted Payment Methods
              </h3>
              <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed">
                Payment is due in full on the day of your event. Accepted methods: Cash, Venmo, CashApp, Apple Pay, or personal check. No payment plans are available.
              </p>
            </div>
            <div className="bg-white/70 rounded-xl p-5">
              <h3 className="font-['Montserrat'] text-sm font-semibold text-[#2C2C2C] mb-2 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                Cancellation 30+ Days Out
              </h3>
              <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed">
                Cancellations made 30 or more days before the event result in only the $100 deposit being forfeited. No additional balance is owed.
              </p>
            </div>
            <div className="bg-white/70 rounded-xl p-5">
              <h3 className="font-['Montserrat'] text-sm font-semibold text-[#2C2C2C] mb-2 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                Cancellation Within 30 Days
              </h3>
              <p className="font-['Montserrat'] text-sm text-[#6B6B6B] leading-relaxed">
                Cancellations made within 30 days of the event require payment of the full remaining balance. Last-minute cancellations that bring the party below the 4-service wedding minimum are still paid in full.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="font-['Cormorant_Garamond'] text-3xl text-[#2C2C2C] mb-4">
            Ready to Book?
          </p>
          <p className="font-['Montserrat'] text-sm text-[#6B6B6B] mb-8 max-w-lg mx-auto">
            Now that you know how I work, let&apos;s make your vision a reality. Fill out my inquiry form and I&apos;ll be in touch within 24 hours.
          </p>
          <a
            href="/inquiry"
            className="inline-block bg-[#8B6F4E] text-white font-['Montserrat'] text-sm tracking-widest uppercase px-12 py-4 rounded-full hover:bg-[#7A6142] transition-colors duration-300"
          >
            Submit an Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}