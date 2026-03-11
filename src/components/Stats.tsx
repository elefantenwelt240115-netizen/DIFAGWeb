const stats = [
  { value: "30.000+", label: "Zufriedene Kund:innen" },
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "150+", label: "Förderexpert:innen" },
  { value: "98%", label: "Weiterempfehlungsrate" },
];

export default function Stats() {
  return (
    <section className="py-16 hero-silk">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-2">
                {s.value}
              </p>
              <p className="text-white/70 text-sm sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
