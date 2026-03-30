import type { Metadata } from "next";
import InquiryHero from "@/components/InquiryHero";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Book an Inquiry — Beauty by Alaena",
  description:
    "Submit an inquiry for bridal, prom, or special event hair and makeup services in Rocklin, Placer County.",
};

export default function InquiryPage() {
  return (
    <>
      <InquiryHero />
      <InquiryForm />
    </>
  );
}