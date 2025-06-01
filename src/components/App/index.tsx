import type { FC } from 'react';
import CartPage from '../../assets/pages/CartPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../assets/pages/HomePage';
import CatalogPage from '../../assets/pages/CatalogPage';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
};

export default App;
