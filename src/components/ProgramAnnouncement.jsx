import { Activity, Radio, Mic, Users, Cpu, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const itemIcons = [Activity, Radio, Mic, Users, Cpu];

export default function ProgramAnnouncement() {
  const { t } = useTranslation();
  const items = t('program.items', { returnObjects: true });
  const schedule = t('program.schedule', { returnObjects: true });

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-3">{t('program.label')}</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">{t('program.heading')}</h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl">{t('program.intro')}</p>
        </div>

        {/* Program grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {items.map(({ label, desc }, i) => {
            const Icon = itemIcons[i];
            return (
              <div key={label} className="border border-gray-200 rounded-lg p-5">
                <Icon className="w-4 h-4 text-sky-600 mb-3" strokeWidth={1.75} />
                <p className="text-sm font-semibold text-gray-900 mb-1">{label}</p>
                <p className="text-2xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

        {/* Schedule */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-gray-900 mb-5 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-600" strokeWidth={1.75} />
            {t('program.scheduleHeading')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {schedule.map(({ day, date, items: dayItems }) => (
              <div key={day} className="border border-gray-200 rounded-lg p-6">
                <p className="text-sm font-bold text-gray-900">{day}</p>
                <p className="text-2xs text-gray-400 mb-5">{date}</p>
                <ul className="space-y-3">
                  {dayItems.map(({ time, label }) => (
                    <li key={time} className="flex items-start gap-3">
                      <span className="font-mono text-sky-600 text-2xs pt-px shrink-0 w-10">{time}</span>
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
            <p className="text-sm font-semibold text-sky-900 mb-1">{t('program.freeTitle')}</p>
            <p className="text-2xs text-sky-800 leading-relaxed">{t('program.freeDesc')}</p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
            <p className="text-sm font-semibold text-amber-900 mb-1">{t('program.limitedTitle')}</p>
            <p className="text-2xs text-amber-800 leading-relaxed">{t('program.limitedDesc')}</p>
          </div>
        </div>

        <p className="text-2xs text-gray-400 mt-8">{t('program.footnote')}</p>

      </div>
    </section>
  );
}
