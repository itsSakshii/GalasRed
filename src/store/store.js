// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';

import preloaderReducer from './slices/preloaderSlice'; // Import preloader reducer
import herovideoReducer from './slices/herovideoslice';
import eventReducer from './slices/eventSlice';
import ServiceReducer from './slices/serviceSlice';


const store = configureStore({
  reducer: {
    preloader: preloaderReducer, 
    video: herovideoReducer,
    events: eventReducer,
    services:ServiceReducer,
  
  },
});

export default store;
