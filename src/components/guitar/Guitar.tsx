import { useState } from 'react';
import { Typography } from '@mui/material';
import { GuitarColumn, GuitarRow, GuitarTable, Line, GuitarContent, Tuning, GuitarColumnText, Button } from './style';
import { TActive, TActiveButton, TGuitarProps } from './types';
import { selectNote } from '@/utils/scales';
import { Marks } from './Marks';

const Guitar = ({ tuning, onSelectNote, strings, color }: TGuitarProps) => {
  const [actives, setActives] = useState<TActiveButton[]>([]);
  const freatboard = 25;

  const setActiveButton = ({ x, y, color }: TActiveButton) => {
    const newActives = actives.concat({ x, y, color });
    setActives(newActives);
    onSelectNote({ x, y });
  };

  const active = ({ x, y }: TActive) =>
    actives.filter((item: { x: number; y: number }) => item.x === x && item.y === y).length > 0;

  const selectColor = ({ x, y }: TActive) => {
    const selectActive = actives.find((item: { x: number; y: number }) => item.x === x && item.y === y);

    if (selectActive) {
      return selectActive.color;
    }

    return color;
  };

  const renderNumbers = () =>
    Array.from(Array(freatboard), (_, x) => (
      <GuitarColumnText key={`${x}-numbers`}>
        <Typography>{x}</Typography>
      </GuitarColumnText>
    ));

  const renderNotes = () => (
    <>
      {renderNumbers()}
      {Array.from(Array(strings), (_, x) => (
        <GuitarRow key={x}>
          {Array.from(Array(freatboard), (_, y) => (
            <GuitarColumn key={`${x}-${y}`}>
              <Button
                onClick={() => setActiveButton({ x, y, color })}
                style={{ backgroundColor: selectColor({ x, y }), opacity: active({ x, y }) ? 1 : 0 }}
              >
                {selectNote(tuning[x], y)}
              </Button>
              <Line style={{ height: 2 + x * 0.3 }} />
              <Marks x={x} y={y} strings={strings} />
            </GuitarColumn>
          ))}
        </GuitarRow>
      ))}
      {renderNumbers()}
    </>
  );

  const renderTuning = () => (
    <div>
      <Tuning />
      {tuning
        .filter((note: string, index: number) => index < strings)
        .map((note: string, index: number) => (
          <Tuning key={`${note}-${index}`}>
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
