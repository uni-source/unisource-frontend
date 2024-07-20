import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id: number,
  name: string,
  mentor: string,
  due_date: string, //setup type date when initializing
  status: string,
) {
  return { id, name, mentor, due_date, status};
}

const rows = [
  createData(785369, 'UniSource', 'John Wick', '2024.09.28', 'Completed')
];

export default function MyProjectTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell align="left">Project Name</TableCell>
            <TableCell align="left">Mentor</TableCell>
            <TableCell align="left">Due date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.mentor}</TableCell>
              <TableCell align="left">{row.due_date}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
