import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "./psw-setting.css";
import { useUpdatePasswordMutation } from "../../../../../../../redux/features/user/userApi";
import toast from "react-hot-toast";

interface ProfileProfileStatProps {
  organization: any;
  refetch: any;
}

const PasswordSettingsForm: React.FC<ProfileProfileStatProps> = ({
  organization,
  refetch,
}) => {
  const [updatePassword] = useUpdatePasswordMutation();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    showPassword: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSaveChanges = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }
    try {
      await updatePassword({
        id: organization?.data?.identityId,
        password: formData.newPassword,
        oldPassword: formData.oldPassword,
      });
      toast.success("Password reset successfully");
    } catch (error) {
      toast.error("Failed to update");
    }
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      showPassword: false,
    });
  };

  const inputType = formData.showPassword ? "text" : "password";

  return (
    <MDBContainer className="margin-applier">
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className="overall">
            <MDBCardBody>
              <h4>Password Settings</h4>
              <br />
              <br />
              <MDBRow>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type={inputType}
                      id="oldPassword"
                      className="form-control"
                      value={formData.oldPassword}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="oldPassword"
                      className={`form-label ${
                        formData.oldPassword ? "floating" : ""
                      }`}
                    >
                      Old Password
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type={inputType}
                      id="newPassword"
                      className="form-control"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="newPassword"
                      className={`form-label ${
                        formData.newPassword ? "floating" : ""
                      }`}
                    >
                      New Password
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type={inputType}
                      id="confirmPassword"
                      className="form-control"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="confirmPassword"
                      className={`form-label ${
                        formData.confirmPassword ? "floating" : ""
                      }`}
                    >
                      Confirm New Password
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type="checkbox"
                      id="showPassword"
                      checked={formData.showPassword}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="showPassword"
                      className="form-label-checkbox"
                    >
                      Show password
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="password-btn" onClick={handleSaveChanges}>
                    Save changes
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <MDBBtn className="password-btn">Clear</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PasswordSettingsForm;
