import React from 'react';
import { Card, Box, Skeleton } from '@mui/material';

const CustomSkeleton = ({ count = 1 }) => {
  return (
    <React.Fragment>
      {Array.from(new Array(count)).map((item, index) => (
        <Card sx={{ marginBottom: '10px' }} key={index}>
          <Box sx={{ display: 'flex' }} elevation={6}>
            <Skeleton variant='rectangular' width={120} height={80} sx={{ marginRight: '10px' }} />
            <Box sx={{ padding: '10px' }}>
              <Skeleton variant='rectangular' width={200} height={12} />
              <br />
              <Skeleton variant='rectangular' width={200} height={25} />
            </Box>
          </Box>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default CustomSkeleton;
