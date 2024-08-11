import React from 'react';
import './project-table.css';
import Link from 'next/link';
import { useGetProjectByIdQuery } from '../../../../../../../redux/features/project/projectApi';
import Loading from '@/app/components/loading/loading';

interface ProjectGridProps {
  id: number;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ id }) => {
  const { data: project, isLoading, error } = useGetProjectByIdQuery(id);

  if (isLoading) return <div><Loading/></div>;
  if (error || !project) return <div>Error loading project details.</div>;

  return (
    <div className="container project-form-container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              className="form-control"
              id="projectName"
              value={project?.data?.name}
              disabled
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={project?.data?.title}
              disabled
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={project?.data?.category}
              disabled
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows={4}
            value={project?.data?.description}
            disabled
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="technology">Technology</label>
          <textarea
            className="form-control"
            id="technology"
            rows={4}
            value={project?.data?.technologies}
            disabled
          ></textarea>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="text"
              className="form-control"
              id="dueDate"
              value={new Date(project?.data?.dueDate).toLocaleDateString()}
              disabled
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="resources">Resources</label>
            <input
              type="text"
              className="form-control"
              id="resources"
              value={project?.data?.resource}
              disabled
            />
          </div>
        </div>
        <Link href='/mentor-dashboard/mentor-projects'>
          <button type="button" className="btn btn-back">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default ProjectGrid;
