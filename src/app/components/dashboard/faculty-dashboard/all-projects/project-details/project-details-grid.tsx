import React from 'react';
import './project-details-grid.css';
import Link from 'next/link';

const ProjectGrid: React.FC = () => {
  return (
    <div className="container project-form-container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="projectName">Project Name</label>
            <input type="text" className="form-control" id="projectName" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="dueDate">Source</label>
            <input type="text" className="form-control" id="dueDate" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows={4}></textarea>
        </div>
        <Link href='/faculty-dashboard/all-projects'>
        <button type="button" className="btn btn-back">Go Back</button>
        </Link>
        <button type="button" className="btn btn-back">Pending</button>
      </form>
    </div>
  );
};

export default ProjectGrid;
