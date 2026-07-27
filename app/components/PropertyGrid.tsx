import PropertyCard from "./PropertyCard";

type Property = {
  city: string;
  title: string;
  price: number;
  layout: string;
  land: number;
};

export default function PropertyGrid({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          property={property}
        />
      ))}
    </div>
  );
}