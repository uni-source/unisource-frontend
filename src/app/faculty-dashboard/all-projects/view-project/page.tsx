'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '@/app/components/dashboard/faculty-dashboard/side-nav/sidenav';
import SearchBox from '@/app/components/dashboard/faculty-dashboard/all-projects/search-box/search-box';
import ProjectTable from '@/app/components/dashboard/faculty-dashboard/all-projects/project-list/project-list';
import ProjectGrid from '@/app/components/dashboard/faculty-dashboard/all-projects/project-details/project-details-grid';

const Page: React.FC = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="View Project" mentor={"mentor"} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8, '@media (max-width: 600px)': {
            width: 320,
          }, }}>
            <ProjectGrid />
      </Box>
    </Box>
  );
};

export default Page;