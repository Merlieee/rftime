export default function ProgramTable({ program }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {program.map((day) => (
        <div key={day.day} className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-700">{day.day}</p>
          </div>
          <div className="divide-y divide-gray-100">
            {day.items.map((item, i) => (
              <div key={i} className="px-4 py-3 flex gap-4">
                <span className="text-2xs text-gray-400 shrink-0 w-24 pt-0.5 font-medium tabular-nums">{item.time}</span>
                <div>
                  <p className="text-sm text-gray-800 leading-snug">{item.title}</p>
                  {item.speaker && <p className="text-2xs text-gray-400 mt-0.5">{item.speaker}</p>}
                  {item.note && <p className="text-2xs text-gray-500 mt-2 leading-relaxed border-l-2 border-gray-200 pl-3">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
