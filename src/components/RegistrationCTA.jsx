export default function RegistrationCTA() {
  return (
    <section
      style={{
        backgroundColor: '#0300b4',
        backgroundImage: 'radial-gradient(circle at 0% 0%, rgb(255, 10, 148) 0%, rgba(255, 255, 255, 0) 32%, rgb(2, 158, 255) 68%, rgba(12, 233, 200, 0.91) 100%)',
      }}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        <div>
          <p className="text-blue-200 text-sm font-medium mb-2 opacity-80">RFtime 2026 — Biała Podlaska</p>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
            Dołącz do kolejnej edycji
          </h2>
          <p className="text-white/80 max-w-xl leading-relaxed">
            Szczegóły programu zostaną ogłoszone wkrótce. Zostaw swoje dane, aby być pierwszym
            poinformowanym o naborze uczestników na edycję 2026. Udział bezpłatny. Liczy się kolejność zgłoszeń.
          </p>
        </div>
        <div>
          <a
            href="https://www.szpitalbp.pl/pl/nauka/konferencje-2013/konferencje-2026/konferencja-kardio-war-abl_2026.html"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-blue-900 font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-sm"
          >
            Zgłoś uczestnictwo
          </a>
          <p className="text-xs text-white/50 mt-2 text-center">
            Rejestracja przez WSzS w Białej Podlaskiej · RODO
          </p>
        </div>
      </div>
    </section>
  );
}
