import './organization-create-mentor.css';
import React, { useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCreateMentorMutation } from '../../../../../../redux/features/mentor/mentorApi'; 
import toast from 'react-hot-toast';

interface OrganizationIdProps {
  organizationId: number;
}

const CreateMentor: React.FC<OrganizationIdProps> = ({ organizationId }) => {
  const [createMentor, { isLoading, isSuccess, error, isError }] = useCreateMentorMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Mentor account created successfully!");
      formik.resetForm();
    }
    if (isError) {
      const errorData = (error as any) || "Error";
      toast.error(errorData?.data?.message);
    }
  }, [isSuccess, isError, error]);

  const formik = useFormik({
    initialValues: {
      mentorName: '',
      mentorEmail: '',
      mentorPassword: '',
    },
    validationSchema: Yup.object({
      mentorName: Yup.string().required('Mentor name is required'),
      mentorEmail: Yup.string().email('Invalid email address').required('Email is required'),
      mentorPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Ensure organizationId is included in the payload
        const payload = {
          name: values.mentorName,
          email: values.mentorEmail,
          password: values.mentorPassword,
          organizationId,  // Include organizationId in the request payload
        };

        await createMentor(payload).unwrap();
      } catch (err) {
        console.error('Failed to create mentor:', err);
      }
    },
  });

  return (
    <MDBContainer id='mdb-container'>
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className='overall'>
            <MDBCardBody>
              <h4>Create Mentor Account</h4>
              <form onSubmit={formik.handleSubmit} noValidate>
                <MDBRow>
                  <MDBCol md="5">
                    <div className="custom-input mb-4">
                      <label htmlFor="mentorName">Mentor Name</label>
                      <input
                        type="text"
                        id="mentorName"
                        className="form-control"
                        value={formik.values.mentorName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.mentorName && formik?.errors?.mentorName && (
                        <span className="text-danger">{formik.errors.mentorName}</span>
                      )}
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="5">
                    <div className="custom-input mb-4">
                      <label htmlFor="mentorEmail">Email</label>
                      <input
                        type="text"
                        id="mentorEmail"
                        className="form-control"
                        value={formik.values.mentorEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.mentorEmail && formik.errors.mentorEmail && (
                        <span className="text-danger">{formik.errors.mentorEmail}</span>
                      )}
                    </div>
                  </MDBCol>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="mentorPassword">Password</label>
                      <input
                        type="password"
                        id="mentorPassword"
                        className="form-control"
                        value={formik.values.mentorPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.mentorPassword && formik.errors.mentorPassword && (
                        <span className="text-danger">{formik.errors.mentorPassword}</span>
                      )}
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mt-4">
                  <MDBCol md="auto">
                    <MDBBtn className="ac-info-button" type="submit">
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto">
                    <MDBBtn className="ac-info-button" type="button" onClick={formik.handleReset}>
                      Clear
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CreateMentor;
