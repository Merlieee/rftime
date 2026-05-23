import { useRef, useEffect } from 'react';

const patronLogos = [
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/ASR-RFtime-2024.webp',                     alt: 'ASR PTH Rytm Serca' },
  { src: 'https://rftime.pl/wp-content/uploads/2025/09/PTK-Punkty-Edukacyjne-RFtime-2025.png',   alt: 'PTK Punkty Edukacyjne' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/Oddzial-Lubelski-PTK-RFtime.webp',         alt: 'Oddział Lubelski PTK' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/Lubelska-Izba-Lekarska-RFtime.webp',       alt: 'Lubelska Izba Lekarska' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/Klub-30-PTK-RFtime.webp',                  alt: 'Klub 30 PTK' },
  { src: 'https://rftime.pl/wp-content/uploads/2024/09/certyfikat-RFtime.webp',                   alt: 'Certyfikat RFtime' },
];


function DraggableTicker() {
  const ref = useRef(null);
  const raf = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  useEffect(() => {
    const speed = window.innerWidth < 768 ? 0.5 : 0.3;
    const tick = () => {
      if (ref.current && !isDragging.current) {
        const el = ref.current;
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const begin = (x) => {
    isDragging.current = true;
    startX.current = x;
    startScroll.current = ref.current.scrollLeft;
  };
  const move = (x) => {
    if (!isDragging.current) return;
    ref.current.scrollLeft = startScroll.current - (x - startX.current);
  };
  const end = () => { isDragging.current = false; };

  return (
    <div
      ref={ref}
      className="overflow-x-auto px-6"
      style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', cursor: 'grab', userSelect: 'none' }}
      onMouseDown={(e) => begin(e.pageX)}
      onMouseMove={(e) => move(e.pageX)}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={(e) => begin(e.touches[0].pageX)}
      onTouchMove={(e) => move(e.touches[0].pageX)}
      onTouchEnd={end}
    >
      <div className="flex gap-8 w-max items-center py-1">
        {[...patronLogos, ...patronLogos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0" style={{ height: '80px', width: '180px', backgroundColor: '#f9fafb', isolation: 'isolate' }}>
            <img src={logo.src} alt={logo.alt} className="object-contain max-h-full max-w-full" draggable={false} style={{ mixBlendMode: 'multiply' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

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
      <section className="border-t border-gray-200 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest">Patronaty i Punkty Edukacyjne</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />
          <DraggableTicker />
        </div>
      </section>
    </>
  );
}
