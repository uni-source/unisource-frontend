'use client';
import ProjectDetails from '@/app/components/dashboard/student-dashboard/project-details/ProjectDetails'
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react';
import studentAuth from '@/app/custom-hooks/studentAuth';
import Loading from '@/app/components/loading/loading';
import { useGetStudentQuery } from '../../../../../redux/features/student/studentApi';
const Page: React.FC = ({params}:any) => {
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
      <MiniDrawer childTitle="Dashboard" student={student}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8,'@media (max-width: 600px)': {
            width: 320,
          }, }}>
        <h4>Project Details</h4>
        <ProjectDetails projectId={params.id} studentId={userId}/>
      </Box>
    </Box>

  )
}
export default studentAuth(Page);