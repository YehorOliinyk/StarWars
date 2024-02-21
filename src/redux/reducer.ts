import { combineReducers } from '@reduxjs/toolkit';
import { femaleReducer } from './female/femaleSlice';
import { maleReducer } from './male/maleSlice';
import { otherReducer } from './others/othersSlice';


export const rootReducer = combineReducers({
  female: femaleReducer,
  male: maleReducer,
  others: otherReducer,
});
