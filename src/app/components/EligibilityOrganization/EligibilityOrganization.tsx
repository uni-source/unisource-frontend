import React from 'react';
import './EligibilityOrganization.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EligibilityOrganization = () => {
  return (
    <div className='E-Organization-outer'>
      <div className='E-Organization-inner'>
        <div className='E-Organization-container'>
            <h5 id ='organization'>For Organizations / Freelancers</h5>
              <ul id ='list'>

                  <li>Must have open source projects that are suitable for student collaboration, with clearly defined goals, tasks, and  guidelines.</li>
                  <li>Must be willing to provide guidance, mentorship, and feedback to student contributors.</li>
                  <li>Must maintain transparency regarding project requirements, expectations, and contributions.</li>
                  <li>Must adhere to the ethical standards and community guidelines set forth by the UniSource platform.</li>
                
              </ul>
        </div>          
      </div>
    </div>
  );
};
export default  EligibilityOrganization;
