import React from 'react'
import MiniDrawer from '@/app/components/dashboard/student-dashboard/side-nav/sidenav'
import Box from '@mui/material/Box';
import MyProjectTable from '@/app/components/dashboard/student-dashboard/student-myprojects/project-table/project-table';


export default function page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle='My Projects' />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8}}>
        <MyProjectTable />
      </Box>
    </Box>
  )
}
