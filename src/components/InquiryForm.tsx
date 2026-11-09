"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, Instagram, Sparkles } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  numberOfPeople: string;
  services: string;
  heardAbout: string;
  notes: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  location: "",
  numberOfPeople: "",
  services: "",
  heardAbout: "",
  notes: "",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fail = "Something went wrong. Please try again or email beautybyalaena@gmail.com directly.";

    try {
      // Same-origin on beautybyalaena.com / www; preview (pages.dev) hosts post to the live API.
      const endpoint =
        typeof window !== "undefined" && window.location.hostname.endsWith("beautybyalaena.com")
          ? "/api/inquiry"
          : "https://beautybyalaena.com/api/inquiry";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ ...formData, company_website: honeypot }),
      });

      let data: { success?: boolean; error?: string } = {};
      try {
        data = await response.json();
      } catch {
        // non-JSON response (e.g. network/proxy error page)
      }

      if (response.ok && data.success === true) {
        setSubmitted(true);
      } else {
        setError(data.error || fail);
      }
    } catch (err) {
      setError(
        "We couldn't reach the server. Please check your connection and try again, or email beautybyalaena@gmail.com directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 px-6"
            >
              {/* Decorative top border */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px w-16 bg-gold/40" />
                <Sparkles size={20} className="text-gold" />
                <div className="h-px w-16 bg-gold/40" />
              </div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle size={40} className="text-gold" />
              </motion.div>

              {/* Script accent */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-greatvibes text-5xl text-gold block mb-4"
              >
                Thank You!
              </motion.span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-cormorant text-4xl md:text-5xl text-gray-900 mb-6"
              >
                Your Inquiry Has Been Received
              </motion.h2>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
                className="w-24 h-px bg-gold/50 mx-auto mb-8"
              />

              {/* Summary box */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-cream border border-gold/20 rounded-lg p-6 max-w-md mx-auto mb-10 text-left"
              >
                <p className="font-montserrat text-xs tracking-widest uppercase text-gold mb-4">
                  Inquiry Summary
                </p>
                <div className="space-y-2 font-montserrat text-sm text-gray-700">
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium text-right">{formData.name}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-500">Event</span>
                    <span className="font-medium text-right">{formData.eventType}</span>
                  </div>
                  {formData.eventDate && (
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">Date</span>
                      <span className="font-medium text-right">
                        {new Date(formData.eventDate + "T00:00:00").toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  )}
                  {formData.location && (
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-500">Location</span>
                      <span className="font-medium text-right">{formData.location}</span>
                    </div>
                  )}
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-500">Services</span>
                    <span className="font-medium text-right">{formData.services}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-500">Party Size</span>
                    <span className="font-medium text-right">{formData.numberOfPeople}</span>
                  </div>
                </div>
              </motion.div>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="font-montserrat text-sm text-gray-500 max-w-md mx-auto mb-10 leading-relaxed"
              >
                Alaena will review your inquiry and get back to you within{" "}
                <strong className="text-gray-700">2–3 business days</strong> to
                confirm availability and discuss the details of your special day.
              </motion.p>

              {/* Contact links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-montserrat text-gray-600"
              >
                <a
                  href="mailto:beautybyalaena@gmail.com"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full hover:border-gold hover:text-gold transition-colors"
                >
                  <Mail size={15} /> beautybyalaena@gmail.com
                </a>
                <a
                  href="https://instagram.com/_beautybyalaena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full hover:border-gold hover:text-gold transition-colors"
                >
                  <Instagram size={15} /> @_beautybyalaena
                </a>
              </motion.div>

              {/* Decorative bottom */}
              <div className="flex items-center justify-center gap-4 mt-12">
                <div className="h-px w-16 bg-gold/40" />
                <Sparkles size={16} className="text-gold/60" />
                <div className="h-px w-16 bg-gold/40" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-12">
                <p className="font-montserrat text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
                  Fill out the form below and Alaena will reach out to confirm
                  availability and discuss the details. A{" "}
                  <strong className="text-gray-700">$100 retainer</strong> is
                  required to secure your date.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot: hidden from people, bots fill it in */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                  <label htmlFor="company_website">Company website</label>
                  <input
                    id="company_website"
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
                {/* Row 1 — Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Row 2 — Phone & Event Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="(916) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="eventType"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Event Type <span className="text-gold">*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select event type…
                      </option>
                      <option value="Wedding">Wedding</option>
                      <option value="Prom">Prom</option>
                      <option value="Homecoming">Homecoming</option>
                      <option value="Quinceañera">Quinceañera</option>
                      <option value="Photoshoot">Photoshoot</option>
                      <option value="Birthday/Gala">Birthday / Gala</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 — Date & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Event Date <span className="text-gold">*</span>
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Event Location / City <span className="text-gold">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      required
                      placeholder="Rocklin, Placer County, CA"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Row 4 — Number of People & Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="numberOfPeople"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Number of People <span className="text-gold">*</span>
                    </label>
                    <input
                      id="numberOfPeople"
                      type="number"
                      name="numberOfPeople"
                      required
                      min="1"
                      placeholder="e.g. 4"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="services"
                      className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                    >
                      Services Wanted <span className="text-gold">*</span>
                    </label>
                    <select
                      id="services"
                      name="services"
                      required
                      value={formData.services}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select services…
                      </option>
                      <option value="Hair Only">Hair Only</option>
                      <option value="Makeup Only">Makeup Only</option>
                      <option value="Hair & Makeup">Hair &amp; Makeup (Both)</option>
                    </select>
                  </div>
                </div>

                {/* Row 5 — How did you hear */}
                <div>
                  <label
                    htmlFor="heardAbout"
                    className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                  >
                    How Did You Hear About Us?
                  </label>
                  <select
                    id="heardAbout"
                    name="heardAbout"
                    value={formData.heardAbout}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select an option…</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Friend/Family Referral">
                      Friend / Family Referral
                    </option>
                    <option value="Google Search">Google Search</option>
                    <option value="Wedding Venue">Wedding Venue</option>
                    <option value="The Knot/WeddingWire">
                      The Knot / WeddingWire
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="font-montserrat text-xs tracking-widest uppercase text-gray-600 block mb-2"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Tell Alaena anything else about your event — inspiration, allergies, special requests, etc."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 focus:border-gold bg-transparent font-montserrat text-sm text-gray-800 py-3 focus:outline-none transition-colors resize-none placeholder:text-gray-300"
                  />
                </div>

                {error && (
                  <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700 font-montserrat">
                    {error}
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </div>

                <p className="font-montserrat text-xs text-gray-400 leading-relaxed">
                  By submitting this form, you acknowledge that a{" "}
                  <strong className="text-gray-600">$100 retainer</strong> is
                  required to secure your date. This retainer is a non-refundable booking fee and does not apply toward your total balance. Alaena will reach out to confirm availability and
                  provide a final quote before any payment is collected.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}