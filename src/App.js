
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaptchaPages from './pages/CaptchaPages';

import DashboardPage from './pages/DashboardPage';
import CashPickupPage from './pages/CashPickupPage ';
import CustomerMaster from './pages/CustomerMaster';
import PointMaster from './pages/PointMaster';
import LoginPage from './pages/LoginPage';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/CaptchaPages" element={<CaptchaPages />} />

        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/CashPickupPage" element={<CashPickupPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/customer-master" element={<CustomerMaster isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/point-master" element={<PointMaster isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
