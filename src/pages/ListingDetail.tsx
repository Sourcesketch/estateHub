import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProperties } from "../features/listings/hooks/useProperties";
import type { Property } from "../features/listings/types";
import { MapPin, DollarSign } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "../styles/listings.css";
import Button from "../components/common/Button";
import { PriceChart } from "../components/listings/PriceChart";

const ListingDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { properties, loading } = useProperties();
  const [listing, setListing] = useState<Property | null>(null);
  const [coords, setCoords] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    if (id && properties.length > 0) {
      const propertyId = Number(id);
      const found = properties.find((prop) => prop.id === propertyId) || null;
      setListing(found);
    }
  }, [id, properties]);

  // Convert location string to lat/lng
  useEffect(() => {
    if (listing) {
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          listing.location
        )}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lng = parseFloat(data[0].lon);
            setCoords([lat, lng]);
          }
        })
        .catch((err) => console.error("Geocoding error:", err));
    }
  }, [listing]);

  if (loading) return <div className="listing-loading">Loading...</div>;
  if (!listing)
    return <div className="listing-loading">Property not found</div>;
  const mockPriceHistory = [
    { date: "2021-01", price: listing.price * 0.9 },
    { date: "2022-01", price: listing.price * 0.95 },
    { date: "2023-01", price: listing.price },
    { date: "2024-01", price: listing.price * 1.05 },
  ];

  const propertyWithHistory = {
    ...listing,
    name: listing.title, // map title to name
    priceHistory: mockPriceHistory,
  };
  return (
    <div className="listing-detail">
      <Button label="← Back to Listings" onClick={() => navigate("/")} />
      <div className="listing-flex">
      <div className="listing-inner">
      <div className="listing-images">
          <img
            src={listing.image}
            alt={listing.title}
            className="listing-image"
          />
        </div>
        <div className="listing-info">
          <div className="listing-info-container">
          <div className="listing-row">
            <h1 className="listing-title">{listing.title}</h1>
            <div className="listing-price">
              <DollarSign className="icon" size={16} />
              {listing.price.toLocaleString()}
            </div>
          </div>

          <div className="listing-row">
            <div className="listing-location">
              <MapPin className="icon" size={18} />
              {listing.location}
            </div>
            <div className="listing-bedrooms">{listing.bedrooms} Bedrooms</div>
          </div>
          </div>
          <Button label="Book Now" onClick={() => navigate("/")} />
        </div>
        
      </div>
     <div className="listing-main">
     <div className="listing-chart">
        <h3>Price History</h3>
        <PriceChart property={propertyWithHistory} />
      </div>
      {coords && (
        <div className="listing-map">
          <h3>Location Map</h3>
          <MapContainer
            center={coords}
            zoom={13}
            style={{ height: "14rem", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={coords}>
              <Popup>{listing.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
     </div>
      </div>
      
    </div>
  );
};

export default ListingDetail;
