"use client";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useRouter } from "next/navigation";
import "./ProjectDetails.css";

interface ProjectDetailsProps {
  id: any;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push(`/student-dashboard/student-projects`);
  };

  const [formData, setFormData] = useState({
    projectId: "",
    name: "",
    description: "",
  });

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className="overall">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="projectId"
                      className="form-control"
                      value={formData.projectId}
                      disabled
                    />
                    <label
                      htmlFor="projectId"
                      className={`form-label ${
                        formData.projectId ? "floating" : ""
                      }`}
                    >
                      Project Id
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      value={formData.name}
                      disabled
                    />
                    <label
                      htmlFor="contactNumber"
                      className={`form-label ${
                        formData.name ? "floating" : ""
                      }`}
                    >
                      Project Name
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <textarea
                      id="description"
                      className="form-control"
                      value={formData.description}
                      disabled
                    ></textarea>
                    <label
                      htmlFor="description"
                      className={`form-label ${
                        formData.description ? "floating" : ""
                      }`}
                    >
                      Description
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              {"file name"}
              <MDBRow
                className="mt-4"
                style={{
                  width: "75%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button"onClick={() => handleGoBack()}>Go Back</MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="flex-column-mobile">
                  <MDBBtn className="ac-info-button">Choose File</MDBBtn>
                  <MDBBtn className="ac-info-button">Submit</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ProjectDetails;
