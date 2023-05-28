import ShopPage from './pages/ShopPage/ShopPage';
import CartPage from './pages/CartPage/CartPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PlacedOrder from './pages/PlacedOrder/PlacedOrder';
import Header from './components/Header/Header';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const router = createHashRouter([
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
        element: <PlacedOrder />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route path="/" element={<Header />}>
    //     <Route index element={<ShopPage />} />
    //     <Route path="/checkout" element={<CartPage />} />
    //     <Route path="/success" element={<PlacedOrder />} />
    //     <Route path="*" element={<ErrorPage />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
