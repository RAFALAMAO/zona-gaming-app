import { Route, Routes } from 'react-router';

// ** Styles
import './App.css';

// ** Views
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import ProductDetailView from './views/ProductDetailView/ProductDetailView';
import ProductsView from './views/Products/ProductsView';

// ** Layout
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/productos" element={<ProductsView />} />
        <Route path="/producto/:id" element={<ProductDetailView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

export default App;
