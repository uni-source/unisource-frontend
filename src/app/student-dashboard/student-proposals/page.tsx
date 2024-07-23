import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav';
import React from 'react';
import Box from '@mui/material/Box';
import ProposalGrid from '@/app/components/dashboard/student-dashboard/student-proposal/proposal-grid/ProposalGrid'; 


export default function Page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle='My Proposals' />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
        <ProposalGrid />
      </Box>
    </Box>
  );
}



