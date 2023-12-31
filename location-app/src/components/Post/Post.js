import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Post(props) {
  const { postList } = props;

  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth:700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">District</StyledTableCell>
            <StyledTableCell align="right">Population</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postList.map((post) => (
            <StyledTableRow key={post.id}>
              <StyledTableCell component="th" scope="row">
                {post.id}
              </StyledTableCell>
              <StyledTableCell align="right">{post.city}</StyledTableCell>
              <StyledTableCell align="right">{post.district}</StyledTableCell>
              <StyledTableCell align="right">{post.pop}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Post;
