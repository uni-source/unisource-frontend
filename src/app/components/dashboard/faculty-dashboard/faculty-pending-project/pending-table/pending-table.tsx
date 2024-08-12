'use client';
import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './pending-table.css';

const ViewPendingProject: React.FC = () => {
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
                        id="pname"
                        name="pname"
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
                      <label htmlFor="duedate">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
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

                  <MDBCol md="12">
                    <label htmlFor="description">Technologies</label>
                    <div className="custom-input mb-4">
                      <textarea
                        id="technologies"
                        name="technologies"
                        className="form-control"
                      ></textarea>
                    </div>
                  </MDBCol>
                </MDBRow>
                
                <MDBRow className="mt-3">
                  <MDBCol md="4">
                      <div className="custom-input mb-4">
                        <label htmlFor="mentor">Mentor</label>
                        <input
                          type="text"
                          id="mentor"
                          name="mentor"
                          className="form-control"
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4">
                      <div className="custom-input mb-4">
                        <label htmlFor="duedate">Due Date</label>
                        <input
                          type="text"
                          id="duedate"
                          name="subdate"
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
                      Approve
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

export default ViewPendingProject;
