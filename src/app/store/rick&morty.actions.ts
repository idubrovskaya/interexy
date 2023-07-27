import { createAsyncThunk } from '@reduxjs/toolkit';

import repository from 'repository';
import axios from 'axios';
// import { usersSlice } from './users.slice';
import { CharacterDto } from 'app/types/rick&morty-dto.type';

// export const {} = usersSlice.actions;

export const getCharacters = createAsyncThunk<CharacterDto[]>(
  'getCharacters',
  async (_, { rejectWithValue }) => {
    try {
      const response1 = await axios.get(
        `https://rickandmortyapi.com/api/character`
      );
      const response2 = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=2`
      );
      const [res1, res2] = await Promise.all([response1, response2]);
      const unsortedArr = res1.data.results.concat(res2.data.results);
      const sortedArr: CharacterDto[] = unsortedArr.filter(
        (el: CharacterDto, index: number, self: CharacterDto[]) =>
          index === self.findIndex((e: CharacterDto) => e.name === el.name)
      );
      console.log(sortedArr, 'sorted');
      return sortedArr;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// export const getCharacter = createAsyncThunk<CharacterDto,{ characterId: string }
// >(
//   'GET/character/:characterId',
//   async ({ characterId }, { rejectWithValue }) => {
//     try {
//       const response = await repository.get(`/character/${characterId}`);
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error);
//     }
//   }
// );
