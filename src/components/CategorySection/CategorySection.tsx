export default function CategorySection() {
  const categories = [
    { name: 'Computadoras', description: 'Gaming, trabajo y estudio', count: '120+', icon: '💻' },
    { name: 'Drones', description: 'Profesionales y recreativos', count: '45+', icon: '🛸' },
    { name: 'Smartphones', description: 'Última generación', count: '80+', icon: '📱' },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Explora por Categorías</h2>
        <div className="row justify-content-center">
          {categories.map((cat, i) => (
            <div key={i} className="col-10 col-sm-6 col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-5">{cat.icon}</div>
                  <h5 className="card-title mt-3">{cat.name}</h5>
                  <p className="card-text">{cat.description}</p>
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
