import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Checkbox, OutlinedInput, Select, MenuItem, InputAdornment } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Label from 'src/components/Label';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Iconify from '../../../components/Iconify';

const rows = [
  {
    orderid: '#7676',
    product: 'inverter',
    category: 'animal',
    salesChannel: 'china',
    instruction: 'inline',
    items: '80/100',
    status: 'completed',
  },
  {
    orderid: '#7677',
    product: 'battery',
    category: 'food',
    salesChannel: 'india',
    instruction: 'in process',
    items: '50/100',
    status: 'pending',
  },
  {
    orderid: '#7678',
    product: 'generator',
    category: 'vegetable',
    salesChannel: 'usa',
    instruction: 'unavailable',
    items: '60/100',
    status: 'completed',
  },
  {
    orderid: '#7679',
    product: 'charger',
    category: 'electronic',
    salesChannel: 'newzeland',
    instruction: 'out of stock',
    items: '90/100',
    status: 'completed',
  },
  {
    orderid: '#7680',
    product: 'power',
    category: 'auto mobile',
    salesChannel: 'germany',
    instruction: 'line up',
    items: '30/100',
    status: 'completed',
  },
];

export default function OrderListTable() {
  const [query, setQuery] = useState('');

  const keys = ['orderid', 'product', 'category', 'salesChannel', 'instruction', 'items', 'status'];

  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
  };

  const buttonStyle = {
    padding: '20px 20px',
    fontSize: '16px',

    backgroundColor: '#fff',
    color: 'light-black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    outlined: 'none',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 8px 16px 0 rgb(67 161 255 / 24%)',
  };

  const input = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  }));

  return (
    <Paper sx={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '10px',
          outline: 'none',
          padding: '10px',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <input
          type="text"
          placeholder="Quick Search"
          style={buttonStyle}
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
          onChange={(e) => setQuery(e.target.value)}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',

              overflow: 'auto',
              alignItems: 'center',
              justifyContent: 'right',
            }}
          >
            <CalendarTodayIcon fontSize="large" />
          </div>

          <Box sx={{ minWidth: 120, ml: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                <MenuItem value={10}>Pending</MenuItem>
                <MenuItem value={20}>Approved</MenuItem>
                <MenuItem value={30}>Continue</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120, ml: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                <MenuItem value={10}>Name</MenuItem>
                <MenuItem value={20}>Order Id</MenuItem>
                <MenuItem value={30}>Price</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120, ml: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sales</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                <MenuItem value={10}>Highest</MenuItem>
                <MenuItem value={20}>Lowest</MenuItem>
                <MenuItem value={30}>No Sale</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow></TableRow>
            <TableRow>
              <TableCell align="left" colSpan={6}>
                Stock Alert
              </TableCell>
              <TableCell align="center" colSpan={3}></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>

              <TableCell>OrderId</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Sales Channel</TableCell>
              <TableCell>Instruction</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>

            {search(rows).map((row) => {
              return (
                <>
                  <TableRow align="center">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{row.orderid}</TableCell>

                    <TableCell>{row.product}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.salesChannel}</TableCell>
                    <TableCell>{row.instruction}</TableCell>
                    <TableCell>{row.items}</TableCell>
                    <TableCell>
                      <Label variant="ghost" color={(row.status !== 'completed' && 'error') || 'success'}>
                        {row.status && sentenceCase(row.status)}
                      </Label>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
