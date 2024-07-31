'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './proposal-table.css';

const ProposalTable=() =>{  

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Proposal ID', flex: 1 },
    { field: 'stdname', headerName: 'Student Name', flex: 1 },
    { field: 'pjname', headerName: 'Project Name', flex: 1 },
    { field: 'sub_date', headerName: 'Submitted Date', flex: 1 },
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
    { id: 1, name: 'Project Alpha', stdname: 'Alpha Title', pjname: 'Category A', sub_date: '2024-08-01', status: 'pending' }
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

export default ProposalTable;