import type { IProduct } from '@/types/Product.type';

export interface FindByFiltersPagDataDto {
  search: string;
  category: string;
  brand: string;
  page: number;
  limit: number;
}

export interface FindByFiltersPagResDto {
  items: IProduct[];
  total: number;
  page: number;
  totalPages: number;
}
