import React from 'react';
import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';

interface StatCardProps {
  icon: React.ReactElement<SvgIconProps>;
  stat: string;
  label: string;
  color: string;
}

const CustomCard = styled(Card)({
  border: 'none',
  borderRadius: '1rem',
  backgroundColor: '#F5F5F5 !important',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const IconContainer = styled('div')(({ color }) => ({
  marginRight: '1rem',
  color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  backgroundColor: 'white',
}));

const StatCard: React.FC<StatCardProps> = ({ icon, stat, label, color }) => {
  return (
    <CustomCard className="stat-card">
      <Card.Body className="d-flex align-items-center">
        <IconContainer color={color}>
          {icon}
        </IconContainer>
        <div>
          <Typography variant="h5" component="div">
            {stat}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {label}
          </Typography>
        </div>
      </Card.Body>
    </CustomCard>
  );
};

export default StatCard;