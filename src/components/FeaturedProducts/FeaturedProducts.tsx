export default function FeaturedProducts() {
  const products = [
    {
      name: 'Laptop Gaming ROG Strix',
      price: '$1,299',
      label: 'DESTACADO',
      image: 'https://via.placeholder.com/300x200?text=Laptop',
    },
    {
      name: 'Drone Profesional 4K',
      price: '$899',
      label: 'NUEVO',
      image: 'https://via.placeholder.com/300x200?text=Drone',
    },
    {
      name: 'Smartphone Pro Max',
      price: '$799',
      label: '',
      image: 'https://via.placeholder.com/300x200?text=Smartphone',
    },
    {
      name: 'PC Gaming Custom',
      price: '$1,599',
      label: '',
      image: 'https://via.placeholder.com/300x200?text=PC+Gaming',
    },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Productos Destacados</h2>
        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={p.image} className="card-img-top" alt={p.name} />
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
