import { useEffect, useState } from 'react';

// ** Styles
import styles from './CategorySection.module.css';

// ** Services
import { CategoryService } from '@/services/category/Category.service';

// ** Dtos
import type { GetAllWithProductsCountResDto } from '@/services/category/Category.dto';

export default function CategorySection() {
  const categoryService = new CategoryService();

  const [categories, setCategories] = useState<GetAllWithProductsCountResDto[]>([]);

  const choseCategoryIcon = (category: string) => {
    switch (category) {
      case 'Computadoras':
        return 'bi bi-pc-display-horizontal';
      case 'Drones':
        return 'bi bi-bezier';
      case 'Celulares':
        return 'bi bi-phone';
      case 'Monitores':
        return 'bi bi-display';
      case 'Pantallas':
        return 'bi bi-tv';
      case 'Consolas':
        return 'bi bi-controller';
      default:
        return 'bi bi-cpu';
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await categoryService.getAllWithProductsCount();
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <section id="categorias" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Explora por Categorías</h2>
        <p className="text-muted mb-5">
          Encuentra exactamente lo que buscas en nuestras categorías especializadas
        </p>
        <div className="row justify-content-center">
          {categories.map((cat, i) => (
            <div key={i} className="col-10 col-sm-6 col-md-4 mb-4">
              <div className={`card h-100 pt-3 ${styles.card}`}>
                <div className="card-body">
                  <div className={`display-5 ${styles['icon-container']}`}>
                    <i className={`${choseCategoryIcon(cat.name)} ${styles.icon}`}></i>
                  </div>
                  <h5 className="card-title mt-3 fw-bold">{cat.name}</h5>
                  <p className="card-text text-muted">{cat.description}</p>
                  <p className="text-primary fw-bold">{cat.productsCount} productos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
