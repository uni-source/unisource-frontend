import './header.css';
import React from 'react';

function Header() {
  return (
    <div className="header-component">
      <div className="header-img">
        <img src="./assets/USJ.png" alt="University Logo" className="uni-logo" />
      </div>
      <div className="line1"></div>
      <div className="header-text">
        <div className="text-wrapper">
          <div className="main-header-text">
            <p className='logo-name'>UniSource</p>
          </div>
          <div className="sub-header-text">
            <span className='logo-description'>
              Open Source Project<br />development community 
            </span><br />
            <button className="header-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
