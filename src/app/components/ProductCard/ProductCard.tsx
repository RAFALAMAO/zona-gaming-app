import type { IProduct } from '../../types/Product';

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <span className="badge bg-secondary">{product.brand}</span>
        </div>
      </div>
    </div>
  );
}
