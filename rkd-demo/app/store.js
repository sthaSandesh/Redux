//store.js

const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')

const hoodiesReducer = require('../features/hoodies/hoodies')
const jacketReducer = require('../features/jacket/jacket')
const userReducer = require('../features/user/userSlice')

// const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer :{
        hoodies : hoodiesReducer,
        jacket : jacketReducer,
        user : userReducer,
    },
    // middleware : (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
})


module.exports = store 