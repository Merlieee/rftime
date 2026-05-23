import { Video, Globe, Activity, BadgeCheck } from 'lucide-react';

const pillars = [
  { icon: Video,       label: 'Zabiegi na żywo',    desc: 'Transmisje ablacji z sali zabiegowej, w tym połączenia wieloośrodkowe z Barceloną, USA i Niemcami.' },
  { icon: Globe,       label: 'Eksperci z całego świata', desc: 'Zapraszani specjaliści z czołowych ośrodków kardiologicznych na 3 kontynentach.' },
  { icon: Activity,    label: 'Gęste mapowanie 3D',  desc: 'Celowana ablacja RF oparta na mapowaniu substratu — czysta elektrofizjologia z najnowszą technologią.' },
  { icon: BadgeCheck,  label: 'Udział bezpłatny',    desc: 'Warsztaty w pełni bezpłatne dla wszystkich zarejestrowanych uczestników.' },
];

export default function About() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-3">O warsztatach</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5 tracking-tight">Czym jest RFtime?</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              RFtime to platforma spotkań i wymiany doświadczeń elektrofizjologów zajmujących się gęstym mapowaniem 3D
              i punktowymi ablacjami RF/PFA, założona przez dr. hab. Macieja Wójcika z UM Lublin.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Każda edycja łączy operatorów i wykładowców z całego świata z uczestnikami na różnych etapach kariery —
              od studentów medycyny po doświadczonych elektrofizjologów.
            </p>
            <blockquote className="border-l-2 border-sky-500 pl-4 text-gray-600 italic text-sm leading-relaxed">
              „Wracamy do analizy sygnałów elektrycznych serca zakodowanych w mapach 3D i celowanej ablacji
              — czystej elektrofizjologii z najnowszą technologią."
              <footer className="mt-2 text-xs text-gray-400 not-italic font-medium">
                Dr hab. n. med. Maciej Wójcik
              </footer>
            </blockquote>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-2 gap-4 content-stretch h-full">
            {pillars.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-lg p-5 hover:border-sky-200 hover:shadow-sm transition-all">
                <Icon className="w-5 h-5 text-sky-600 mb-3" strokeWidth={1.75} />
                <p className="font-semibold text-gray-900 text-sm mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
