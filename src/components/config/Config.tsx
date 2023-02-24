import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TConfigProps } from './types';
import { Color } from './style';
import Grid from '@mui/material/Grid';

const Config = ({ onChangeNumberStrings, onChangeColor }: TConfigProps) => {
  const [strings, setStrings] = useState('6');
  const [colors, setColor] = useState('red');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setStrings(value as string);
    onChangeNumberStrings(Number(value));
  };

  const handleChangeColor = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setColor(value);
    onChangeColor(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel id="select-strings">Cordas</InputLabel>
          <Select
            labelId="select-strings"
            id="string-select"
            value={strings.toString()}
            label="Cordas"
            onChange={handleChange}
          >
            <MenuItem value={'8'}>8</MenuItem>
            <MenuItem value={'7'}>7</MenuItem>
            <MenuItem value={'6'}>6</MenuItem>
            <MenuItem value={'5'}>5</MenuItem>
            <MenuItem value={'4'}>4</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={1}>
        <FormControl fullWidth>
          <InputLabel id="select-colors">Cor</InputLabel>
          <Select labelId="select-colors" id="colors-select" value={colors} label="Cor" onChange={handleChangeColor}>
            <MenuItem value={'blue'}>
              <Color style={{ backgroundColor: 'blue' }} />
            </MenuItem>
            <MenuItem value={'red'}>
              <Color style={{ backgroundColor: 'red' }} />
            </MenuItem>
            <MenuItem value={'green'}>
              <Color style={{ backgroundColor: 'green' }} />
            </MenuItem>
            <MenuItem value={'orange'}>
              <Color style={{ backgroundColor: 'orange' }} />
            </MenuItem>
            <MenuItem value={'purple'}>
              <Color style={{ backgroundColor: 'purple' }} />
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export { Config };
