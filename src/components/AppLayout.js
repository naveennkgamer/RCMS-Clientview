
// import React, { useState } from 'react';
// import Menubar from './Menubar';
// import Logo from './assets/images/radiant_1.png';
// import './AppLayout.css';

// const AppLayout = ({ children, isDarkMode }) => {
//     s
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div className="layout">
//             {/* Topbar */}
//             <div className="topbar">
//                 <button className="menu-btn" onClick={toggleMenu}>
//                     ☰
//                 </button>
//                 <div className="logo_header">
//                     <img src={Logo} alt="logo" className="logo_image" />
//                     <div className="title">
//                         <h1>RADIANT</h1>
//                         <p>Cash Management Services.Ltd</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Sidebar (Menubar) */}
//             <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
//                 <Menubar isDarkMode={isDarkMode} />
//             </div>

//             {/* Overlay (optional click to close menu) */}
//             {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

//             {/* Main Content */}
//             <div className="content">{children}</div>
//         </div>
//     );
// };

// export default AppLayout;
