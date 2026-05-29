import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center">

        <p className="text-sm font-medium text-sky-600 mb-4">
          {t('hero.date')}
        </p>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">
          RFtime 2026
        </h1>

        <p className="text-base text-gray-500 mb-3 max-w-xl leading-relaxed text-balance">
          {t('hero.subtitle')}
        </p>

        <p className="text-xs text-gray-400 mb-8">
          {t('hero.note')}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.szpitalbp.pl/pl/nauka/konferencje-2013/konferencje-2026/konferencja-kardio-war-abl_2026.html"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            {t('hero.register')}
          </a>
          <a
            href="#edycje"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
          >
            {t('hero.editions')}
          </a>
        </div>

      </div>
    </div>
  );
}
