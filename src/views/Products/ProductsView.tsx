import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

const mockProducts: Product[] = Array.from({ length: 42 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Producto ${i + 1}`,
  category: i % 3 === 0 ? 'Laptop' : i % 3 === 1 ? 'Drone' : 'Smartphone',
  price: `$${(500 + i * 20).toFixed(2)}`,
  image: `imgs/temp/rog.png`,
  state: i % 2 === 0 ? 'Nuevo' : 'Usado',
}));

export default function ProductsView() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filtered = mockProducts.filter(
    (p) =>
      (category === '' || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Todos los Productos</h2>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="Laptop">Laptops</option>
            <option value="Drone">Drones</option>
            <option value="Smartphone">Smartphones</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid de productos */}
      <div className="row">
        {paginated.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ProductCard product={p} id={Number(p.id)} />
          </div>
        ))}
      </div>

      {/* Paginación */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
