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
      <div className="flex gap-2">
        <button
          onClick={() => choose('accepted')}
          className="flex-1 rounded-lg px-4 py-2.5 text-2xs font-semibold text-white"
          style={{ backgroundColor: '#233889' }}
        >
          {t('cookies.accept')}
        </button>
        <button
          onClick={() => choose('rejected')}
          className="flex-1 rounded-lg bg-gray-100 px-4 py-2.5 text-2xs font-medium text-gray-700 hover:bg-gray-200 transition-colors"
        >
          {t('cookies.reject')}
        </button>
      </div>
    </div>
  );
}
