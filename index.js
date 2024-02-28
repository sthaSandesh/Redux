const redux = require('redux'); //importing redux

const createStore = redux.createStore; //creating store

const effi_WearRequest ="effiWear"
const effi_WearRestock = "Restock"

//defining aciton 
function effiWear() {
    return{
    type: effi_WearRequest,
    payload: 1,
}
}


//defining action to restock
function Restock_effiWear( qty = 1){
    return{
        type : effi_WearRestock,
        payload : qty, 
    }
}


//defining inital state
const initalState = {
effiWearStock : 100,
}

// (previousState, action) => newState

const reducer = (state = initalState , action) =>{
    switch(action.type){
        case effi_WearRequest:
            return{
                ...state,
                effiWearStock: state.effiWearStock - 1,
            }

          case Restock_effiWear:
            return{
                ...state,
                effiWearStock : state.effiWearStock + action.payload,
            }
            default:
                return state ;
    }
}



const store = createStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=> console.log('present state' , store.getState()));

store.dispatch({
    type: effi_WearRequest,
    payload: 1,
});  //dispatching action fullfilling the request
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(effiWear());  //dispatching action
store.dispatch(Restock_effiWear(10));  //dispatching action to restock 
store.dispatch(Restock_effiWear(10));  //dispatching action to restock 
store.dispatch(Restock_effiWear(10));  //dispatching action to restock 

unsubscribe();  //after unsubscribe it will not dispatch request
// store.dispatch(effiWear());  //dispatching action 


