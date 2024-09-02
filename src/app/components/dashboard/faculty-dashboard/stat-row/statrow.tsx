import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatCard from '../stat-card/statcard';
import FaceIcon from '@mui/icons-material/Face';
import TaskIcon from '@mui/icons-material/Task';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NoteIcon from '@mui/icons-material/Note';
import { useGetAllStudentsQuery } from '../../../../../../redux/features/student/studentApi'; 
import { useGetAllProjectsQuery } from '../../../../../../redux/features/project/projectApi'; 
import { useGetAllMentorsQuery } from '../../../../../../redux/features/mentor/mentorApi'; 
import { useGetAllOrganizationsQuery } from '../../../../../../redux/features/organization/organizationApi'; 

const StatsRow: React.FC = () => {
  // State for storing counts
  const [verifiedStudentCount, setVerifiedStudentCount] = useState(0);
  const [approvedProjectCount, setApprovedProjectCount] = useState(0);
  const [mentorCount, setMentorCount] = useState(0);
  const [verifiedOrganizationCount, setVerifiedOrganizationCount] = useState(0);

  // Fetch all students and calculate the count of verified students
  const { data: studentData } = useGetAllStudentsQuery({});
  useEffect(() => {
    if (studentData && studentData.data) {
      const count = studentData.data.filter((student: any) => student.verifiedStudent).length;
      setVerifiedStudentCount(count);
    }
  }, [studentData]);

  // Fetch all projects and calculate the count of approved projects
  const { data: projectData } = useGetAllProjectsQuery({});
  useEffect(() => {
    if (projectData && projectData.data) {
      const count = projectData.data.filter((project: any) => project.status === 'APPROVED').length;
      setApprovedProjectCount(count);
    }
  }, [projectData]);

  // Fetch all mentors and calculate the total number of mentors
  const { data: mentorData } = useGetAllMentorsQuery({});
  useEffect(() => {
    if (mentorData && mentorData.data) {
      setMentorCount(mentorData.data.length);
    }
  }, [mentorData]);

  // Fetch all organizations and calculate the count of verified organizations
  const { data: organizationData } = useGetAllOrganizationsQuery({});
  useEffect(() => {
    if (organizationData && organizationData.data) {
      const count = organizationData.data.filter((organization: any) => organization.verifiedOrganization).length;
      setVerifiedOrganizationCount(count);
    }
  }, [organizationData]);

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<FaceIcon style={{ fontSize: '3rem' }} />}
            stat={verifiedStudentCount.toString()}
            label="Verified Students"
            color="green"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<TaskIcon style={{ fontSize: '3rem' }} />}
            stat={approvedProjectCount.toString()}
            label="Approved Projects"
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
            stat={verifiedOrganizationCount.toString()}
            label="Verified Organizations"
            color="brown"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRow;
