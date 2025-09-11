import type { IProduct } from './Product.type';

export interface IBrand {
  id: number;
  name: string;
  products: IProduct[];
}

export interface IBrandState {
  loading: boolean;
  brands: IBrand[];
}
