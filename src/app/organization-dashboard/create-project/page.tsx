'use client';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '@/app/components/dashboard/organization-dashboard/side-nav/sidenav';
import Loading from '@/app/components/loading/loading';
import { useGetOrganizationQuery } from '../../../../redux/features/organization/organizationApi';
import organizationAuth from '../../custom-hooks/organizationAuth';
import CreateProject from '@/app/components/dashboard/organization-dashboard/create-project-component/create-project-component';
const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
      console.log(parsedUser?.id)
    }
  });

  const { data: organization, isLoading, refetch } = useGetOrganizationQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Projects " organization={organization}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
        <CreateProject/>
      </Box>
    </Box>
  );
};

export default organizationAuth(Page);
