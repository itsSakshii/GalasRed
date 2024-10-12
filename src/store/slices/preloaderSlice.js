// src/store/slices/preloaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const preloaderSlice = createSlice({
  name: 'preloader',
  initialState: {
    isLoaded: false,
    showTransition: false,
    showHome: false,
  },
  reducers: {
    setLoaded: (state) => {
      state.isLoaded = true;
    },
    showTransition: (state) => {
      state.showTransition = true;
    },
    showHome: (state) => {
      state.showHome = true;
    },
  },
});

export const { setLoaded, showTransition, showHome } = preloaderSlice.actions;
export default preloaderSlice.reducer;
