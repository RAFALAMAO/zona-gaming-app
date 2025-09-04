// ** Styles
import { Link } from 'react-router';
import styles from './ProductCard.module.css';

interface Props {
  product: any;
  id: number;
}

export default function ProductCard({ product, id }: Props) {
  return (
    <div className={`card h-100 ${styles.card}`}>
      <span className={styles['state-badge']}>{product.state}</span>
      <div className={styles['img-container']}>
        <img src={product.image} className={`card-img-top ${styles.img}`} alt={product.name} />
      </div>
      <div className="card-body">
        <h5 className={`card-title ${styles['card-title']}`}>{product.name}</h5>
        <p className="text-primary text-start h4 fw-bold mb-4">{product.price}</p>
        <Link to={`/producto/${id}`} className="btn btn-primary w-100">
          <i className="bi bi-bullseye me-2"></i>Ver Más
        </Link>
      </div>
    </div>
  );
}
