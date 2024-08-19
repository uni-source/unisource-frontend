'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useGetAllStudentsQuery } from '../../../../../../redux/features/student/studentApi';

interface Student {
  id: number;
  name: string;
  score: number;
  isVerified: boolean;
}
const CustomCard = styled(Card)({
  border: "none",
  borderRadius: "1rem",
  backgroundColor: "var(--light-grey) !important",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  padding: "10px"
});

const BestPerformance = () => {
  const { data, isLoading, isError } = useGetAllStudentsQuery({});

  const students: Student[] = data?.data || []; 

  const filteredAndSortedStudents = React.useMemo(() => {
    return students
      .filter((student: Student) => student.isVerified) 
      .sort((a: Student, b: Student) => b.score - a.score) 
      .slice(0, 10); 
  }, [students]);

  const maxScore = React.useMemo(() => {
    return filteredAndSortedStudents.length > 0 ? Math.max(...filteredAndSortedStudents.map((student: Student) => student.score)) : 0;
  }, [filteredAndSortedStudents]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Student ID', flex: 1 },
    { field: 'name', headerName: 'Student Name', flex: 1 },
    { field: 'score', headerName: 'Score', flex: 1 },
    
  ];

  const rows = filteredAndSortedStudents.map(student => ({
    id: student.id,
    name: student.name,
    score: student.score
  }));


  return (
    <CustomCard className="stat-card">
      <Typography variant="h5" component="div">Best Performance</Typography>
      <br />
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
        <Box>
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
    </CustomCard>
  );
}

export default BestPerformance;
