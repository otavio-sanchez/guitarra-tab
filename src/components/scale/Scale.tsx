import { TStore, useStore } from '@/store';
import { Typography } from '@mui/material';

const Scale = () => {
  const { scale }: TStore = useStore((state: any) => state);

  return (
    <>
      <Typography fontWeight={'bold'} variant="overline">
        Escala:
      </Typography>{' '}
      {scale
        .filter((item: string, index: number) => scale.indexOf(item) === index)
        .map(item => (
          <Typography key={item} variant="overline">{` ${item} `}</Typography>
        ))}
    </>
  );
};

export { Scale };
