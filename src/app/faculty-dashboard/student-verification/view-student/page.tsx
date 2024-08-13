'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '@/app/components/dashboard/faculty-dashboard/side-nav/sidenav';
import Loading from '@/app/components/loading/loading';
import AccountInformationForm from '@/app/components/dashboard/faculty-dashboard/student-verification/account-info/account-info';
import ProfileStats from '@/app/components/dashboard/faculty-dashboard/student-verification/profile-stats/stat';

const Page: React.FC = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Student Verification" mentor={"mentor"} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
            <ProfileStats />
            <AccountInformationForm />
      </Box>
    </Box>
  );
};

export default Page;