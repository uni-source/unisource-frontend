'use client';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav'
import Box from '@mui/material/Box';
import BadgeTable from '@/app/components/dashboard/student-dashboard/student-badge/badge-table/badge-table';
import studentAuth from '@/app/custom-hooks/studentAuth';
import Loading from '@/app/components/loading/loading';
import { useGetStudentQuery } from '../../../../redux/features/student/studentApi';
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
      <MiniDrawer childTitle='Badges' student={student}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
        <BadgeTable />
      </Box>
    </Box>
  )
}
export default studentAuth(Page);