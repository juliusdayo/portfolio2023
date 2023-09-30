import { configureStore } from "@reduxjs/toolkit";

import spotifyReducer from './spotify/spotifySlice';
import generalReducer from "./generalSlice";

const store = configureStore({
    reducer: {
        spotify: spotifyReducer,
        general: generalReducer
    }
})

export default store;