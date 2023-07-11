// material
import { Card, Stack, Button, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import Iconify from 'src/components/Iconify';
import { OrderListTable } from 'src/sections/@dashboard/order';

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

function Order() {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="right" justifyContent="space-between">
          <Stack alignItems="left" justifyContent="right">
            <Typography variant="h3" gutterBottom>
              Orders
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="left" justifyContent="left" pd={10} mb={5} ml={6} gap={2}>
            <Button variant="outlined" to="#">
              Export to excel
            </Button>
            <Button variant="outlined" to="#">
              Import Orders
            </Button>
            <Button variant="contained" to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
              New User
            </Button>
          </Stack>
        </Stack>

        <Card>
          <OrderListTable />
        </Card>
      </Container>
    </Page>
  );
}

export default Order;
