import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatCard from '../stat-card/statcard';
import FaceIcon from '@mui/icons-material/Face';
import TaskIcon from '@mui/icons-material/Task';
import NoteIcon from '@mui/icons-material/Note';
import { useGetProjectByMentorIdQuery } from '../../../../../../redux/features/project/projectApi';
import { useGetProposalsByMentorIdQuery } from '../../../../../../redux/features/proposal/proposalApi';
import { useGetStudentHasProjectByMentorIdQuery } from '../../../../../../redux/features/project/studentHasProjectApi'; 

const StatsRow: React.FC<{ mentorId: number }> = ({ mentorId }) => {
  const { data: projectData, isLoading: isLoadingProjects, isError: isErrorProjects } = useGetProjectByMentorIdQuery(mentorId, {
    refetchOnMountOrArgChange: true,
  });

  const { data: proposalData, isLoading: isLoadingProposals, isError: isErrorProposals } = useGetProposalsByMentorIdQuery(mentorId, {
    refetchOnMountOrArgChange: true,
  });

  const { data: studentData, isLoading: isLoadingStudents, isError: isErrorStudents } = useGetStudentHasProjectByMentorIdQuery(mentorId, {
    refetchOnMountOrArgChange: true,
  });

  const projectCount = React.useMemo(() => {
    if (isLoadingProjects || isErrorProjects || !projectData) return '0';
    return projectData.data.length;
  }, [projectData, isLoadingProjects, isErrorProjects]);

  const approvedProposalCount = React.useMemo(() => {
    if (isLoadingProposals || isErrorProposals || !proposalData) return '0';
    const approvedProposals = proposalData.data.filter((proposal: any) => proposal.status === "Approved");
    return approvedProposals.length;
  }, [proposalData, isLoadingProposals, isErrorProposals]);

  const studentCount = React.useMemo(() => {
    if (isLoadingStudents || isErrorStudents || !studentData) return '0';
    const uniqueStudents = new Set(studentData.data.map((student: any) => student.studentId));
    return uniqueStudents.size;
  }, [studentData, isLoadingStudents, isErrorStudents]);

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<FaceIcon style={{ fontSize: '3rem' }} />}
            stat={studentCount.toString()} 
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
