import React from 'react';
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

const StatsRow: React.FC<{ organizationId: number }> = ({ organizationId }) => {
  
  const { data: projectData, isLoading: isProjectLoading, isError: isProjectError } = useGetProjectByOrganizationIdQuery(organizationId);
  const { data: mentorData, isLoading: isMentorLoading, isError: isMentorError } = useGetMentorsByOrganizationIdQuery(organizationId);

  const projectCount = React.useMemo(() => {
    if (isProjectLoading || isProjectError || !projectData) return '...'; 
    return projectData.data.length; 
  }, [projectData, isProjectLoading, isProjectError]);

  const mentorCount = React.useMemo(() => {
    if (isMentorLoading || isMentorError || !mentorData) return '...'; 
    return mentorData.data.length; 
  }, [mentorData, isMentorLoading, isMentorError]);

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<FaceIcon style={{ fontSize: '3rem' }} />}
            stat="20"
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
            stat="18"
            label="Proposals Received"
            color="brown"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRow;
