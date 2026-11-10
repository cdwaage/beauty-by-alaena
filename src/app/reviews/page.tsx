import Link from "next/link";
import { instagramUrl, pageMetadata, reviewLinks } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Leave a Review — Beauty by Alaena, Rocklin, Placer County",
  description:
    "A few gentle prompts for past clients who want to review Alaena, a Rocklin, Placer County hair and makeup artist, in their own words.",
  path: "/reviews/",
  index: false,
});

const prompts = [
  "What was the event?",
  "How did you feel?",
  "Did the hair and makeup last?",
  "What was the experience like?",
  "Would you recommend her?",
];

export default function ReviewsPage() {
  const links = reviewLinks.filter((link) => link.href.trim().length > 0);

  return (
    <>
      <section className="bg-[#2C2C2C] text-white pt-32 pb-16 px-4 text-center">
        <p className="font-greatvibes text-4xl text-gold mb-3">For past clients</p>
        <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
          Leave a review
        </h1>
        <p className="font-montserrat text-sm text-white/75 max-w-xl mx-auto leading-relaxed">
          If Alaena did your hair or makeup, a few honest sentences help the
          next person who is deciding. Please write the review in your own
          words.
        </p>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="font-cormorant text-3xl text-gray-900 mb-4">
            If you are not sure where to start
          </h2>
          <p className="font-montserrat text-sm text-gray-600 leading-relaxed mb-6">
            These are only prompts. There is no sample review to copy, and
            nothing you need to cover.
          </p>
          <ol className="space-y-3 mb-12">
            {prompts.map((prompt, index) => (
              <li key={prompt} className="flex gap-4">
                <span className="font-cormorant text-2xl text-gold leading-none">
                  {index + 1}
                </span>
                <span className="font-montserrat text-sm text-gray-700 pt-1">
                  {prompt}
                </span>
              </li>
            ))}
          </ol>

          {links.length > 0 ? (
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-cream-dark px-6 py-8 text-center">
              <p className="font-montserrat text-sm text-gray-600 leading-relaxed mb-4">
                Review links are coming soon.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-sm tracking-widest uppercase text-brown hover:text-gold"
              >
                Find her on Instagram
              </a>
            </div>
          )}

          <p className="font-montserrat text-xs text-gray-500 mt-10 text-center">
            Ready to book instead?{" "}
            <Link href="/inquiry/" className="text-brown hover:text-gold">
              Send an inquiry
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
