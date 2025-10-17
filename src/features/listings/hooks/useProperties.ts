import { useEffect, useState, useMemo } from "react";
import type { Property, SortOrder } from "../types";
import { sortByPrice, searchByTitle, filterByBedrooms } from "../utils";

const API_URL =
  "https://s3.us-central-1.wasabisys.com/mashvisor-cdn/task-fe-listings.json";

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to load property listings");
        }

        const data: Property[] = await response.json();
        setProperties(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  const filteredProperties = useMemo(() => {
    let filteredList = [...properties];
    filteredList = searchByTitle(filteredList, search);
    filteredList = filterByBedrooms(filteredList, minBedrooms);
    filteredList = sortByPrice(filteredList, sortOrder);
    return filteredList;
  }, [properties, search, minBedrooms, sortOrder]);

  return {
    properties: filteredProperties,
    loading,
    error,
    search,
    setSearch,
    minBedrooms,
    setMinBedrooms,
    sortOrder,
    setSortOrder,
  };
}
