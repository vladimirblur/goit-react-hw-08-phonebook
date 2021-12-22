import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { filterChange } from "./contacts-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterChange]: (_, { payload }) => payload.filter,
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.pending]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

const contactReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export { contactReducer };
