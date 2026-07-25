export default function SpeakerCard({ speaker }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div
        className="aspect-square bg-cover bg-top"
        style={{ backgroundImage: `url(${speaker.photo})` }}
      />
      <div className="p-4">
        <p className="font-semibold text-gray-900 text-sm">{speaker.name}</p>
        <p className="text-2xs text-sky-600 font-medium mt-0.5">{speaker.title}</p>
        <div className="mt-0.5">
          {(Array.isArray(speaker.location) ? speaker.location : [speaker.location]).map((line, i) => (
            <p key={i} className="text-2xs text-gray-400 leading-snug">{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
