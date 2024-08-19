import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useGetProposalsByMentorIdQuery } from '../../../../../../redux/features/proposal/proposalApi'; 
import Loading from '@/app/components/loading/loading';

interface BasicTableProps {
  mentorId: number;
}

const BasicTable: React.FC<BasicTableProps> = ({ mentorId }) => {
  const { data: proposalsData, isLoading, isError } = useGetProposalsByMentorIdQuery(mentorId);

  if (isLoading) {
    return <Loading />;
  }
  const pendingProposals = proposalsData?.data.filter((proposal: any) => proposal.status === 'pending');

  return (
    <Paper>
      <Typography variant="h6" component="div" sx={{ padding: '16px' }}>
        Pending Proposals
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell align="left">Student Name</TableCell>
              <TableCell align="left">Submission Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingProposals.map((proposal: any) => (
              <TableRow key={proposal?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {proposal?.projectName}
                </TableCell>
                <TableCell align="left">{proposal?.studentName}</TableCell>
                <TableCell align="left">{proposal?.submissionDate}</TableCell>
                <TableCell align="left">{proposal?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BasicTable;
