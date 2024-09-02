'use client';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Select, MenuItem, FormControl } from '@mui/material';
import toast from 'react-hot-toast';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useGetMentorsByOrganizationIdQuery } from '../../../../../../redux/features/mentor/mentorApi';
import { useCreateProjectMutation } from '../../../../../../redux/features/project/projectApi';
import './create-project-component.css';

interface OrganizationIdProps {
  organizationId: number;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Project name is required'),
  title: Yup.string().required('Title is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
  technologies: Yup.string().required('Technologies are required'),
  resource: Yup.string().required('Resource is required'),
  dueDate: Yup.date().required('Due date is required'),
  mentorID: Yup.string().required('Mentor is required'),
});

const CreateProject: React.FC<OrganizationIdProps> = ({ organizationId }) => {
  const { data: mentors, error: mentorsError } = useGetMentorsByOrganizationIdQuery(organizationId);
  const [createProject, { isLoading, isSuccess, isError, error }] = useCreateProjectMutation();
useEffect(() => {
 console.log(organizationId)
}, [organizationId])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Project created successfully');
      formik.resetForm();
    }
    if (isError) {
      if ('data' in error) {
        const errorData = (error as any) || 'Creation Error';
        toast.error(errorData?.data?.message);
      }
    }
  }, [isSuccess, isError, error]);

  const formik = useFormik({
    initialValues: {
      name: '',
      title: '',
      category: '',
      description: '',
      technologies: '',
      resource: '',
      dueDate: '',
      mentorID: '',
      organizationID: organizationId,  // Include organizationId in initialValues
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await createProject(values).unwrap();
      } catch (err) {
        toast.error('Failed to create project');
      }
    },
  });

  useEffect(() => {
    if (mentorsError) {
      toast.error('Failed to fetch mentors');
    }
  }, [mentorsError]);

  return (
    <MDBContainer id="mdb-container">
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className="overall">
            <MDBCardBody>
              <h4>Create Project</h4>
              <br />
              <form onSubmit={formik.handleSubmit}>
                <MDBRow>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="name">Project name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="Enter project name"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </MDBCol>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="Enter title"
                      />
                      {formik.touched.title && formik.errors.title ? (
                        <div className="error">{formik.errors.title}</div>
                      ) : null}
                    </div>
                  </MDBCol>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="category">Category</label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="Enter category"
                      />
                      {formik.touched.category && formik.errors.category ? (
                        <div className="error">{formik.errors.category}</div>
                      ) : null}
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mt-3">
                  <MDBCol md="12">
                    <label htmlFor="description">Description</label>
                    <div className="custom-input mb-4">
                      <textarea
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="Enter description"
                      ></textarea>
                      {formik.touched.description &&
                      formik.errors.description ? (
                        <div className="error">{formik.errors.description}</div>
                      ) : null}
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mt-3">
                  <MDBCol md="12">
                    <label htmlFor="technologies" id="label-technologies">
                      Technologies
                    </label>
                    <div className="custom-input mb-4">
                      <textarea
                        id="technologies"
                        name="technologies"
                        value={formik.values.technologies}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="Enter technologies"
                      ></textarea>
                      {formik.touched.technologies &&
                      formik.errors.technologies ? (
                        <div className="error">
                          {formik.errors.technologies}
                        </div>
                      ) : null}
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="custom-input mb-4">
                      <label htmlFor="resource" id="label-resources">
                        Project Resource (Github link)
                      </label>
                      <input
                        type="text"
                        id="resource"
                        name="resource"
                        value={formik.values.resource}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="Enter Github link"
                      />
                      {formik.touched.resource && formik.errors.resource ? (
                        <div className="error">{formik.errors.resource}</div>
                      ) : null}
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="4">
                    <div className="custom-input mb-4">
                      <label htmlFor="dueDate" id="label-duedate">
                        Due Date
                      </label>
                      <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formik.values.dueDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="YYYY-MM-DD"
                      />
                      {formik.touched.dueDate && formik.errors.dueDate ? (
                        <div className="error">{formik.errors.dueDate}</div>
                      ) : null}
                    </div>
                  </MDBCol>
                  <MDBCol md="8">
                    <FormControl
                      fullWidth
                      variant="outlined"
                      className="custom-input mb-4"
                    >
                      <label htmlFor="mentorID" id="label-mentor">
                        Assign Mentor
                      </label>
                      <Select
                        labelId="mentor-label"
                        id="mentorID"
                        name="mentorID"
                        value={formik.values.mentorID}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {mentors?.data?.map((mentor:any) => (
                          <MenuItem key={mentor.id} value={mentor.id}>
                            {mentor.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {formik.touched.mentorID && formik.errors.mentorID ? (
                        <div className="error">{formik.errors.mentorID}</div>
                      ) : null}
                    </FormControl>
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow className="mt-4">
                  <MDBCol md="3">
                    <MDBBtn className="ac-info-button" type="submit">
                      {isLoading ? 'Creating...' : 'Create Project'}
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBBtn
                      className="ac-info-button"
                      type="button"
                      onClick={() => formik.resetForm()}
                    >
                      Clear details

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

export default CreateProject;
