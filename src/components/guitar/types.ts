export type TActive = {
  x: number;
  y: number;
};

export type TActiveButton = {
  x: number;
  y: number;
  color: string;
};

export type TGuitarProps = {
  tuning: string[];
  onSelectNote: ({ x, y }: { x: number; y: number }) => void;
  strings: number;
  color: string;
};

export interface IMarksProps extends TActive {
  strings: number;
}
