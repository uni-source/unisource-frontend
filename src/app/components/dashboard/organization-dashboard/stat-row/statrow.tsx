import React, { useMemo, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatCard from '../stat-card/statcard';
import FaceIcon from '@mui/icons-material/Face';
import TaskIcon from '@mui/icons-material/Task';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NoteIcon from '@mui/icons-material/Note';
import { useGetProjectByOrganizationIdQuery } from '../../../../../../redux/features/project/projectApi'; 
import { useGetMentorsByOrganizationIdQuery } from '../../../../../../redux/features/mentor/mentorApi'; 
import { useGetProposalsByOrganizationIdQuery } from '../../../../../../redux/features/proposal/proposalApi'; 
import { useGetStudentHasProjectByOrganizationIdQuery } from '../../../../../../redux/features/project/studentHasProjectApi';

const StatsRow: React.FC<{ organizationId: number }> = ({ organizationId }) => {
  const { data: projectData, isLoading: isProjectLoading, isError: isProjectError } = useGetProjectByOrganizationIdQuery(organizationId);
  const { data: mentorData, isLoading: isMentorLoading, isError: isMentorError } = useGetMentorsByOrganizationIdQuery(organizationId);
  const { data: proposalData, isLoading: isProposalLoading, isError: isProposalError } = useGetProposalsByOrganizationIdQuery(organizationId);
  const { data: studentHasProject, isLoading: isStudentHasProject, isError: isStudentHasProjectError } = useGetStudentHasProjectByOrganizationIdQuery(organizationId);
  const projectCount = useMemo(() => {
    if (isProjectLoading || isProjectError || !projectData) return '0'; 
    return projectData.data.length; 
  }, [projectData, isProjectLoading, isProjectError]);

  const mentorCount = useMemo(() => {
    if (isMentorLoading || isMentorError || !mentorData) return '0'; 
    return mentorData.data.length; 
  }, [mentorData, isMentorLoading, isMentorError]);

  const approvedProposalCount = useMemo(() => {
    if (isProposalLoading || isProposalError || !proposalData) return '0';
    return proposalData.data.filter((proposal: any) => proposal.status === 'Approved').length;
  }, [proposalData, isProposalLoading, isProposalError]);

  const availableStudentsCount = useMemo(() => {
    if (isStudentHasProject|| isStudentHasProjectError|| !studentHasProject) return '0';
    
    const uniqueStudentIds = new Set(studentHasProject.data.map((project: any) => project.studentId));
    return uniqueStudentIds.size.toString();
  }, [studentHasProject, isStudentHasProject, isStudentHasProjectError]);
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<FaceIcon style={{ fontSize: '3rem' }} />}
            stat={availableStudentsCount}
            label="Available Students"
            color="green"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<TaskIcon style={{ fontSize: '3rem' }} />}
            stat={projectCount.toString()}
            label="Projects Published"
            color="blue"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<SupportAgentIcon style={{ fontSize: '3rem' }} />}
            stat={mentorCount.toString()}
            label="Mentors"
            color="purple"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<NoteIcon style={{ fontSize: '3rem' }} />}
            stat={approvedProposalCount.toString()}
            label="Approved Proposals"
            color="brown"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRow;
