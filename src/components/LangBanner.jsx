import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setLang, isPolishUser } from '../i18n/index.js';

export default function LangBanner() {
  const { t, i18n } = useTranslation();
  const [dismissed, setDismissed] = useState(false);

  // Show only when: user has Polish browser settings AND is currently viewing English
  if (dismissed || !isPolishUser() || i18n.language !== 'en') return null;

  return (
    <div
      className="py-3 text-sm"
      style={{ backgroundColor: 'white', color: '#233889' }}
    >
    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
      <span>
        {t('banner.message')}{' '}
        <button
          onClick={() => setLang('pl')}
          className="font-semibold underline underline-offset-2 cursor-pointer"
        >
          {t('banner.switch')}
        </button>
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="text-lg leading-none cursor-pointer ml-6 opacity-70 hover:opacity-100"
        style={{ color: '#233889' }}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
    </div>
  );
}
