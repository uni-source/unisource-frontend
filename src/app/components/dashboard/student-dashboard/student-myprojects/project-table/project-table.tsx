'use client';
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

function createData(
  id: number,
  name: string,
  mentor: string,
  due_date: string,
  status: string,
) {
  return { id, name, mentor, due_date, status };
}

const rows = [
  createData(785369, 'UniSource', 'John Wick', '2024-09-28', 'Completed'),
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Project ID', flex: 1 },
  { field: 'name', headerName: 'Project Name', flex: 1 },
  { field: 'mentor', headerName: 'Mentor', flex: 1 },
  { field: 'due_date', headerName: 'Due date', flex: 1 },
  { field: 'status', headerName: 'Status', flex: 1 },
];

export default function MyProjectTable() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', overflowX: 'auto' }}>
      <Paper style={{ height: 600, width: '100%', maxWidth: 1200 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
        />
      </Paper>
    </div>
  );
}
