import React from "react";
import type { ReactNode } from "react";
import AppHeader from "./AppHeader";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <AppHeader />
      <main className="app-main">{children}</main>
    </div>
  );
};

export default AppLayout;
