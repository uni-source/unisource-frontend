'use client';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '../components/dashboard/organization-dashboard/side-nav/sidenav';

const Page: React.FC = () => {

  return (
    <Box sx={{ display: 'flex' }}>
        <MiniDrawer childTitle="Dashboard"/>
      Organization
    </Box>
  );
};

export default Page;
