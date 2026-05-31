import { useTranslation } from 'react-i18next';
import { setLang } from '../i18n/index.js';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

export default function Footer() {
  const { t, i18n } = useTranslation();
  const navLinks = t('footer.navLinks', { returnObjects: true });

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <p className="text-white font-semibold text-lg mb-2">RFtime</p>
          <p className="text-gray-400 leading-relaxed mb-4">
            {t('footer.tagline')}<br />
            {t('footer.location')}
          </p>
          <p className="text-gray-500 text-2xs leading-relaxed mb-4">
            +48 513 874 782<br />
            Pracownia Elektrofizjologii i Elektrostymulacji Serca<br />
            WSzS w Białej Podlaskiej<br />
            ul. Terebelska 57-65, 21-500 Biała Podlaska
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/RFtimepl" target="_blank" rel="noopener noreferrer nofollow"
              className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/rftime.pl/" target="_blank" rel="noopener noreferrer nofollow"
              className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@rftime" target="_blank" rel="noopener noreferrer nofollow"
              className="text-gray-500 hover:text-white transition-colors" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="text-gray-300 font-medium mb-3 text-xs uppercase tracking-widest">{t('footer.navLabel')}</p>
          <div className="space-y-2">
            {navLinks.map(({ href, label }) => (
              <a key={label} href={href} className="block text-gray-400 hover:text-white transition-colors">{label}</a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-300 font-medium mb-3 text-xs uppercase tracking-widest">{t('footer.prevLabel')}</p>
          <div className="space-y-2">
            {[
              ['https://rftime.pl/rftime-2024/', 'RFtime 2024'],
              ['https://rftime.pl/rftime-2025/program-rftime-2025/', 'RFtime 2025'],
              ['https://rftime.pl', 'rftime.pl'],
            ].map(([href, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer nofollow" className="block text-gray-400 hover:text-white transition-colors">{label} ↗</a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mt-10 pt-6 border-t border-gray-800 text-2xs text-gray-600 flex justify-between flex-wrap gap-2 items-center">
        <span>{t('footer.copyright')}</span>
        <div className="flex items-center gap-4">
          <span>{t('footer.hospital')}</span>
          <button
            onClick={() => setLang(i18n.language === 'pl' ? 'en' : 'pl')}
            className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
          >
            {t('footer.langButton')}
          </button>
        </div>
      </div>
    </footer>
  );
}
