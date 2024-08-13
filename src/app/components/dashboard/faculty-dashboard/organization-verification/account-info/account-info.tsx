import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import './account-info.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const AccountInformationForm: React.FC = () => {

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className='overall'>
            <MDBCardBody>
              <h4>Account Information</h4>
              <br />
              <br />
              <MDBRow>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      value=""
                    />
                    <label htmlFor="fullname" className={`form-label`}>
                      Organization Name
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="contactNumber"
                      className="form-control"
                    />
                    <label htmlFor="contactNumber" className={`form-label`}>
                      Contact Number
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button">
                    Go Back
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <DropdownButton
                    id="status-dropdown"
                    title="Pending"
                    variant="secondary"
                    
                  >
                    <Dropdown.Item href="#">Not Started</Dropdown.Item>
                    <Dropdown.Item href="#">Pending</Dropdown.Item>
                    <Dropdown.Item href="#">Approved</Dropdown.Item>
                  </DropdownButton>
                </MDBCol>
                
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AccountInformationForm;
