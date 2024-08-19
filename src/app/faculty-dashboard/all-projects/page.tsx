'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '@/app/components/dashboard/faculty-dashboard/side-nav/sidenav';
import SearchBox from '@/app/components/dashboard/faculty-dashboard/all-projects/search-box/search-box';
import ProjectTable from '@/app/components/dashboard/faculty-dashboard/all-projects/project-list/project-list';
import { useGetAdminByIdentityIdQuery } from '../../../../redux/features/admin/adminApi';
import Loading from '@/app/components/loading/loading';
import adminAuth from '@/app/custom-hooks/adminApi';

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
      console.log(parsedUser?.id);
    }
  }, []);
  const { data: mentor, isLoading, refetch } = useGetAdminByIdentityIdQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="All Projects" mentor={mentor} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
            <ProjectTable />
      </Box>
    </Box>
  );
};

export default adminAuth(Page);