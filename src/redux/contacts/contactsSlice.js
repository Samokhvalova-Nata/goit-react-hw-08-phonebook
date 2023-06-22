import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        })
        .addCase(addContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        })
        .addCase(deleteContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1);
        })
        .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
        .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
    },
});

export const contactReducer = contactsSlice.reducer;



