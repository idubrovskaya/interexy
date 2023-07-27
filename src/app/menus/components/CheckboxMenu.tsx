import React, { useEffect } from 'react';
import '../../../assets/style.scss';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { charactersSelector } from 'app/store/rick&morty.selectors';
import { AppDispatch } from 'store';
import { getCharacters } from 'app/store/rick&morty.actions';
import { useDispatch } from 'react-redux';
import { CharactersList } from 'components/CharacterList';

export const CheckboxMenu = () => {
  const dispatch: AppDispatch = useDispatch();
  const characters = useSelector(charactersSelector);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <Box>
      <FormControl>
        <Select>
          {characters.map((character) => (
            <MenuItem key={character.id}>
              <CharactersList name={character.name} image={character.image} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
