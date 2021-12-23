import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fecthContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      const status = error.response ? error.response.status : 500;

      if (status === 400) {
        const message = "Error fecthing contacts";
        alert(message);
        return rejectWithValue(message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      const status = error.response ? error.response.status : 500;

      if (status === 400) {
        const message = "Error adding contacts";
        alert(message);
        return rejectWithValue(message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
