import '@/styles/globals.css'
import{ Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient} >
      <Hydrate state={pageProps.dehydatedState}>      
        <Component {...pageProps} />
      </Hydrate>
    {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}
