import './GetStart.css';
import React from 'react';

const GetStart = () => {
  return (
    <div className="GetStart-outer">
      <div className="GetStarted-inner">
        <div className="GetStarted-container">
          <div className="GetStarted-left-container">
              <div className="heading-container">
                  <h2 className='get-start-heading'>For Students / Alumni / Researchers</h2>
              </div>
              <div className="Student-buttel-list-container">
                  <ul>
                    <li>Sign Up by inserting your University Email address.</li>
                    <li>You will be redirected to Student Dashboard.</li>
                    <li>Complete your Profile.</li>
                    <li>Select project and submit your Project Proposals.</li>
                    <li>Wait for an approval.</li>
                    <li>After successful approval, contribute to the relevent project you applied.</li>
                  </ul>
              </div>
          </div>
          <div className="GetStarted-right-container">
            <div className="heading-container">
              <h2 className='get-start-heading'>For Organization / Freelancers</h2>
            </div>
            <div className="Organization-bullet-list-container">
              <ul>
                <li>Sign Up by inserting your organizational / Personal Email address</li>
                <li>You will be redirected to Organization Dashboard.</li>
                <li>Complete the Profile.</li>
                <li>Publish your projects and wait for the approval.</li>
                <li>View project proposals submitted by the Students.</li>
                <li>Allocate a Mentor for your project.</li>
                <li>Allocate Students for your project.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
