const redux = require('redux'); //importing redux

const createStore = redux.createStore; //creating store
const bindActionCreators = redux.bindActionCreators //binding action to the store


const effi_WearRequest ="effiWear"
const effi_WearRestock = "Restock"
const jacket_effiRequest = "jacketEffi"
const jacket_effiRestock = "jacketRestock"


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

function effiJacket(){
    return{
        type : jacket_effiRequest,
        payload : 1 , 
    }
}

function Restock_Jacket (qty = 1){
    return{
        type : jacket_effiRestock,
        payload : qty,
    }
} 

//defining inital state
const initalState = {
effiWearStock : 100,
jacketStock : 100,
}

// (previousState, action) => newState

const reducer = (state = initalState , action) =>{
    switch(action.type){
        case effi_WearRequest:
            return{
                ...state,
                effiWearStock: state.effiWearStock - 1,
            }

          case effi_WearRestock:
            return{
                ...state,
                effiWearStock : state.effiWearStock + action.payload,
            }
        case jacket_effiRequest:
            return{
                ...state,
                jacketStock : state.jacketStock - 1,
            }

          case jacket_effiRestock:
            return{
                ...state,
                jacketStock : state.jacketStock + action.payload,
            }
            default:
                return state ;
    }
}



const store = createStore(reducer);
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=> console.log('present state' , store.getState()));

// store.dispatch({
//     type: effi_WearRequest,
//     payload: 1,
// });  //dispatching action fullfilling the request
// store.dispatch(effiWear());  //dispatching action
// store.dispatch(effiWear());  //dispatching action
// store.dispatch(effiWear());  //dispatching action
// store.dispatch(effiWear());  //dispatching action
// store.dispatch(effiWear());  //dispatching action
// store.dispatch(Restock_effiWear(10));  //dispatching action to restock 
// store.dispatch(Restock_effiWear(10));  //dispatching action to restock 
// store.dispatch(Restock_effiWear(10));  //dispatching action to restock 


const actions = bindActionCreators({effiWear , Restock_effiWear , effiJacket , Restock_Jacket}, store.dispatch)
actions.effiWear()
actions.effiWear()
actions.effiWear()
actions.Restock_effiWear(10)
actions.Restock_effiWear(10)
actions.Restock_effiWear(10)
actions.effiJacket()
actions.effiJacket()
actions.effiJacket()
actions.Restock_Jacket(10)

unsubscribe();  //after unsubscribe it will not dispatch request
// store.dispatch(effiWear());  //dispatching action 


