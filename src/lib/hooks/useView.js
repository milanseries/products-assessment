import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function useView(productsQuery) {
  const { ref, inView } = useInView();
  React.useEffect(() => {
    if (inView && productsQuery.hasNextPage) {
      productsQuery.fetchNextPage();
    }
  }, [productsQuery.fetchNextPage, inView, productsQuery.hasNextPage, productsQuery]);
  return ref;
}
