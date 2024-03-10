//store.js

const configureStore = require('@reduxjs/toolkit').configureStore

const hoodiesReducer = require('../features/hoodies/hoodies')
const jacketReducer = require('../features/jacket/jacket')


const store = configureStore({
    reducer :{
        hoodies : hoodiesReducer,
        jacket : jacketReducer
    },
})


module.exports = store 