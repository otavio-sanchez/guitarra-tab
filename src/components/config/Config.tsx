import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TConfigProps } from './types';
import { Color, ConfigContainer, ConfigBar } from './style';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Undo, Clear, Edit, Save, Download } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

const Config = ({
  onChangeNumberStrings,
  onChangeColor,
  clearNotes,
  clearNote,
  changeTuning,
  actives,
  editTuning,
  copyScale,
  changeFrets,
  frets,
  children
}: TConfigProps) => {
  const [strings, setStrings] = useState('6');
  const [colors, setColor] = useState('red');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setStrings(value as string);
    onChangeNumberStrings(Number(value));
  };

  const handleChangeFrets = (event: SelectChangeEvent) => {
    const value = event.target.value;
    changeFrets(Number(value));
  };

  const handleChangeColor = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setColor(value);
    onChangeColor(value);
  };

  return (
    <ConfigContainer>
      {children}

      <ConfigBar>
        <Typography fontSize={'small'}>Controles:</Typography>

        <Grid container spacing={2} alignItems={'center'}>
          <Grid item>
            <Button onClick={clearNotes} title="Limpar" variant="contained">
              <Clear />
              {'Limpar'}
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={actives.length < 0} onClick={clearNote} title="Voltar" variant="contained">
              <Undo />
              {'Voltar'}
            </Button>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <InputLabel id="select-colors">Cor</InputLabel>
              <Select
                labelId="select-colors"
                id="colors-select"
                value={colors}
                label="Cor"
                onChange={handleChangeColor}
              >
                <MenuItem value={'red'}>
                  <Color style={{ backgroundColor: 'red' }} />
                </MenuItem>
                <MenuItem value={'blue'}>
                  <Color style={{ backgroundColor: 'blue' }} />
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

          <Grid item xs={1}>
            <Button onClick={copyScale} title="Copiar Escala" variant="contained">
              <Download /> {'Download'}
            </Button>
          </Grid>
        </Grid>
      </ConfigBar>

      <ConfigBar>
        <Typography fontSize={'small'}>Configurações:</Typography>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <InputLabel id="select-frets">Casas</InputLabel>
              <Select
                labelId="select-strings"
                id="string-select"
                value={frets.toString()}
                label="Casas"
                onChange={handleChangeFrets}
                defaultValue="24"
              >
                <MenuItem value={'24'}>24</MenuItem>
                <MenuItem value={'12'}>12</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <InputLabel id="select-strings">Cordas</InputLabel>
              <Select
                labelId="select-strings"
                id="string-select"
                value={strings.toString()}
                label="Cordas"
                onChange={handleChange}
              >
                <MenuItem value={'7'}>7</MenuItem>
                <MenuItem value={'6'}>6</MenuItem>
                <MenuItem value={'5'}>5</MenuItem>
                <MenuItem value={'4'}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button onClick={changeTuning} title="Mudar Afinação" variant="contained">
              {editTuning ? (
                <>
                  <Save /> Salvar Afinação{' '}
                </>
              ) : (
                <>
                  <Edit /> Mudar Afinação{' '}
                </>
              )}
            </Button>
          </Grid>
        </Grid>
      </ConfigBar>
    </ConfigContainer>
  );
};

export { Config };
