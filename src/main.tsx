import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ** Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/index.css';

// ** Components
import App from '@app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
