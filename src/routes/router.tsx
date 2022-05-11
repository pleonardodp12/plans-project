import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from '../components';
import { Home, Plans } from '../pages';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans/:sku" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  );
}
