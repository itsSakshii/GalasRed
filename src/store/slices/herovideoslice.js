// src/slices/videoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlaying: false,
};

const herovideoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        playVideo: (state) => {
            state.isPlaying = true;
        },
        pauseVideo: (state) => {
            state.isPlaying = false;
        },
    },
});

export const { playVideo, pauseVideo } = herovideoSlice.actions;
export default herovideoSlice.reducer;
