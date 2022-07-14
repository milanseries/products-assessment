import React from 'react';
import { Typography, Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import Product from './components/Product';
import { Container } from './styled/containerStyled';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Box>
          <Typography variant="h2">Products list</Typography>
          <Product />
        </Box>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
