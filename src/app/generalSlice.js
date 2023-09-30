import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: true,
    avatarImage: "avatar.jpg"
}


export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsDark: (state, action) => {
            state.isDark = action.payload
        },
        setAvatar: (state, action) => {
            state.avatarImage = action.payload
        }
    }
});

export const { setIsDark, setAvatar } = generalSlice.actions;

export default generalSlice.reducer