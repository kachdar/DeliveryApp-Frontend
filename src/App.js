import Header from './components/Header/Header';
import ShopPage from './pages/ShopPage/ShopPage';
import CartPage from './pages/CartPage/CartPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PlacedOrderPage from './pages/PlacedOrderPage/PlacedOrderPage';
import {
  RouterProvider,
  createHashRouter,
  createBrowserRouter,
} from 'react-router-dom';

// for Github Pages
const hashRouter = createHashRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <ShopPage />,
      },
      {
        path: 'checkout',
        element: <CartPage />,
      },
      {
        path: 'success',
        element: <PlacedOrderPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <ShopPage />,
      },
      {
        path: 'checkout',
        element: <CartPage />,
      },
      {
        path: 'success',
        element: <PlacedOrderPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
