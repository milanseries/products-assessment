import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Product from './components/Product';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Product />
    </QueryClientProvider>
  );
}

export default App;
