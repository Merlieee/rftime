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
      className="flex items-center justify-between px-6 py-3 text-sm text-white"
      style={{ backgroundColor: '#2A82CB' }}
    >
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
        className="text-white/70 hover:text-white text-lg leading-none cursor-pointer ml-6"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
