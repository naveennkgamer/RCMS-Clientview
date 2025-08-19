import React, { useState, useEffect } from 'react';
import Menubar from '../components/Menubar';
import './DashboardPage.css';
import DonutChart from '../components/DonutChart '

import ArrowIcon from '../assets/images/chevron-down.png';

import DonutChart2 from '../components/DonutChart2';
import LineChart from '../components/LineChart ';

import Addressbar from '../components/Addressbar';

// const DashboardPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
const DashboardPage = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  // useEffect(() => {
  //   document.body.classList.toggle('dark-mode', isDarkMode);
  // }, [isDarkMode]);

  return (
    <div className="dashboard-container">
      <Menubar isDarkMode={isDarkMode} />

      <div className="right-content">
        <Addressbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <div className="dashboardchart">
          <div className="service">
            <div className="servicetitle">
              <h1>Dashboard </h1>
            </div>

            <div className="servicecontent">
              <p>Services Based Point Details</p>
              <span className='servicecontent_date'>Date 17-April-2025 <span className='arrowicon'><img src={ArrowIcon} alt="ArrowIcon" /></span></span>
            </div>
            <div className="chartbox">
              <div className="chartbox_content">
                <div className="legend-item">
                  <span className="dot" style={{ backgroundColor: '#D2D2D2' }}></span>
                  <div className="legend-text">
                    <p>Total Points</p>
                    <span>5106</span>
                  </div>
                </div>
                <div className="legend-item">
                  <span className="dot" style={{ backgroundColor: '#2EC4B6' }}></span>
                  <div className="legend-text">
                    <p>Total Amt Collected</p>
                    <span>2874</span>
                  </div>
                </div>
                <div className="legend-item">
                  <span className="dot" style={{ backgroundColor: '#F4C542' }}></span>
                  <div className="legend-text">
                    <p>No Cash</p>
                    <span>1598</span>
                  </div>
                </div>
                <div className="legend-item">
                  <span className="dot" style={{ backgroundColor: '#F25F5C' }}></span>
                  <div className="legend-text">
                    <p>Shop Closed</p>
                    <span>396</span>
                  </div>
                </div>
                <div className="legend-item">
                  <span className="dot" style={{ backgroundColor: '#247BA0' }}></span>
                  <div className="legend-text">
                    <p>Pending</p>
                    <span>238</span>
                  </div>
                </div>
              </div>
              <div className="chartbox_piechart">

                <DonutChart />

              </div>
            </div>
          </div>
          <div className="pointssts">
            <div className="pointscontent">
              <p>Point Status</p>
              <span className="pointscontent_date">
                Date 17-April-2025
                <span className="arrowicon">
                  <img src={ArrowIcon} alt="ArrowIcon" />
                </span>
              </span>
            </div>

            {/* Points Legend UI inserted here */}
            <div className='pointstsdtls' >
              {/* Total Points */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <div style={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#D0D0D0',
                    borderRadius: '50%'
                  }} />
                  <span style={{ color: '#7C7C7C', fontSize: '14px', fontWeight: 500 }}>
                    Total Points
                  </span>
                </div>
                <div style={{ color: '#A7A7A7', fontSize: '14px', marginTop: '4px', textAlign: 'left', marginLeft: '20px' }}>
                  5106
                </div>
              </div>

              {/* Active Points */}
              <div className='activePoints' style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <div style={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#3B2A68',
                    borderRadius: '50%'
                  }} />
                  <span style={{ color: '#7C7C7C', fontSize: '14px', fontWeight: 500 }}>
                    Active Points
                  </span>
                </div>
                <div style={{ color: '#A7A7A7', fontSize: '14px', marginTop: '4px', textAlign: 'left', marginLeft: '20px' }}>
                  4375
                </div>
              </div>

              {/* Inactive Points */}
              <div className='inactivePoints' style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <div style={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#89B9E3',
                    borderRadius: '50%'
                  }} />
                  <span style={{ color: '#7C7C7C', fontSize: '14px', fontWeight: 500 }}>
                    Inactive Points
                  </span>
                </div>
                <div style={{ color: '#A7A7A7', fontSize: '14px', marginTop: '4px', textAlign: 'left', marginLeft: '20px' }}>
                  731
                </div>
              </div>
            </div>

            <div className="chartbox_piechart2" style={{ padding: '0px' }}>

              <DonutChart2 />

            </div>

          </div>

        </div>

        <div className="wavechart">
          <div className="wavecontent">
            <p> Monthly Amount Collected</p>
            <span className="wavecontent_date">
              April 2025
            </span>
          </div>
          <div className='linechart'>
            <LineChart />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
