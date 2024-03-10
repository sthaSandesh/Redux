//jacket.js

const { createSlice } = require('@reduxjs/toolkit');


const initialState = {
    numOfJacket : 10
}

const jacketSlice = createSlice({
    name : 'jacket',
    initialState,
    reducers:{
        ordered : (state) => {
            state.numOfJacket--;
        },
        restocked :(state , action) =>{
            state.numOfJacket += action.payload
        }
    }
})

module.exports = jacketSlice.reducer ; 
module.exports.jacketActions = jacketSlice.actions;