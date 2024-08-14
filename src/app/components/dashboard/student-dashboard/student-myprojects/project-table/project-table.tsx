'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetProjectsByStudentIdQuery } from '../../../../../../../redux/features/project/studentHasProjectApi';
import './project-table.css';

interface MyProjectTableProps {
  studentId: number;
}

const MyProjectTable: React.FC<MyProjectTableProps> = ({ studentId }) => {
  const { data, error, isLoading } = useGetProjectsByStudentIdQuery(studentId);

  const columns: GridColDef[] = [
    { field: 'projectId', headerName: 'Project ID', flex: 1 },
    { field: 'projectName', headerName: 'Project Name', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
  ];

  const rows = data?.data?.map((project: { id: any; projectId: any; projectName: any; status: any; }) => ({
    id: project.id,
    projectId: project.projectId,
    projectName: project.projectName,
    status: project.status,
  })) || [];

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        overflow: 'auto',
      }}
    >
      <Box sx={{ minWidth: 800 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={isLoading}
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

export default MyProjectTable;
