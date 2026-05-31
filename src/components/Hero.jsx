import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="relative z-10">

      <div className="relative max-w-6xl mx-auto px-6 pt-52 pb-24 md:pt-72 md:pb-36 flex flex-col items-start text-left">

        <p className="text-white/80 text-sm font-medium mb-4 tracking-wide">
          {t('hero.date')}
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4 leading-none">
          RFtime 2026
        </h1>

        <p className="text-base md:text-lg text-blue-100/85 mb-7 max-w-2xl leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <p className="mb-8 text-xs text-sky-200/70 font-medium tracking-wide uppercase">
          Rejestracja przez WSzS w Białej Podlaskiej · RODO
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.szpitalbp.pl/pl/nauka/konferencje-2013/konferencje-2026/konferencja-kardio-war-abl_2026.html"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-blue-900 text-sm font-bold px-6 py-3 rounded-lg transition-colors"
          >
            {t('hero.register')}
          </a>
          <a
            href="#edycje"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
          >
            {t('hero.editions')}
          </a>
        </div>

      </div>

    </div>
  );
}
