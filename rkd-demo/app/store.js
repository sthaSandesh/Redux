//store.js

const configureStore = require('@reduxjs/toolkit').configureStore

const hoodiesReducer = require('../features/hoodies/hoodies')

const store = configureStore({
    reducer :{
        hoodies : hoodiesReducer
    },
})

module.exports = store 