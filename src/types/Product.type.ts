// ** Dtos
import type { FindByFiltersPagResDto } from '@/services/product/dtos/Product.service.dto';
import type { IBrand } from './Brand.type';
import type { IProductImage } from './ProductImage.type';
import type { ISpec } from './Spec.type';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  status: string;
  category: unknown;
  brand: IBrand;
  images: IProductImage[];
  specs: ISpec[];
}

export interface IProductsState {
  countAvailables: number;
  loadingAvailables: boolean;
  latestProducts: IProduct[];
  loadingLatest: boolean;
  filteredProductsRes: FindByFiltersPagResDto;
  loadingFilteredProducts: boolean;
}
