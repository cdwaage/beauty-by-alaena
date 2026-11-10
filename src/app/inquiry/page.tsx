import InquiryHero from "@/components/InquiryHero";
import InquiryForm from "@/components/InquiryForm";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Book an Inquiry — Rocklin Hair & Makeup | Placer County",
  description:
    "Request a date with Alaena, a Rocklin, Placer County hair and makeup artist for weddings, proms, quinceañeras, and destination events.",
  path: "/inquiry/",
});

export default function InquiryPage() {
  return (
    <>
      <InquiryHero />
      <InquiryForm />
    </>
  );
}