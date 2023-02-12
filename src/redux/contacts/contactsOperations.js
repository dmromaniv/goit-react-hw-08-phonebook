import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  postContact,
  deleteContactById,
} from 'services/contactsApi';
import { setAuthHeader } from 'http';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);

      const contacts = await fetchAllContacts();
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      const contact = await postContact(newContact);
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      await deleteContactById(contactId);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
