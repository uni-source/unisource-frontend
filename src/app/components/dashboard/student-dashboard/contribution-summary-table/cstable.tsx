import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetProjectsByStudentIdQuery } from '../../../../../../redux/features/project/studentHasProjectApi';
import Loading from '@/app/components/loading/loading';

interface BasicTableProps {
  studentId: number;
}

export default function BasicTable({ studentId }: BasicTableProps) {
  const { data, error, isLoading } = useGetProjectsByStudentIdQuery(studentId);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell align="left">Project Name</TableCell>
            <TableCell align="left">Due Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data.map((project: any) => (
            <TableRow
              key={project.projectId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {project.projectId}
              </TableCell>
              <TableCell align="left">{project.projectName}</TableCell>
              <TableCell align="left">{project.dueDate}</TableCell>
              <TableCell align="left">{project.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
