import { affiliates, AffiliateId } from "../data/affiliates";

export default function AffiliateBox({ ids }: { ids: AffiliateId[] }) {
  const offers = ids.map((id) => affiliates[id]).filter((o) => o.url);

  if (offers.length === 0) {
    return null;
  }

  return (
    <aside className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
      <p className="text-xs text-amber-700 font-bold mb-4">
        PR・広告を含みます
      </p>

      <div className="space-y-4">
        {offers.map((offer) => (
          <div key={offer.id}>
            <h3 className="font-bold text-lg">{offer.label}</h3>
            <p className="text-gray-700 text-sm mt-1">{offer.description}</p>
            <a
              href={offer.url}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-block mt-3 bg-amber-500 text-white font-bold px-5 py-2 rounded-lg hover:bg-amber-600"
            >
              {offer.cta}
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}
