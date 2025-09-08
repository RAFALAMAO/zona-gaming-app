import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

interface Props {
  text?: string;
  show: boolean;
}

const Loader = ({ text = 'Cargando', show }: Props) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }, 500); // duración del fade-out
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return shouldRender ? (
    <div
      className={`${styles['loader-container']} ${show ? styles['fade-in'] : styles['fade-out']}`}
    >
      <div className={`${styles['tech-ring']}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={`${styles['loader-text']}`}>
        {text}
        <span className={`${styles['dots']}`}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>
    </div>
  ) : null;
};

export default Loader;
