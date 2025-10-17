import type { Property, SortOrder } from "./types";

/* Sort by price (ascending/descending) */
export const sortByPrice = (list: Property[], order: SortOrder): Property[] => {
  return [...list].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
};

/* Filter by minimum number of bedrooms */
export const filterByBedrooms = (
  list: Property[],
  minBedrooms: number
): Property[] => {
  return list.filter((pt) => pt.bedrooms >= minBedrooms);
};

/* filters by property title (case-insensitive) */
export const searchByTitle = (list: Property[], query: string): Property[] => {
  if (!query.trim()) return list;
  return list.filter((pt) =>
    pt.title.toLowerCase().includes(query.toLowerCase())
  );
};
