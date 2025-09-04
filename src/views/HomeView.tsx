// ** Components
import CategorySection from '@/components/Home/CategorySection/CategorySection';
import FeaturedProducts from '@/components/Home/FeaturedProducts/FeaturedProducts';
import HeroBanner from '@/components/Home/HeroBanner/HeroBanner';

export default function HomeView() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
}
