import { useState } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Container } from '@mui/material';
import { Guitar } from '@/components/guitar';
import { Config } from '@/components/config';
import { Tabs } from '@/components/tabs';
import { Scale } from '@/components/scale';
import { useStore, TStore } from '@/store';
import html2canvas from 'html2canvas';

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
    actives,
    changeFrets,
    frets
  }: TStore = useStore((state: any) => state);

  const [editTuning, setEditTuning] = useState(false);

  const changeTuning = () => {
    setEditTuning(!editTuning);
  };

  const copyScale = () => {
    const element: any = document.getElementById('guitar');

    html2canvas(element).then(canvas => {
      const screenshot = canvas.toDataURL('image/png');

      const newWindow: any = window.open();
      newWindow.document.write('<img src="' + screenshot + '" />');
    });
  };

  return (
    <>
      <Head>
        <title>Scale Tab Creator</title>
        <meta name="description" content="Crie suas tabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Config
            onChangeNumberStrings={changeNumberStrings}
            onChangeColor={changeColor}
            clearNotes={clearNotes}
            clearNote={clearNote}
            actives={actives}
            changeTuning={changeTuning}
            editTuning={editTuning}
            copyScale={copyScale}
            changeFrets={changeFrets}
            frets={frets}
          >
              <Guitar
                editTuning={editTuning}
                frets={frets}
                tuning={tuning}
                onSelectNote={({ x, y }) => addNote({ x, y })}
                strings={strings}
                color={color}
              />
          </Config>
          <Scale />
          <Tabs tuning={tuning} notes={notes} strings={strings} />
        </Container>
      </main>
    </>
  );
}
