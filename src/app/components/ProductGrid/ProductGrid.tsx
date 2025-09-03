// ** Components
import ProductCard from '@app/components/ProductCard/ProductCard';

// ** Types
import type { IProduct } from '@app/types/Product';

interface Props {
  products: IProduct[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="row">
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
}
