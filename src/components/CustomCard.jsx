import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box, Card, CardContent } from '@mui/material';
import { ProductImage, ProductName, ProductNewPrice, ProductPrice } from '../styled/productStyled';

const CustomCard = React.memo(function CustomCard({ product }) {
  return (
    <Card sx={{ marginBottom: '10px' }} elevation={6}>
      <Box sx={{ display: 'flex' }}>
        <ProductImage>
          <LazyLoadImage
            effect="blur"
            key={product.id}
            alt={product.name}
            src={product.imageUrl}
            width={'180px'}
            data-testid="product-image"
          />
        </ProductImage>
        <Box>
          <CardContent sx={{ padding: '5px', paddingBottom: '0px !important' }}>
            <ProductName data-testid="product-name">{product.name}</ProductName>
            <Box sx={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
              <ProductNewPrice data-testid="product-newPrice">${product.newPrice}</ProductNewPrice>
              <ProductPrice data-testid="product-price">${product.price}</ProductPrice>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
});

export default CustomCard;
