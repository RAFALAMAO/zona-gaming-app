import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

// ** Styles
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// ** Components
import App from './App';
import ErrorBoundary from './components/Shared/ErrorBoundary/ErrorBoundary';

// ** Store
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
);
