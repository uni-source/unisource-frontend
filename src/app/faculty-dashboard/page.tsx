'use client';
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Loading from '../components/loading/loading';
import { useGetMentorByIdQuery } from '../../../redux/features/mentor/mentorApi';
import MiniDrawer from '../components/dashboard/faculty-dashboard/side-nav/sidenav';
import StatsRow from '../components/dashboard/faculty-dashboard/stat-row/statrow';
import OngoingProjects from '../components/dashboard/faculty-dashboard/ongoing-projects/OngoingProjects';
import BestPerformance from '../components/dashboard/faculty-dashboard/best-performance/BestPerformance';
import { useGetOrganizationQuery } from '../../../redux/features/organization/organizationApi';
import organizationAuth from '../custom-hooks/organizationAuth';
import { useGetAdminByIdentityIdQuery } from '../../../redux/features/admin/adminApi';
import adminAuth from '../custom-hooks/adminApi';

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  });

  const { data: mentor, isLoading, refetch } = useGetAdminByIdentityIdQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Dashboard" mentor={mentor} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
            <StatsRow />
            <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
            <OngoingProjects />
            </Grid>
            <Grid item xs={12} md={4}>
            <BestPerformance/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

};

export default adminAuth(Page);