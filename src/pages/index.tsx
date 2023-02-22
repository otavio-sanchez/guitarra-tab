import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Container } from '@mui/material';
import { Guitar } from '@/components/guitar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Guitarra Tab</title>
        <meta name="description" content="Crie suas tabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Guitar />
        </Container>
      </main>
    </>
  );
}
