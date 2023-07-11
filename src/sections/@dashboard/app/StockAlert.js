import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'orderId', label: 'Order ID', minWidth: 10 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 60,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'quantity', label: 'Quantity', minWidth: 100 },
  {
    id: 'amount',
    label: 'A left amnt.',
    minWidth: 10,
    //  align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 10,
    //align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(orderId, date, quantity, amount, status) {
  return { orderId, date, quantity, amount, status };
}

const rows = [
  createData('India', 32323, 1324171354, 3287263, 'Pending'),
  createData('China', 23232, 1403500365, 9596961, 'Approved'),
  createData('Italy', 23232, 60483973, 301340, 'Approved'),
];

export default function StockAlert() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={2}>
                Stock Alert
              </TableCell>
              <TableCell align="center" colSpan={3}></TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
