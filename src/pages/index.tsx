import { useState } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Container } from '@mui/material';
import { Guitar } from '@/components/guitar';
import { Config } from '@/components/config';
import { Tabs } from '@/components/tabs';
import { useStore, TStore } from '@/store';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const {
    tuning,
    addNote,
    strings,
    color,
    changeNumberStrings,
    changeColor,
    clearNotes,
    notes,
    clearNote,
    actives
  }: TStore = useStore((state: any) => state);

  const [editTuning, setEditTuning] = useState(false)

  const changeTuning = () => {
    setEditTuning(!editTuning)
  }

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
          <Guitar editTuning={editTuning} tuning={tuning} onSelectNote={({ x, y }) => addNote({ x, y })} strings={strings} color={color} />
          <Config
            onChangeNumberStrings={changeNumberStrings}
            onChangeColor={changeColor}
            clearNotes={clearNotes}
            clearNote={clearNote}
            actives={actives}
            changeTuning={changeTuning}
            editTuning={editTuning}
          />
          <Tabs tuning={tuning} notes={notes} strings={strings} />
        </Container>
      </main>
    </>
  );
}
