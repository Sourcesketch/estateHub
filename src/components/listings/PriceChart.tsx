import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
interface PricePoint {
    date: string; // or Date if you parse it
    price: number;
  }
  interface Property {
    id: number;
    name: string;
    priceHistory: PricePoint[];
  }
  interface PriceChartProps {
    property: Property;
  }
  export const PriceChart: React.FC<PriceChartProps> = ({ property }) => (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={property.priceHistory}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  