import React from 'react';
import { Card, Box, Skeleton } from '@mui/material';

const CustomSkeleton = ({ count = 1 }) => {
  return (
    <React.Fragment>
      {Array.from(new Array(count)).map((item, index) => (
        <Card sx={{ marginBottom: '10px' }} key={index} elevation={6}>
          <Box sx={{ display: 'flex' }} elevation={6}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={180}
              height={120}
              sx={{ marginRight: '10px' }}
            />
            <Box sx={{ padding: '10px' }}>
              <Skeleton variant="rectangular" width={200} height={12} />
              <br />
              <Skeleton variant="rectangular" width={200} height={45} />
            </Box>
          </Box>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default CustomSkeleton;
