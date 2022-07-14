import { styled } from '@mui/material';

export const ProductName = styled('div')({
  fontSize: '26px',
  lineHeight: '24px',
  marginBottom: '12px',
});

export const ProductImage = styled('div')({
  height: 'auto',
  position: 'relative',
  overflow: 'hidden',
  marginRight: '10px',
});

export const ProductNewPrice = styled('div')({
  fontSize: '32px',
  fontWeight: '500',
  marginRight: '6px',
});

export const ProductPrice = styled('div')({
  textDecoration: 'line-through',
  fontSize: '20px',
});
