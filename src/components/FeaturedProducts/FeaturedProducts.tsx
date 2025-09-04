import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  const products = [
    {
      name: 'Laptop Gaming ROG Strix',
      price: '$1,299',
      label: 'DESTACADO',
      image: '/imgs/temp/rog.png',
    },
    {
      name: 'Drone Profesional 4K',
      price: '$899',
      label: 'NUEVO',
      image: '/imgs/temp/drone.jpg',
    },
    {
      name: 'Smartphone Pro Max',
      price: '$799',
      label: 'sdf',
      image: '/imgs/temp/pro-max.jpg',
    },
    {
      name: 'PC Gaming Custom',
      price: '$1,599',
      label: 'fds',
      image: '/imgs/temp/pc-custom.jpg',
    },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <div className={styles['title-container']}>
          <div className="text-start">
            <h2 className="mb-2 fw-bold">Productos Destacados</h2>
            <p className="text-muted mb-0">Los productos más populares de nuestra tienda</p>
          </div>
          <button type="button" className="btn btn-primary">
            Ver Todos <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={p.image} className={`card-img-top ${styles.img}`} alt={p.name} />
                <div className="card-body">
                  {p.label && <span className="badge bg-primary mb-2">{p.label}</span>}
                  <h5 className="card-title">{p.name}</h5>
                  <p className="text-primary fw-bold">{p.price}</p>
                  <button className="btn btn-outline-primary btn-sm">Ver Más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
