import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from 'redux/auth/authOperations';
import { getUser } from './userOperations';

const userInitialState = {
  name: '',
  email: '',
  isLoading: null,
  isError: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.name = payload.name;
      state.email = payload.email;
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.name = payload.user.name;
      state.email = payload.user.email;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.name = payload.user.name;
      state.email = payload.user.email;
    });
    builder.addCase(logout.fulfilled, () => {
      return userInitialState;
    });
  },
});

export const userReducer = userSlice.reducer;
