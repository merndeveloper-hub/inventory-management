// material
import { Card, Stack, Button, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import Iconify from 'src/components/Iconify';

import { StockListTable } from 'src/sections/@dashboard/stock';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'orderId', label: 'Oder ID', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'customer', label: 'Customer', alignRight: false },
  { id: 'sales', label: 'Sales channel', alignRight: false },
  { id: 'destination', label: 'Destination', alignRight: false },
  { id: 'items', label: 'Items', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
];

function Stocks(props) {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="right" justifyContent="space-between" mb={3}>
          <Typography alignItems="center" variant="h3" gutterBottom>
            In Stock
          </Typography>

          <Button variant="contained" alignItems="center" to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Stock
          </Button>
        </Stack>

        <Card>
          <StockListTable />
        </Card>
      </Container>
    </Page>
  );
}

export default Stocks;
