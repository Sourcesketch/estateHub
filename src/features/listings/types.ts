export interface Property {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
  image: string;
  priceHistory?: { date: string; price: number }[];
}

export type SortOrder = "asc" | "desc";
