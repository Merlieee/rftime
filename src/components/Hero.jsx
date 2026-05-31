import { useTranslation } from 'react-i18next';

const RF_GRADIENT = {
  background: 'linear-gradient(135deg, #FF0A94 0%, #1B06AA 38%, #2A82CB 68%, #0CE9C8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-32">

          {/* Left — title */}
          <div className="flex-none mt-[5px]">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#2A82CB' }}>
              {t('hero.date')}
            </p>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none select-none whitespace-nowrap">
              <span style={RF_GRADIENT} className="font-black">RF</span>
              <span className="text-gray-900 font-bold">time 2026</span>
            </h1>
          </div>

          {/* Right — meta + CTAs */}
          <div className="flex-1 flex flex-col gap-5 self-start">

            <p className="text-base text-gray-600 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <p className="text-2xs text-gray-400 font-medium tracking-wide uppercase">
              Rejestracja przez WSzS w Białej Podlaskiej · Udział bezpłatny
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://www.szpitalbp.pl/pl/nauka/konferencje-2013/konferencje-2026/konferencja-kardio-war-abl_2026.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-lg text-white transition-colors"
                style={{ background: '#2A82CB' }}
                onMouseEnter={e => e.currentTarget.style.background = '#2273b5'}
                onMouseLeave={e => e.currentTarget.style.background = '#2A82CB'}
              >
                {t('hero.register')}
              </a>
              <a
                href="#edycje"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-lg transition-colors"
              >
                {t('hero.editions')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
