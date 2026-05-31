import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mediaTV, mediaArticles } from '../data/content';

const INITIAL_VISIBLE = 3;

function MediaRow({ item }) {
  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group flex items-center gap-6 py-6"
      >
        <span className="flex-1 min-w-0">
          <span className="text-base font-medium text-gray-900 leading-snug line-clamp-1">{item.title}</span>
        </span>
        <span className="text-sm text-gray-400 shrink-0 hidden md:block">{item.outlet}</span>
        <span className="text-sm font-medium text-sky-600 shrink-0 whitespace-nowrap flex items-center gap-1 group-hover:underline">
          {item.cta} →
        </span>
      </a>
    </li>
  );
}

export default function MediaSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const tvTitles = t('media.tv', { returnObjects: true });
  const articleTitles = t('media.articles', { returnObjects: true });

  const tv = mediaTV.map((m, i) => ({
    ...m,
    title: tvTitles[i]?.title,
    cta: t('media.watch'),
  }));
  const articles = mediaArticles.map((m, i) => ({
    ...m,
    title: articleTitles[i]?.title,
    cta: t('media.read'),
  }));

  const all = [...tv, ...articles];
  const above = all.slice(0, INITIAL_VISIBLE);
  const below = all.slice(INITIAL_VISIBLE);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">

        <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-10">{t('media.label')}</p>

        <ul className="divide-y divide-gray-100">
          {above.map((item) => <MediaRow key={item.url} item={item} />)}
        </ul>

        {below.length > 0 && (
          <>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <ul className="divide-y divide-gray-100 border-t border-gray-100">
                  {below.map((item) => <MediaRow key={item.url} item={item} />)}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-1 w-full flex items-center justify-center gap-2 py-4 border-t border-gray-100 text-sm font-medium text-gray-400 hover:underline cursor-pointer"
            >
              {expanded ? t('media.collapse') : t('media.showMore')}&nbsp;&nbsp;{expanded ? '↑' : '↓'}
            </button>
          </>
        )}

      </div>
    </section>
  );
}
