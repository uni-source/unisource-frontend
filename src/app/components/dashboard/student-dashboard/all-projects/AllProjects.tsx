'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useGetAllProjectsQuery } from '../../../../../../redux/features/project/projectApi';
import './AllProjects.css';
import Loading from '@/app/components/loading/loading';

const AllProjects = () => {
  const router = useRouter();
  const { data: projects, isLoading, isError } = useGetAllProjectsQuery({});

  const handleViewClick = (id: number) => {
    router.push(`/student-dashboard/student-projects/${id}`);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', flex: 1 },
    { field: 'name', headerName: 'Project Name', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'resource', headerName: 'Source', flex: 1 },
    { field: 'dueDate', headerName: 'Due Date', flex: 1 },
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

  if (isLoading) return <p><Loading/></p>;

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
          rows={projects?.data || []} 
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

export default AllProjects;
