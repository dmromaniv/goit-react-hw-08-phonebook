import { createAsyncThunk } from '@reduxjs/toolkit';

import { clearAuthHeader } from 'http';
import { loginUser, logoutUser, registerUser } from 'services/usersApi';

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const userData = await registerUser(body);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const userData = await loginUser(body);
    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const userData = await logoutUser();
    clearAuthHeader();
    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
