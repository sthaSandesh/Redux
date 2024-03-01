const redux = require('redux')
const produce = require('immer').produce

const createStore = redux.createStore

const effi_Empolyee = {
    name : 'Apil',
    address : {
        province : 'bagmati',
        city : 'kathmandu',
        place : 'kadaghari',
    },
}



// first step defining action
const place_update = 'place_update';

//defining action creator
const updatePlace = (place) =>{
    return{
        type : place_update,
        payload : place, 
    }
}


const reducer = (state = effi_Empolyee , action ) =>{
    switch(action.type){
        case place_update:
            // return{
            //     adderss :{
            //         ...state.address, 
            //         place : action.payload,
            //     }
            // }
            return produce( state, (draft) => {
                draft.address.place = action.payload;
            })
            default:
                return state;
    }
}

console.log('intial state' , effi_Empolyee.address);


const store = createStore(reducer)
const unsubscribe = store.subscribe(() => console.log('present state' , store.getState()));

store.dispatch(updatePlace('kapan'));

unsubscribe();