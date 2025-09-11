import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useLocation } from 'react-router';

// ** Components
import ProductCard from '@/components/Shared/ProductCard/ProductCard';

// ** Store
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchStoreBrands } from '@/store/apps/brands';
import { fetchStoreCategories } from '@/store/apps/categories';
import { fetchStoreFilteredProducts } from '@/store/apps/products';

// ** Styles
import styles from './ProductsView.module.css';

export default function ProductsView() {
  const location = useLocation();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(location?.state?.category || '');
  const [brand, setBrand] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const searchRef = useRef<string | null>(null);
  const pagRef = useRef<number | null>(null);

  const itemsPerPage = 12;
  const searchDelay = 500;

  const { categories } = useAppSelector((state) => state.categories);
  const { brands } = useAppSelector((state) => state.brands);
  const { filteredProductsRes, loadingFilteredProducts } = useAppSelector(
    (state) => state.products,
  );
  const dispatch = useAppDispatch();

  const constrollProductsRender = () => {
    if (filteredProductsRes?.items?.length) {
      return filteredProductsRes.items.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <ProductCard product={p} />
        </div>
      ));
    } else if (loadingFilteredProducts) {
      return Array.from({ length: itemsPerPage }, (_, i) => (
        <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <Skeleton height={300} />
        </div>
      ));
    } else {
      return (
        <div className="container text-center mt-5 mb-5 py-5">
          <p className="text-center fw-bold ">No se encontraron coincidencias</p>
        </div>
      );
    }
  };

  const handleFilters = (name: string, value: string) => {
    setCurrentPage(1);
    switch (name) {
      case 'search':
        setSearch(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'brand':
        setBrand(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    !categories.length && dispatch(fetchStoreCategories());
    !brands.length && dispatch(fetchStoreBrands());
  }, []);

  useEffect(() => {
    // Si los filtros han cambiado la pagina debe ser 1
    if (pagRef.current === currentPage) {
      // Si la busqueda no ha cambiado se busca y se resetea la pagina
      if (searchRef.current === search) {
        dispatch(
          fetchStoreFilteredProducts({ search, category, brand, page: 1, limit: itemsPerPage }),
        );
      } else {
        // Si la busqueda ha cambiado se busca, se resetea la pagina y se agrega un timeout
        const timeout = setTimeout(() => {
          dispatch(
            fetchStoreFilteredProducts({ search, category, brand, page: 1, limit: itemsPerPage }),
          );
        }, searchDelay);

        return () => clearTimeout(timeout);
      }
    } else {
      // Si la pagina ha cambiado se busca con los filtros actuales
      dispatch(
        fetchStoreFilteredProducts({
          search,
          category,
          brand,
          page: currentPage,
          limit: itemsPerPage,
        }),
      );
    }
  }, [category, search, brand, currentPage]);

  useEffect(() => {
    if (!loadingFilteredProducts) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loadingFilteredProducts]);

  useEffect(() => {
    searchRef.current = search;
    pagRef.current = currentPage;
  }, [search, currentPage]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Todos los Productos</h2>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-4">
          <select
            className={`form-select ${category ? styles['active-filter'] : ''}`}
            value={category}
            name="category"
            onChange={(e) => handleFilters(e.target.name, e.target.value)}
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
            className={`form-select ${brand ? styles['active-filter'] : ''}`}
            value={brand}
            name="brand"
            onChange={(e) => handleFilters(e.target.name, e.target.value)}
          >
            <option value="">Todas las marcas</option>
            {brands.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className={`form-control ${search ? styles['active-filter'] : ''}`}
            placeholder="Buscar por nombre..."
            value={search}
            name="search"
            onChange={(e) => handleFilters(e.target.name, e.target.value)}
          />
        </div>
      </div>

      {/* Grid de productos */}
      <div className="row">{constrollProductsRender()}</div>

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
