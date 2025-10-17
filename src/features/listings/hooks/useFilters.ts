import { useState, useCallback } from "react";
import type { SortOrder } from "../types";

export function useFilters() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [minBedrooms, setMinBedrooms] = useState(0);

  const clearFilters = useCallback(() => {
    setSearch("");
    setSortOrder("asc");
    setMinBedrooms(0);
  }, []);

  return {
    search,
    setSearch,
    sortOrder,
    setSortOrder,
    minBedrooms,
    setMinBedrooms,
    clearFilters,
  };
}
