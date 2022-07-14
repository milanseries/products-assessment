import { req } from './default';

export const productApi = {
  fetchProducts: async (page) => {
    try {
      return await req.get(`/Product?PageNumber=${page}&PageSize=10&Latitude=0&Longitude=0`);
    } catch (error) {
      throw error;
    }
  },
};
