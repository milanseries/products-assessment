import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

axios.defaults.headers['ApiKey'] = process.env.REACT_APP_API_KEY;

const fetchInfiniteProduct = async pageParam => {
  return await axios
    .get(
      `https://stagapi80.hamrobazaar.com/api/Product?PageNumber=${pageParam}&PageSize=10&Latitude=0&Longitude=0`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
};

const Product = () => {
  const { ref, inView } = useInView();
  const { data, isSuccess, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery(
    'products',
    ({ pageParam = 1 }) => fetchInfiniteProduct(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.pageNumber < lastPage.totalPages) return lastPage.pageNumber + 1;
        return false;
      },
    }
  );

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div>
      Products
      {isSuccess &&
        data &&
        data.pages.map(page =>
          page.data.map(product => (
            <div key={product.id}>
              <div>{product.name} </div>
              <div>{product.price}</div>
            </div>
          ))
        )}
      {isFetchingNextPage && <p> loading</p>}
      <span ref={ref} style={{ visibility: 'hidden' }}></span>
    </div>
  );
};

export default Product;
