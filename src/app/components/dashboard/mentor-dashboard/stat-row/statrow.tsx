import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatCard from '../stat-card/statcard';
import FaceIcon from '@mui/icons-material/Face';
import TaskIcon from '@mui/icons-material/Task';
import NoteIcon from '@mui/icons-material/Note';
import { useGetProjectByMentorIdQuery } from '../../../../../../redux/features/project/projectApi';
//jj
const StatsRow: React.FC<{ mentorId: number }> = ({ mentorId }) => {
  
  const { data: projectData, isLoading, isError } = useGetProjectByMentorIdQuery(mentorId, {
    refetchOnMountOrArgChange: true,
  });

  const projectCount = React.useMemo(() => {
    if (isLoading || isError || !projectData) return '...';
    return projectData.data.length;
  }, [projectData, isLoading, isError]);

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<FaceIcon style={{ fontSize: '3rem' }} />}
            stat="20" 
            label="Students"
            color="green"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<TaskIcon style={{ fontSize: '3rem' }} />}
            stat={projectCount.toString()} 
            label="Projects"
            color="blue"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<NoteIcon style={{ fontSize: '3rem' }} />}
            stat="18" 
            label="Proposals"
            color="brown"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRow;
