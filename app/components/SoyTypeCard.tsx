import { SoyType } from "../data/soy";

export default function SoyTypeCard({ type }: { type: SoyType }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-3">
        <span className={`w-8 h-8 rounded-full ${type.color}`} />
        <div>
          <p className="text-xs text-gray-500">{type.reading}</p>
          <h3 className="text-xl font-bold">{type.name}</h3>
        </div>
      </div>

      <p className="mt-4 text-gray-700">{type.taste}</p>
      <p className="mt-2 text-sm text-gray-500">{type.region}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {type.goodFor.map((dish) => (
          <span key={dish} className="text-xs bg-amber-100 text-amber-900 rounded-full px-3 py-1">
            {dish}
          </span>
        ))}
      </div>
    </div>
  );
}
