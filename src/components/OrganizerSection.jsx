const patronLogos = [
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/ASR-RFtime-2024.webp',                     alt: 'ASR PTH Rytm Serca' },
  { src: 'https://rftime.pl/wp-content/uploads/2025/09/PTK-Punkty-Edukacyjne-RFtime-2025.png',   alt: 'PTK Punkty Edukacyjne' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/Oddzial-Lubelski-PTK-RFtime.webp',         alt: 'Oddział Lubelski PTK' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/Lubelska-Izba-Lekarska-RFtime.webp',       alt: 'Lubelska Izba Lekarska' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/Klub-30-PTK-RFtime.webp',                  alt: 'Klub 30 PTK' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/certyfikat-RFtime.webp',                   alt: 'Certyfikat RFtime' },
];

export default function OrganizerSection() {
  return (
    <>
      {/* Organizator */}
      <section className="border-t border-gray-200 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-6">Organizator</p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-semibold text-gray-900 text-base mb-1">Pracownia Elektrofizjologii i Elektrostymulacji Serca</h3>
              <p className="text-sm text-gray-500 mb-4">Wojewódzki Szpital Specjalistyczny w Białej Podlaskiej</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                W Pracowni EP wykonywane są zarówno ablacje proste jak i złożone ablacje arytmii nadkomorowych i komorowych
                z wykorzystaniem zaawansowanej technologii mapowania 3D. Jako jedna z nielicznych Pracowni EP w Polsce
                wykonujemy ablacje u pacjentów z burzą elektryczną.
              </p>
            </div>
            <div className="rounded-xl flex items-center justify-center py-8">
              <img
                src="https://rftime.pl/wp-content/uploads/2024/08/1-web-RFtime-2020-Szpital-Biala-Podlaska.webp"
                alt="WSzS Biała Podlaska"
                style={{ width: '70%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patronaty i Punkty Edukacyjne */}
      <section className="border-t border-gray-200 py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest">Patronaty i Punkty Edukacyjne</p>
        </div>
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
            style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
            style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />

          <div className="logo-ticker flex gap-12 w-max items-center">
            {[...patronLogos, ...patronLogos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                style={{ height: '80px', maxWidth: '200px', mixBlendMode: 'multiply' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
