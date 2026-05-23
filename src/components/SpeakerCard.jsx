export default function SpeakerCard({ speaker }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-sky-200 transition-all">
      <div
        className="aspect-square bg-cover bg-top"
        style={{ backgroundImage: `url(${speaker.photo})` }}
      />
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm">{speaker.name}</p>
        <p className="text-xs text-sky-600 font-medium mt-0.5">{speaker.title}</p>
        <p className="text-xs text-gray-400 mt-0.5 mb-3">{speaker.location}</p>
        <ul className="space-y-1.5">
          {speaker.talks.map((t, i) => (
            <li key={i} className="text-xs text-gray-500 leading-snug flex gap-2">
              <span className="text-sky-500 shrink-0 mt-0.5">—</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
