import React from "react";
import type { Property } from "../../features/listings/types";
import "../../styles/listings.css";

interface ListingCardProps {
  property: Property;
  onClick: (id: number) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ property, onClick }) => {
  return (
    <div className="listing-card" onClick={() => onClick(property.id)}>
      <div className="listing-card-image">
        <img src={property.image} alt={property.title} />
      </div>
      <div className="listing-card-body">
        <h3 className="listing-card-title">{property.title}</h3>
        <p className="listing-card-location">{property.location}</p>
        <div className="listing-card-details">
          <span className="listing-card-price">${property.price.toLocaleString()}</span>
          <span className="listing-card-bedrooms">{property.bedrooms} Beds</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
