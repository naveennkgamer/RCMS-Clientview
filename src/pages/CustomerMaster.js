import React, { useState, useEffect } from 'react';
import Menubar from '../components/Menubar';
import Addressbar from '../components/Addressbar';


const CustomerMaster = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(() => {
    //     return localStorage.getItem('isDarkMode') === 'true';
    // });
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('isDarkMode') === 'true';
    });


    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className="dashboard-container">
            <Menubar isDarkMode={isDarkMode} />
            <div className="right-content">
                <Addressbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />


                <h1 style={{ textAlign: 'center', paddingTop: '200px' }}> no data files</h1>


            </div>
        </div>
    );
};

export default CustomerMaster;