import './header.css';
import React from 'react';
import Link from 'next/link';

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
              Open Source Project<br />Development Community 
            </span><br />
            <Link href="/getstart" passHref>
              <button className="header-btn">Get Started</button>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
