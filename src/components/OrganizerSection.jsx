import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const patronLogos = [
  { src: '/ASR-RFtime-2024.webp',                     alt: 'ASR PTH Rytm Serca' },
  { src: '/PTK-Punkty-Edukacyjne-RFtime-2025.png',   alt: 'PTK Punkty Edukacyjne' },
  { src: '/Oddzial-Lubelski-PTK-RFtime.webp',         alt: 'Oddział Lubelski PTK' },
  { src: '/Lubelska-Izba-Lekarska-RFtime.webp',       alt: 'Lubelska Izba Lekarska' },
  { src: '/Klub-30-PTK-RFtime.webp',                  alt: 'Klub 30 PTK' },
  { src: '/certyfikat-RFtime.webp',                   alt: 'Certyfikat RFtime' },
];

function DraggableTicker() {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const raf = useRef(null);
  const offset = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);

  useEffect(() => {
    const speed = window.innerWidth < 768 ? 0.5 : 0.3;
    const tick = () => {
      if (!isDragging.current && innerRef.current) {
        const cycle = innerRef.current.scrollWidth / 2;
        offset.current = (offset.current + speed) % cycle;
        innerRef.current.style.transform = `translateX(-${offset.current}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const begin = (x) => {
    isDragging.current = true;
    startX.current = x;
    startOffset.current = offset.current;
  };
  const move = (x) => {
    if (!isDragging.current || !innerRef.current) return;
    const cycle = innerRef.current.scrollWidth / 2;
    const dx = startX.current - x;
    offset.current = ((startOffset.current + dx) % cycle + cycle) % cycle;
    innerRef.current.style.transform = `translateX(-${offset.current}px)`;
  };
  const end = () => { isDragging.current = false; };

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden"
      style={{ cursor: 'grab', userSelect: 'none' }}
      onMouseDown={(e) => begin(e.pageX)}
      onMouseMove={(e) => move(e.pageX)}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={(e) => begin(e.touches[0].pageX)}
      onTouchMove={(e) => move(e.touches[0].pageX)}
      onTouchEnd={end}
    >
      <div ref={innerRef} className="flex gap-8 w-max items-center py-1" style={{ willChange: 'transform' }}>
        {[...patronLogos, ...patronLogos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0" style={{ height: '80px', width: '180px', backgroundColor: '#ffffff', isolation: 'isolate' }}>
            <img src={logo.src} alt={logo.alt} className="object-contain max-h-full max-w-full" draggable={false} style={{ mixBlendMode: 'multiply' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OrganizerSection() {
  const { t } = useTranslation();
  return (
    <>
      {/* Organizer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-6">{t('organizer.label')}</p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-semibold text-gray-900 text-base mb-1">{t('organizer.name')}</h3>
              <p className="text-sm text-gray-500 mb-4">{t('organizer.hospital')}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{t('organizer.desc')}</p>
            </div>
            <div className="rounded-xl flex items-center justify-center py-8">
              <img
                src="/szpital-logo.webp"
                alt="WSzS Biała Podlaska"
                style={{ width: '70%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patrons */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mb-8">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest">{t('organizer.patronsLabel')}</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />
          <DraggableTicker />
        </div>
      </section>
    </>
  );
}
