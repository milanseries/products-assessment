import React from 'react';
import { render } from '@testing-library/react';
import CustomCard from '../components/CustomCard';

describe('Custom card component specs', () => {
  const product = {
    id: 'bb0a83e2-85d7-404e-9a20-cb35a3ad1a2e',
    name: 'My hb product',
    price: 4000.0,
    imageUrl:
      'https://hamrobazaar.obs.ap-southeast-3.myhuaweicloud.com/User/Posts/2022/7/7/f1b40a38-5c8c-405f-92de-cfad61b5609a.webp',
    newPrice: 5000.0,
  };

  it('should display product name', () => {
    const { getByTestId } = render(<CustomCard product={product} />);
    const productName = getByTestId('product-name');
    expect(productName).toHaveTextContent(product.name);
  });

  it('should display product old and new price', () => {
    const { getByTestId } = render(<CustomCard product={product} />);
    const productPrice = getByTestId('product-price');
    const productNewPrice = getByTestId('product-newPrice');
    expect(productNewPrice).toHaveTextContent(product.newPrice);
    expect(productPrice).toHaveTextContent(product.price);
  });

  it('should render product image with attributes', () => {
    const { getByTestId } = render(<CustomCard product={product} />);
    const productImage = getByTestId('product-image');
    expect(productImage.getAttribute('src')).toBe(product.imageUrl);
    expect(productImage.getAttribute('alt')).toBe(product.name);
  });
});
