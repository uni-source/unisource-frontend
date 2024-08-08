import './organization-create-mentor.css';
import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import toast from 'react-hot-toast';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';



const CreateMentor = () => {
    return (
        <MDBContainer id='mdb-container'>
        <MDBRow className="justify-content-center">
          <MDBCol md="12">
            <MDBCard className='overall'>
              <MDBCardBody>
                <h4>Create Mentor Account</h4>
                <br />
                <MDBRow>
                <MDBCol md="5">
                  <div className="custom-input mb-4">
                  <label htmlFor="mentorName">
                      Mentor Name
                    </label>
                    <input
                      type="text"
                      id="mentorName"
                      className="form-control"
                    />
                  </div>
                </MDBCol>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                    <label htmlFor="contact">
                        Contact
                      </label>
                      <input
                        type="text"
                        id="contact"
                        className="form-control"
                      />
                    </div>
                  </MDBCol>


                  <MDBCol md="3">
                <FormControl fullWidth variant="outlined" className="custom-input mb-4">
                  <label htmlFor="assignMentor" id='mentor-role' >
                      Role
                    </label>
                    <Select
                      labelId="mentor-label"
                      id="mentorRole"
                      label="Role"
                      className="form-control"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Mentor">Mentor</MenuItem>
                    </Select>
                  </FormControl>
                </MDBCol>

                </MDBRow>

                <MDBRow>
                    <MDBCol md="5">
                        <div className="custom-input mb-4">
                        <label htmlFor="Mentor-Email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="mentorEmail"
                            className="form-control"
                        />
                        </div>
                    </MDBCol>

                    <MDBCol md="4">
                        <div className="custom-input mb-4">
                        <label htmlFor="Mentor-Password">
                            Password
                        </label>
                        <input
                            type="text"
                            id="mentorPassword"
                            className="form-control"
                        />
                        </div>
                    </MDBCol>
                </MDBRow>

              <br />

              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button">
                    create Account
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button">
                    Clear
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
  export default CreateMentor;