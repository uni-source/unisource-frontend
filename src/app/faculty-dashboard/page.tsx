'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Loading from '../components/loading/loading';
import { useGetMentorByIdQuery } from '../../../redux/features/mentor/mentorApi';
import MiniDrawer from '../components/dashboard/faculty-dashboard/side-nav/sidenav';

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  });

  const { data: mentor, isLoading, refetch } = useGetMentorByIdQuery(userId,
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
      </Box>
    </Box>
  );
};

export default Page;