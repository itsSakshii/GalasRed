// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import preloaderReducer from './slices/preloaderSlice'; 
import eventReducer from './slices/eventSlice';
import ServiceReducer from './slices/serviceSlice';


const store = configureStore({
  reducer: {
    preloader: preloaderReducer, 
    events: eventReducer,
    services:ServiceReducer,
  
  },
});

export default store;
