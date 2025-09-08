import AnimatedNumbers from 'react-animated-numbers';

// ** Styles
import styles from './HeroBanner.module.css';

// ** Store
import { useAppSelector } from '@/store';

export default function HeroBanner() {
  const { countAvailables } = useAppSelector((state) => state.products);
  const { categories } = useAppSelector((state) => state.categories);

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
              <AnimatedNumbers
                useThousandsSeparator
                transitions={(index) => ({
                  type: 'spring',
                  duration: index + 5,
                })}
                animateToNumber={countAvailables}
              />
              +
            </h4>
            <p className={styles['sub-text']}>Productos</p>
          </div>
          <div className="col col-sm-4">
            <h4 className="fw-bold">
              <AnimatedNumbers
                useThousandsSeparator
                transitions={(index) => ({
                  type: 'spring',
                  duration: index + 6,
                })}
                animateToNumber={categories.length}
              />
              +
            </h4>
            <p className={styles['sub-text']}>Categorias</p>
          </div>
          <div className="col col-sm-4">
            <h4 className="fw-bold">
              <AnimatedNumbers
                useThousandsSeparator
                transitions={(index) => ({
                  type: 'spring',
                  duration: index + 6,
                })}
                animateToNumber={10}
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
