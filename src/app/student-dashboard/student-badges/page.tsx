import React from 'react'
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav'
import Box from '@mui/material/Box';
import BadgeTable from '@/app/components/dashboard/student-dashboard/student-badge/badge-table/badge-table';

export default function page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle='Badges' />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 4}}>
        <BadgeTable />
      </Box>
    </Box>
  )
}
