'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './pending-list.css';
import { useRouter } from 'next/navigation';
import { useGetAllProjectsQuery } from '../../../../../../../redux/features/project/projectApi'; 
import Loading from '@/app/components/loading/loading';

const PendingList = () => {  
  const router = useRouter();
  const { data, error, isLoading } = useGetAllProjectsQuery({});

  const handleViewClick = (id: number) => {
    router.push(`/faculty-dashboard/pending-projects/${id}`);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', flex: 1 },
    { field: 'pjname', headerName: 'Project Name', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'organization', headerName: 'Organization', flex: 1 },
    { field: 'dueDate', headerName: 'Due Date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    {
      field: 'view',
      headerName: 'View',
      flex: 1,
      renderCell: (params) => (
        <Button
          className='view-button'
          variant="contained"
          onClick={() => handleViewClick(params.row.id)}
        >
          View
        </Button>
      )
    }
  ];

  if (isLoading) return <Loading />;

  const rows:any[] = data?.data.filter((project: { status: string; }) => project?.status === 'PENDING').map((project: { id: any; name: any; title: any; category: any; organizationID: any; dueDate: any; status: any; }) => ({
    id: project?.id, 
    pjname: project?.name,
    title: project?.title,
    category: project?.category,
    organization: project?.organizationID,
    dueDate: project?.dueDate,
    status: project?.status
  })) || [];

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
};

export default PendingList;
