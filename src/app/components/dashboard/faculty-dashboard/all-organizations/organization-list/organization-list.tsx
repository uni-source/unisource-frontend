'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './organization-list.css';
import { useRouter } from 'next/navigation';


const OrganizationTable=() =>{  
  const router = useRouter();
  
  const handleViewClick = (id: number) => {
   router.push(`/mentor-dashboard/mentor-projects/${id}`);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Organization ID', flex: 1 },
    { field: 'orgname', headerName: 'Organization Name', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'view',
      headerName: 'View',
      flex: 1,
      renderCell: (params) => (
        <Button
            className='view-button'
            variant="contained"
        >
            View
        </Button>
      )
    }
  ];

  const rows = [
    { id:'1', orgname: 'CodeGen', status: 'pending' }
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
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default OrganizationTable;