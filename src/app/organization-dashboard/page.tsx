'use client';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '../components/dashboard/organization-dashboard/side-nav/sidenav';
import StatsRow from '../components/dashboard/organization-dashboard/stat-row/statrow';
import RecentProjects from '../components/dashboard/organization-dashboard/recent-projects/RecentProjects';
import LeaderBoard from '../components/dashboard/organization-dashboard/leader-board/LeaderBoard';
import { useGetOrganizationQuery } from '../../../redux/features/organization/organizationApi';
import Loading from '../components/loading/loading';
import organizationAuth from '../custom-hooks/organizationAuth';

const Page: React.FC = () => {

  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  },[userId]);

  const { data: organization, isLoading, refetch } =  useGetOrganizationQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Dashboard" organization={organization}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
        <StatsRow organizationId={userId}/>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <RecentProjects organizationId={userId}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default organizationAuth(Page);