import React from 'react';
import './EligibilityStudent.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const EligibilityStudent = () =>{
  return (
    <div className='E-Student-outer'>
      <div className='E-Student-inner'>
        <div className='E-Student-container'>
          <h5 id='student'>For Undergraduate Students / Alumini</h5>
            <ul id='list'>

              <li>Must be currently enrolled as an undergraduate student in the Faculty of Technology.</li>
              <li>Open to students from all years of study, from first-year freshmen to final-year seniors.</li>
              <li>Students from all disciplines within the Faculty of Technology are welcome to join.</li>
              <li>A keen interest in contributing to open source projects and a willingness to collaborate with peers.</li>
              <li>A commitment to continuous learning and improvement, as well as a willingness to share knowledge with the community.</li>
              <li>Must have a responsible personality.</li>

            </ul>   
        </div>     
      </div>
    </div>
        
  );
};
export default EligibilityStudent;