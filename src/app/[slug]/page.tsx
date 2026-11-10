import type { Metadata } from "next";
import AreaLanding from "@/components/AreaLanding";
import { getLocalPage, localPages } from "@/lib/local-pages";
import { pageMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return localPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getLocalPage(params.slug);
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default function LocalLandingPage({
  params,
}: {
  params: { slug: string };
}) {
  return <AreaLanding page={getLocalPage(params.slug)} />;
}
