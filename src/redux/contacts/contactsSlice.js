import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";

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
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = 'fetch';
        })
        .addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)

        .addCase(addContact.pending, (state) => {
            state.isLoading ='add';
        })
        .addCase(addContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        })
        .addCase(addContact.rejected, handleRejected)    

        .addCase(deleteContact.pending, (a, b) => {
                a.isLoading = b.meta.arg;
        })
        .addCase(deleteContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, handleRejected)  

        .addCase(updateContact.pending, (state) => {
            state.isLoading ='update';
        })
        .addCase(updateContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1, payload);
        })
        .addCase(updateContact.rejected, handleRejected)  
    },
});

export const contactReducer = contactsSlice.reducer;