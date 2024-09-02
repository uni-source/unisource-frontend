'use client';
import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetAllStudentsQuery } from '../../../../../../../redux/features/student/studentApi';
import './student-list.css';
import Loading from '@/app/components/loading/loading';

const StudentTable: React.FC = () => {
  const { data, error, isLoading } = useGetAllStudentsQuery({});
  
  if (isLoading) return <Loading />;

  const rows:any[] = data?.data.map((student: { identityId: any; name: any; score: any; verifiedStudent: any; }) => ({
    id: student?.identityId, 
    stdname: student?.name,
    score: student?.score,
    validity: student?.verifiedStudent ? 'verified' : 'unverified', 
  })) || [];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Identity ID', flex: 1 },
    { field: 'stdname', headerName: 'Student Name', flex: 1 },
    { field: 'score', headerName: 'Score', flex: 1 },
    { field: 'validity', headerName: 'Validity', flex: 1 },
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
