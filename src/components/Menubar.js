import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Menubar.css';
import Logo from '../assets/images/radiant_1.png';
import Dashboard from '../assets/images/dashboard_icon.png';
import Currency from '../assets/images/cash_icon.png';
import Customer from '../assets/images/customer_icon.png';
import Pointmaster from '../assets/images/point_master.png';
import DashboardDark from '../assets/images/bar-chart-square- darkmode.png';
import CurrencyDark from '../assets/images/currency-coin-rupee darkmode.png';
import CustomerDark from '../assets/images/users-profiles-darkmode.png';
import PointmasterDark from '../assets/images/globe-04 darkmode.png';

const Menubar = ({ isDarkMode }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
      if (window.innerWidth > 450) setIsMobileMenuVisible(false); // auto-close if switching to desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuVisible(false);
      }
    };

    if (isMobileMenuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuVisible]);

  const toggleMenu = () => {
    setIsMobileMenuVisible(prev => !prev);
  };


  const menuItems = (
    <ul className="menu_list">
      <li>
        <NavLink to="/dashboard" onClick={() => setIsMobileMenuVisible(false)} className={({ isActive }) => `menu_item ${isActive ? 'active' : ''}`}>
          <img src={isDarkMode ? DashboardDark : Dashboard} alt="icon" />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/CashPickupPage" onClick={() => setIsMobileMenuVisible(false)} className={({ isActive }) => `menu_item ${isActive ? 'active' : ''}`}>
          <img src={isDarkMode ? CurrencyDark : Currency} alt="icon" />
          <span>Cash Pickup</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/customer-master" onClick={() => setIsMobileMenuVisible(false)} className={({ isActive }) => `menu_item ${isActive ? 'active' : ''}`}>
          <img src={isDarkMode ? CustomerDark : Customer} alt="icon" />
          <span>Customer Master</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/point-master" onClick={() => setIsMobileMenuVisible(false)} className={({ isActive }) => `menu_item ${isActive ? 'active' : ''}`}>
          <img src={isDarkMode ? PointmasterDark : Pointmaster} alt="icon" />
          <span>Point Master</span>
        </NavLink>
      </li>
    </ul>
  );


  return (
    <>
      {/* Mobile Menubar */}
      {isMobile && (
        <div className={`mobile_header ${isDarkMode ? 'header-dark' : ''}`} style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
          <div className="mobile_logo_header">
            <button className="menu_icon" onClick={toggleMenu}>☰</button>
            <img src={Logo} alt="radiant.logo" className="logo_image" />
            <div className="title">
              <h1>RADIANT</h1>
              <p>Cash Management Services.Ltd</p>
            </div>
          </div>
          {isMobileMenuVisible && (
            <div ref={menuRef} className="mobile_menu_section">
              {menuItems}
            </div>
          )}
        </div>
      )}

      {/* Desktop Sidebar Menubar */}
      {!isMobile && (
        <div className={`header ${isDarkMode ? 'header-dark' : ''}`}>
          <div className="logo_header">
            <img src={Logo} alt="radiant.logo" className="logo_image" />
            <div className="title">
              <h1>RADIANT</h1>
              <p>Cash Management Services.Ltd</p>
            </div>
          </div>
          <div className="menu_section">
            <p className="menu_title">MENU</p>
            {menuItems}
          </div>
        </div>
      )}
    </>
  );
};

export default Menubar;
