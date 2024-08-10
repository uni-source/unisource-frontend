'use client';
import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './proposal-table.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const ViewProposal: React.FC = () => {
  const [formValues, setFormValues] = useState({
    
  });

  return (
    <MDBContainer id="mdb-container">
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className="overall">
            <MDBCardBody>
              <br />
              <br />
              <form>
                <MDBRow>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="name">Project name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="duedate">Submitted Date</label>
                      <input
                        type="text"
                        id="duedate"
                        name="subdate"
                        className="form-control"
                        
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mt-3">
                  <MDBCol md="12">
                    <label htmlFor="description">Description</label>
                    <div className="custom-input mb-4">
                      <textarea
                        id="description"
                        name="description"
                        className="form-control"
                      ></textarea>
                    </div>
                  </MDBCol>
                </MDBRow>
                
                <MDBRow className="mt-3">
                    <MDBCol md="3">
                         Project proposal
                            <br />
                                 <div className="custom-input mb-3">
                                    <MDBBtn className="ac-info-button" id='down-btn'>
                                        <PictureAsPdfIcon style={{ marginRight: '8px' }} />
                                        Download
                                    </MDBBtn>
                                </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">
                    <div className="custom-input mb-4">
                      <label htmlFor="name">Student Name</label>
                      <input
                        type="text"
                        id="stdname"
                        name="stdname"
                        className="form-control"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="custom-input mb-4">
                      <label htmlFor="name">Student Email</label>
                      <input
                        type="text"
                        id="stdEmail"
                        name="stdEmail"
                        className="form-control"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow className="mt-4">
                  <MDBCol md="2">
                    <MDBBtn className="ac-info-button" type="submit">
                      Back
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="2">
                    
                  </MDBCol>
                  <MDBCol md="2">
                    
                  </MDBCol>
                  <MDBCol md="2">
                    
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBBtn className="ac-info-button" type="submit">
                      Accept
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBBtn className="ac-info-button" type="submit">
                      Reject
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ViewProposal;
