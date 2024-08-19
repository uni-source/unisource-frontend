import React, { useEffect } from "react";
import { useGetStudentQuery } from "../../../../../../../redux/features/student/studentApi";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
interface ProjectGridProps {
  studentId: number;
}

const ProfileStats: React.FC<ProjectGridProps> = ({ studentId }) => {
  const {
    data: student,
    isLoading,
    isError,
    refetch,
  } = useGetStudentQuery(studentId, { refetchOnMountOrArgChange: true });
  useEffect(() => {
    refetch();
  }, [refetch]);
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
                  src={student?.data?.public_url || "/avatar.png"}
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

                {/* Student Role Text */}
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
                {/* Full Name */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {student?.data?.name || "N/A"}
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
                      {student?.data?.email || "N/A"}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                {/* Student ID */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Student ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {student?.data?.identityId || "N/A"}
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
                      {student?.data?.verifiedStudent
                        ? "Verified"
                        : "Not Verified"}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                {/* Score */}
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Score</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {student?.data?.score || "N/A"}
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

export default ProfileStats;
