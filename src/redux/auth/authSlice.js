import { login, logout, refresh, register } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logout.fulfilled, (state, { payload }) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refresh.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refresh.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refresh.rejected, (state) => {
                state.isRefreshing = false;
            })
    },
});

export const authReducer = authSlice.reducer;