import { configureStore } from '@reduxjs/toolkit'; 
import myreducer from './authSlice'
const store = configureStore({
    reducer:myreducer
});

export default store;