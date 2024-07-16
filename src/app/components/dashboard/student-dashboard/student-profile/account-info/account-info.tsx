import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import { useUpdateDescriptionMutation } from '../../../../../../../redux/features/student/studentApi';
import './account-info.css';
import toast from 'react-hot-toast';

const AccountInformationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    contactNumber: '',
    description: ''
  });

  const [updateDescription] = useUpdateDescriptionMutation();
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  }, [userId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await updateDescription({ description: formData.description, identityId: userId });
      toast.success("Description updated successfully");
    } catch (error) {
        toast.error("Failed to update description"); 
    }
  };

  const handleClear = () => {
    setFormData({ fullname: '', contactNumber: '', description: '' });
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
                    <input type="text" id="fullname" className="form-control" value={formData.fullname} onChange={handleInputChange} />
                    <label htmlFor="fullname" className={`form-label ${formData.fullname ? 'floating' : ''}`}>Full name</label>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input type="text" id="contactNumber" className="form-control" value={formData.contactNumber} onChange={handleInputChange} />
                    <label htmlFor="contactNumber" className={`form-label ${formData.contactNumber ? 'floating' : ''}`}>Contact Number</label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <textarea id="description" className="form-control" value={formData.description} onChange={handleInputChange}></textarea>
                    <label htmlFor="description" className={`form-label ${formData.description ? 'floating' : ''}`}>Description</label>
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
