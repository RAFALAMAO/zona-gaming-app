// ** Styles
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
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
            <h4 className="fw-bold">120+</h4>
            <p className={styles['sub-text']}>Productos</p>
          </div>
          <div className="col col-sm-4">
            <h4 className="fw-bold">3+</h4>
            <p className={styles['sub-text']}>Categorias</p>
          </div>
          <div className="col col-sm-4">
            <h4 className="fw-bold">10+</h4>
            <p className={styles['sub-text']}>Marcas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
