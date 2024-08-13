'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './student-list.css';
import { useRouter } from 'next/navigation';
import { useGetProjectByOrganizationIdQuery } from '../../../../../../../redux/features/project/projectApi';
import Loading from '@/app/components/loading/loading';


const StudentTable:React.FC = () =>  {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Identity ID', flex: 1 },
    { field: 'stdname', headerName: 'Student Name', flex: 1 },
    { field: 'score', headerName: 'Score', flex: 1 },
    { field: 'validity', headerName: 'Validity', flex: 1 },
    { field: 'view',
      headerName: 'View',
      flex: 1,
      renderCell: (params) => (
        <Button
            className='view-button'
            variant="contained"
            href="/faculty-dashboard/all-students/view-student"
        >
            View
        </Button>
      )
    }
  ];

  const rows = [
    { id:'1', stdname: 'Avindu Kavinda', score: '500', validity: 'verified' }
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
};

export default StudentTable;
