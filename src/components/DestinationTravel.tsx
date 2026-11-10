import Link from "next/link";

export default function DestinationTravel() {
  return (
    <section id="destination" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-greatvibes text-4xl text-gold mb-2">Away from home</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Destination &amp; travel
        </h2>
        <div className="divider-gold" />
        <div className="space-y-5 font-montserrat text-sm text-gray-600 leading-relaxed text-left md:text-center">
          <p>
            Alaena is a destination wedding makeup artist based in Rocklin and
            Roseville, in Placer County. Couples book her for Lake Tahoe bridal
            hair and makeup, for weddings in Napa and Sonoma, and for
            celebrations anywhere in the United States.
          </p>
          <p>
            She still comes to you for local weddings, proms, quinceañeras, and
            events around Rocklin. For a destination date, tell her where you
            are getting married when you inquire. Travel fees are quoted per
            event.
          </p>
          <p>
            <Link
              href="/lake-tahoe-wedding-hair-makeup/"
              className="text-brown hover:text-gold"
            >
              Lake Tahoe wedding hair and makeup
            </Link>
            <span className="text-gray-300"> · </span>
            <Link
              href="/napa-sonoma-wedding-hair-makeup/"
              className="text-brown hover:text-gold"
            >
              Napa and Sonoma wedding hair and makeup
            </Link>
          </p>
        </div>
        <Link href="/inquiry/" className="btn-primary inline-block mt-10">
          Inquire about a date
        </Link>
      </div>
    </section>
  );
}
