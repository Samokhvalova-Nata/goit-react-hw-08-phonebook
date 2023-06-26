import { login, logout, refresh, register } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const handleRejected = (state, action) => {
    state.isAuthLoading = false;
    state.authError = action.payload;
};

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,

    isAuthLoading: false,
    authError: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state) => {
                state.isAuthLoading = 'register';
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.isAuthLoading = false;
                state.authError = null;
            })
            .addCase(register.rejected, handleRejected)

            .addCase(login.pending, (state) => {
                state.isAuthLoading = 'login';
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.isAuthLoading = false;
                state.authError = null;
            })
            .addCase(login.rejected, handleRejected)

            .addCase(logout.pending, (state) => {
                state.isAuthLoading = 'logout';
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.isAuthLoading = false;
                state.authError = null;
            })
            .addCase(logout.rejected, handleRejected)

            .addCase(refresh.pending, (state) => {
                state.isRefreshing = true;
                state.isAuthLoading = 'refresh';
            })
            .addCase(refresh.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.isAuthLoading = false;
                state.authError = null;
            })
            .addCase(refresh.rejected, (state, { payload }) => {
                state.isRefreshing = false;
                state.isAuthLoading = false;
                // state.authError = payload;
            })
    },
});

export const authReducer = authSlice.reducer;