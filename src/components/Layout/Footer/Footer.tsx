// ** Styles
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`text-light pt-5 pb-3 border-top ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="d-flex align-items-center mb-2">
              <img className={`img-fluid ${styles.img}`} src="/imgs/gen-icon.png" alt="" />
              <h5 className="text-primary mt-2">Zona Gaming</h5>
            </div>
            <p className="small text-white">
              Tu tienda online para la mejor tecnología, ofreciendo las últimas generaciones con
              garantía y envío gratis.
            </p>
            <div className={`mt-2 ${styles['info-icons']}`}>
              <a href="#" className="text-light me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Enlaces Rápidos</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Computadoras
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Drones
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Atención al Cliente</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Envíos y Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Contacto</h6>
            <div className={`text-white-50 ${styles['contact-icons']}`}>
              <p className="small mb-1">
                <i className="bi bi-envelope"></i> support@techmarket.com
              </p>
              <p className="small mb-1">
                <i className="bi bi-whatsapp" /> +52 5610738792
              </p>
              <p className="small">
                <i className="bi bi-geo-alt"></i> Ciudad de México, México
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center small">© 2025 Zona Gaming. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
