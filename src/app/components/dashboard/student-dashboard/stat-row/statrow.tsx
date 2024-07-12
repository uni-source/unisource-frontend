// StatsRow.tsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatCard from '../stat-card/statcard';
import ArticleIcon from '@mui/icons-material/Article';
import TaskIcon from '@mui/icons-material/Task';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VerifiedIcon from '@mui/icons-material/Verified';

const StatsRow: React.FC = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<ArticleIcon style={{ fontSize: '3rem' }} />}
            stat="20"
            label="Available Projects"
            color="blue"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<TaskIcon style={{ fontSize: '3rem' }} />}
            stat="3"
            label="Project Contribution"
            color="green"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<ManageAccountsIcon style={{ fontSize: '3rem' }} />}
            stat="30%"
            label="Profile Completeness"
            color="purple"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<VerifiedIcon style={{ fontSize: '3rem' }} />}
            stat="Silver"
            label="Current badge"
            color="red"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRow;
