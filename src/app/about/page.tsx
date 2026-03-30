import type { Metadata } from 'next';
import AboutHero from '@/components/AboutHero';
import AboutStory from '@/components/AboutStory';
import AboutValues from '@/components/AboutValues';
import AboutCTA from '@/components/AboutCTA';

export const metadata: Metadata = {
  title: 'About Alaena | Beauty by Alaena — Rocklin Hair & Makeup Artist',
  description:
    'Meet Alaena, Rocklin\'s trusted hair and makeup artist specializing in weddings, prom, and special events. Learn her story, her passion, and why clients love working with her.',
  openGraph: {
    title: 'About Alaena | Beauty by Alaena',
    description: 'Rocklin hair & makeup artist specializing in bridal, prom, and special events.',
    url: 'https://beautybyalaena.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </main>
  );
}