// hoodies.js

const { createSlice } = require('@reduxjs/toolkit');

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

module.exports = hoodiesSlice.reducer;
module.exports.hoodiesActions = hoodiesSlice.actions;
