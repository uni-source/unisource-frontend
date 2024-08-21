'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './student-list.css';
import { useRouter } from 'next/navigation';
import { useGetAllStudentsQuery } from '../../../../../../../redux/features/student/studentApi'; 
import Loading from '@/app/components/loading/loading';
import SearchBox from '../search-box/search-box';

const StudentTable = () => {  
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  
  const { data, isLoading, isError,refetch } = useGetAllStudentsQuery({},
    { refetchOnMountOrArgChange: true });

  const handleViewClick = (id: number) => {
    router.push(`/faculty-dashboard/student-verification/${id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  React.useEffect(() => {
    refetch()
  }, [refetch])
  
  const rows = React.useMemo(() => {
    if (!data || !data.data) return []; 

    const students: any[] = data?.data;

    const filteredStudents = students
      .filter(student => student?.verifiedStudent === false) 
      .filter(student => student?.name.toLowerCase().includes(searchQuery.toLowerCase())) // Filter by search query
      .map(student => ({
        id: student?.identityId, 
        stdname: student?.name,
        email: student?.email,
      }));

    return filteredStudents;
  }, [data, searchQuery]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Identity ID', flex: 1 },
    { field: 'stdname', headerName: 'Student Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
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

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <Box>
      <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchChange} /> 
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
    </Box>
  );
}

export default StudentTable;
