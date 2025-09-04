import { NavLink } from 'react-router';

// ** Styles
import styles from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col text-center">
          <h1 className={styles.title}>404</h1>
          <h4>No esperabámos ésta visita, te recomendamos volver a la página de inicio</h4>
          <NavLink className="btn btn-primary mt-5 mb-5" to="/">
            Volver a la página de inicio
          </NavLink>
        </div>
      </div>
    </div>
  );
}
