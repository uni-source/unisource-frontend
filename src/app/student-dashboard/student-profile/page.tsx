'use client';
import React from 'react';
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav';
import Box from '@mui/material/Box';
import ProfileStat from '@/app/components/dashboard/student-dashboard/student-profile/profile-stats/stat';
import AccountInformationForm from '@/app/components/dashboard/student-dashboard/student-profile/account-info/account-info';
import PasswordSettingsForm from '@/app/components/dashboard/student-dashboard/student-profile/psw-setting/psw-setting';

export default function page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle='My Profile' />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4}}>
        <ProfileStat />
        <AccountInformationForm />
        <PasswordSettingsForm />
      </Box>
    </Box>
  )
}
