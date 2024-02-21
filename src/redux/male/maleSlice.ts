import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MaleState } from './types';
import { IHeroItem } from '../../utils/models';


const initialState: MaleState = {
  male: [],
};

const maleSlice = createSlice({
  name: 'maleFans',
  initialState,
  reducers: {
    addMale: (
      state: MaleState,
      { payload }: PayloadAction<IHeroItem>) => {
      state.male = [...state.male, payload];
    },
    removeMale: (
      state: MaleState,
      { payload }: PayloadAction<IHeroItem>) => {
      const activeState = state.male.filter(item => item.name !== payload.name);
      state.male = activeState;
    },
    resetMale: () => initialState,
  },
});

export const { addMale, removeMale, resetMale } = maleSlice.actions;
export const maleReducer = maleSlice.reducer;
