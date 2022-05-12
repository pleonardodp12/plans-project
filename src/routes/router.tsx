import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from '../components';
import { ConfirmCheckout, Home, Plans } from '../pages';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans/:sku" element={<Plans />} />
        <Route path="/plans/:sku/checkout" element={<ConfirmCheckout />} />
      </Routes>
    </BrowserRouter>
  );
}
