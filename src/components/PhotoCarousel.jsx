import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const photos2024 = [
  ...Array.from({ length: 28 }, (_, i) => ({ src: `/gallery/2024/${i + 1}.webp`, year: '2024' })),
  ...Array.from({ length: 102 }, (_, i) => ({ src: encodeURI(`/gallery/2024/${String(i + 1).padStart(3, '0')} Warsztaty Ablacyjne.jpg`), year: '2024' })),
];

const photos2025uuid = [
  'a77dbeaa-792f-4bee-b3e5-3ee10478b966','a86b9ee6-fc8f-423b-a00f-3fd8c97241a1','abb69701-106c-45c1-ace7-46191b5ffb10',
  'abfa7df5-eb61-4bb3-8a66-2b00adbccec9','af545fef-ae9f-483d-bbd1-7bc5b4139f13','b14c63c3-832b-4374-abf2-6308718daf2e',
  'b75fe50d-3104-4961-a672-fd679c932ada','bbef2037-bdb4-4adb-8ee5-d4464485d1e9','bbf852a8-0e52-4f7e-8f07-101213cb2979',
  'c03b7a0a-a33b-44f5-afc7-ab31a16411f8','cf68b952-0304-41e2-a11a-44ad91487b07','cfa8f509-1801-46d7-a5d6-02fb22f4edfe',
  'd0072b3d-85a1-436b-8733-bfb1da999c50','d168d340-9c22-4e90-a29b-c9d9ebebfa79','d3af7eb3-1b0b-4d29-8344-1a50bd481b66',
  'd6bbfd1b-cbcc-439a-97aa-1745c692a92a','dbc8d9a7-a689-4d69-87c2-061900142679','dd6ecf1b-1aed-4a95-9f2a-5cc029972343',
  'de8bee36-38a5-4432-a252-cdadfd37db3c','dfc64f06-09fe-453a-9b94-e8bc4757b75f','e1cf256f-3a6a-4552-9008-00e5affa8e4c',
  'e713ccf9-52f7-4dc6-bdea-ef4c89deca54','ea468b9b-ee9f-4bb8-9da8-45d434483fd2','eea1a43a-76c4-44c4-b943-fd529311bf7e',
  'ef0c8332-7319-40a8-b6e2-fe7b98b76596','f0186d35-f786-4545-ac79-d5c624e3e544','f0759bb7-12dc-493d-9da1-7d419c743230',
  'faf9c32a-1434-4337-b2f7-2c6dcbaa7673','fb1e9c6c-925c-435c-b58e-c2e75a5594ee','fb763968-07a3-47e8-bf6a-2183e5acd159',
  'fc9f5d9c-fd27-4672-9d27-637215baf29f',
].map(id => ({ src: `/gallery/2025/${id}.JPG`, year: '2025' }));

const photos2025 = [
  ...Array.from({ length: 46 }, (_, i) => ({ src: `/gallery/2025/${i + 1}.webp`, year: '2025' })),
  ...Array.from({ length: 140 }, (_, i) => ({ src: encodeURI(`/gallery/2025/${String(i + 1).padStart(3, '0')} RF time.jpg`), year: '2025' })),
  ...photos2025uuid,
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PhotoCarousel() {
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
    <div className="px-4 md:px-12">
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
          Galeria
        </Link>
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors border border-white/10"
        aria-label="Poprzednie zdjęcie"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors border border-white/10"
        aria-label="Następne zdjęcie"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
    </div>
  );
}
