import React, { useEffect } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useGetOrganizationQuery } from "../../../../../../../redux/features/organization/organizationApi";
import { 
    MDBCol, 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCardText, 
    MDBCardBody, 
    MDBCardImage 
} from "mdb-react-ui-kit";

interface ProjectGridProps {
    id: number;
  }
  
const ProfileStats: React.FC<ProjectGridProps> = ({id}) => {
    const { data:organization, isLoading, isError,refetch} =useGetOrganizationQuery(id,
        { refetchOnMountOrArgChange: true });
        useEffect(() => {
          refetch()
        }, [refetch])
        
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
                                {/* Avatar Image */}
                                <MDBCardImage
                                    src={organization?.data?.public_url ||"/organization-avatar.png"}
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

                                

                                {/* Organization Role Text */}
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
                                {/* Full Name */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                        {organization?.data?.name || 'N/A'}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />

                                {/* Email */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                        {organization?.data?.email || 'N/A'}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />

                                {/* Student ID */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Identity ID</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                        {organization?.data?.identityId || 'N/A'}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />

                                {/* Account Status */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Account Status</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                        {organization?.data?.verifiedOrganization ? 'Verified' : 'Not Verified'}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default ProfileStats;
