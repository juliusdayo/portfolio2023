import { configureStore } from "@reduxjs/toolkit";

import spotifyReducer from './spotify/spotifySlice';

const store = configureStore({
    reducer: {
        spotify: spotifyReducer
    }
})

export default store;