'use client';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '../components/dashboard/student-dashboard/side-nav/sidenav';
import Box from '@mui/material/Box';
import StatsRow from '../components/dashboard/student-dashboard/stat-row/statrow';
import BasicTable from '../components/dashboard/student-dashboard/contribution-summary-table/cstable';
import { useGetStudentQuery } from '../../../redux/features/student/studentApi';
import Loading from '../components/loading/loading';
import studentAuth from '../custom-hooks/studentAuth';

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
      <MiniDrawer childTitle="Dashboard" student={student} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
        <h4>Overview</h4>
        <StatsRow student={student?.data}studentId={userId}/>
        <h4>Project Contribution Summary</h4>
        <BasicTable studentId={userId}/>
      </Box>
    </Box>
  );
};

export default studentAuth(Page);