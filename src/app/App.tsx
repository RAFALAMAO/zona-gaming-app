import { useEffect, useState } from 'react';

// ** Styles
import './App.css';

// ** Components
import FilterBar from '@app/components/FilterBar/FilterBar';
import Footer from '@app/components/Footer/Footer';
import Header from '@app/components/Header/Header';
import ProductGrid from '@app/components/ProductGrid/ProductGrid';

// ** Types
import type { IProduct } from '@app/types/Product';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filtered, setFiltered] = useState<IProduct[]>([]);
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

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        const mapped: IProduct[] = data.results.map((char: any) => ({
          id: char.id,
          name: char.name,
          brand: char.origin.name,
          category: char.species.toLowerCase(), // simulamos categoría
          image: char.image,
          description: `Estado: ${char.status} | Género: ${char.gender}`,
        }));
        setProducts(mapped);
        setFiltered(mapped);
      });
  }, []);

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
