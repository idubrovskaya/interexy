import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from 'app/store/rick&morty.slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useStoreDispatch = () => useDispatch<typeof store.dispatch>;
