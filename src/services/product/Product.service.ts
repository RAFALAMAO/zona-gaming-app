import { AppAlpexApiGateWay } from '../app.alpex.api-getway';

// ** Dtos
import type { IProduct } from '@/types/Product.type';
import type { FindByFiltersPagDataDto, FindByFiltersPagResDto } from './dtos/Product.service.dto';

export class ProductService {
  private baseUrl: string = '/product';

  async countAll(): Promise<number> {
    try {
      const { data } = await AppAlpexApiGateWay.get<number>(`${this.baseUrl}/count-all`);

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }

  async findBySearch(search: string): Promise<IProduct[]> {
    try {
      const { data } = await AppAlpexApiGateWay.get<IProduct[]>(
        `${this.baseUrl}/get-by-search?search=${search}`,
      );

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }

  async getLatest(limit: number): Promise<IProduct[]> {
    try {
      const { data } = await AppAlpexApiGateWay.get<IProduct[]>(
        `${this.baseUrl}/get-latest?limit=${limit}`,
      );

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }

  async getById(id: number): Promise<IProduct | null> {
    try {
      const { data } = await AppAlpexApiGateWay.get<IProduct | null>(
        `${this.baseUrl}/get-by-id/${id}`,
      );

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }

  async findByFiltersPag({
    search,
    category,
    brand,
    page,
    limit,
  }: FindByFiltersPagDataDto): Promise<FindByFiltersPagResDto> {
    try {
      let url = `${this.baseUrl}/find-by-filters-pag?page=${page}&limit=${limit}`;
      if (search) url += `&search=${search}`;
      if (category) url += `&category=${category}`;
      if (brand) url += `&brand=${brand}`;

      const { data } = await AppAlpexApiGateWay.get<FindByFiltersPagResDto>(url);

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
}
