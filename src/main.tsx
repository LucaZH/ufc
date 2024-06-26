import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes'

import './styles/style.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ServicesContext, initialValue } from './app/contexts';
import { Provider } from 'react-redux';
import store from './app/store';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'always'
    },
    mutations: {
      networkMode: 'always'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ServicesContext.Provider value={initialValue}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ServicesContext.Provider>
    </Provider>
  </React.StrictMode>
)
