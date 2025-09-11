import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

// ** Components
import ProductCard from '@/components/Shared/ProductCard/ProductCard';

// ** Store
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchStoreCategories } from '@/store/apps/categories';
import { fetchStoreFilteredProducts } from '@/store/apps/products';

export default function ProductsView() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const searchRef = useRef<string | null>(null);

  const itemsPerPage = 12;
  const searchDelay = 500;

  const { categories } = useAppSelector((state) => state.categories);
  const { filteredProductsRes, loadingFilteredProducts } = useAppSelector(
    (state) => state.products,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    !categories.length && dispatch(fetchStoreCategories());
  }, [currentPage]);

  useEffect(() => {
    if (searchRef.current === search) {
      dispatch(fetchStoreFilteredProducts({ search, category, page: 1, limit: itemsPerPage }));
      return;
    }

    const timeout = setTimeout(() => {
      dispatch(
        fetchStoreFilteredProducts({ search, category, page: currentPage, limit: itemsPerPage }),
      );
    }, searchDelay);

    return () => clearTimeout(timeout);
  }, [category, currentPage, search]);

  useEffect(() => {
    if (!loadingFilteredProducts) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loadingFilteredProducts]);

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

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
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas las marcas</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
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
        {filteredProductsRes?.items?.length
          ? filteredProductsRes.items.map((p) => (
              <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <ProductCard product={p} />
              </div>
            ))
          : (loadingFilteredProducts &&
              Array.from({ length: itemsPerPage }, (_, i) => (
                <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <Skeleton height={300} />
                </div>
              ))) || (
              <div className="container text-center mt-5 mb-5 py-5">
                <p className="text-center fw-bold ">No se encontraron coincidencias</p>
              </div>
            )}
      </div>

      {/* Paginación */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {Array.from({ length: filteredProductsRes.totalPages }, (_, i) => (
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
