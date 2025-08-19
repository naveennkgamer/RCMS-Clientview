import React, { useState, useEffect, useRef } from 'react';
import './Addressbar.css';

import Searchicon from '../assets/images/search-icon.png';
import UserImg from '../assets/images/userimg.jpg';
import ArrowIcon from '../assets/images/chevron-down.png';
import Notificon from '../assets/images/Notif Icon.png';
import Nightmode from '../assets/images/night_modeicon.png';
import Lightmode from '../assets/images/mode-light-icon.png';

const Addressbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const userRef = useRef();

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (userRef.current && !userRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="addressbar">
            <div className="searchbar">
                <input type="text" placeholder="Search" />
                <span className="searchicon">
                    <img src={Searchicon} alt="searchicon" />
                </span>
            </div>

            <div className="userdetails" onClick={() => setIsOpen(!isOpen)} ref={userRef}>
                <img src={UserImg} alt="user" className="user-img" />
                <span className="username">Naveen</span>
                <img src={ArrowIcon} alt="arrow" className="arrow-icon" />

                {isOpen && (
                    <div className="dropdown-menu">
                        <p>Logout</p>
                    </div>
                )}
            </div>

            <div className="notificationicon">
                <img src={Notificon} alt="notificationicon" />
            </div>

            <div className="nightmode" onClick={() => setIsDarkMode(prev => !prev)}>
                <img src={isDarkMode ? Lightmode : Nightmode} alt="theme-icon" />
            </div>
        </div>
    );
};

export default Addressbar;
