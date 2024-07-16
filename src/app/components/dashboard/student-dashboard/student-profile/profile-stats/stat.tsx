import React, { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Avatar from '@mui/material/Avatar';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useUpdateAvatarMutation } from "../../../../../../../redux/features/student/studentApi";
import toast from "react-hot-toast";
interface ProfileProfileStatProps {
  student: any;
  refetch: any;
}
const ProfileStat: React.FC<ProfileProfileStatProps> = ({
  student,
  refetch,
}) => {
  const [
    updateAvatar,
    {
      isLoading: updateAvatarIsLoading,
      isSuccess: updateAvatarIsSuccess,
      isError: updateAvatarIsError,
      error: updateAvatarError,
    },
  ] = useUpdateAvatarMutation();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (student?.data?.public_url) {
      console.log(student);
      setImage(student?.data?.public_url);
    }
  }, [student,refetch]);
  useEffect(() => {
    if (updateAvatarIsSuccess) {
      toast.success("User sign up successful");
    }
    if (updateAvatarIsError) {
      if ("data" in updateAvatarError) {
        const errorData =
          (updateAvatarError as any) || "Profile image update failed";
        toast.error(errorData?.data?.message);
      }
    }
  }, [updateAvatarIsSuccess, updateAvatarError, updateAvatarIsError]);

  const handleUpdate = async (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('public_id', student?.data?.public_id);
      formData.append('identityId', student?.data?.identityId);
  
      try {
        await updateAvatar(formData).unwrap();
      } catch (err) {
        console.error(err);
      }
      
      refetch();
    }
  };

  return (
    <section style={{ backgroundColor: "white" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard
              className="mb-4"
              style={{
                backgroundColor: "var(--light-grey)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              <MDBCardBody
                className="text-center"
                style={{ position: "relative", padding: "10px" }}
              >
                {image ? (
        <MDBCardImage
          src={image}
          alt="avatar"
          className="rounded-circle"
          fluid
          style={{
            width: "180px",
            height: "180px",
            marginBottom: "25px",
            marginTop: "20px",
            objectFit: "contain",
            zIndex: 10,
          }}
        />
      ) : (
        <Avatar
          alt="avatar"
          sx={{
            width: 180,
            height: 180,
            marginBottom: "25px",
            marginTop: "20px",
            zIndex: 10,
          }}
        >
          {/* You can add initials or an icon inside the Avatar if needed */}
        </Avatar>
      )}
                <input
                  type="file"
                  id="banner"
                  accept="image/*"
                  onChange={handleUpdate}
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="banner"
                  style={{
                    position: "absolute",
                    bottom: "65px",
                    right: "30%",
                    cursor: "pointer",
                    zIndex: 20,
                  }}
                >
                  <AiOutlineCamera
                    style={{ color: "black", fontSize: "25px" }}
                  />
                </label>
                <p style={{ marginBottom: "1rem" }}>Student</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard
              className="mb-4"
              style={{
                backgroundColor: "var(--light-grey)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Avindu Kavinda
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      ict21xxx@fot.sjp.ac.lk
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Student ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">10100</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Account Status</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Verified <VerifiedUserIcon />
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Score</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">30</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ProfileStat;
