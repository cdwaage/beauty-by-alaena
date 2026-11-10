import AboutHero from '@/components/AboutHero';
import AboutStory from '@/components/AboutStory';
import AboutValues from '@/components/AboutValues';
import AboutCTA from '@/components/AboutCTA';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About Alaena — Rocklin Hair & Makeup Artist | Placer County',
  description:
    'Meet Alaena, the Rocklin hair and makeup artist behind Beauty by Alaena. She is based in Placer County and travels to clients for weddings, proms, and special events.',
  path: '/about/',
});

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