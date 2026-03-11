"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact Form Panel */}
      {open && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-sm">
                  Kontakt aufnehmen
                </p>
                <p className="text-white/60 text-xs mt-0.5">
                  Wir melden uns schnellstmöglich bei Ihnen
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Formular schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            {submitted ? (
              <div className="text-center py-8">
                <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="font-bold text-navy mb-1">Vielen Dank!</p>
                <p className="text-navy/60 text-sm">
                  Wir rufen Sie schnellstmöglich zurück.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Ihr Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold text-navy"
                />
                <input
                  type="email"
                  required
                  placeholder="E-Mail *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold text-navy"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefonnummer *"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold text-navy"
                />
                <textarea
                  placeholder="Ihre Nachricht (optional)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold text-navy resize-none"
                />
                <p className="text-xs text-navy/40 leading-relaxed">
                  Mit Absenden stimme ich der{" "}
                  <a href="/datenschutz" className="text-gold underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
                <button
                  type="submit"
                  className="w-full py-3 bg-gold text-navy font-bold rounded-full text-sm hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          open
            ? "bg-navy text-white"
            : "bg-gold text-navy hover:shadow-xl hover:shadow-gold/30"
        }`}
        aria-label="Kontaktformular öffnen"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
