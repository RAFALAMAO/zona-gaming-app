import { useEffect, useState } from 'react';

// ** Types
import type { IProductImage } from '@/types/ProductImage.type';

interface Props {
  images: IProductImage[] | undefined;
}

export default function ImageGallery({ images }: Props) {
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (images && images.length > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveImage(images.find((img) => img.isMain)?.url || images[0].url);
    }
  }, [images]);

  return (
    <div>
      <div
        className="position-relative overflow-hidden border rounded shadow-sm"
        style={{ height: '400px' }}
      >
        <img
          src={activeImage}
          alt="Producto"
          className="w-100 h-100 object-fit-cover"
          style={{
            transition: 'transform 0.3s ease',
            cursor: 'zoom-in',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>

      <div className="d-flex gap-3 mt-3 flex-wrap">
        {images?.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`Vista ${i + 1}`}
            className={`img-thumbnail ${img.url === activeImage ? 'border-primary' : ''}`}
            style={{ width: '100px', cursor: 'pointer' }}
            onClick={() => setActiveImage(img.url)}
          />
        ))}
      </div>
    </div>
  );
}
