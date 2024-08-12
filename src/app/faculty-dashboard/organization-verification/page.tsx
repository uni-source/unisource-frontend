'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '@/app/components/dashboard/faculty-dashboard/side-nav/sidenav';
import { useGetMentorByIdQuery } from '../../../../redux/features/mentor/mentorApi';
import Loading from '@/app/components/loading/loading';
import SearchBox from '@/app/components/dashboard/faculty-dashboard/organization-verification/search-box/search-box';
import OrganizationTable from '@/app/components/dashboard/faculty-dashboard/organization-verification/organization-list/organization-list';

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
      <MiniDrawer childTitle="Organization Verification" mentor={mentor} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
            <SearchBox />
            <OrganizationTable />
      </Box>
    </Box>
  );
};

export default Page;