'use client';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import { useRouter } from 'next/navigation';
import { useGetProjectByIdQuery } from '../../../../../../redux/features/project/projectApi';
import { useCreateProposalMutation } from '../../../../../../redux/features/proposal/proposalApi';
import './ProjectDetails.css';
import Loading from '@/app/components/loading/loading';
import toast from 'react-hot-toast';

interface ProjectDetailsProps {
  projectId: number;
  studentId: number;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId, studentId }) => {
  const router = useRouter();
  const { data: project, isLoading } = useGetProjectByIdQuery(projectId);
  const [createProposal] = useCreateProposalMutation();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.success('Please choose a file before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('status', 'pending');
    formData.append('submissionDate', new Date().toISOString().split('T')[0]);
    formData.append('studentId', studentId.toString());
    formData.append('projectId', projectId.toString());
    formData.append('file', file);

    try {
      await createProposal(formData).unwrap();
      toast.success('Proposal created successfully!');
      router.push('/student-dashboard/student-proposals');
    } catch (error) {
      console.error('Failed to create proposal:', error);
      toast.error('Failed to create proposal. Please try again.');
    }
  };

  const handleGoBack = () => {
    router.push(`/student-dashboard/student-projects`);
  };

  if (isLoading) return <Loading />;

  const { id, name, description, resource } = project?.data || {};

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
                      value={id || ''}
                      disabled
                    />
                    <label
                      htmlFor="projectId"
                      className={`form-label ${projectId ? 'floating' : ''}`}
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
                      value={name || ''}
                      disabled
                    />
                    <label
                      htmlFor="name"
                      className={`form-label ${name ? 'floating' : ''}`}
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
                      value={description || ''}
                      disabled
                    ></textarea>
                    <label
                      htmlFor="description"
                      className={`form-label ${description ? 'floating' : ''}`}
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
                      value={resource || ''}
                      disabled
                    />
                    <label
                      htmlFor="resource"
                      className={`form-label ${resource ? 'floating' : ''}`}
                    >
                      Resource
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow
                className="mt-4"
                style={{
                  width: '75%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button" onClick={handleGoBack}>
                    Go Back
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                </MDBCol>
                <MDBCol md="auto" className="flex-column-mobile">
                  
                  <MDBBtn className="ac-info-button" onClick={handleSubmit}>
                    Submit
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

export default ProjectDetails;
