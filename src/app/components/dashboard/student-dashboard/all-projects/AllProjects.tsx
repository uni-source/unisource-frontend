// components/dashboard/student-dashboard/all-projects/AllProjects.tsx
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import './AllProjects.css';

const AllProjects=() =>{
 const router = useRouter();
  
  const handleViewClick = (id: number) => {
   router.push(`/student-dashboard/student-projects/${id}`);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', flex: 1 },
    { field: 'name', headerName: 'Project Name', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'source', headerName: 'Source', flex: 1 },
    { field: 'due_date', headerName: 'Due date', flex: 1 },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleViewClick(params.row.id)}>
          View
        </Button>
      )
    }
  ];

  const rows = [
    { id: 1, name: 'Project Alpha', title: 'Alpha Title', category: 'Category A', source: 'Source 1', due_date: '2024-08-01' },
    { id: 2, name: 'Project Beta', title: 'Beta Title', category: 'Category B', source: 'Source 2', due_date: '2024-09-15' },
    { id: 3, name: 'Project Gamma', title: 'Gamma Title', category: 'Category C', source: 'Source 3', due_date: '2024-10-20' },
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        overflow: 'auto',
        '@media (max-width:600px)': {
          width: '100%', 
          overflowX: 'auto' 
        }
      }}
    >
      <Box sx={{ minWidth: 800 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default AllProjects;