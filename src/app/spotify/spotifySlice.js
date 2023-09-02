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
            console.log(state)
        },
        setTopItem: (state, action) => {
            state.topItems = action.payload
        }
    }
});

export const { setProfile, setTopItem } = spotifySlice.actions;

export default spotifySlice.reducer