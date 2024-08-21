'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useGetAllOrganizationsQuery } from '../../../../../../../redux/features/organization/organizationApi';
import Loading from '@/app/components/loading/loading';
import SearchBox from '../search-box/search-box';

const OrganizationTable: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const { data, isLoading, isError,refetch } = useGetAllOrganizationsQuery({},
    { refetchOnMountOrArgChange: true });
  
  const handleViewClick = (id: number) => {
    router.push(`/faculty-dashboard/organization-verification/${id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  React.useEffect(() => {
    refetch()
  }, [refetch])
  const rows = React.useMemo(() => {
    if (!data || !data.data) return []; 

    const organizations: any[] = data?.data;

    const filteredOrganizations = organizations
      .filter(organization => organization?.verifiedOrganization === false) 
      .filter(organization => organization?.name.toLowerCase().includes(searchQuery.toLowerCase())) // Filter by search query
      .map(organization => ({
        id: organization?.identityId, 
        orgname: organization?.name,
        email: organization?.email,
      }));

    return filteredOrganizations;
  }, [data, searchQuery]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Organization ID', flex: 1 },
    { field: 'orgname', headerName: 'Organization Name', flex: 1 },
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
    return <Loading />;
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
            overflowX: 'auto',
          },
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
};

export default OrganizationTable;
