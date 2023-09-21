import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavContainer } from './src/navigation/NavContainer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryOnMount: false,
      refetchOnMount: false,
      retry: 2
    }
  }
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={'dark-content'} translucent />
      <NavContainer />
    </QueryClientProvider>
  );
};

export default App;
