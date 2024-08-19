'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useGetProposalsByMentorIdQuery } from '../../../../../../../redux/features/proposal/proposalApi';
import Loading from '@/app/components/loading/loading'; 
import SearchBox from '../../mentor-allprojects/search-box/search-box';

interface ProposalTableProps {
  mentorId: number;
}

const ProposalTable: React.FC<ProposalTableProps> = ({ mentorId }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const { data: proposalsData, isLoading, isError } = useGetProposalsByMentorIdQuery(mentorId, {
    refetchOnMountOrArgChange: true,
  });

  const handleViewClick = (id: number) => {
    router.push(`/mentor-dashboard/mentor-proposals/${id}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Proposal ID', flex: 1 },
    { field: 'projectName', headerName: 'Project Name', flex: 1 },
    { field: 'studentName', headerName: 'Student Name', flex: 1 },
    { field: 'submissionDate', headerName: 'Submission Date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'view',
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

  if (isError || !proposalsData) {
    return <div>Error loading proposals.</div>;
  }

  // Filter proposals based on the search query and status
  const filteredRows = proposalsData.data
    .filter((proposal: any) => proposal.status === 'pending')
    .filter((proposal: any) => 
      proposal.projectName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Box>
      <SearchBox onSearch={handleSearch} />
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
            rows={filteredRows}
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
    </Box>
  );
}

export default ProposalTable;
