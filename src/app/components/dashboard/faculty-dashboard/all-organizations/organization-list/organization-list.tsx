'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetAllOrganizationsQuery } from '../../../../../../../redux/features/organization/organizationApi';
import './organization-list.css';
import Loading from '@/app/components/loading/loading';
import SearchBox from '../search-box/search-box';

const OrganizationTable: React.FC = () => {
  const { data, error, isLoading } = useGetAllOrganizationsQuery({});
  const [filteredRows, setFilteredRows] = useState<any[]>([]);

  useEffect(() => {
    if (data?.data) {
      setFilteredRows(data.data);
    }
  }, [data]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm === '') {
      setFilteredRows(data?.data || []);
    } else {
      const filtered = data?.data.filter((organization: { name: string; }) =>
        organization.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRows(filtered || []);
    }
  };

  if (isLoading) return <Loading />;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Organization ID', flex: 1 },
    { field: 'orgname', headerName: 'Organization Name', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 }
  ];

  const rows = filteredRows.map((organization: { id: any; name: any; verifiedOrganization: any; }, index: number) => ({
    id: organization.id || index,
    orgname: organization.name,
    status: organization.verifiedOrganization ? 'verified' : 'unverified'
  }));

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
      <SearchBox onSearch={handleSearch} />
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
}

export default OrganizationTable;
