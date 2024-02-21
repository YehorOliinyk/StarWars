import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FemaleState } from './types';
import { IHeroItem } from '../../utils/models';


const initialState: FemaleState = {
  female: [],
};

const femaleSlice = createSlice({
  name: 'femaleFans',
  initialState,
  reducers: {
    addFemale: (
      state: FemaleState,
      { payload }: PayloadAction<IHeroItem>) => {
      state.female = [...state.female, payload];
    },
    removeFemale: (
      state: FemaleState,
      { payload }: PayloadAction<IHeroItem>) => {
      const activeState = state.female.filter(item => item.name !== payload.name);
      state.female = activeState;
    },
    // updateAreas: (
    //   state: FemaleState,
    //   { payload }: PayloadAction<Array<IArea>>) => {
    //   state.areas = payload;
    // },
    // updateItems: (
    //   state: FemaleState,
    //   { payload }: number) => {
    //   state = payload;
    // },
    resetFemale: () => initialState,
  },
});

export const { addFemale, removeFemale, resetFemale } = femaleSlice.actions;
export const femaleReducer = femaleSlice.reducer;
