"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Panel */}
      {open && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-sm">
                  DIFAG Förderberatung
                </p>
                <p className="text-white/60 text-xs mt-0.5">
                  Wir antworten in wenigen Minuten
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Chat schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 h-64 flex flex-col justify-end">
            <div className="bg-bg rounded-xl p-4 mb-4">
              <p className="text-sm text-navy/70">
                Hallo! 👋 Wie können wir Ihnen bei Ihrer Förderung helfen?
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nachricht schreiben..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 text-navy"
              />
              <button className="h-10 w-10 rounded-xl bg-gold flex items-center justify-center hover:bg-gold-light transition-colors">
                <Send className="h-4 w-4 text-navy" />
              </button>
            </div>
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
        aria-label="Chat öffnen"
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
