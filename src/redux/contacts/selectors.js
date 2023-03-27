import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.contacts.items;
export const selectFilterValue = state => state.contacts.filter;
export const selectLoadingValue = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const applayFilter = createSelector(
  [selectItems, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
