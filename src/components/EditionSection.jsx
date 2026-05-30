import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SpeakerCard from './SpeakerCard';
import ProgramTable from './ProgramTable';

export default function EditionSection({ edition, date, location, theme, speakers, highlights, program, index, youtubeId }) {
  const [tab, setTab] = useState('speakers');
  const [playing, setPlaying] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      id={`edycja-${edition}`}
      className={`py-16 ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-semibold text-sky-600 uppercase tracking-widest mb-2">
              {index === 0 ? t('edition.secondEdition') : t('edition.firstEdition')}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">RFtime {edition}</h2>
            <p className="text-gray-500 text-sm mt-1">{theme}</p>
          </div>
          <div className="md:border md:border-gray-200 md:rounded-lg md:px-5 md:py-4 md:bg-white text-left md:text-right w-fit md:w-auto shrink-0">
            <p className="text-sm font-semibold text-gray-900">{date}</p>
            <p className="text-xs text-gray-400 mt-1">{location}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-200 rounded-lg p-4 bg-white">
              <Icon className="w-4 h-4 text-sky-600 mb-2" strokeWidth={1.75} />
              <p className="text-sm font-semibold text-gray-900">{label}</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {['speakers', 'program'].map((tab_key) => (
            <button
              key={tab_key}
              onClick={() => setTab(tab_key)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer ${
                tab === tab_key
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab_key === 'speakers' ? t('edition.tabSpeakers') : t('edition.tabProgram')}
            </button>
          ))}
        </div>

        {tab === 'speakers' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {speakers.map((s) => <SpeakerCard key={s.name} speaker={s} />)}
          </div>
        )}
        {tab === 'program' && <ProgramTable program={program} />}

        {youtubeId && (
          <div className="mt-10 pt-8 flex flex-col items-center text-center">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-5">
              {t('edition.recordingsHeading')}
            </h3>
            <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-sm border border-gray-200">
              {playing ? (
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                    title={`RFtime ${edition}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="relative aspect-video w-full block group cursor-pointer"
                  aria-label={`Play RFtime ${edition}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                    alt={`RFtime ${edition}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-sky-700 transition-colors">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>
            <a
              href="https://www.youtube.com/@rftime"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gray-500 hover:underline font-medium"
            >
              {t('edition.seeMore')} →
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
