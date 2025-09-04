import { createRoot } from 'react-dom/client';

// ** Styles
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// ** Components
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
