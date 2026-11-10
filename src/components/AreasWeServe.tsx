import Link from "next/link";
import { localPages } from "@/lib/local-pages";
import { serviceAreas } from "@/lib/site";

type AreasWeServeProps = {
  variant?: "section" | "footer";
  currentPath?: string;
};

export default function AreasWeServe({
  variant = "section",
  currentPath,
}: AreasWeServeProps) {
  const local = localPages.filter((page) => page.group === "local");
  const destination = localPages.filter((page) => page.group === "destination");
  const isFooter = variant === "footer";

  const linkClass = isFooter
    ? "font-montserrat text-sm text-white/70 hover:text-gold transition-colors"
    : "font-montserrat text-sm text-brown hover:text-gold transition-colors";

  const groups = [
    { label: "Local", pages: local },
    { label: "Destination weddings", pages: destination },
  ];

  const lists = groups.map((group) => (
    <div key={group.label}>
      <p
        className={
          isFooter
            ? "font-montserrat text-xs tracking-widest uppercase text-white/40 mb-3"
            : "font-montserrat text-xs tracking-widest uppercase text-gray-400 mb-3"
        }
      >
        {group.label}
      </p>
      <ul className="space-y-2">
        {group.pages.map((page) => {
          const current = page.path === currentPath;
          return (
            <li key={page.path}>
              {current ? (
                <span className={linkClass} aria-current="page">
                  {page.linkLabel}
                </span>
              ) : (
                <Link href={page.path} className={linkClass}>
                  {page.linkLabel}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  ));

  if (isFooter) {
    return (
      <div className="border-t border-white/10 mt-12 pt-10">
        <h3 className="font-cormorant text-xl font-medium text-gold mb-3">
          Areas we serve
        </h3>
        <p className="font-montserrat text-sm text-white/60 leading-relaxed max-w-3xl mb-6">
          Based in Rocklin, Placer County. Local visits cover{" "}
          {serviceAreas.join(", ")}. Travel within 30 miles of the studio is
          included. Destination weddings are quoted per event.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">{lists}</div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-white" id="areas">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-greatvibes text-4xl text-gold mb-2">Where she travels</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-gray-900">
            Areas we serve
          </h2>
          <div className="divider-gold" />
        </div>
        <p className="font-montserrat text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
          Alaena is based in Rocklin and travels to {serviceAreas.join(", ")}.
          Travel within 30 miles of the studio is included, and travel beyond
          that is $2 per mile, round trip. Lake Tahoe, Napa, and Sonoma are
          destination weddings, and travel for those is quoted per event.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {lists}
        </div>
      </div>
    </section>
  );
}
