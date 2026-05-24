import { Activity, Radio, Mic, Users, Cpu, Calendar } from 'lucide-react';

const programItems = [
  { icon: Activity, label: '5 zabiegów live',        desc: 'Wykonywanych w pracowni przez doświadczonych elektrofizjologów z różnymi technologiami ablacji.' },
  { icon: Radio,    label: '1–2 transmisje z Europy', desc: 'Zabiegi live z partnerskich ośrodków europejskich — połączenia wieloośrodkowe w czasie rzeczywistym.' },
  { icon: Mic,      label: '4–5 wykładów eksperckich', desc: 'Prelekcje zaproszonych specjalistów z czołowych ośrodków kardiologicznych.' },
  { icon: Users,    label: 'Prezentacje przypadków',   desc: 'Ciekawe przypadki i zabiegi EP przygotowane przez uczestników warsztatów.' },
  { icon: Cpu,      label: 'Symulatory EP',            desc: 'Nakłucie transeptalne, nakłucie epikardialne i wirtualna ablacja na symulatorach wysokiej wierności.' },
];

const schedule = [
  {
    day: 'Czwartek',
    date: '29 października 2026',
    items: [
      { time: '8:30',  label: 'Rozpoczęcie warsztatów' },
      { time: '19:00', label: 'Zakończenie sesji' },
      { time: '21:00', label: 'Nocne Spotkanie EP — Uroczysko Zaborek' },
    ],
  },
  {
    day: 'Piątek',
    date: '30 października 2026',
    items: [
      { time: '9:00',  label: 'Rozpoczęcie warsztatów' },
      { time: '15:00', label: 'Planowane zakończenie' },
    ],
  },
];

export default function ProgramAnnouncement() {
  return (
    <section className="bg-white border-b border-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-3">RFtime 2026 · 29–30 października</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Program warsztatów</h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl">
            Kolejna edycja RFtime odbędzie się w WSS Biała Podlaska. W programie zabiegi live wykonywane różnymi
            technologiami — RF, PFA (TactiFlex Duo, Volt, Affera) — transmisje z europejskich ośrodków, wykłady
            eksperckie, prezentacje przypadków oraz sesje na symulatorach EP. Przyjazd możliwy już od środy wieczorem.
          </p>
        </div>

        {/* Program grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {programItems.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-200 rounded-lg p-5 hover:border-sky-200 hover:shadow-sm transition-all">
              <Icon className="w-4 h-4 text-sky-600 mb-3" strokeWidth={1.75} />
              <p className="text-sm font-semibold text-gray-900 mb-1">{label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-gray-900 mb-5 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-600" strokeWidth={1.75} />
            Plan organizacyjny
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {schedule.map(({ day, date, items }) => (
              <div key={day} className="border border-gray-200 rounded-lg p-6">
                <p className="text-sm font-bold text-gray-900">{day}</p>
                <p className="text-xs text-gray-400 mb-5">{date}</p>
                <ul className="space-y-3">
                  {items.map(({ time, label }) => (
                    <li key={time} className="flex items-start gap-3">
                      <span className="font-mono text-sky-600 text-xs pt-px shrink-0 w-10">{time}</span>
                      <span className="text-sm text-gray-600">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-sky-50 border border-sky-100 rounded-lg p-5">
            <p className="text-sm font-semibold text-sky-900 mb-1">Udział bezpłatny</p>
            <p className="text-xs text-sky-800 leading-relaxed">
              Warsztaty są całkowicie bezpłatne. Kolacja (Nocne Spotkanie EP) jest bezpłatna dla wykładowców
              i osób prezentujących przypadki; koszt dla pozostałych uczestników jest w trakcie ustalania.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
            <p className="text-sm font-semibold text-amber-900 mb-1">Ograniczona liczba miejsc</p>
            <p className="text-xs text-amber-800 leading-relaxed">
              Liczba miejsc na sali wykładowej oraz miejsc noclegowych jest ograniczona.
              O udziale decyduje kolejność zgłoszeń.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
