import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const photos2024 = [
  ...Array.from({ length: 28 }, (_, i) => ({ src: `/gallery/2024/${i + 1}.webp` })),
  ...Array.from({ length: 102 }, (_, i) => ({ src: encodeURI(`/gallery/2024/${String(i + 1).padStart(3, '0')} Warsztaty Ablacyjne.jpg`) })),
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
].map(id => ({ src: `/gallery/2025/${id}.JPG` }));

const photos2025 = [
  ...Array.from({ length: 46 }, (_, i) => ({ src: `/gallery/2025/${i + 1}.webp` })),
  ...Array.from({ length: 140 }, (_, i) => ({ src: encodeURI(`/gallery/2025/${String(i + 1).padStart(3, '0')} RF time.jpg`) })),
  ...photos2025uuid,
];

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
