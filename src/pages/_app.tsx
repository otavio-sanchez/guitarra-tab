import type { AppProps } from 'next/app';
import { Header } from '@/components/header';
import React from 'react';
import dynamic from 'next/dynamic';
import { createTheme, ThemeProvider } from '@mui/material';

///#308C58
///#F2BE5C
///#D98E32
//#731702
//#7AB3BF

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#308C58',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fff'
    }
  }
});

const TodoProvider = dynamic(() => import('@/utils/context').then(ctx => ctx.default), {
  ssr: false
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <Header />
        <Component {...pageProps} />
      </TodoProvider>
    </ThemeProvider>
  );
}
