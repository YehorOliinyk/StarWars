import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OthersState } from './types';
import { IHeroItem } from '../../utils/models';


const initialState: OthersState = {
  others: [],
};

const othersSlice = createSlice({
  name: 'othersFans',
  initialState,
  reducers: {
    addOthers: (
      state: OthersState,
      { payload }: PayloadAction<IHeroItem>) => {
      state.others = [...state.others, payload];
    },
    removeOthers: (
      state: OthersState,
      { payload }: PayloadAction<IHeroItem>) => {
      const activeState = state.others.filter(item => item.name !== payload.name);
      state.others = activeState;
    },
    resetOthers: () => initialState,
  },
});

export const { addOthers, removeOthers, resetOthers } = othersSlice.actions;
export const otherReducer = othersSlice.reducer;
