import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate, useParams } from 'react-router';

// ** Components
import ImageGallery from '@/components/ProductDetail/ImageGallery/ImageGallery';

// ** Services
import { ProductService } from '@/services/product/Product.service';

// ** Types
import type { IProduct } from '@/types/Product.type';

// ** Tools
import { formaterAmount } from '@/tools/formatAmount.tool';

// ** Styles
import styles from './ProductDetailView.module.css';

export default function ProductDetailView() {
  const productService = new ProductService();

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProduct | null>(null);

  const handleWhatsappClick = () => {
    const textToShare = encodeURIComponent(
      `Me pueden dar mas información sobre este producto:\n ${window.location.href}`,
    );
    const whatsappUrl = `whatsapp://send?text=${textToShare}&phone=+525610738792`;
    window.location.href = whatsappUrl;
  };

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const product = await productService.getById(+id);
        setProduct(product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container py-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-double-left"></i> Volver
      </button>

      <div className="row">
        <div className="col-md-6">
          <ImageGallery images={product?.images || []} />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold">
            {product?.name || (
              <Skeleton width={250} baseColor="#777777ff" highlightColor="#262626ff" />
            )}
          </h2>
          <h4 className="text-primary">
            {product?.price ? (
              formaterAmount(product?.price, '')
            ) : (
              <Skeleton width={150} baseColor="#1962ffff" highlightColor="#88aeffff" />
            )}
          </h4>
          <p className="mt-3">{product?.description || <Skeleton width={250} />}</p>
          <h6 className="mt-4">Especificaciones:</h6>
          <ul className="list-unstyled">
            {product?.specs
              ? product?.specs.map((spec, i) => (
                  <li key={i} className="mb-1">
                    <i className="bi bi-currency-rupee text-primary me-1"></i> {spec.label}:{' '}
                    {spec.value}
                  </li>
                ))
              : Array.from({ length: 5 }).map((_, i) => <Skeleton width={200} key={i} />)}
          </ul>
          <button
            className={`btn btn-success mt-4 ${styles['whats-btn']}`}
            onClick={handleWhatsappClick}
          >
            <i className="bi bi-whatsapp me-2" />
            Pedir Información
          </button>
          <div className="mt-4">
            <p>Tambien puedes comunicate con nosotros por WhatsApp:</p>
            <p className="fw-bold">+52 5610738792</p>
          </div>
        </div>
      </div>
    </div>
  );
}
