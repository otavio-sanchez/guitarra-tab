import { useState } from 'react';
import { Typography } from '@mui/material';
import {
  GuitarColumn,
  GuitarRow,
  GuitarTable,
  Line,
  GuitarContent,
  Tuning,
  GuitarColumnText,
  Mark,
  Marks,
  TwoMark,
  Button
} from './style';
import { TActive } from './types';
import { selectNote } from '@/utils/scales';

const Guitar = () => {
  const [actives, setActives] = useState<TActive[]>([]);
  const strings = 6;
  const freatboard = 25;
  const tuning = ['E', 'B', 'G', 'D', 'A', 'E'];
  const marks = [3, 5, 7, 9, 15, 17, 19];
  const twoMarks = [12, 24];

  const setActiveButton = ({ x, y }: TActive) => {
    const newActives = actives.concat({ x, y });
    setActives(newActives);
  };

  const active = ({ x, y }: TActive) =>
    actives.filter((item: { x: number; y: number }) => item.x === x && item.y === y).length > 0;

  const renderNotes = () => (
    <>
      {Array.from(Array(freatboard), (_, x) => (
        <GuitarColumnText key={`${x}-numbers-top`}>
          <Typography>{x}</Typography>
        </GuitarColumnText>
      ))}
      {Array.from(Array(strings), (_, x) => (
        <GuitarRow key={x}>
          {Array.from(Array(freatboard), (_, y) => (
            <GuitarColumn key={`${x}-${y}`}>
              <Button onClick={() => setActiveButton({ x, y })} style={{ opacity: active({ x, y }) ? 1 : 0 }}>
                {selectNote(tuning[x], y)}
              </Button>
              <Line style={{ height: 2 + x * 0.3 }} />
              {x === strings / 2 && marks.includes(y) && <Mark />}
              {x === strings / 2 && twoMarks.includes(y) && (
                <Marks>
                  <TwoMark /> <TwoMark />
                </Marks>
              )}
            </GuitarColumn>
          ))}
        </GuitarRow>
      ))}
      <GuitarRow key={'numbers'}>
        {Array.from(Array(freatboard), (_, x) => (
          <GuitarColumnText key={`${x}-numbers`}>
            <Typography>{x}</Typography>
          </GuitarColumnText>
        ))}
      </GuitarRow>
    </>
  );

  const renderTuning = () => (
    <div>
      <Tuning />
      {tuning.map((note: string) => (
        <Tuning>
          <Typography>{note}</Typography>{' '}
        </Tuning>
      ))}
    </div>
  );

  return (
    <GuitarContent>
      {renderTuning()}
      <GuitarTable cellSpacing="0">{renderNotes()}</GuitarTable>
    </GuitarContent>
  );
};

export { Guitar };
