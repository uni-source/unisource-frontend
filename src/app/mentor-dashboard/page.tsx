'use client';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '../components/dashboard/mentor-dashboard/side-nav/sidenav';
import Box from '@mui/material/Box';
import StatsRow from '../components/dashboard/mentor-dashboard/stat-row/statrow';
import BasicTable from '../components/dashboard/mentor-dashboard/contribution-summery-table/cstable';
import Loading from '../components/loading/loading';
import { useGetMentorByIdentityQuery } from '../../../redux/features/mentor/mentorApi';
import mentorAuth from '../custom-hooks/mentorAuth';

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  });

  const { data: mentor, isLoading, refetch } = useGetMentorByIdentityQuery(userId,
    { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div><Loading /></div>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Dashboard" mentor={mentor} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
        <h4>Overview</h4>
        <StatsRow mentorId={mentor?.data?.id}/>
        <BasicTable mentorId={mentor?.data?.id}/>
      </Box>
    </Box>
  );
};

export default mentorAuth(Page);