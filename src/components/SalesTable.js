import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, TablePagination } from "@mui/material";

const SalesTable = ({ sales }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event, newPage) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; 

  const paginatedSales = sales.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tanggal</TableCell>
            <TableCell align="center">Produk</TableCell>
            <TableCell align="center">Jumlah Penjualan</TableCell>
            <TableCell align="center">Pendapatan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedSales.map((sale) => (
            <TableRow key={sale.id}>
              <TableCell align="center">{sale.date}</TableCell>
              <TableCell align="center">{sale.product}</TableCell>
              <TableCell align="center">{sale.sales}</TableCell>
              <TableCell align="center">{sale.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={sales.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Container>
  );  
};

export default SalesTable;