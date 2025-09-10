import { Link } from 'react-router';

// ** Styles
import styles from './ProductCard.module.css';

// ** Types
import type { IProduct } from '@/types/Product.type';

// ** Tools
import { formaterAmount } from '@/tools/formatAmount.tool';

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className={`card h-100 ${styles.card}`}>
      <span className={styles['state-badge']}>{product.status}</span>
      <div className={styles['img-container']}>
        <img
          src={product.images.find((img) => img.isMain)?.url}
          className={`card-img-top ${styles.img}`}
          alt={product.name}
        />
      </div>
      <div className="card-body">
        <h5 className={`card-title ${styles['card-title']}`}>{product.name}</h5>
        <p className="text-primary text-start h4 fw-bold mb-4">
          {formaterAmount(product.price, '')}
        </p>
        <Link to={`/producto/${product.id}`} className="btn btn-primary w-100">
          <i className="bi bi-eye me-2"></i>Ver Más
        </Link>
      </div>
    </div>
  );
}
