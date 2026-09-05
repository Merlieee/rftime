import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-3xl w-full mx-auto px-6 py-24 flex-1 flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#233889' }}>404</p>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">{t('notFound.title')}</h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md">{t('notFound.message')}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-lg text-white w-fit transition-colors"
          style={{ background: '#233889' }}
        >
          {t('notFound.home')}
        </Link>
      </div>

      <Footer />
    </div>
  );
}
