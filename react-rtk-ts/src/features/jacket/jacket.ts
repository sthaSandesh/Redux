//jacket.js

import { createSlice , PayloadAction} from '@reduxjs/toolkit';
import { ordered as hoodiesOrdered } from '../hoodies/hoodies';


type InitalState = {
    numOfJacket : number ;
}
const initialState : InitalState = {
    numOfJacket : 50
}

const jacketSlice = createSlice({
    name : 'jacket',
    initialState,
    reducers:{
        ordered : (state) => {
            state.numOfJacket--;
        },
        restocked :(state , action : PayloadAction<number>) =>{
            state.numOfJacket += action.payload
        },
    },
    // extraReducers :{
    //     ['hoodies/ordered'] :(state) =>{
    //         state.numOfJacket--;
    //     }
    // }

    extraReducers :(builder)=>{
        builder.addCase(hoodiesOrdered , (state) =>{
            state.numOfJacket--;
        })
    }
})

export default jacketSlice.reducer ; 
export const {ordered , restocked} = jacketSlice.actions;