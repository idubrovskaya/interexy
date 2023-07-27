import { createSlice } from '@reduxjs/toolkit';

import { CharacterState } from 'app/types/rick&morty-state.type';
import { getCharacters } from './rick&morty.actions';

const initialState: CharacterState = {
  characters: [],
  pending: {
    characters: false,
  },
  errors: {
    characters: null,
  },
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ============ GET CHARACTERS ============ //
      .addCase(getCharacters.pending, (state) => {
        state.pending.characters = true;
        state.errors.characters = null;
      })
      .addCase(getCharacters.fulfilled, (state, { payload }) => {
        state.pending.characters = false;
        state.characters = payload;
      })
      .addCase(
        getCharacters.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.characters = false;
          state.errors.characters = action.payload.message;
        }
      );
  },
});
