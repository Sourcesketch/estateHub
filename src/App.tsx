import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import ListingDetail from './pages/ListingDetail';

const App: React.FC = () => {
  return (
    <Router>
     <AppLayout> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
        </Routes>
      </AppLayout> 
    </Router>
  );
};

export default App;
