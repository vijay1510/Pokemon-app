import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';

// Create a new query client instance
const queryClient = new QueryClient();

// A wrapper component that provides the QueryClient to its children
const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // Wrap your app with QueryClientProvider to provide the client to its components.
  );
};

export default AllProviders;
