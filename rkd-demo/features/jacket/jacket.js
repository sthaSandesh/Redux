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
        },
    },
    // extraReducers :{
    //     ['hoodies/ordered'] :(state) =>{
    //         state.numOfJacket--;
    //     }
    // }

    extraReducers :(builder)=>{
        builder.addCase('hoodies/ordered' , (state) =>{
            state.numOfJacket--;
        })
    }
})

module.exports = jacketSlice.reducer ; 
module.exports.jacketActions = jacketSlice.actions;