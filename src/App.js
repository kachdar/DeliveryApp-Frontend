import { HashRouter, Routes, Route } from 'react-router-dom';

import ShopPage from './pages/ShopPage/ShopPage';
import CartPage from './pages/CartPage/CartPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PlacedOrder from './pages/PlacedOrder/PlacedOrder';
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<ShopPage />} />
          <Route path="/checkout" element={<CartPage />} />
          <Route path="/success" element={<PlacedOrder />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
