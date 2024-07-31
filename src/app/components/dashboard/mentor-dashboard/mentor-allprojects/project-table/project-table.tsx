import React from 'react';
import './project-table.css';
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
            <label htmlFor="dueDate">Category</label>
            <input type="text" className="form-control" id="dueDate" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows={4}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="technology">Technology</label>
          <textarea className="form-control" id="description" rows={4}></textarea>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="dueDate">Due Date</label>
            <input type="text" className="form-control" id="dueDate" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Resources">Resources</label>
            <input type="email" className="form-control" id="resorces" />
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
