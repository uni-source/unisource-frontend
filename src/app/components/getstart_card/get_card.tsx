import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import './get_card.css'; 

const Getcard = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-md-end align-items-start">
          <div className="card p-3" style={{ width: '30rem', height: '30rem' }}>
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <div className="image-container mb-3">
                <div className="image-square">
                  <div className="img-manipulate">
                    <img src="./Student.png" alt="Student / Alumni" className="img-fluid" />
                  </div>
                </div>
              </div>
              <h5 className="card-title">Student / Alumni</h5>
              <div className="d-flex justify-content-between mt-3">
                <Link href="/student-login" passHref legacyBehavior>
                  <a className="btn btn-primary mx-1 cust-btn">Login</a>
                </Link>
                <Link href="/student-signup" passHref legacyBehavior>
                  <a className="btn btn-secondary mx-1 cust-btn">Sign Up</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-md-start align-items-end">
          <div className="card p-3" style={{ width: '30rem', height: '30rem' }}>
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <div className="image-container mb-3">
                <div className="image-square">
                  <div className="img-manipulate">
                    <img src="./Company.png" alt="Organization / Freelancer" className="img-fluid" />
                  </div>
                </div>
              </div>
              <h5 className="card-title">Organization / Freelancer</h5>
              <div className="d-flex justify-content-between mt-3">
                <Link href="/company-login" passHref legacyBehavior>
                  <a className="btn btn-primary mx-1 cust-btn">Login</a>
                </Link>
                <Link href="/company-signup" passHref legacyBehavior>
                  <a className="btn btn-secondary mx-1 cust-btn">Sign Up</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getcard;
