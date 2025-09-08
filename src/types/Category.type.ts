import type { GetAllWithProductsCountResDto } from '@/services/category/Category.service.dto';

export interface ICategoryState {
  loading: boolean;
  categories: GetAllWithProductsCountResDto[];
}
