'use client';
import React, { useState, useEffect } from 'react';
import './pending-table.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import { useGetProjectByIdQuery, useUpdateProjectStatusMutation } from '../../../../../../../redux/features/project/projectApi';
import Loading from '@/app/components/loading/loading';
import { useRouter } from 'next/navigation';

interface ProjectGridProps {
  id: number;
}

const ViewPendingProject: React.FC<ProjectGridProps> = ({ id }) => {
  const router = useRouter();
  const { data: project, isLoading, error } = useGetProjectByIdQuery(id);
  const [updateProjectStatus] = useUpdateProjectStatusMutation();

  if (isLoading) return <Loading />;

  const handleStatusChange = async (status: string) => {
    try {
      await updateProjectStatus({ id: project.data?.id, status }).unwrap();
      router.back();
    } catch (err) {
      console.error('Failed to update project status:', err);
    }
  };

  return (
    <MDBContainer id="mdb-container mt-12">
      <br />
      <br />
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className="overall">
            <MDBCardBody>
              <br />
              <br />
              <form>
              <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="projectName">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      value={project?.data?.name}
                      disabled
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={project?.data?.title}
                      disabled
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      value={project?.data?.category}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows={4}
                    value={project?.data?.description}
                    disabled
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="technology">Technology</label>
                  <textarea
                    className="form-control"
                    id="technology"
                    rows={4}
                    value={project?.data?.technologies}
                    disabled
                  ></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="dueDate"
                      value={new Date(
                        project?.data?.dueDate
                      ).toLocaleDateString()}
                      disabled
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="resources">Resources</label>
                    <input
                      type="text"
                      className="form-control"
                      id="resources"
                      value={project?.data?.resource}
                      disabled
                    />
                  </div>
                </div>

                <br />
                <MDBRow className="mt-4">
                  <MDBCol md="2">
                    <MDBBtn
                      className="ac-info-button"
                      type="button"
                      onClick={() => router.back()}
                    >
                      Back
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBBtn
                      className="ac-info-button"
                      type="button"
                      onClick={() => handleStatusChange('APPROVED')}
                    >
                      Approve
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBBtn
                      className="ac-info-button"
                      type="button"
                      onClick={() => handleStatusChange('REJECTED')}
                    >
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
