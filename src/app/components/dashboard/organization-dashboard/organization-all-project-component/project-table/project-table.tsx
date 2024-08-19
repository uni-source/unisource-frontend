'use client';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './project-table.css';
import toast from 'react-hot-toast';
import { useGetProjectByIdQuery, useUpdateProjectMutation } from '../../../../../../../redux/features/project/projectApi';
import Loading from '@/app/components/loading/loading';

interface ProjectGridProps {
    id: number;
    refetch:any;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ id ,refetch}) => {
    const { data: project, error: projectError, isLoading } = useGetProjectByIdQuery(id);
    const [updateProject] = useUpdateProjectMutation();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            title: '',
            category: '',
            description: '',
            technologies: '',
            resource: '',
            dueDate: '',
            id: id,
            organizationID: 0,
            mentorID: 0,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Project Name is required'),
            title: Yup.string().required('Title is required'),
            category: Yup.string().required('Category is required'),
            description: Yup.string().required('Description is required'),
            technologies: Yup.string().required('Technologies are required'),
            resource: Yup.string().required('Resource is required'),
            dueDate: Yup.date().required('Due Date is required'),
        }),
        onSubmit: async (values) => {
            try {
                await updateProject(values).unwrap();
                toast.success('Project updated successfully');
                refetch()
                router.push('/organization-dashboard/organization-all-projects');
            } catch (error) {
                toast.error('Failed to update project');
            }
        },
    });

    useEffect(() => {
        if (project) {
            console.log(project)
            formik.setValues({
                name: project?.data?.name || '',
                title: project?.data?.title || '',
                category: project?.data?.category || '',
                description: project?.data?.description || '',
                technologies: project?.data?.technologies || '',
                resource: project?.data?.resource || '',
                dueDate: project?.data?.dueDate || '',
                id: project?.data?.id,
                organizationID: project?.data?.organizationID,
                mentorID: project?.data?.mentorID,
            });
        }
    }, [project]);

    if (isLoading) return <Loading/>;

    return (
        <div className="container project-form-container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="name">Project Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            {...formik.getFieldProps('title')}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="error">{formik.errors.title}</div>
                        ) : null}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            {...formik.getFieldProps('category')}
                        />
                        {formik.touched.category && formik.errors.category ? (
                            <div className="error">{formik.errors.category}</div>
                        ) : null}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows={4}
                        {...formik.getFieldProps('description')}
                    ></textarea>
                    {formik.touched.description && formik.errors.description ? (
                        <div className="error">{formik.errors.description}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="technologies">Technologies</label>
                    <textarea
                        className="form-control"
                        id="technologies"
                        rows={4}
                        {...formik.getFieldProps('technologies')}
                    ></textarea>
                    {formik.touched.technologies && formik.errors.technologies ? (
                        <div className="error">{formik.errors.technologies}</div>
                    ) : null}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="dueDate">Due Date</label>
                        <input
                            type="text"
                            className="form-control"
                            id="dueDate"
                            {...formik.getFieldProps('dueDate')}
                        />
                        {formik.touched.dueDate && formik.errors.dueDate ? (
                            <div className="error">{formik.errors.dueDate}</div>
                        ) : null}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="resource">Resources</label>
                        <input
                            type="text"
                            className="form-control"
                            id="resource"
                            {...formik.getFieldProps('resource')}
                        />
                        {formik.touched.resource && formik.errors.resource ? (
                            <div className="error">{formik.errors.resource}</div>
                        ) : null}
                    </div>
                </div>
                <button type="submit" className="btn btn-back">
                    Update
                </button>
                <Link href='/organization-dashboard/organization-all-projects'>
                    <button type="button" className="btn btn-back">Back</button>
                </Link>
            </form>
        </div>
    );
};

export default ProjectGrid;
