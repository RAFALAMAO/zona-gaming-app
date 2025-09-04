export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 mt-5 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5 className="text-primary">Zona Gaming</h5>
            <p className="small">
              Tu tienda online para la mejor tecnología, ofreciendo las últimas generaciones con
              garantía y envío gratis.
            </p>
            <div className="mt-2">
              <a href="#" className="text-dark me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Enlaces Rápidos</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Computadoras
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Drones
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Atención al Cliente</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Envíos y Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Contacto</h6>
            <p className="small mb-1">📧 support@techmarket.com</p>
            <p className="small mb-1">📞 +1 (123) 456-7890</p>
            <p className="small">📍 Ciudad de México, México</p>
          </div>
        </div>

        <hr />
        <div className="text-center small">© 2025 Zona Gaming. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
