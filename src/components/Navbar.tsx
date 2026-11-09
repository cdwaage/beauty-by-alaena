"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services & Pricing" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/inquiry/", label: "Book Inquiry" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-cream/95 backdrop-blur-sm shadow-sm";
  const textColor =
    isHome && !scrolled ? "text-white" : "text-gray-800";
  const logoColor =
    isHome && !scrolled ? "text-white" : "text-brown";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className={`font-greatvibes text-3xl leading-none ${logoColor} transition-colors duration-500`}>
              Beauty by Alaena
            </span>
            <span className={`font-montserrat text-xs tracking-widest uppercase mt-0.5 ${isHome && !scrolled ? "text-white/70" : "text-brown/70"} transition-colors duration-500`}>
              Hair & Makeup Artist
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname + "/" === link.href;
              const isBook = link.href === "/inquiry/";
              if (isBook) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="btn-primary text-xs"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-montserrat text-xs tracking-widest uppercase transition-all duration-300 hover:text-gold ${
                    isActive ? "text-gold border-b border-gold pb-0.5" : textColor
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-cream-dark"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-montserrat text-sm tracking-widest uppercase py-2 border-b border-cream-dark transition-colors hover:text-gold ${
                    pathname === link.href ? "text-gold" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}