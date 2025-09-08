import type { IProduct } from './Product.type';

export interface IProductImage {
  id: number;
  url: string;
  isMain: boolean;
  product: IProduct;
}
