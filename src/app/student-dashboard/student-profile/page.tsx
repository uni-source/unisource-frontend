'use client';
import React from 'react';
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav';
import Box from '@mui/material/Box';
import StatCard from '@/app/components/dashboard/student-dashboard/stat-card/statcard';
import VerifiedIcon from '@mui/icons-material/Verified';
import ProfileStat from '@/app/components/dashboard/student-dashboard/student-profile/profile-stats/stat';

export default function page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle='My Profile' />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4}}>
        <ProfileStat />
      </Box>
    </Box>
  )
}
