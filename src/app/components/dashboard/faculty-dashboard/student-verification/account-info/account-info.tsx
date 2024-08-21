import React, { useState, useEffect } from 'react';
import { useGetStudentQuery, useVerifyStudentMutation } from "../../../../../../../redux/features/student/studentApi";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './account-info.css';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
interface ProjectGridProps {
  studentId: number;
}

const AccountInformationForm: React.FC<ProjectGridProps> = ({ studentId }) => {
  const router = useRouter();
  const { data: student, isLoading, isError,refetch } = useGetStudentQuery(studentId,
    { refetchOnMountOrArgChange: true });
  const [verifyStudent] = useVerifyStudentMutation();
  const [status, setStatus] = useState<string>('Change');
  const [adminIdentityId, setAdminIdentityId] = useState<number | null>(null);
  const handleBack = () => {
    router.push(`/faculty-dashboard/student-verification`);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setAdminIdentityId(parsedUser?.id);
    }
  });

  useEffect(() => {
    const updateVerificationStatus = async () => {
      if (status === 'Approved' && adminIdentityId !== null) {
        try {
          const response = await verifyStudent({
            adminIdentityId,
            studentId,
            verifiedStudent: true,
          }).unwrap();
          refetch()
          console.log('Verification status updated (Approved):', response);
          toast.success("Updated verification status")
          router.push(`/faculty-dashboard/student-verification`);
        } catch (error) {
          console.error('Error updating verification status (Approved):', error);
        }
      }else if(status === 'Pending' && adminIdentityId !== null){
        try {
          const response = await verifyStudent({
            adminIdentityId,
            studentId,
            verifiedStudent: false,
          }).unwrap();
          refetch()
          toast.success("Updated verification status")
          router.push(`/faculty-dashboard/student-verification`);
        } catch (error) {
          console.error('Error updating verification status (Pending):', error);
        }
      }
    };

    updateVerificationStatus();
  }, [status, adminIdentityId, studentId, verifyStudent, refetch, router]);

  const handleStatusChange = (eventKey: string | null) => {
    if (eventKey) {
      setStatus(eventKey);
      console.log('Status changed to:', eventKey); // Debugging line
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
                      value={student?.data?.name || ''}
                      readOnly
                    />
                    <label htmlFor="fullname" className={`form-label`}>
                      Full name
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="contactNumber"
                      className="form-control"
                      value={student?.data?.contact || ''}
                      readOnly
                    />
                    <label htmlFor="contactNumber" className={`form-label`}>
                      Contact Number
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
                      value={student?.data?.description || ''}
                      readOnly
                    ></textarea>
                    <label htmlFor="description" className={`form-label`}>
                      Description
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
