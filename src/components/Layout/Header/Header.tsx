// ** Styles
import { Link } from 'react-router';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-dark shadow-sm ${styles.navbar}`}>
        <div className="container">
          <Link className="text-decoration-none" to={'/'}>
            <img className={styles['brand-img']} src="./imgs/gen-icon.png" alt="gen icon" />
            <span className={`navbar-brand text-primary fw-bold ${styles['brand-name']}`}>
              Zona Gaming
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav mx-auto ${styles['nav-items']}`}>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#categorias">
                  Categorias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#agregados">
                  Agregados Recientemente
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="productos">
                  Todos Los Productos
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className={`form-control me-2 bg-dark text-white ${styles['search-input']}`}
                type="search"
                placeholder="Buscar productos..."
              />
              <button className="btn btn-outline-primary" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
