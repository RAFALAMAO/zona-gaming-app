import type { IProduct } from './Product.type';

export interface ISpec {
  id: number;
  label: string;
  value: string;
  product: IProduct;
}
