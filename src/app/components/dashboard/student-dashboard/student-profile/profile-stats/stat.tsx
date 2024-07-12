import React from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';


export default function ProfileStat() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4" style={{ backgroundColor: 'var(--light-grey)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://media.licdn.com/dms/image/D4E03AQFkbHfoa8g2nw/profile-displayphoto-shrink_400_400/0/1718241961893?e=2147483647&v=beta&t=fWIji-DWP0-uUIcfBep7y8xwthVRYDkBwy9rYRWXx5M"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '180px', height: '180px', marginBottom: '25px', marginTop: '20px' }}
                  fluid />
                <p className=" mb-1">Student</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4" 
                style={{ backgroundColor: 'var(--light-grey)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'}}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Avindu Kavinda</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">ict21xxx@fot.sjp.ac.lk</MDBCardText>
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
                    <MDBCardText className="text-muted">Verified <VerifiedUserIcon/></MDBCardText>
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
}