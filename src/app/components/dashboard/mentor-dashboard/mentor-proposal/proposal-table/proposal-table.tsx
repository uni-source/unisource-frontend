import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetProposalByIdQuery, useUpdateProposalStatusMutation } from '../../../../../../../redux/features/proposal/proposalApi';
import { useCreateStudentHasProjectMutation } from '../../../../../../../redux/features/project/studentHasProjectApi'; 
import { useUpdateProjectStatusMutation } from '../../../../../../../redux/features/project/projectApi';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Loading from '@/app/components/loading/loading';

interface ViewProposalProps {
  proposalId: number;
  mentor:any;
}

const ViewProposal: React.FC<ViewProposalProps> = ({ proposalId,mentor }) => {
  const router = useRouter();
  const { data: proposalData, isLoading, isError } = useGetProposalByIdQuery(proposalId);
  
  const [updateProposalStatus] = useUpdateProposalStatusMutation();
  const [createStudentHasProject] = useCreateStudentHasProjectMutation();
  const [updateProjectStatus] = useUpdateProjectStatusMutation();
  
  const [status, setStatus] = useState(proposalData?.data?.status || "Status");

  const handleDownload = () => {
    if (proposalData?.data?.publicUrl) {
      window.open(proposalData.data?.publicUrl, '_blank');
    }
  };

  const handleStatusChange = async (newStatus: string) => {
    try {

      const updateData={
        id:Number(proposalId),
        status:newStatus
      }
      console.log(JSON.stringify(updateData));

      await updateProposalStatus(updateData);
      setStatus(newStatus);

      if (newStatus === 'Approved') {
        await createStudentHasProject({
          studentId: proposalData?.data?.studentId,
          projectId: proposalData?.data?.projectId,
          organizationId: mentor?.organizationId,
          mentorId: mentor?.id,
        });

        // Update project status to ONGOING
        await updateProjectStatus({ id: proposalData?.data?.projectId, status: 'ONGOING' });
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading proposal data.</div>;
  }

  return (
    <MDBContainer id="mdb-container mt-5" style={{ marginTop: 30 }}>
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
                      <label htmlFor="name">Project Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={proposalData.data?.projectName}
                        readOnly
                      />
                    </div>
                  </MDBCol>
                  
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="duedate">Due Date</label>
                      <input
                        type="text"
                        id="duedate"
                        name="duedate"
                        className="form-control"
                        value={new Date(proposalData.data?.submissionDate).toLocaleDateString()}
                        readOnly
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                
                <MDBRow className="mt-3">
                  <MDBCol md="3">
                    Project Proposal
                    <br />
                    <div className="custom-input mb-3">
                      <MDBBtn className="ac-info-button" id='down-btn' onClick={handleDownload}>
                        <PictureAsPdfIcon style={{ marginRight: '8px' }} />
                        Download
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="custom-input mb-4">
                      <label htmlFor="stdname">Student Name</label>
                      <input
                        type="text"
                        id="stdname"
                        name="stdname"
                        className="form-control"
                        value={proposalData.data?.studentName}
                        readOnly
                      />
                    </div>
                  </MDBCol>
                  
                </MDBRow>
                <br />
                <MDBRow className="mt-4">
                  <MDBCol md="2">
                    <MDBBtn className="ac-info-button" type="button" onClick={() => router.back()}>
                      Back
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto">
                    <DropdownButton
                      id="status-dropdown"
                      title={status}
                      variant="secondary"
                    >
                      <Dropdown.Item onClick={() => handleStatusChange('Pending')}>Pending</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleStatusChange('Approved')}>Approved</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleStatusChange('Rejected')}>Reject</Dropdown.Item>
                    </DropdownButton>
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
