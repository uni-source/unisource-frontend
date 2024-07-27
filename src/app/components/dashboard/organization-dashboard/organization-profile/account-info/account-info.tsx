import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import { useUpdateDescriptionMutation } from '../../../../../../../redux/features/student/studentApi';
import { useUpdateUserMutation } from '../../../../../../../redux/features/user/userApi';
import './account-info.css';
import toast from 'react-hot-toast';

interface ProfileProfileStatProps {
  student: any;
  refetch: any;
}

const AccountInformationForm: React.FC<ProfileProfileStatProps> = ({ student, refetch }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    contactNumber: '',
    description: ''
  });

  const [updateDescription] = useUpdateDescriptionMutation();
  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    if (student) {
      console.log(student);
      setFormData({
        fullname: student?.data?.name || '',
        contactNumber: student?.data?.contact || '',
        description: student?.data?.description || ''
      });
    }
  }, [student]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await updateUser({id:student?.data?.identityId,name:formData.fullname,contact:formData.contactNumber})
      await updateDescription({ description: formData.description, identityId: student?.data?.identityId }).then(()=>{
      toast.success("Description updated successfully");
      refetch();
      handleClear();
      }).catch(()=>{
        toast.error("Failed to update description");
      });
      
    } catch (error) {
      toast.error("Failed to update");
      handleClear();
    }
  };

  const handleClear = () => {
    setFormData({
      fullname: student?.data?.name || '',
      contactNumber: student?.data?.contact || '',
      description: student?.data?.description || ''
    });
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
                      value={formData.fullname}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="fullname" className={`form-label ${formData.fullname ? 'floating' : ''}`}>
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
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="contactNumber" className={`form-label ${formData.contactNumber ? 'floating' : ''}`}>
                      Contact Number
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button" onClick={handleSaveChanges}>
                    Save changes
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button" onClick={handleClear}>
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

export default AccountInformationForm;
