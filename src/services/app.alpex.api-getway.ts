import axios from 'axios';

// ** Config
import { config } from '@/config';

export const AppAlpexApiGateWay = axios.create({
  baseURL: config.api.url,
  headers: { 'x-api-key': config.api.key },
});
