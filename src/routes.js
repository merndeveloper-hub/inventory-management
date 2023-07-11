import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Stocks from './pages/Stocks';
import Product from './pages/Product';
import Orders from './pages/Orders';
import DashboardApp from './pages/DashboardApp';
import SplashScareen from './components/SplashScareen';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';




// ----------------------------------------------------------------------

export default function Router() {
  const user = useSelector((e) => e.User.signedInUser);
  const [accessRoute, setAccessRoute] = useState(null);
  useEffect(() => {
    setAccessRoute(user?.type?.type);
    console.log(user?.type?.type, 'user?.type?.type');
    return () => {};
  }, [user]);

  return useRoutes([
    {
      path: '/dashboard',
      element: user ? <DashboardLayout /> : <SplashScareen />,
      children:
        accessRoute === 'Owner'
          ? [
              { path: 'app', element: <DashboardApp /> },
              { path: 'order', element: <Orders /> },
              { path: 'stock', element: <Stocks /> },
              { path: 'product', element: <Product /> },
            ]
          : accessRoute === 'Admin'
          ? [
              { path: 'app', element: <DashboardApp /> },

              { path: 'stock', element: <Stocks /> },
              { path: 'product', element: <Product /> },

              { path: 'order', element: <Orders /> },
            ]
          : '',
    },

    {
      path: '/',
      element: user === null ? <LogoOnlyLayout /> : <SplashScareen />,
      children: [
        { path: '/', element: <Navigate to="/register" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
