import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

// ** Components
import ImageGallery from '@/components/ProductDetail/ImageGallery/ImageGallery';
import Loader from '@/components/Shared/Loader/Loader';

// ** Services
import { ProductService } from '@/services/product/Product.service';

// ** Types
import type { IProduct } from '@/types/Product.type';

// ** Tools
import { formaterAmount } from '@/tools/formatAmount.tool';

export default function ProductDetailView() {
  const productService = new ProductService();

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [showLoader, setShowLoader] = useState(false);

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
      setShowLoader(true);
      try {
        const product = await productService.getById(+id);
        setProduct(product);
      } catch (error) {
        console.error(error);
      } finally {
        setShowLoader(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container py-5">
      <Loader show={showLoader} />
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-double-left"></i> Volver
      </button>

      <div className="row">
        <div className="col-md-6">
          <ImageGallery images={product?.images || []} />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold">{product?.name}</h2>
          <h4 className="text-primary">{formaterAmount(product?.price || 0, '')}</h4>
          <p className="mt-3">{product?.description}</p>
          <h6 className="mt-4">Especificaciones:</h6>
          <ul className="list-unstyled">
            {product?.specs.map((spec, i) => (
              <li key={i} className="mb-1">
                <i className="bi bi-align-end"></i> {spec.label}: {spec.value}
              </li>
            ))}
          </ul>
          <button className="btn btn-success mt-4" onClick={handleWhatsappClick}>
            <i className="bi bi-whatsapp me-2" />
            Información del Producto
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
