export const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const mergeNotes = [...notes, ...notes, ...notes, ...notes];

export const selectNote = (tonic: string, positionNote: number) => {
  const index = notes.indexOf(tonic);

  return mergeNotes[positionNote + index];
};
