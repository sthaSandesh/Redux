const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default; //thunk middleware
const axios = require('axios')

const NayaStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;


const intitalState ={
    loading : false,
    nam : [],
    error :'',

}


const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
const FECTH_USER_SUCCEEDED = 'FECTH_USER_SUCCEEDED';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

const fetchUserRequested = () => {
    return{
        type : FETCH_USER_REQUESTED,  
    }
}

const fetchUserSucceeded = (nam) =>{
    return{
        type : FECTH_USER_SUCCEEDED,
        payload : nam,
    }
}

const fetchUserFailed = (error) =>{
    return{
        type : FETCH_USER_FAILED,
        payload : error,
    }
}


const reducer = (state = intitalState , action ) =>{
    switch(action.type){
        case FETCH_USER_REQUESTED:
            return{
                ...state,
                loading : true,
            }
        case FECTH_USER_SUCCEEDED:
            return{
                ...state,
                loading : false , 
                nam : action.payload,
                error : '',
            }
        case FETCH_USER_FAILED:
            return{
                ...state,
                loading : false, 
                nam : [],
                error: action.payload,
            }
    }
}


const store = NayaStore(reducer , applyMiddleware(thunkMiddleware));

const fetchUser = () => {
    return function(dispatch) {
        dispatch(fetchUserRequested());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const nam = response.data.map(user => user.id);
            dispatch(fetchUserSucceeded(nam));
        })
        .catch(error => {
            dispatch(fetchUserFailed(error.message));
        });
    }
}


const unsubscribe = store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser());

unsubscribe();