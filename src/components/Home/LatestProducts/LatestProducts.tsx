import { Link } from 'react-router';

// ** Styles
import styles from './LatestProducts.module.css';

// ** Components
import ProductCard from '@/components/Shared/ProductCard/ProductCard';

// ** Store
import { useAppSelector } from '@/store';

export default function LatestProducts() {
  const { latestProducts } = useAppSelector((state) => state.products);

  return (
    <section id="agregados" className="py-5 bg-light">
      <div className="container text-center">
        <div className="row justify-content-between mb-5">
          <div className="col-10 text-start">
            <h2 className="mb-2 fw-bold">Agregados Recientemente</h2>
            <p className="text-muted mb-0">Los ultimos productos publicados</p>
          </div>
          <Link
            to="/productos"
            className={`col-2 mt-lg-0 mt-4 ms-lg-0 ms-2 btn btn-primary ${styles.button}`}
          >
            Ver Todos <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="row">
          {latestProducts.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 mb-4">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
