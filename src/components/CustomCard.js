import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const CustomCard = React.memo(function CustomCard({ data }) {
  return (
    <Card sx={{ marginBottom: '10px' }} elevation={6}>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            width: '30%',
            height: 'auto',
            position: 'relative',
            overflow: 'hidden',
            marginRight: '10px',
          }}
        >
          <CardMedia
            component='img'
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            image={data.imageUrl}
            alt={data.name}
          />
        </Box>
        <div>
          <CardContent sx={{ padding: '5px', paddingBottom: '0px !important' }}>
            <Typography component='div' sx={{ fontSize: '22px', lineHeight: '24px' }}>
              {data.name}
            </Typography>
            <div style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '32px', fontWeight: '500' }}>${data.newPrice}</span>{' '}
              <span style={{ textDecoration: 'line-through', fontSize: '20px' }}>
                ${data.price}
              </span>
            </div>
          </CardContent>
        </div>
      </Box>
    </Card>
  );
});

export default CustomCard;
