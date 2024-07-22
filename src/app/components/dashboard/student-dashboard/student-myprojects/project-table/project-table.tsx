'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './project-table.css'
const MyProjectTable = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', flex: 1 },
    { field: 'name', headerName: 'Project Name', flex: 1 },
    { field: 'mentor', headerName: 'Mentor', flex: 1 },
    { field: 'due_date', headerName: 'Due date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
  ];

  const rows = [
    { id: '1', name: 'Project Alpha', mentor: 'John Wick', due_date: '2024-08-01', status: 'Completed' },
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        overflow: 'auto',
      }
    }
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

export default MyProjectTable;
