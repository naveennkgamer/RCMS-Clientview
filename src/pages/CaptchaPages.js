import React, { useState, useEffect } from 'react';
import './CaptchaPages.css';
import bgImage from '../assets/images/BG.png';
import logoImage from '../assets/images/radiant_1.png';
import { NavLink } from 'react-router-dom';
// Images
import dog from '../assets/images/dog.png';
import bluerose from '../assets/images/bluerose.png';
import grppic from '../assets/images/grppic.png';
import cat from '../assets/images/cat.png';
import fish from '../assets/images/fish.png';
import bird from '../assets/images/biird.png';
import flight from '../assets/images/flight.png';
import orgjuice from '../assets/images/orangejuice.png';
import clock from '../assets/images/clock.png';
import pie from '../assets/images/pie.png';
import bugg from '../assets/images/bugg.png';
import car from '../assets/images/car.jpg';

// Image list with labels
const imagesList_captchapage = [
  { name: 'DOG', src: dog },
  { name: 'ROSE', src: bluerose },
  { name: 'PEOPLE', src: grppic },
  { name: 'CAT', src: cat },
  { name: 'FISH', src: fish },
  { name: 'BIRD', src: bird },
  { name: 'FLIGHT', src: flight },
  { name: 'JUICE', src: orgjuice },
  { name: 'CLOCK', src: clock },
  { name: 'PIE', src: pie },
  { name: 'INSECT', src: bugg },
  { name: 'CAR', src: car },
];

const CaptchaPages = () => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selected, setSelected] = useState(null);

  // Assume we know the "key image" for the user
  const userKeyImage = 'CAR'; // This should come from backend ideally

  const shuffleImages = () => {
    const shuffled = [...imagesList_captchapage].sort(() => 0.5 - Math.random());
    setShuffledImages(shuffled);
    setSelected(null); // reset selection
  };

  useEffect(() => {
    shuffleImages();
  }, []);

  const handleImageClick = (name) => {
    setSelected(name);
  };

  const handleAuthorize = () => {
    if (!selected) {
      alert('Please select an image!');
    } else if (selected === userKeyImage) {
      alert('✅ Verification Completed!');
      // You can navigate to another page here if needed
    } else {
      alert('❌ Wrong selection. Try again!');
    }
    shuffleImages();
  };

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div className="container_captchapage">
        <div className="logo_captchapage">
          <img src={logoImage} alt="Radiant Logo" className="logo_captchapage" />
        </div>
        <div className="radianttit_captchapage">
          <h1>RADIANT</h1>
        </div>

        <div className="captchaimg">
          {shuffledImages.map((img, index) => (
            <div
              className={`capimg ${selected === img.name ? 'selected' : ''}`}
              key={index}
              onClick={() => handleImageClick(img.name)}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <img src={img.src} alt={img.name} />
              <div className="hoverLabel_captchapage">{img.name}</div>
            </div>
          ))}
        </div>

        <div className="refreshbut_captchapage">
          <button type="button" className="refreshbtn_captchapage" onClick={shuffleImages}>REFRESH</button>
          <NavLink to="/dashboard">
            <button type="button" className="authorized-btn" onClick={handleAuthorize}>AUTHORIZED</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CaptchaPages;
