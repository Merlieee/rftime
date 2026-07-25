import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SpeakerCard from './SpeakerCard';
import ProgramTable from './ProgramTable';

const COLLAPSED_HEIGHT = 448; // ~28rem preview

export default function EditionSection({ edition, date, location, theme, speakers, highlights, program, index, youtubeId, youtubeListId, editionLabel }) {
  const [tab, setTab] = useState('program');
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [scheduleMaxH, setScheduleMaxH] = useState(COLLAPSED_HEIGHT);
  const [playing, setPlaying] = useState(false);
  const scheduleRef = useRef(null);
  const sectionBg = index % 2 === 0 ? 'from-gray-50' : 'from-white';
  const { t } = useTranslation();

  // Animate max-height between the collapsed preview and the measured full height,
  // the same smooth reveal as the media section's "show more" CTA.
  const toggleSchedule = () => {
    const full = scheduleRef.current?.scrollHeight ?? COLLAPSED_HEIGHT;
    if (scheduleOpen) {
      setScheduleMaxH(full);
      requestAnimationFrame(() => setScheduleMaxH(COLLAPSED_HEIGHT));
      setScheduleOpen(false);
    } else {
      setScheduleMaxH(full);
      setScheduleOpen(true);
    }
  };

  const tabLabels = {
    speakers: t('edition.tabSpeakers'),
    scientific: t('committee.scientificTab'),
    organizing: t('committee.organizingTab'),
    organizer: t('organizer.label'),
    program: t('edition.tabProgram'),
  };

  // Scientific committee = this edition's faculty, chaired by Maciej Wójcik.
  // Organizing committee is fixed across editions (from i18n).
  const scientificMembers = speakers.map((s) => ({ name: s.name, title: s.title }));
  const organizingMembers = t('committee.organizing', { returnObjects: true });

  return (
    <section
      id={`edycja-${edition}`}
      className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-semibold text-sky-600 uppercase tracking-widest mb-2">
              {editionLabel ?? (index === 0 ? t('edition.secondEdition') : t('edition.firstEdition'))}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">RFtime {edition}</h2>
            <p className="text-gray-500 text-sm mt-1">{theme}</p>
          </div>
          <div className="md:border md:border-gray-200 md:rounded-lg md:px-5 md:py-4 md:bg-white text-left md:text-right w-fit md:w-auto shrink-0">
            <p className="text-sm font-semibold text-gray-900">{date}</p>
            <p className="text-2xs text-gray-400 mt-1">{location}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-200 rounded-lg p-4 bg-white">
              <Icon className="w-4 h-4 text-sky-600 mb-2" strokeWidth={1.75} />
              <p className="text-sm font-semibold text-gray-900">{label}</p>
              <p className="text-2xs text-gray-400 mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          {['program', 'speakers', 'scientific', 'organizing', 'organizer'].map((tab_key) => (
            <button
              key={tab_key}
              onClick={() => setTab(tab_key)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer ${
                tab === tab_key
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tabLabels[tab_key]}
            </button>
          ))}
        </div>

        {tab === 'speakers' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {speakers.map((s) => <SpeakerCard key={s.name} speaker={s} />)}
          </div>
        )}
        {tab === 'scientific' && <CommitteeList members={scientificMembers} chairName="Maciej Wójcik" chairLabel={t('committee.chair')} />}
        {tab === 'organizing' && <CommitteeList members={organizingMembers} chairIndex={0} chairLabel={t('committee.chair')} />}
        {tab === 'program' && (
          <div>
            <div
              className="relative overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: scheduleMaxH === 'none' ? 'none' : `${scheduleMaxH}px` }}
              onTransitionEnd={() => { if (scheduleOpen) setScheduleMaxH('none'); }}
            >
              <div ref={scheduleRef}>
                <ProgramTable program={program} />
              </div>
              {!scheduleOpen && (
                <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${sectionBg} to-transparent pointer-events-none`} />
              )}
            </div>
            <button
              onClick={toggleSchedule}
              className="mt-1 w-full flex items-center justify-center gap-2 py-4 border-t border-gray-100 text-sm font-medium text-gray-400 hover:underline cursor-pointer"
            >
              {scheduleOpen ? t('edition.scheduleCollapse') : t('edition.scheduleExpand')}&nbsp;&nbsp;{scheduleOpen ? '↑' : '↓'}
            </button>
          </div>
        )}
        {tab === 'organizer' && (
          <div className="flex flex-col sm:flex-row sm:items-stretch gap-8 sm:gap-16 rounded-2xl border border-gray-200 bg-white p-8">
            <div>
              <h3 className="font-semibold text-gray-900 text-base">{t('organizer.name')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('organizer.hospital')}</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-4">{t('organizer.desc')}</p>
            </div>
            <div className="flex items-center justify-center sm:w-96 shrink-0">
              <img
                src="/szpital-logo.webp"
                alt={t('organizer.hospital')}
                className="h-32 sm:h-full max-h-full w-auto object-contain"
              />
            </div>
          </div>
        )}

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
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1${youtubeListId ? `&list=${youtubeListId}` : ''}`}
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
                    className="w-full h-full object-cover scale-[1.02]"
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

// Plain name list shared by the Scientific and Organizing committee tabs.
// Chair is flagged either by name (scientific) or by index (organizing).
function CommitteeList({ members, chairName, chairIndex, chairLabel }) {
  return (
    <ul className="rounded-2xl border border-gray-200 bg-white divide-y divide-gray-100">
      {members.map((m, i) => {
        const isChair = m.name === chairName || i === chairIndex;
        return (
          <li key={m.name} className="flex items-center justify-between gap-4 px-6 py-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">{m.name}</p>
              <p className="text-2xs text-sky-600 font-medium mt-0.5">{m.title}</p>
            </div>
            {isChair && (
              <span className="shrink-0 text-2xs font-semibold text-sky-600 uppercase tracking-widest">
                {chairLabel}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
