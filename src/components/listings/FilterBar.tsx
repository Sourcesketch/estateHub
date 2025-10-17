import React from "react";
import SearchInput from "../common/SearchInput";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import "../../styles/listings.css";

interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  minBedrooms: number;
  setMinBedrooms: (value: number) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
  clearFilters?: () => void; 
  isFilterActive?: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  search,
  setSearch,
  minBedrooms,
  setMinBedrooms,
  sortOrder,
  setSortOrder,
  clearFilters,
  isFilterActive
}) => {
  return (
    <div className="filterbar">
      {/* Search */}
      <div className="filter-item">
        <SearchInput
          value={search}
          onChange={(value: string) => setSearch(value)}
          placeholder="Search properties..."
        />
      </div>

      {/* Min Bedrooms Dropdown */}
      <div className="filter-item">
        <Dropdown
          value={minBedrooms.toString()}
          onChange={(value) => setMinBedrooms(Number(value))}
          options={[
            { label: "Any Bedrooms", value: "0" },
            { label: "1+ Bedrooms", value: "1" },
            { label: "2+ Bedrooms", value: "2" },
            { label: "3+ Bedrooms", value: "3" },
          ]}
        />
      </div>

      {/* Dropdown */}
      <div className="filter-item">
        <Dropdown
          value={sortOrder}
          onChange={(value) => setSortOrder(value as "asc" | "desc")}
          options={[
            { label: "Price: Low → High", value: "asc" },
            { label: "Price: High → Low", value: "desc" },
          ]}
        />
      </div>

      {/*  Button  */}
      {clearFilters && (
        <div className="filter-item">
          <Button label="Reset" onClick={clearFilters} disabled={!isFilterActive}/>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
