"use client";

import { useState } from "react";
import { Send, Phone, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <div>
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              Jetzt starten
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-3">
              Unverbindliches Gespräch vereinbaren
            </h2>
            <p className="text-navy/60 mb-8">
              Gemeinsam prüfen wir Ihren Anspruch – komplett kostenlos.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Vielen Dank!
                </h3>
                <p className="text-navy/60">
                  Wir rufen Sie schnellstmöglich zurück.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-bg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-navy"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-bg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-navy"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-bg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-navy"
                    placeholder="+49 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Wann sind Sie am besten erreichbar?
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) =>
                      setFormData({ ...formData, availability: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-bg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all text-navy"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="vormittags">Vormittags (8:45 - 12:00)</option>
                    <option value="nachmittags">Nachmittags (12:00 - 16:00)</option>
                    <option value="flexibel">Flexibel</option>
                  </select>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-gold focus:ring-gold"
                  />
                  <p className="text-sm text-navy/60 leading-relaxed">
                    Mit Absenden des Formulars stimme ich zu, dass meine Angaben
                    zur Beantwortung meiner Anfrage erhoben und verarbeitet werden.
                    Mehr Informationen in der{" "}
                    <a href="#" className="text-gold underline">
                      Datenschutzerklärung
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-navy font-bold rounded-full text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Jetzt Gespräch vereinbaren
                </button>
              </form>
            )}
          </div>

          {/* Right: Info + Image */}
          <div className="flex flex-col justify-center">
            <div className="bg-bg rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-navy mb-6">
                Wir haben Top-Expertise im Förderungsdschungel
              </h3>
              <div className="space-y-4">
                {[
                  "Beratung, die zu Ihnen passt",
                  "Mehr finanzielle Entlastung",
                  "Sie haben keinen Behörden-Stress",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-3.5 w-3.5 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-navy/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_kontaktoverlay.jpg"
                alt="Förderberatung"
                width={600}
                height={350}
                className="object-cover w-full h-[280px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-col sm:flex-row gap-4 text-white/90 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold" />
                    <span>0211-980701-10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>Mo-Do 8:45-16:00, Fr 8:45-13:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span>Düsseldorf</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
