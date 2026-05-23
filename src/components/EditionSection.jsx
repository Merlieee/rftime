import { useState } from 'react';
import SpeakerCard from './SpeakerCard';
import ProgramTable from './ProgramTable';

export default function EditionSection({ edition, date, location, theme, speakers, highlights, program, index }) {
  const [tab, setTab] = useState('speakers');

  return (
    <section
      id={`edycja-${edition}`}
      className={`py-16 border-b border-gray-200 ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-semibold text-sky-600 uppercase tracking-widest mb-2">
              Edycja {index === 0 ? 'pierwsza' : 'druga'}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">RFtime {edition}</h2>
            <p className="text-gray-500 text-sm mt-1">{theme}</p>
          </div>
          <div className="border border-gray-200 rounded-lg px-5 py-4 bg-white text-right shrink-0">
            <p className="text-sm font-semibold text-gray-900">{date}</p>
            <p className="text-xs text-gray-400 mt-1">{location}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-200 rounded-lg p-4 bg-white hover:border-sky-200 transition-colors">
              <Icon className="w-4 h-4 text-sky-600 mb-2" strokeWidth={1.75} />
              <p className="text-sm font-semibold text-gray-900">{label}</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {['speakers', 'program'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t === 'speakers' ? 'Prelegenci' : 'Program'}
            </button>
          ))}
        </div>

        {tab === 'speakers' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {speakers.map((s) => <SpeakerCard key={s.name} speaker={s} />)}
          </div>
        )}
        {tab === 'program' && <ProgramTable program={program} />}
      </div>
    </section>
  );
}
