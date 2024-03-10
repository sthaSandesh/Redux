// hoodies.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfHoodies: 10
};

const hoodiesSlice = createSlice({
  name: 'hoodies',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfHoodies--;
    },
    restocked: (state, action) => {
      state.numOfHoodies += action.payload;
    }
  }
});

export default hoodiesSlice.reducer
export const {ordered , restocked} = hoodiesSlice.actions;
