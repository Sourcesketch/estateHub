import React from "react";
import "../../styles/layout.css";

const AppHeader: React.FC = () => {
  return (
    <header className="app-header">
      <div className="app-header-container">
        <a className="app-logo">EstateHub</a>
        <nav className="app-nav">
          <a href="/" className="nav-link">
            Dashboard
          </a>
          {/* Add more links here if needed */}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
