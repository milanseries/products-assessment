import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Product from './components/Product';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          display: 'flex',
          padding: '32px',
          alignItems: 'center',
          minHeight: '90vh',
          justifyContent: 'center',
        }}
      >
        <Product />
      </div>
    </QueryClientProvider>
  );
}

export default App;
