import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'rftime-cookie-consent';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [decided, setDecided] = useState(
    () => localStorage.getItem(STORAGE_KEY) != null
  );

  if (decided) return null;

  const choose = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setDecided(true);
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-xl border border-gray-200 bg-white p-5 shadow-[0_2px_8px_rgba(17,24,39,0.06),0_12px_32px_rgba(17,24,39,0.12)]"
      role="dialog"
      aria-live="polite"
      aria-label={t('cookies.title')}
    >
      <p className="text-2xs font-semibold mb-1.5" style={{ color: '#233889' }}>
        {t('cookies.title')}
      </p>
      <p className="text-2xs text-gray-500 leading-relaxed mb-4">
        {t('cookies.message')}{' '}
        <Link
          to="/polityka-prywatnosci"
          className="font-medium underline underline-offset-2"
          style={{ color: '#233889' }}
        >
          {t('cookies.privacy')}
        </Link>
      </p>
      {/* Informational, not a consent request. The site stores only the chosen language
          and this dismissal — functional storage that art. 173 PKE exempts from consent,
          which is what the privacy policy §3 states. An Accept/Reject pair used to sit
          here, but "Reject" changed nothing: asking for consent and ignoring the answer
          is worse than not asking. If legal review decides consent IS required, the fix
          is to make rejection actually suppress the language preference, not to restore
          a decorative button. */}
      <button
        onClick={() => choose('acknowledged')}
        className="w-full rounded-lg px-4 py-2.5 text-2xs font-semibold text-white transition-colors"
        style={{ backgroundColor: '#233889' }}
      >
        {t('cookies.ok')}
      </button>
    </div>
  );
}
