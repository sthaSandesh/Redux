//index.js

const store = require('./app/store')
const hoodiesActions = require('./features/hoodies/hoodies.js').hoodiesActions;
const jacketActions = require('./features/jacket//jacket').jacketActions;
const { fetchUsers } = require('./features/user/userSlice');

console.log('Inital State' , store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State' , store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(hoodiesActions.ordered())
// store.dispatch(hoodiesActions.ordered())
// store.dispatch(hoodiesActions.ordered())
// store.dispatch(hoodiesActions.restocked(3))

// store.dispatch(jacketActions.ordered())
// store.dispatch(jacketActions.ordered())
// store.dispatch(jacketActions.ordered())
// store.dispatch(jacketActions.restocked(3))

// unsubscribe()