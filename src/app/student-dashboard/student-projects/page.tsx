import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav'
import { Box } from '@mui/material'
import React from 'react'
import AllProjects from '../../components/dashboard/student-dashboard/all-projects/AllProjects'
export default function page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Dashboard" />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8,'@media (max-width: 600px)': {
            width: 320,
          }, }}>
        <h4>Available projects</h4>
        <AllProjects />
      </Box>
    </Box>

  )
}
