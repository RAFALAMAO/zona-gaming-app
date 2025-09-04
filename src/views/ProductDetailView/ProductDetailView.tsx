import { useNavigate, useParams } from 'react-router';

// ** Components
import ImageGallery from '@/components/ProductDetail/ImageGallery/ImageGallery';

export default function ProductDetailView() {
  const mockProducts = [
    {
      id: '1',
      name: 'Laptop Gaming ROG Strix',
      price: '$1,299',
      description:
        'Laptop de alto rendimiento con Intel Core i7, 16GB RAM, SSD 1TB y gráfica RTX 4060.',
      specs: ["Pantalla 15.6'' FHD", 'Teclado RGB', 'WiFi 6', 'Batería de larga duración'],
      images: ['/imgs/temp/rog.png', '/imgs/temp/rog-1.jpg', '/imgs/temp/rog-2.jpg'],
    },
  ];

  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find((p) => p.id === id);

  const handleWhatsappClick = () => {
    const textToShare = encodeURIComponent(
      `Me pueden dar mas información sobre este producto:\n ${window.location.href}`,
    );
    const whatsappUrl = `whatsapp://send?text=${textToShare}&phone=+525610738792`;
    window.location.href = whatsappUrl;
  };

  if (!product) {
    return (
      <div className="container py-5">
        <h3>Producto no encontrado</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-double-left"></i> Volver
      </button>

      <div className="row">
        <div className="col-md-6">
          <ImageGallery images={product.images} />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold">{product.name}</h2>
          <h4 className="text-primary">{product.price}</h4>
          <p className="mt-3">{product.description}</p>
          <h6 className="mt-4">Especificaciones:</h6>
          <ul className="list-unstyled">
            {product.specs.map((spec, i) => (
              <li key={i} className="mb-1">
                <i className="bi bi-align-end"></i> {spec}
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
