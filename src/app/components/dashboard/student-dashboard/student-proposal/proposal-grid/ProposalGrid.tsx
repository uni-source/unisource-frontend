"use client";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetProposalsByStudentIdQuery } from '../../../../../../../redux/features/proposal/proposalApi'; 
import styles from './ProposalGrid.module.css';
import Loading from '@/app/components/loading/loading';

interface ProposalGridProps {
  studentId: number;
}

const ProposalGrid: React.FC<ProposalGridProps> = ({ studentId }) => {
  const [proposals, setProposals] = useState([]);
  
  const { data, error, isLoading } = useGetProposalsByStudentIdQuery(studentId);

  useEffect(() => {
    if (data && data.success) {
      setProposals(data.data);
    }
  }, [data]);

  const renderStatusCell = (params: any) => (
    <span className={styles.statusAccepted}>{params.value}</span>
  );

  const columns: GridColDef[] = [
    { field: 'projectId', headerName: 'Project ID', flex: 1 },
    { field: 'projectName', headerName: 'Project Name', flex: 1 },
    { field: 'submissionDate', headerName: 'Submission Date', flex: 1 },
    {
      field: 'status',
      headerName: 'Proposal Status',
      width: 520,
      renderCell: renderStatusCell,
    },
  ];

  if (isLoading) {
    return <div><Loading /></div>;
  }

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
          rows={proposals}
          columns={columns}
          getRowId={(row) => row.id}
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

export default ProposalGrid;
