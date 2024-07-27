'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';
import MiniDrawer from '../components/dashboard/organization-dashboard/side-nav/sidenav';
import StatsRow from '../components/dashboard/organization-dashboard/stat-row/statrow';
import RecentProjects from '../components/dashboard/organization-dashboard/recent-projects/RecentProjects';
import LeaderBoard from '../components/dashboard/organization-dashboard/leader-board/LeaderBoard';

const Page: React.FC = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Dashboard" />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
        <StatsRow />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <RecentProjects />
          </Grid>
          <Grid item xs={12} md={4}>
            <LeaderBoard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
