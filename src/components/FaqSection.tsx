import Link from "next/link";
import { faqs } from "@/lib/site";

export default function FaqSection() {
  return (
    <section className="section-padding bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-greatvibes text-4xl text-gold mb-2">Good to know</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-gray-900">
            Questions
          </h2>
          <div className="divider-gold" />
        </div>
        <div className="space-y-8">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="font-cormorant text-2xl text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
              {faq.question === "Do you travel for destination weddings?" && (
                <p className="font-montserrat text-sm mt-3">
                  <Link href="/services/#destination" className="text-brown hover:text-gold">
                    Read about destination travel
                  </Link>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
