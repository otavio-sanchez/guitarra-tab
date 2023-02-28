export type TActive = {
  x: number;
  y: number;
  color?: string;
};

export type TStore = {
  notes: TActive[];
  strings: number;
  tuning: string[];
  color: string;
  actives: TActive[];
  addNote: ({ x, y }: TActive) => void;
  changeNumberStrings: (strings: number) => void;
  changeColor: (color: string) => void;
  clearNotes: () => void;
  clearNote: () => void;
  setActiveButton: () => void;
  changeTuning: (value: string, position: string) => void
};
