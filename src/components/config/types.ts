import { TActive } from '../guitar/types';

export type TConfigProps = {
  onChangeNumberStrings: (strings: number) => void;
  onChangeColor: (color: string) => void;
  clearNotes: () => void;
  clearNote: () => void;
  actives: TActive[];
  changeTuning: () => void;
  editTuning: boolean
};
