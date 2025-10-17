import React from "react";
import type { Property } from "../../features/listings/types";
import ListingCard from "./ListingCard";
import "../../styles/listings.css";
import EmptyState from "../common/EmptyState";

interface ListingGridProps {
  properties: Property[];
  onSelect: (id: number) => void;
}

const ListingGrid: React.FC<ListingGridProps> = ({ properties, onSelect }) => {
  if (!properties.length) {
    return (
      <EmptyState message="No properties found. Try adjusting your filters." />
    );
  }

  return (
    <div className="listing-grid">
      {properties.map((property) => (
        <ListingCard
          key={property.id}
          property={property}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};

export default ListingGrid;
