import { configureStore } from "@reduxjs/toolkit";
import searchSlice from './features/counterSlice'

export const store = configureStore({
    reducer:{
        search:searchSlice
    }
});