import Link from "next/link";

type Property = {
  id: number;
  city: string;
  title: string;
  price: number;
  layout: string;
  land: number;
};

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">

        <img
          src="https://placehold.co/600x400"
          alt={property.title}
          className="w-full"
        />

        <div className="p-4">

          <h2 className="text-2xl font-bold">
            {property.city}
          </h2>

          <h3 className="mt-2 text-lg">
            {property.title}
          </h3>

          <p className="text-4xl font-bold text-emerald-700 mt-4">
            {property.price}万円
          </p>

          <div className="mt-4 text-gray-600 space-y-1">
            <p>間取り：{property.layout}</p>
            <p>土地：{property.land}㎡</p>
          </div>

        </div>

      </div>
    </Link>
  );
}