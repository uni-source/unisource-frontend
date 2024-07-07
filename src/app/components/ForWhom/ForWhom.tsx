import './ForWhom.css';
import React from 'react';

const ForWhom = () => {
  return (
    <div className="ForWhom-outer">
      <div className="ForWhom-inner">
        <div className="ForWhom-container">
          <div className="card">
                <img src="./assets/aboutImages/undergraduate.png" alt="Undergraduates" />
                <p>For <br/> Undergraduates</p>
          </div>
          <div className="card">
            <img src="./assets/aboutImages/organization.png" alt="Organizations" />
            <p>For <br/> Organizations</p>
          </div>
          <div className="card">
            <img src="./assets/aboutImages/freelancer.png" alt="Freelancers" />
            <p>For <br/> Freelancers</p>
          </div>
          <div className="card">
            <img src="./assets/aboutImages/researcher.png" alt="Researchers" />
            <p>For <br/> Researchers</p>
          </div>
          <div className="card">
            <img src="./assets/aboutImages/alumni.png" alt="Alumni" />
            <p>For <br/> Alumni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWhom;
