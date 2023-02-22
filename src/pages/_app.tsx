import type { AppProps } from 'next/app';
import { Header } from '@/components/header';
import React from 'react';
import dynamic from 'next/dynamic';

const TodoProvider = dynamic(() => import('@/utils/context').then(ctx => ctx.default), {
  ssr: false
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Header />
      <Component {...pageProps} />
    </TodoProvider>
  );
}
