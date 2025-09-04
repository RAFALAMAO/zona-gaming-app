// ** Styles
import './App.css';

// ** Components
import CategorySection from './components/CategorySection/CategorySection';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default App;
