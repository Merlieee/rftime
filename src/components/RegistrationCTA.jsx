import { useTranslation } from 'react-i18next';

export default function RegistrationCTA() {
  const { t } = useTranslation();
  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FF0A94 0%, #1B06AA 38%, #2A82CB 68%, #0CE9C8 100%)',
      }}
    >
      {/* Line-art pattern scraped from rftime.pl — same as the hero, bookending the page. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-no-repeat opacity-85"
        style={{ backgroundImage: 'url(/hero-pattern.png)', backgroundSize: '100% auto', backgroundPosition: 'center 35%' }}
      />

      {/* Darkening scrim — gentle, even, for centered text legibility. Gradient untouched underneath. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,6,40,0.16) 0%, rgba(8,6,40,0.05) 50%, rgba(8,6,40,0.16) 100%)',
        }}
      />

      {/* Fine grain — matches the hero's editorial surface. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black tracking-tight text-white mb-4 max-w-2xl">
          {t('cta.heading')}
        </h2>

        <p className="text-white/85 leading-relaxed max-w-xl mb-10">
          {t('cta.desc')}
        </p>

        <a
          href="https://www.szpitalbp.pl/pl/nauka/konferencje-2013/konferencje-2026/konferencja-kardio-war-abl_2026.html"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-lg transition-colors"
          style={{ background: 'white', color: '#233889' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.88)'}
          onMouseLeave={e => e.currentTarget.style.background = 'white'}
        >
          {t('cta.button')}
        </a>

        <p className="text-2xs text-white/45 font-medium tracking-wide mt-3">
          {t('cta.note')}
        </p>
      </div>
    </section>
  );
}
