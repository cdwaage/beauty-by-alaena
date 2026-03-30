import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import PricingTables from "@/components/PricingTables";
import ServiceTiming from "@/components/ServiceTiming";
import QuoteCalculator from "@/components/QuoteCalculator";
import TravelFees from "@/components/TravelFees";

export const metadata: Metadata = {
  title: "Services & Pricing — Beauty by Alaena",
  description:
    "Full pricing for bridal hair and makeup, prom, and special events. Quote calculator included.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PricingTables />
      <ServiceTiming />
      <QuoteCalculator />
      <TravelFees />
    </>
  );
}