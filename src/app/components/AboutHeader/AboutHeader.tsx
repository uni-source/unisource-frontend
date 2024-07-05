// AboutHeader.tsx
import './AboutHeader.css';
import React from 'react';
import Topic from '../topics/topics';

const AboutHeader = () => {
  return (
    <div className="About-Header-outer">
      <div className="About-Header-inner">
        <Topic message="About UniSource" />
        <div className="About-Header-bottom-container">
          <p id='About-Header-description'>Welcome to UniSource, your community platform for collaborative innovation and open source projects!</p>
        </div>
      </div>
    </div>
  );
};
export default AboutHeader;
