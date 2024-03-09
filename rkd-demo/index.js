//index.js

const store = require('./app/store')
const hoodiesActions = require('./features/hoodies/hoodies.js').hoodiesActions

console.log('Inital State' , store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("update state" , store.getState())
})

store.dispatch(hoodiesActions.ordered())
store.dispatch(hoodiesActions.ordered())
store.dispatch(hoodiesActions.ordered())
store.dispatch(hoodiesActions.restocked(3))

unsubscribe()