import React, { useMemo } from "react";
import FilterBar from "../components/listings/FilterBar";
import ListingGrid from "../components/listings/ListingsGrid";
import Loader from "../components/common/Loader";
import { useProperties } from "../features/listings/hooks/useProperties";
import "../styles/listings.css";

const Dashboard: React.FC = () => {
  const {
    properties,
    loading,
    error,
    search,
    setSearch,
    minBedrooms,
    setMinBedrooms,
    sortOrder,
    setSortOrder,
  } = useProperties();
  const clearFilters = () => {
    setSearch("");
    setMinBedrooms(0);
    setSortOrder("asc");
  };
  const isFilterActive = useMemo(() => {
    return search !== "" || minBedrooms !== 0 || sortOrder !== "asc";
  }, [search, minBedrooms, sortOrder]);
  const handleSelectProperty = (id: number) => {
    // Navigate to detail page
    window.location.href = `/listing/${id}`;
  };

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="dashboard-error">
        Error loading properties: {error}
      </div>
    );
    
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Real Estate Listings</h1>

      {/* FilterBar */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        minBedrooms={minBedrooms}
        setMinBedrooms={setMinBedrooms}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        clearFilters={clearFilters}
        isFilterActive={isFilterActive}
      />

      {/* Property Grid */}
      {properties.length > 0 ? (
        <ListingGrid properties={properties} onSelect={handleSelectProperty} />
      ) : (
        <div className="empty-state">
          No properties found. Try adjusting your filters.
        </div>
      )}
    </div>
  );
};

export default Dashboard;
