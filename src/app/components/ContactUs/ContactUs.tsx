import './ContactUs.css';
import React from 'react';
import Topic from '../topics/topics';

const ContactUs = () => {
  return (
    <div className="ContactUs-outer">
            <Topic message="Contact Us" />
      <div className="ContactUs-inner">
        <div className="ContactUs-container">
          <div className="ContactUs-left-container">
              <div className="ContactUs-img-container">
                  <img className='ContactUs-img' src="./assets/aboutImages/contactUs.png" alt="Faculty of Technology" />
              </div>
          </div>
          <div className="ContactUs-right-container">
            <div className="ContactUs-details-container">
              <p className='ContactUs-paragraph'>Faculty of Technology</p>
              <p className='ContactUs-paragraph'>University of Sri Jayewardenepura</p>
              <p className='ContactUs-paragraph'>Dampe – Pitipana Rd, Homagama</p>
                <br/>
              <p className='ContactUs-paragraph'>+94 11 3 438 544</p>
              <p className='ContactUs-paragraph'>dr@fot.sjp.ac.lk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
