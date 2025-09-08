import { useEffect } from 'react';
import { useLocation } from 'react-router';

// ** Components
import CategorySection from '@/components/Home/CategorySection/CategorySection';
import HeroBanner from '@/components/Home/HeroBanner/HeroBanner';
import LatestProducts from '@/components/Home/LatestProducts/LatestProducts';
import Loader from '@/components/Shared/Loader/Loader';

// ** Store
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchStoreCategories } from '@/store/apps/categories';
import { fetchStoreCountAvailables, fetchStoreLatest } from '@/store/apps/products';

export default function HomeView() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const productsState = useAppSelector((state) => state.products);
  const categoriesState = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    !productsState.countAvailables && dispatch(fetchStoreCountAvailables());
    !productsState.latestProducts.length && dispatch(fetchStoreLatest());
    !categoriesState.categories.length && dispatch(fetchStoreCategories());
  }, []);

  return (
    <>
      <Loader
        show={
          productsState.loadingAvailables || productsState.loadingLatest || categoriesState.loading
        }
      />
      <HeroBanner />
      <CategorySection />
      <LatestProducts />
    </>
  );
}
