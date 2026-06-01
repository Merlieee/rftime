import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const sections = t('privacyPage.sections', { returnObjects: true });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-3xl w-full mx-auto px-6 pt-10">
        <Link to="/" className="text-2xs text-gray-500 hover:underline w-fit">
          ← {t('privacyPage.back')}
        </Link>
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 py-12 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
          {t('privacyPage.title')}
        </h1>
        <p className="text-2xs text-gray-400 mb-12">{t('privacyPage.updated')}</p>

        <div className="space-y-10">
          {sections.map((section, i) => {
            const isLast = i === sections.length - 1;
            return (
              <section key={i}>
                <h2
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#233889' }}
                >
                  {section.heading}
                </h2>
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className={`text-sm text-gray-600 leading-relaxed ${isLast ? 'mb-0.5' : 'mb-3'}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
