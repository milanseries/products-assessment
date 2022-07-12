import React from 'react';
import Card from './CustomCard';
import useInfiniteProducts from '../lib/hooks/useInfiniteProducts';
import CustomSkeleton from './CustomSkeleton';
import useView from '../lib/hooks/useView';

const Product = () => {
  const productsQuery = useInfiniteProducts();
  const ref = useView(productsQuery);

  return (
    <div>
      {productsQuery.isSuccess &&
        productsQuery.data &&
        productsQuery.data.pages.map(page =>
          page.data.map(product => <Card data={product} key={product.id} />)
        )}
      {productsQuery.isFetchingNextPage && <CustomSkeleton count={2} />}
      <div ref={ref} style={{ visibility: 'hidden' }} />
    </div>
  );
};

export default Product;
