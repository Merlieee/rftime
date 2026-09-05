import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

// Body blocks are either a plain string (paragraph), { ul: [...] } or { ol: [...] }.
// Inline markup is limited to **bold** and [label](url) — enough for a legal document,
// and it keeps the source in i18n readable next to the Markdown original in docs/.
const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function Inline({ text }) {
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(m[1] !== undefined
      ? <strong key={m.index} className="font-semibold text-gray-800">{m[1]}</strong>
      : <a key={m.index} href={m[3]} target="_blank" rel="noopener noreferrer"
           className="font-medium underline underline-offset-2" style={{ color: '#233889' }}>{m[2]}</a>
    );
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}

const listItem = 'text-sm text-gray-600 leading-relaxed';

function Block({ block }) {
  if (typeof block === 'string') {
    return <p className="text-sm text-gray-600 leading-relaxed mb-3"><Inline text={block} /></p>;
  }
  if (block.ul) {
    return (
      <ul className="list-disc pl-5 space-y-1.5 mb-3 marker:text-gray-400">
        {block.ul.map((item, i) => <li key={i} className={listItem}><Inline text={item} /></li>)}
      </ul>
    );
  }
  // An ordered item is either a string, or { text, ul } when the clause opens a
  // sub-list — the numbering has to keep running across those.
  if (block.ol) {
    return (
      <ol className="list-decimal pl-5 space-y-2 mb-3 marker:text-gray-400">
        {block.ol.map((item, i) => (
          <li key={i} className={listItem}>
            <Inline text={typeof item === 'string' ? item : item.text} />
            {item.ul && (
              <ul className="list-disc pl-5 mt-1.5 space-y-1.5 marker:text-gray-400">
                {item.ul.map((sub, j) => <li key={j}><Inline text={sub} /></li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    );
  }
  return null;
}

// One layout for both legal pages; `ns` picks which i18n block to render.
export default function LegalPage({ ns }) {
  const { t } = useTranslation();
  const sections = t(`${ns}.sections`, { returnObjects: true });
  const lead = t(`${ns}.lead`, { defaultValue: '' });
  const note = t(`${ns}.note`, { defaultValue: '' });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-3xl w-full mx-auto px-6 pt-10">
        <Link to="/" className="text-2xs text-gray-500 hover:underline w-fit">
          ← {t(`${ns}.back`)}
        </Link>
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 py-12 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
          {t(`${ns}.title`)}
        </h1>
        <p className="text-2xs text-gray-400 mb-8">{t(`${ns}.updated`)}</p>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">{t(`${ns}.intro`)}</p>

        {/* The one pointer a reader needs before the clauses — where the data actually
            lives, or where to sign up — so it sits above the fold, boxed. */}
        {lead && (
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed"><Inline text={lead} /></p>
          </div>
        )}

        {note && (
          <p className="text-2xs text-gray-500 leading-relaxed mb-10 border-l-2 border-gray-200 pl-4">
            {note}
          </p>
        )}

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#233889' }}>
                {section.heading}
              </h2>
              {section.body.map((block, j) => <Block key={j} block={block} />)}
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
