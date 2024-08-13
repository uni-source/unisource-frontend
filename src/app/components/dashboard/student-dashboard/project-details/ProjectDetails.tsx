"use client";
import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useRouter } from "next/navigation";
import { useGetProjectByIdQuery } from "../../../../../../redux/features/project/projectApi";
import "./ProjectDetails.css";
import Loading from "@/app/components/loading/loading";

interface ProjectDetailsProps {
  projectId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const router = useRouter();
  const { data: project, isLoading, isError } = useGetProjectByIdQuery(projectId);

  const handleGoBack = () => {
    router.push(`/student-dashboard/student-projects`);
  };

  if (isLoading) return <Loading />;

  const { id, name, description, dueDate, resource } = project?.data || {};

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
                      value={id || ""}
                      disabled
                    />
                    <label
                      htmlFor="projectId"
                      className={`form-label ${
                        projectId ? "floating" : ""
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
                      value={name || ""}
                      disabled
                    />
                    <label
                      htmlFor="name"
                      className={`form-label ${
                        name ? "floating" : ""
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
                      value={description || ""}
                      disabled
                    ></textarea>
                    <label
                      htmlFor="description"
                      className={`form-label ${
                        description ? "floating" : ""
                      }`}
                    >
                      Description
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="resource"
                      className="form-control"
                      value={resource || ""}
                      disabled
                    />
                    <label
                      htmlFor="resource"
                      className={`form-label ${
                        resource ? "floating" : ""
                      }`}
                    >
                      Resource
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
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
                  <MDBBtn className="ac-info-button" onClick={handleGoBack}>Go Back</MDBBtn>
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
