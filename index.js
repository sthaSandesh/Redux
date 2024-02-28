const redux = require('redux'); //importing redux

const createsStore = redux.createStore; //creating store


const effi_Wear ="effiWear"

//defining aciton 


function effiWear() {
    return{
    type: effi_Wear,
    quantity: 1,
}
}


//defining inital state
const initalState = {
effiWearStock : 100,
}

// (previousState, action) => newState


const reducer = (state = initalState , action) =>{
    switch(action.type){
        case effi_Wear:
            return{
                ...state,
                effiWearStock: state.effiWearStock - 1,
            }
            default:
                return state ;
    }
}



const store = createsStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=> console.log('present state' , store.getState()));

store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action

unsubscribe();


