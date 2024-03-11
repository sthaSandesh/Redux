//store.js

import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')

import hoodiesReducer from '../features/hoodies/hoodies'
import jacketReducer from '../features/jacket/jacket'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer :{
        hoodies : hoodiesReducer,
        jacket : jacketReducer,
        user : userReducer,
    },
    // middleware : (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
});


export default store;