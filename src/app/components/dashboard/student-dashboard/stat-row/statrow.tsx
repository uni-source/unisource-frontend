import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatCard from '../stat-card/statcard';
import ArticleIcon from '@mui/icons-material/Article';
import TaskIcon from '@mui/icons-material/Task';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useGetAllProjectsQuery } from '../../../../../../redux/features/project/projectApi'; 
import { useGetProjectsByStudentIdQuery } from '../../../../../../redux/features/project/studentHasProjectApi'; 
interface Student {
  contact?: string;
  description?: string;
  email?: string;
  identityId?: number;
  name?: string;
  public_id?: string;
  public_url?: string;
  score?: number;
  verified?: boolean;
}
interface StatsRowProps {
  student?: Student;
  studentId: number;
}

const StatsRow: React.FC<StatsRowProps> = ({ student, studentId }) => {
  const { data: projectsData } = useGetAllProjectsQuery({});
  const { data: studentProjectsData } = useGetProjectsByStudentIdQuery(studentId);

  const availableProjectsCount = projectsData?.data?.length || 0;
  const projectContributionCount = studentProjectsData?.data?.length || 0;

  const completenessFields: Array<keyof Student> = ['contact', 'description', 'public_id'];
  const filledFields = student
    ? completenessFields.filter(field => !!student[field])
    : [];
  
  const profileCompleteness = completenessFields.length > 0
    ? Math.round((filledFields.length / completenessFields.length) * 100)
    : 0;

  const badges = [
    { level: 'LEVEL 1', name: 'Bronze Contributor', description: 'Issues when Student reach score more than 20 points', image: '/assets/badges/bronze.png', minScore: 20 },
    { level: 'LEVEL 2', name: 'Silver Contributor', description: 'Issues when Student reach score more than 50 points', image: '/assets/badges/silver.png', minScore: 50 },
    { level: 'LEVEL 3', name: 'Gold Contributor', description: 'Issues when Student reach score more than 70 points', image: '/assets/badges/gold.png', minScore: 70 },
    { level: 'LEVEL 4', name: 'Platinum Contributor', description: 'Issues when Student reach score more than 90 points', image: '/assets/badges/platinum.png', minScore: 90 },
    { level: 'LEVEL 5', name: 'Diamond Contributor', description: 'Issues when Student reach score more than 150 points', image: '/assets/badges/diamond.png', minScore: 150 },
  ];

  const currentScore = student?.score ?? 0;
  const currentBadge = badges.find(badge => currentScore >= badge.minScore) || badges[0];


  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<ArticleIcon style={{ fontSize: '3rem' }} />}
            stat={availableProjectsCount.toString()}
            label="Available Projects"
            color="blue"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<TaskIcon style={{ fontSize: '3rem' }} />}
            stat={projectContributionCount.toString()}
            label="Project Contribution"
            color="green"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<ManageAccountsIcon style={{ fontSize: '3rem' }} />}
            stat={`${profileCompleteness}%`}
            label="Profile Completeness"
            color="purple"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            image={currentBadge.image}
            stat={currentBadge.level}
            label={currentBadge.name}
            color="red"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRow;
