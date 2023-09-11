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
    
    if(strings === 6) {
      set({ tuning: ['E', 'B', 'G', 'D', 'A', 'E'] });
    }

    if(strings === 5) {
      set({ tuning: ['G', 'D', 'A', 'E', 'B'] });
    }

    if(strings === 4) {
      set({ tuning: ['G', 'D', 'A', 'E'] });
    }
 

    if(strings === 7) {
      set({ tuning: ['E', 'B', 'G', 'D', 'A', 'E', 'B']  });
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
    
    const newActives = get().actives.map((active: any) => {
      if(active.x === x && active.y === y) {
        return { x, y, color }
      }

      return active
    }).concat({ x, y, color });
    set({ actives: newActives });
  },
  addScale: async (note: string) => {
    const scale = get().scale.concat(note);

    set({ scale });
  }
});
const useStore = create(store);

export { useStore };
