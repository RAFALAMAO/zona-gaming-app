import NumberFlow from '@number-flow/react';

// ** Styles
import styles from './HeroBanner.module.css';

// ** Store
import { useAppSelector } from '@/store';

export default function HeroBanner() {
  const { countAvailables } = useAppSelector((state) => state.products);
  const { categories } = useAppSelector((state) => state.categories);

  const animationConfig = {
    transformTiming: {
      duration: 3000,
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    spinTiming: {
      duration: 3000,
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    opacityTiming: {
      duration: 400,
      easing: 'ease-out',
    },
  };

  return (
    <section className={`text-white text-center py-5 ${styles.background}`}>
      <div className="container py-5">
        <h1 className="display-4 fw-bold">
          Toda la Tecnología <br />
          <span className={styles.title}>Al Mejor Precio</span>
        </h1>
        <p className="lead mt-3">Venta, compra y cambio de tecnología a los mejores precios.</p>
        <div className="row mt-4 ms-5 me-5">
          <div className="col-12 col-sm-4">
            <h4 className="fw-bold">
              <NumberFlow
                value={countAvailables}
                transformTiming={animationConfig.transformTiming}
                spinTiming={animationConfig.spinTiming}
                opacityTiming={animationConfig.opacityTiming}
              />
              +
            </h4>
            <p className={styles['sub-text']}>Productos</p>
          </div>
          <div className="col col-sm-4">
            <h4 className="fw-bold">
              <NumberFlow
                value={categories.length}
                transformTiming={animationConfig.transformTiming}
                spinTiming={animationConfig.spinTiming}
                opacityTiming={animationConfig.opacityTiming}
              />
              +
            </h4>
            <p className={styles['sub-text']}>Categorias</p>
          </div>
          <div className="col col-sm-4">
            <h4 className="fw-bold">
              <NumberFlow
                value={10}
                transformTiming={animationConfig.transformTiming}
                spinTiming={animationConfig.spinTiming}
                opacityTiming={animationConfig.opacityTiming}
              />
              +
            </h4>
            <p className={styles['sub-text']}>Marcas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
