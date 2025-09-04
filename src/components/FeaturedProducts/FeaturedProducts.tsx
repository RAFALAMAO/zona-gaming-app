import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  const products = [
    {
      name: 'Laptop Gaming ROG Strix - Intel i7, RTX 4060, 16GB RAM',
      price: '$1,299',
      state: 'Nuevo',
      image: '/imgs/temp/rog.png',
    },
    {
      name: 'Drone Profesional 4K',
      price: '$899',
      state: 'Usado 7/10',
      image: '/imgs/temp/drone.jpg',
    },
    {
      name: 'Smartphone Pro Max',
      price: '$799',
      state: 'Caja abierta',
      image: '/imgs/temp/pro-max.jpg',
    },
    {
      name: 'PC Gaming Custom',
      price: '$1,599',
      state: 'Usado 10/10',
      image: '/imgs/temp/pc-custom.jpg',
    },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <div className="row justify-content-between mb-5">
          <div className="col-10 text-start">
            <h2 className="mb-2 fw-bold">Productos Destacados</h2>
            <p className="text-muted mb-0">Los productos más populares de nuestra tienda</p>
          </div>
          <button
            className={`col-2 mt-lg-0 mt-4 ms-lg-0 ms-2 btn btn-primary ${styles.button}`}
            type="button"
          >
            Ver Todos <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 mb-4">
              <div className={`card h-100 ${styles.card}`}>
                <span className={styles['state-badge']}>{p.state}</span>
                <div className={styles['img-container']}>
                  <img src={p.image} className={`card-img-top ${styles.img}`} alt={p.name} />
                </div>
                <div className="card-body">
                  <h5 className={`card-title ${styles['card-title']}`}>{p.name}</h5>
                  <p className="text-primary text-start h4 fw-bold mb-4">{p.price}</p>
                  <button className="btn btn-primary w-100">Ver Más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
