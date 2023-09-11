import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { TSelectTuningProps } from './type';
import { notes } from '@/utils/scales';
import { SelectContainer } from './style';

const SelectTuning = ({ onChange, value, key, position }: TSelectTuningProps) => (
  <SelectContainer key={key}>
    <Select
      labelId="select-tuning"
      id="select-tuning"
      value={value}
      onChange={(event: SelectChangeEvent) => onChange(event.target.value, position)}
    >
      {notes.map((note: string) => (
        <MenuItem key={note} value={note}>
          {note}
        </MenuItem>
      ))}
    </Select>
  </SelectContainer>
);

export { SelectTuning };
