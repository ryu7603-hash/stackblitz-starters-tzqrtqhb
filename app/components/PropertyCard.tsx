import Link from "next/link";

import { formatArea, formatPrice } from "../lib/format";
import { Property } from "../types/property";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
        <img
          src={property.image}
          alt={property.title}
          className="w-full aspect-[3/2] object-cover"
        />

        <div className="p-4">
          <h2 className="text-2xl font-bold">{property.city}</h2>

          <h3 className="mt-2 text-lg">{property.title}</h3>

          <p className="text-4xl font-bold text-emerald-700 mt-4">
            {formatPrice(property.price)}
          </p>

          <div className="mt-4 text-gray-600 space-y-1">
            <p>間取り：{property.layout}</p>
            <p>土地：{formatArea(property.land)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
