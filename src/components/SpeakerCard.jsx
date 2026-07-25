import { useTranslation } from 'react-i18next';

export default function SpeakerCard({ speaker }) {
  const { t } = useTranslation();
  const affiliations = Array.isArray(speaker.location) ? speaker.location : [speaker.location];
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <img
        src={speaker.photo}
        alt={`${speaker.name} — ${t('edition.speakerAlt')}`}
        loading="lazy"
        decoding="async"
        className="aspect-square w-full object-cover object-top"
      />
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm">{speaker.name}</p>
        <p className="text-2xs text-sky-600 font-medium mt-0.5">{speaker.title}</p>
        {affiliations.length > 1 ? (
          <ul className="mt-1 space-y-0.5">
            {affiliations.map((line, i) => (
              <li key={i} className="text-2xs text-gray-400 leading-snug flex gap-1.5">
                <span className="shrink-0 text-gray-300">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 text-2xs text-gray-400 leading-snug">{affiliations[0]}</p>
        )}
      </div>
    </div>
  );
}
