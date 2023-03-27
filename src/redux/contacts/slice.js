import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const phonebookSlice = createSlice({
  name: '@@phoneBook',
  initialState: {
    contacts: { items: [], isLoading: false, error: null },
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const itemIndex = state.contacts.items.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.items.splice(itemIndex, 1);
      })
      .addCase(logOut.fulfilled, state => {
        state.contacts.items = [];
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      );
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { changeFilter } = phonebookSlice.actions;
