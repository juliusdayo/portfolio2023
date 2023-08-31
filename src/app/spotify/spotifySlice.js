import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    topItems: null
}


export const spotifySlice = createSlice({
    name: 'spotify',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload
        },
        getProfile: (state) => {
            return state.profile
        }
    }
});

export const { setProfile, getProfile } = spotifySlice.actions;

export default spotifySlice.reducer