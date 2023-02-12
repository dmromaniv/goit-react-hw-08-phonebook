import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from 'services/usersApi';

import { setAuthHeader, clearAuthHeader } from 'http';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (body, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      setAuthHeader(token);
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
