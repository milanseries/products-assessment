import { req } from './default';

export const productApi = {
  fetchProducts: async page => {
    return await req.get(`/Product?PageNumber=${page}&PageSize=10&Latitude=0&Longitude=0`);
  },
};
