import ProjectDetails from '@/app/components/dashboard/student-dashboard/project-details/ProjectDetails'
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav'
import { Box } from '@mui/material'
import React from 'react'
export default function page({params}:any) {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Dashboard" />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8,'@media (max-width: 600px)': {
            width: 320,
          }, }}>
        <h4>Project Details</h4>
        <ProjectDetails id={params.id}/>
      </Box>
    </Box>

  )
}
