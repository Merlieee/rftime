import { Video, Globe, Activity, BadgeCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Video, Globe, Activity, BadgeCheck];

export default function About() {
  const { t } = useTranslation();
  const pillars = t('about.pillars', { returnObjects: true });

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">

        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-3">{t('about.label')}</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5 tracking-tight">{t('about.heading')}</h2>
            <p className="text-gray-500 leading-relaxed mb-4">{t('about.p1')}</p>
            <p className="text-gray-500 leading-relaxed mb-6">{t('about.p2')}</p>
            <blockquote className="border-l-2 border-sky-500 pl-4 text-gray-600 italic text-sm leading-relaxed">
              {t('about.quote')}
              <footer className="mt-2 text-2xs text-gray-400 not-italic font-medium">
                {t('about.quoteAuthor')}
              </footer>
            </blockquote>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-stretch h-full">
            {pillars.map(({ label, desc }, i) => {
              const Icon = icons[i];
              return (
                <div key={label} className="bg-white border border-gray-200 rounded-lg p-5">
                  <Icon className="w-5 h-5 text-sky-600 mb-3" strokeWidth={1.75} />
                  <p className="font-semibold text-gray-900 text-sm mb-1">{label}</p>
                  <p className="text-2xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
