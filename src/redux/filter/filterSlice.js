import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        updateFilter(state, {payload}) { 
            state.filter = payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;