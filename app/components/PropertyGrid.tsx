import PropertyCard from "./PropertyCard";

import { Property } from "../types/property";

export default function PropertyGrid({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}
