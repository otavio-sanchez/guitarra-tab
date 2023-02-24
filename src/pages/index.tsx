import { useState } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Container } from '@mui/material';
import { Guitar } from '@/components/guitar';
import { Config } from '@/components/config';
import { TActive } from '@/components/guitar/types';
import { Tabs } from '@/components/tabs';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [notes, setNotes] = useState<TActive[]>([]);
  const [strings, setStrings] = useState<number>(6);
  const [tuning, setTuning] = useState<string[]>(['E', 'B', 'G', 'D', 'A', 'E']);
  const [color, setColor] = useState<string>('red');

  const addNote = ({ x, y }: TActive) => {
    const newNotes = notes.concat({ x, y });
    setNotes(newNotes);
  };

  const changeNumberStrings = (value: number) => {
    if (tuning.length < value) {
      const newTunning = tuning.concat(Array.from(Array(value - tuning.length), _ => tuning[0]));
      setTuning(newTunning);
    }

    setStrings(value);
  };

  const changeColor = (color: string) => {
    setColor(color);
  };

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
          <Guitar tuning={tuning} onSelectNote={({ x, y }) => addNote({ x, y })} strings={strings} color={color} />
          <Config onChangeNumberStrings={changeNumberStrings} onChangeColor={changeColor} />
          <Tabs tuning={tuning} notes={notes} />
        </Container>
      </main>
    </>
  );
}
