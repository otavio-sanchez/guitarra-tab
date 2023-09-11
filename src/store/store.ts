import create from 'zustand';
import { TActive } from './types';

// eslint-disable-next-line
const store = (set: any, get: any) => ({
  notes: [],
  strings: 6,
  tuning: ['E', 'B', 'G', 'D', 'A', 'E'],
  color: 'red',
  actives: [],
  scale: [],
  lastNote: null,
  frets: 24,
  addNote: async ({ x, y }: TActive) => {
    const newNotes = get().notes.concat({ x, y });

    set({ notes: newNotes });
  },
  changeNumberStrings: async (strings: number) => {
    const tuning = get().tuning;

    if (tuning.length < strings) {
      const newTunning = tuning.concat(Array.from(Array(strings - tuning.length), _ => tuning[0]));
      set({ tuning: newTunning });
    }

    set({ strings });
  },
  changeColor: async (color: string) => {
    set({ color });
  },
  changeFrets: async (frets: string) => {
    set({ frets });
  },
  changeTuning: async (value: string, position: number) => {
    const newTuning = get().tuning;

    newTuning[position] = value;

    set({ tuning: newTuning });
  },
  clearNotes: async () => {
    set({ notes: [], actives: [], scale: [] });
  },
  clearNote: async () => {
    set({ notes: get().notes.slice(0, -1), actives: get().actives.slice(0, -1), scale: get().scale.slice(0, -1) });
  },
  setActiveButton: async ({ x, y, color }: TActive) => {
    const newActives = get().actives.concat({ x, y, color });
    set({ actives: newActives });
  },
  addScale: async (note: string) => {
    const scale = get().scale.concat(note);

    set({ scale });
  }
});
const useStore = create(store);

export { useStore };
