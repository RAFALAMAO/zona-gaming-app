import { useEffect } from 'react';
import { useLocation } from 'react-router';

// ** Components
import CategorySection from '@/components/Home/CategorySection/CategorySection';
import HeroBanner from '@/components/Home/HeroBanner/HeroBanner';
import LatestProducts from '@/components/Home/LatestProducts/LatestProducts';

export default function HomeView() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <HeroBanner />
      <CategorySection />
      <LatestProducts />
    </>
  );
}
