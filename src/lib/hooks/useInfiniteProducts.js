import { useInfiniteQuery } from 'react-query';
import { productApi } from '../axios';

export default function useInfiniteProducts() {
  return useInfiniteQuery('products', ({ pageParam = 1 }) => productApi.fetchProducts(pageParam), {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.pageNumber < lastPage.totalPages) return lastPage.pageNumber + 1;
      return false;
    },
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
}
