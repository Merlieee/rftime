import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const photos2024 = Array.from({ length: 28 }, (_, i) => ({ src: `/gallery/2024/${i + 1}.webp` }));
const photos2025 = Array.from({ length: 46 }, (_, i) => ({ src: `/gallery/2025/${i + 1}.webp` }));

function EditionGrid({ year, photos }) {
  const [index, setIndex] = useState(-1);

  return (
    <section style={{ marginBottom: '3rem' }}>
      <div className="flex items-baseline gap-3 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">RFtime {year}</h2>
        <span className="text-sm text-gray-400">{photos.length} zdjęć</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="cursor-pointer rounded overflow-hidden group"
            style={{ aspectRatio: '4/3' }}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${photo.src})` }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </section>
  );
}

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 sticky top-0 bg-white z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            RFtime 2026
          </Link>
          <span className="font-semibold text-gray-900 tracking-tight">
            RF<span className="text-sky-600">time</span>
          </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-bold text-gray-900 tracking-tight mb-12">Galeria</h1>

        <EditionGrid year="2025" photos={photos2025} />
        <EditionGrid year="2024" photos={photos2024} />
      </div>
    </div>
  );
}
