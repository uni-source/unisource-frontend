'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '@/app/components/dashboard/faculty-dashboard/side-nav/sidenav';
import StudentTable from '@/app/components/dashboard/faculty-dashboard/all-students/student-list/student-list';


const Page: React.FC = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="All Students" mentor={"mentor"} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
            <StudentTable />
      </Box>
    </Box>
  );
};

export default Page;