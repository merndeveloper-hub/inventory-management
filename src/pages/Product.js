// material
import { Card, Stack, Button, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import Iconify from 'src/components/Iconify';
import { ProductListTable } from 'src/sections/@dashboard/product';

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

// ----------------------------------------------------------------------

function Stocks() {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="right" mb={3} ml={2} gap={5} justifyContent="center">
          <Button variant="contained" to="#" color="success">
            Category 1
          </Button>
          <Button variant="outlined" to="#" color="success">
            Category 2
          </Button>

          <Button variant="outlined" to="#" color="success">
            Category 3
          </Button>
        </Stack>
        <Stack direction="row" alignItems="right" mb={3} justifyContent="space-between">
          <Typography alignItems="center" variant="h3" gutterBottom>
            Product
          </Typography>

          <Button variant="contained" to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Stock
          </Button>
        </Stack>

        <Card>
          <ProductListTable />
        </Card>
      </Container>
    </Page>
  );
}

export default Stocks;
