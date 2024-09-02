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
import { useGetOrganizationQuery,useVerifyOrganizationMutation } from '../../../../../../../redux/features/organization/organizationApi';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
interface ProjectGridProps {
  organizationId: number;
}

const AccountInformationForm: React.FC<ProjectGridProps> = ({ organizationId }) => {
  const router = useRouter();
  const { data: organization, isLoading, isError,refetch } = useGetOrganizationQuery(organizationId,
    { refetchOnMountOrArgChange: true });
  const [verifyOrganization] = useVerifyOrganizationMutation();
  const [status, setStatus] = useState<string>('Change');
  const [adminIdentityId, setAdminIdentityId] = useState<number | null>(null);
  const handleBack = () => {
    router.push(`/faculty-dashboard/organization-verification`);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setAdminIdentityId(parsedUser?.id);
    }
  }, []); 

  useEffect(() => {
    const updateVerificationStatus = async () => {
      if (status === 'Approved' && adminIdentityId !== null) {
        try {
          const response = await verifyOrganization({
            adminIdentityId,
            organizationId,
            verifiedOrganization: true,
          }).unwrap();
          toast.success("Updated verification status")
          refetch()
          router.push(`/faculty-dashboard/organization-verification`);
        } catch (error) {
          console.error('Error updating verification status (Approved):', error);
        }
      }else if(status === 'Pending' && adminIdentityId !== null){
        try {
          const response = await verifyOrganization({
            adminIdentityId,
            organizationId,
            verifiedOrganization: false,
          }).unwrap();
          toast.success("Updated verification status")
          refetch()
          router.push(`/faculty-dashboard/organization-verification`);
        } catch (error) {
          console.error('Error updating verification status (Pending):', error);
        }
        
      }
    };

    updateVerificationStatus();
    
  }, [status, adminIdentityId, organizationId, verifyOrganization, refetch, router]);

  const handleStatusChange = (eventKey: string | null) => {
    if (eventKey) {
      setStatus(eventKey);
    }
  };

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
                      value={organization?.data?.name || ''}
                      readOnly
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
                      value={organization?.data?.contact || ''}
                      readOnly
                    />
                    <label htmlFor="contactNumber" className={`form-label`}>
                      Contact Number
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button"onClick={handleBack}>
                    Go Back
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <DropdownButton
                    id="status-dropdown"
                    title={status}
                    variant="secondary"
                    onSelect={handleStatusChange}
                  >
                    <Dropdown.Item eventKey="Change">Change</Dropdown.Item>
                    <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                    <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
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
