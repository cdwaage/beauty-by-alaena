import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2320] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-greatvibes text-4xl text-gold">
              Beauty by Alaena
            </span>
            <p className="font-montserrat text-xs tracking-widest uppercase text-white/60 mt-1 mb-4">
              Hair & Makeup Artist
            </p>
            <p className="font-montserrat text-sm text-white/70 leading-relaxed">
              Creating timeless beauty for your most unforgettable moments. Based in Rocklin, Placer County, CA — available to travel throughout California.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-cormorant text-xl font-medium text-gold mb-6">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services & Pricing" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/inquiry", label: "Book an Inquiry" },
                { href: "/reviews/", label: "Leave a Review" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-montserrat text-sm text-white/70 hover:text-gold transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cormorant text-xl font-medium text-gold mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:beautybyalaena@gmail.com"
                className="flex items-center gap-3 font-montserrat text-sm text-white/70 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold flex-shrink-0" />
                beautybyalaena@gmail.com
              </a>
              <div className="flex items-center gap-3 font-montserrat text-sm text-white/70">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                Rocklin, Placer County, CA
              </div>
              <a
                href="https://www.instagram.com/_beautybyalaena"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-montserrat text-sm text-white/70 hover:text-gold transition-colors"
              >
                <Instagram size={16} className="text-gold flex-shrink-0" />
                @_beautybyalaena
              </a>
            </div>

            <div className="mt-8">
              <p className="font-montserrat text-xs text-white/50 mb-2">
                Payment accepted:
              </p>
              <p className="font-montserrat text-xs text-white/70">
                Cash · Venmo · CashApp · Apple Pay · Check
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-xs text-white/40">
            © {new Date().getFullYear()} Beauty by Alaena. All rights reserved.
          </p>
          <p className="font-montserrat text-xs text-white/40">
            Rocklin, Placer County, CA · Serving the Northern California
          </p>
        </div>
      </div>
    </footer>
  );
}