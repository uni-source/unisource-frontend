"use client";
import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from './ProposalGrid.module.css';

const ProposalGrid: React.FC = () => {
  const proposals = [
    { id: 1, projectId: 785369, name: 'UniSource', mentor: 'Bathiya Senevirathne', dueDate: 'Nov 31, 2024', status: 'Accepted' },
    { id: 2, projectId: 30589, name: 'Smart Helmet', mentor: 'Malshan Tharindu', dueDate: 'Apr 31, 2024', status: 'Accepted' },
    { id: 3, projectId: 785369, name: 'E-Learn site', mentor: 'Chamila Karunathilake', dueDate: 'May 31, 2024', status: 'Accepted' },
    { id: 4, projectId: 785369, name: 'Taxi App', mentor: 'Chamila Karunathilake', dueDate: 'Nov 31, 2022', status: 'Accepted' },
  ];

  const renderStatusCell = (params: any) => (
    <span className={styles.statusAccepted}>{params.value}</span>
  );

  const columns: GridColDef[] = [
    { field: 'projectId', headerName: 'Project ID', width: 150 },
    { field: 'name', headerName: 'Project Name', width: 200 },
    { field: 'mentor', headerName: 'Mentor', width: 200 },
    { field: 'dueDate', headerName: 'Due Date', width: 200 },
    {
      field: 'status',
      headerName: 'Proposal Status',
      width: 520,
      renderCell: renderStatusCell,
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <Box className={styles.tableBox}>
        <DataGrid
          rows={proposals}
          columns={columns}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          hideFooterPagination
          classes={{
            root: styles.dataGridRoot,
            columnHeader: styles.columnHeader,
            row: styles.dataGridRow,
            columnSeparator: styles.columnSeparator,
          }}
        />
      </Box>
    </div>
  );
};

export default ProposalGrid;
