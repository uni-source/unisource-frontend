import React, { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useUpdateOrganizationAvatarMutation } from "../../../../../../../redux/features/organization/organizationApi";
import toast from "react-hot-toast";
interface ProfileProfileStatProps {
  organization: any;
  refetch: any;
}
const ProfileStat: React.FC<ProfileProfileStatProps> = ({
  organization,
  refetch,
}) => {
  const [
    updateOrganizationAvatar,
    {
      isLoading: updateAvatarIsLoading,
      isSuccess: updateAvatarIsSuccess,
      isError: updateAvatarIsError,
      error: updateAvatarError,
    },
  ] = useUpdateOrganizationAvatarMutation();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (organization?.data?.public_url) {
      setImage(organization?.data?.public_url);
    }
  }, [organization, refetch]);
  useEffect(() => {
    if (updateAvatarIsSuccess) {
      toast.success("Organization profile picture upload successful");
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
      formData.append("file", file);
      formData.append("public_id", organization?.data?.public_id);
      formData.append("identityId", organization?.data?.identityId);
      await updateOrganizationAvatar(formData).unwrap();
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
                  <MDBCardImage
                    src="/organization-avatar.png"
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
                <p style={{ marginBottom: "1rem" }}>Organization</p>
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
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {organization?.data?.name}
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
                      {organization?.data?.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Identity ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {organization?.data?.identityId}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Account Status</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {organization?.data?.verified
                        ? "Verified"
                        : "Not Verified"}{" "}
                      {organization?.data?.verified ? (
                        <VerifiedUserIcon />
                      ) : null}
                    </MDBCardText>
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
