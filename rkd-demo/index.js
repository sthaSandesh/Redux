//index.js

const store = require('./app/store')
const hoodiesActions = require('./features/hoodies/hoodies.js').hoodiesActions;
const jacketActions = require('./features/jacket//jacket').jacketActions;

console.log('Inital State' , store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(hoodiesActions.ordered())
store.dispatch(hoodiesActions.ordered())
store.dispatch(hoodiesActions.ordered())
store.dispatch(hoodiesActions.restocked(3))

store.dispatch(jacketActions.ordered())
store.dispatch(jacketActions.ordered())
store.dispatch(jacketActions.ordered())
store.dispatch(jacketActions.restocked(3))

unsubscribe()