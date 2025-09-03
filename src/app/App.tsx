import { useState } from 'react';

// ** Styles
import './App.css';

// ** Components
import FilterBar from '@app/components/FilterBar/FilterBar';
import Footer from '@app/components/Footer/Footer';
import Header from '@app/components/Header/Header';
import ProductGrid from '@app/components/ProductGrid/ProductGrid';

// ** Types
import type { IProduct } from '@app/types/Product';

const initialProducts: IProduct[] = [
  {
    name: 'Laptop Xtreme 15',
    brand: 'TechNova',
    category: 'laptop',
    image: 'https://via.placeholder.com/400x200?text=Laptop+Xtreme',
    description: 'Potente laptop con procesador Intel i7 y 16GB RAM.',
  },
  {
    name: 'Drone SkyZoom',
    brand: 'FlyTech',
    category: 'drone',
    image: 'https://via.placeholder.com/400x200?text=Drone+SkyZoom',
    description: 'Drone con cámara 4K y estabilización avanzada.',
  },
  {
    name: 'Tablet VisionPad',
    brand: 'NovaTab',
    category: 'tablet',
    image: 'https://via.placeholder.com/400x200?text=Tablet+VisionPad',
    description: "Pantalla AMOLED de 11'' y batería de larga duración.",
  },
];

function App() {
  const [products] = useState<IProduct[]>(initialProducts);
  const [filtered, setFiltered] = useState<IProduct[]>(initialProducts);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const applyFilters = () => {
    const result = products.filter(
      (p) =>
        (category === '' || p.category === category) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.brand.toLowerCase().includes(search.toLowerCase())),
    );
    setFiltered(result);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FilterBar
          category={category}
          search={search}
          onCategoryChange={setCategory}
          onSearchChange={setSearch}
          onFilter={applyFilters}
        />
        <ProductGrid products={filtered} />
      </div>
      <Footer />
    </>
  );
}

export default App;
