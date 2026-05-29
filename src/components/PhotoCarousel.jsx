import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const photos2024 = Array.from({ length: 130 }, (_, i) => ({ src: `/gallery/2024/${i + 1}.webp`, year: '2024' }));
const photos2025 = Array.from({ length: 220 }, (_, i) => ({ src: `/gallery/2025/${i + 1}.webp`, year: '2025' }));

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PhotoCarousel() {
  const { t } = useTranslation();
  const allPhotos = useMemo(() => shuffle([...photos2024, ...photos2025]), []);
  const [current, setCurrent] = useState(0);
  const [autoKey, setAutoKey] = useState(0);

  const go = useCallback((idx) => {
    setCurrent((idx + allPhotos.length) % allPhotos.length);
    setAutoKey(k => k + 1);
  }, [allPhotos.length]);

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % allPhotos.length), 5000);
    return () => clearInterval(id);
  }, [autoKey, allPhotos.length]);

  const touchStartX = useRef(null);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(current + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
    <div
      className="relative w-full overflow-hidden bg-gray-950 rounded-2xl shadow-xl"
      style={{ height: '70vh', touchAction: 'pan-y' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {allPhotos.map((photo, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${photo.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? 'auto' : 'none',
          }}
        />
      ))}

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />

      {/* Bottom bar: year badge + counter + CTA */}
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/20">
            RFtime {allPhotos[current].year}
          </span>
        </div>
        <Link
          to="/galeria"
          className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-md border border-white/20 transition-colors"
        >
          {t('gallery.title')}
        </Link>
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors border border-white/10 cursor-pointer"
        aria-label="Poprzednie zdjęcie"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors border border-white/10 cursor-pointer"
        aria-label="Następne zdjęcie"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
    </div>
  );
}
