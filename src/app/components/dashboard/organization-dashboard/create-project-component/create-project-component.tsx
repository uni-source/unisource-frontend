import './create-project-component.css';
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



const CreateProject = () => {
    return (
        <MDBContainer id='mdb-container'>
        <MDBRow className="justify-content-center">
          <MDBCol md="12">
            <MDBCard className='overall'>
              <MDBCardBody>
                <h4>Create Project</h4>
                <br />
                <MDBRow>
                <MDBCol md="4">
                  <div className="custom-input mb-4">
                  <label htmlFor="projectName">
                      Project name
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      className="form-control"
                    />
                  </div>
                </MDBCol>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                    <label htmlFor="title">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="form-control"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="4">
                  <div className="custom-input mb-4">
                  <label htmlFor="category">
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      className="form-control"
                    />
                  </div>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mt-3">
                  <MDBCol md="12">
                  <label htmlFor="description">
                        Description
                      </label>
                    <div className="custom-input mb-4">
                      <textarea
                        id="projectDescription"
                        className="form-control"
                      ></textarea>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mt-3">
                  <MDBCol md="12">
                  <label htmlFor="technologies" id='label-technologies'>
                        Technologies
                      </label>
                    <div className="custom-input mb-4">
                      <textarea
                        id="technologies"
                        className="form-control"
                      ></textarea>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                  <label htmlFor="projectResource" id='label-resources'>
                      Project Resource (Github link)
                    </label>
                    <input
                      type="text"
                      id="projectResource"
                      className="form-control"
                    />
                  </div>
                </MDBCol>
                </MDBRow>

                <MDBRow>
                <MDBCol md="4">
                    <div className="custom-input mb-4">
                        <label htmlFor="duedate" id='label-duedate'>
                            Due Date
                        </label>
                            <input
                                type="date"
                                id="duedate"
                                className="form-control"
                            />
                    </div>
                </MDBCol>

                <MDBCol md="8">
                <FormControl fullWidth variant="outlined" className="custom-input mb-4">
                  <label htmlFor="assignMentor" id='label-mentor' >
                      Assign Mentor
                    </label>
                    <Select
                      labelId="mentor-label"
                      id="organizationMentor"
                      label="Assign Mentor"
                      className="form-control"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Mentor1"></MenuItem>
                      <MenuItem value="Mentor2"></MenuItem>
                      <MenuItem value="Mentor3"></MenuItem>
                      <MenuItem value="Mentor4"></MenuItem>
                    </Select>
                  </FormControl>
                </MDBCol>
              </MDBRow>

              <br />

                <MDBRow className="mt-4">
                  <MDBCol md="3">
                    <MDBBtn className="ac-info-button" >
                      Create Project
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBBtn className="ac-info-button">
                      Clear details
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
  export default CreateProject;