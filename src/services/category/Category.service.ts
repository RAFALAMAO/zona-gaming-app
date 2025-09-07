import { AppAlpexApiGateWay } from '../app.alpex.api-getway';

// ** Dtos
import type { GetAllWithProductsCountResDto } from './Category.dto';

export class CategoryService {
  private baseUrl: string = '/category';

  async getAllWithProductsCount(): Promise<GetAllWithProductsCountResDto[]> {
    try {
      const { data } = await AppAlpexApiGateWay.get<GetAllWithProductsCountResDto[]>(
        `${this.baseUrl}/all-with-products-count`,
      );

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
}
