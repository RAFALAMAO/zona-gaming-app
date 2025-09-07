import { Link } from 'react-router';

// ** Styles
import styles from './FeaturedProducts.module.css';

// ** Components
import ProductCard from '@/components/Shared/ProductCard/ProductCard';

export default function FeaturedProducts() {
  const products = [
    {
      name: 'Laptop Gaming ROG Strix - Intel i7, RTX 4060, 16GB RAM',
      price: '$1,299',
      state: 'Nuevo',
      image: '/imgs/temp/rog.png',
    },
    {
      name: 'Drone Profesional 4K',
      price: '$899',
      state: 'Usado 7/10',
      image: '/imgs/temp/drone.jpg',
    },
    {
      name: 'Smartphone Pro Max',
      price: '$799',
      state: 'Caja abierta',
      image: '/imgs/temp/pro-max.jpg',
    },
    {
      name: 'PC Gaming Custom',
      price: '$1,599',
      state: 'Usado 10/10',
      image: '/imgs/temp/pc-custom.jpg',
    },
  ];

  return (
    <section className="py-5 bg-light">
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
          {products.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 mb-4">
              <ProductCard product={p} id={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
