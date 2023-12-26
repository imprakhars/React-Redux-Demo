import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const reduxStore = configureStore({
    reducer:{
        counterState:counterReducer
    }
})