'use client';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav';
import Box from '@mui/material/Box';
import ProfileStat from '@/app/components/dashboard/student-dashboard/student-profile/profile-stats/stat';
import AccountInformationForm from '@/app/components/dashboard/student-dashboard/student-profile/account-info/account-info';
import PasswordSettingsForm from '@/app/components/dashboard/student-dashboard/student-profile/psw-setting/psw-setting';
import Loading from '@/app/components/loading/loading';
import { useGetStudentQuery } from '../../../../redux/features/student/studentApi';
import studentAuth from '@/app/custom-hooks/studentAuth';

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  });

  const { data: student, isLoading, refetch } = useGetStudentQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle='My Profile' student={student}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4 }}>
        <ProfileStat student={student} refetch={refetch} />
        <AccountInformationForm student={student} refetch={refetch}/>
        <PasswordSettingsForm student={student} refetch={refetch}/>
      </Box>
    </Box>
  );
};

export default studentAuth(Page);