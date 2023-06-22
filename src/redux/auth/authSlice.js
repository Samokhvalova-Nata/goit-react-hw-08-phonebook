const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        tokeh: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {},
});

export const authReducer = authSlice.reducer;