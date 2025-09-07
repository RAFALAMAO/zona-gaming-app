// ** Styles
import styles from './CategorySection.module.css';

export default function CategorySection() {
  const categories = [
    {
      name: 'Computadoras',
      description: 'Gaming, trabajo y estudio',
      count: '120+',
      icon: 'bi bi-laptop',
    },
    {
      name: 'Drones',
      description: 'Profesionales y recreativos',
      count: '45+',
      icon: 'bi bi-bezier',
    },
    { name: 'Smartphones', description: 'Última generación', count: '80+', icon: 'bi bi-phone' },
  ];

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
                    <i className={`${cat.icon} ${styles.icon}`}></i>
                  </div>
                  <h5 className="card-title mt-3 fw-bold">{cat.name}</h5>
                  <p className="card-text text-muted">{cat.description}</p>
                  <p className="text-primary fw-bold">{cat.count} productos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
