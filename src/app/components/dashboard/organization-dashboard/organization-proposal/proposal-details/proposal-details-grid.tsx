import React from 'react';
import './proposal-details-grid.css';
import Link from 'next/link';

const ProposalGrid: React.FC = () => {
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
            <label htmlFor="dueDate">Due Date</label>
            <input type="text" className="form-control" id="dueDate" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows={4}></textarea>
        </div>
        <div className="form-group">
          <label>Project Proposal for UniSource</label>
          <div className="pdf-container">
            <img src="pdf-icon.png" alt="PDF Icon" className="pdf-icon" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="studentName">Student Name</label>
            <input type="text" className="form-control" id="studentName" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="studentEmail">Student Email</label>
            <input type="email" className="form-control" id="studentEmail" />
          </div>
        </div>
        <Link href='/organization-dashboard/organization-proposals'>
        <button type="button" className="btn btn-back">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default ProposalGrid;
