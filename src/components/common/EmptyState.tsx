import React from "react";
import "../../styles/common.css";

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return <div className="empty-state">{message}</div>;
};

export default EmptyState;
