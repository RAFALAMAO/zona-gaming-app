import { Route, Routes } from 'react-router';

// ** Styles
import './App.css';

// ** Views
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView/NotFoundView';

// ** Layout
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

export default App;
