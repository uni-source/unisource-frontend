import React from 'react';
import './homestats.css';
import Link from 'next/link';

const HeaderStats = () => {
  return (
    <div className="unisource-container-outer">
      <div className='Unisource-description-stats-container'>
        <div className="unisource-description">
          <h1 className='headerstat-header'>UniSource</h1>
          <p id="p-desc">
            UniSource is a platform specially developed for the Undergraduate students at the Faculty of Technology, University of Sri Jayewardenepura to obtain a chance to gain hands on experience by contributing for real world projects. 
          </p>
          <Link href="/about" passHref>
          <button className="learn-more-btn">Learn More</button>
          </Link> 
        </div>
        <div className="unisource-stats">
          <div className="stat-item" id="radius-1">
            <div className="stat-value">20K+</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-item" id="radius-2">
            <div className="stat-value">30</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item" id="radius-3">
            <div className="stat-value">200</div>
            <div className="stat-label">Mentors</div>
          </div>
          <div className="stat-item" id="radius-4">
            <div className="stat-value">35</div>
            <div className="stat-label">Organizations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStats;
