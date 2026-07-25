import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-[72vh] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #FF0A94 0%, #1B06AA 38%, #2A82CB 68%, #0CE9C8 100%)',
      }}
    >
      {/* Line-art pattern scraped from rftime.pl — split in two: left half drops down, right half rises up. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none bg-no-repeat opacity-85"
        style={{ backgroundImage: 'url(/hero-pattern.png)', backgroundSize: '200% auto', backgroundPosition: 'left 0%' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none bg-no-repeat opacity-85"
        style={{ backgroundImage: 'url(/hero-pattern.png)', backgroundSize: '200% auto', backgroundPosition: 'right 100%' }}
      />

      {/* Darkening scrim — symmetric, for centered text legibility. Gradient untouched underneath. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,6,40,0.22) 0%, rgba(8,6,40,0.06) 45%, rgba(8,6,40,0.22) 100%)',
        }}
      />

      {/* Fine grain — flips flat neon into an editorial, intentional surface. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-8 lg:px-12 py-16 flex flex-col items-center text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4">
          {t('hero.dateShort')}
        </p>

        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-white mb-6 select-none">
          RFtime 2026
        </h1>

        <p className="text-lg text-white/85 leading-relaxed mb-5 whitespace-pre-line">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {t('hero.topics', { returnObjects: true }).map(topic => (
            <span
              key={topic}
              className="text-xs font-medium tracking-wide text-white/75 border border-white/25 rounded-full px-3.5 py-1.5"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <a
            href="https://www.szpitalbp.pl/pl/nauka/konferencje-2013/konferencje-2026/konferencja-kardio-war-abl_2026.html"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-lg transition-colors"
            style={{ background: 'white', color: '#233889' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.88)'}
            onMouseLeave={e => e.currentTarget.style.background = 'white'}
          >
            {t('hero.register')}
          </a>
          <a
            href="#edycje"
            className="inline-flex items-center gap-2 border border-white/50 text-white text-sm font-medium px-7 py-3.5 rounded-lg transition-colors hover:border-white hover:bg-white/10"
          >
            {t('hero.editions')}
          </a>
        </div>
      </div>
    </section>
  );
}
