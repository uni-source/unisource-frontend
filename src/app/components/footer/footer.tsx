import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="custom-footer rounded-lg shadow mt-4">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center mb-4 mb-md-0">
            <img
              src="./assets/UniSourceLogo.png"
              className="mr-3"
              style={{ height: '80px' }}  
              alt="UniSource Logo"
            />
            <span style={{ fontSize: '20px'}} className="h4 mb-0">
              Introducing Undergraduates to<br /> open source software development
            </span>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-md-end text-md-right">
            <div className="text-muted">
              <p className="mb-1">Faculty of Technology</p>
              <p className="mb-1">Center for IT Services</p>
              <p className="mb-1">University of Sri Jayawardenepura</p>
              <p className="mb-1">Email: help@fot.sjp.ac.lk</p>
              <p className="mb-1">Phone: +94 11 275 6000</p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row spacing">
          <div className="col-12 text-center">
            <span className="copywrite">
              © 2024 Faculty of Technology. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
