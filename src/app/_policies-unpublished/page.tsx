import type { Metadata } from 'next';
import PoliciesHero from '@/components/PoliciesHero';
import PoliciesContent from '@/components/PoliciesContent';

export const metadata: Metadata = {
  title: 'Policies | Beauty by Alaena — Booking, Payment & Cancellation',
  description:
    'Review Beauty by Alaena\'s booking policies, payment terms, cancellation policy, and travel fees. $100 retainer required to secure your date.',
  openGraph: {
    title: 'Policies | Beauty by Alaena',
    description: 'Booking policies, payment terms, cancellation, and travel fees for Beauty by Alaena.',
    url: 'https://beautybyalaena.com/policies',
  },
};

export default function PoliciesPage() {
  return (
    <main>
      <PoliciesHero />
      <PoliciesContent />
    </main>
  );
}
