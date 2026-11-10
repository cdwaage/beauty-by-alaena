import ServicesHero from "@/components/ServicesHero";
import PricingTables from "@/components/PricingTables";
import ServiceTiming from "@/components/ServiceTiming";
import QuoteCalculator from "@/components/QuoteCalculator";
import DestinationTravel from "@/components/DestinationTravel";
import TravelFees from "@/components/TravelFees";
import AreasWeServe from "@/components/AreasWeServe";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services & Pricing — Hair and Makeup in Rocklin, Placer County",
  description:
    "Bridal, prom, and event hair and makeup pricing for Beauty by Alaena in Rocklin, Placer County, including trials and destination wedding travel.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PricingTables />
      <ServiceTiming />
      <QuoteCalculator />
      <DestinationTravel />
      <TravelFees />
      <AreasWeServe />
    </>
  );
}