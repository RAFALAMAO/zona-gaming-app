import { AppAlpexApiGateWay } from '../app.alpex.api-getway';

export class ProductService {
  private baseUrl: string = '/product';

  async getAll() {
    try {
      const { data } = await AppAlpexApiGateWay.get(`${this.baseUrl}/get-all`);

      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
}
