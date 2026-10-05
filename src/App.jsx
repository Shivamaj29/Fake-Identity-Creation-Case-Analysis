import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CaseStudies from './pages/CaseStudies';
import DigitalTraces from './pages/DigitalTraces';
import Methodology from './pages/Methodology';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="cases" element={<CaseStudies />} />
          <Route path="traces" element={<DigitalTraces />} />
          <Route path="methodology" element={<Methodology />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
