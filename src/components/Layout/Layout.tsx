import { Outlet } from 'react-router';

// ** Components
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
