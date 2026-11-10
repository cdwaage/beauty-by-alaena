import GalleryClient from '@/components/GalleryClient';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Gallery — Bridal, Prom & Event Looks in Rocklin, Placer County',
  description:
    'Browse bridal, prom, quinceañera, and event hair and makeup by Alaena, a Rocklin artist serving Placer County and destination weddings.',
  path: '/gallery/',
});

export default function GalleryPage() {
  return <GalleryClient />;
}
