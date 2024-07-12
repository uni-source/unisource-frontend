import React from 'react';
import Topic from '../topics/topics';
import './EligibilityHeader.css';
 

const EligibilityHeader = () => {

  return (
    <div className="Eligibility-Header-outer">
        <div className="Eligibility-Header-inner">
            <Topic message="Eligibility"/>
        </div>
    </div> 
  );   
};

export default  EligibilityHeader;
