import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { 
    MDBCol, 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCardText, 
    MDBCardBody, 
    MDBCardImage 
} from "mdb-react-ui-kit";

interface ProfileProfileStatProps {
    student: any;
    refetch: any;
}

const ProfileStats: React.FC = () => {
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
                                    src={"/avatar.png"}
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

                                {/* File Input */}
                                <input
                                    type="file"
                                    id="banner"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                />

                                {/* Camera Icon Label */}
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
                                            {/*Name here*/}
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
                                            {/*Email here*/}
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
                                            {/*Student id here*/}
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
                                            {/*Verification stats here*/}
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
                                            {/*Score here*/}
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
