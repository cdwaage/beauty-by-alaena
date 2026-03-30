import type { Metadata } from 'next';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery | Beauty by Alaena — Bridal, Prom & Event Looks',
  description:
    'Browse Beauty by Alaena\'s portfolio of bridal, prom, quinceañera, and special event hair and makeup looks in Rocklin and Placer County, CA.',
  openGraph: {
    title: 'Gallery | Beauty by Alaena',
    description: 'Hair and makeup portfolio — bridal, prom, and special event looks by Alaena.',
    url: 'https://beautybyalaena.com/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
