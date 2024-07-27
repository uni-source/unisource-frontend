'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';
import MiniDrawer from '@/app/components/dashboard/organization-dashboard/side-nav/sidenav';

const Page: React.FC = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Create Project" />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
       
      </Box>
    </Box>
  );
};

export default Page;
