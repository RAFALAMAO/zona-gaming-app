import { createRoot } from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

// ** Styles
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
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
        <SkeletonTheme highlightColor="#b1b1b1ff" duration={0.9} borderRadius={10}>
          <App />
        </SkeletonTheme>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
);
