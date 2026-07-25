import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Grid tiles load lightweight thumbnails; the lightbox (slide `src`) uses the full-res original.
const makePhotos = (year, n) => Array.from({ length: n }, (_, i) => ({
  src: `/gallery/${year}/${i + 1}.webp`,
  thumb: `/gallery/${year}/thumb/${i + 1}.webp`,
}));
const photos2024 = makePhotos('2024', 130);
const photos2025 = makePhotos('2025', 220);

function EditionGrid({ year, photos }) {
  const [index, setIndex] = useState(-1);
  const { t } = useTranslation();

  return (
    <section style={{ marginBottom: '3rem' }}>
      <div className="flex items-baseline gap-3 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">RFtime {year}</h2>
        <span className="text-sm text-gray-400">{photos.length} {t('gallery.photos')}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="cursor-pointer rounded overflow-hidden group"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src={photo.thumb}
              loading="lazy"
              decoding="async"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        controller={{ closeOnBackdropClick: true }}
        styles={{
          root: { '--yarl__color_backdrop': 'rgba(0, 0, 0, 0.6)', '--yarl__button_filter': 'none' },
          slide: { padding: '3rem' },
        }}
      />
    </section>
  );
}

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-0">
        <Link to="/#carousel" className="text-sm text-gray-500 hover:underline w-fit">
          ← {t('gallery.back')}
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-bold text-gray-900 tracking-tight mb-12">{t('gallery.title')}</h1>

        <EditionGrid year="2025" photos={photos2025} />
        <EditionGrid year="2024" photos={photos2024} />
      </div>
    </div>
  );
}
