import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './proposal-table.css';
import { useGetProposalsByOrganizationIdQuery } from '../../../../../../../redux/features/proposal/proposalApi'; 

interface ProposalTableProps {
  organizationId: number;
  searchTerm: string;
}

const ProposalTable: React.FC<ProposalTableProps> = ({ organizationId, searchTerm }) => {
  const { data: proposalsData, isLoading, isError } = useGetProposalsByOrganizationIdQuery(organizationId);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Proposal ID', flex: 1 },
    { field: 'stdname', headerName: 'Student Name', flex: 1 },
    { field: 'pjname', headerName: 'Project Name', flex: 1 },
    { field: 'sub_date', headerName: 'Submitted Date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    
  ];

  
  const rows = React.useMemo(() => {
    if (isLoading || isError || !proposalsData) return [];

    return proposalsData.data
      .filter((proposal: any) =>
        (proposal.status === 'Pending' || proposal.status === 'Approved') &&
        (searchTerm === '' || proposal.projectName.toLowerCase().includes(searchTerm))
      )
      .map((proposal: any) => ({
        id: proposal.id,
        stdname: proposal.studentName,
        pjname: proposal.projectName,
        sub_date: proposal.submittedDate,
        status: proposal.status,
      }));
  }, [proposalsData, isLoading, isError, searchTerm]);

  return (
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
          loading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default ProposalTable;
