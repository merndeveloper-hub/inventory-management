// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const CreatorConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },

];
const ModeratorConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
];
const DirectorConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: getIcon('eva:car-fill'),
  },
  {
    title: 'Stock',
    path: '/dashboard/stock',
    icon: getIcon('eva:cube-fill'),
  },
  {
    title: 'Product',
    path: '/dashboard/product',
    icon: getIcon('eva:shopping-bag-fill'),
  },
];
const OwnerConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: getIcon('eva:car-fill'),
  },
  {
    title: 'Stock',
    path: '/dashboard/stock',
    icon: getIcon('eva:cube-fill'),
  },
  {
    title: 'Product',
    path: '/dashboard/product',
    icon: getIcon('eva:shopping-bag-fill'),
  },
];
const AdminConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: getIcon('eva:car-fill'),
  },
  {
    title: 'Stock',
    path: '/dashboard/stock',
    icon: getIcon('eva:cube-fill'),
  },
  {
    title: 'Product',
    path: '/dashboard/product',
    icon: getIcon('eva:shopping-bag-fill'),
  },
];

export { DirectorConfig, OwnerConfig, AdminConfig, ModeratorConfig, CreatorConfig };
