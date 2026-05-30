import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Newspaper, ChevronDown } from 'lucide-react';
import { mediaTV, mediaArticles } from '../data/content';

const PRESS_VISIBLE = 3;

function ArticleCard({ m, t }) {
  return (
    <a
      href={m.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white"
    >
      <Newspaper className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" strokeWidth={2} />
      <span className="flex-1 min-w-0">
        <span className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">{m.title}</span>
        <span className="text-[11px] text-gray-400 mt-0.5 block">{m.outlet}</span>
      </span>
      <span className="text-xs text-black/40 font-medium shrink-0 self-center group-hover:underline">{t('media.read')} →</span>
    </a>
  );
}

export default function MediaSection() {
  const { t } = useTranslation();
  const [pressExpanded, setPressExpanded] = useState(false);

  const tvTitles = t('media.tv', { returnObjects: true });
  const articleTitles = t('media.articles', { returnObjects: true });

  const tv = mediaTV.map((m, i) => ({ ...m, title: tvTitles[i]?.title }));
  const articles = mediaArticles.map((m, i) => ({ ...m, title: articleTitles[i]?.title }));

  const above = articles.slice(0, PRESS_VISIBLE);
  const below = articles.slice(PRESS_VISIBLE);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-6">{t('media.label')}</p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* TV column */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">{t('media.tvHeading')}</p>
            <div className="flex flex-col gap-2">
              {tv.map((m) => (
                <a
                  key={m.url}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: '#0300b4' }}>
                    <Play className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" strokeWidth={0} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-gray-800 leading-snug line-clamp-1">{m.title}</span>
                  </span>
                  <span className="text-xs text-black/40 font-medium shrink-0 group-hover:underline">{t('media.watch')} →</span>
                </a>
              ))}
            </div>
          </div>

          {/* Press column */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">{t('media.pressHeading')}</p>

            <div className="flex flex-col gap-2">
              {above.map((m) => <ArticleCard key={m.url} m={m} t={t} />)}
            </div>

            {below.length > 0 && (
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${pressExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-2 pt-2">
                    {below.map((m) => <ArticleCard key={m.url} m={m} t={t} />)}
                  </div>
                </div>
              </div>
            )}

            {below.length > 0 && (
              <button
                onClick={() => setPressExpanded((v) => !v)}
                className="mt-3 inline-flex items-center gap-1 text-xs text-black/40 font-medium cursor-pointer hover:underline"
              >
                {pressExpanded ? t('media.collapse') : t('media.showMore')}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${pressExpanded ? 'rotate-180' : ''}`}
                  strokeWidth={2}
                />
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
