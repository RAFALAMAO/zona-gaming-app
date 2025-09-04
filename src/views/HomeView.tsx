// ** Components
import CategorySection from '@/components/CategorySection/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function HomeView() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
}
