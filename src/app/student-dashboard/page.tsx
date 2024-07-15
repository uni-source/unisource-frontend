'use client';
import React from 'react';
import MiniDrawer from '../components/dashboard/student-dashboard/side-nav/sidenav';
import Box from '@mui/material/Box';
import StatsRow from '../components/dashboard/student-dashboard/stat-row/statrow';
import BasicTable from '../components/dashboard/student-dashboard/contribution-summary-table/cstable';

export default function page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle='Dashboard' />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8}}>
      <h4>Overview</h4>
      <StatsRow />
      <BasicTable />
      </Box>
    </Box>
  )
}

