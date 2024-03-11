// hoodies.js

import { createSlice , PayloadAction} from '@reduxjs/toolkit';


type InitalState = {
  numOfHoodies : number ;
}
const initialState : InitalState = {
  numOfHoodies: 10
};

const hoodiesSlice = createSlice({
  name: 'hoodies',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfHoodies--;
    },
    restocked: (state, action : PayloadAction<number>) => {
      state.numOfHoodies += action.payload;
    }
  }
});

export default hoodiesSlice.reducer
export const {ordered , restocked} = hoodiesSlice.actions;
