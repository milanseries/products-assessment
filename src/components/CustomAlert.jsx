import React from 'react';
import { Alert } from '@mui/material';

const CustomAlert = () => {
  return (
    <Alert variant="outlined" severity="error" data-testid="custom-alert">
      Something went wrong. Please check again.
    </Alert>
  );
};

export default CustomAlert;
