import { AppAlpexApiGateWay } from '../app.alpex.api-getway';

// ** Dtos
import type { IBrand } from '@/types/Brand.type';

export class BrandService {
  private baseUrl: string = '/brand';

  async getAll(): Promise<IBrand[]> {
    try {
      const { data } = await AppAlpexApiGateWay.get<IBrand[]>(`${this.baseUrl}/get-all`);

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
}
