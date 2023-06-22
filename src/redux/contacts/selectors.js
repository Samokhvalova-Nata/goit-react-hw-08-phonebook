import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
    [selectFilter, selectContacts],
    (filter, contacts) => {
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)).sort((a, b) => a.name.localeCompare(b.name));
    })
