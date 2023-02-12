import { createSlice } from '@reduxjs/toolkit';
import { getUser } from 'redux/user/userOperations';
import { login, logout, register } from './authOperations';

const authInitialState = { token: '', isLoading: null, isError: null };

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
    builder.addCase(logout.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, () => {
      return authInitialState;
    });
    builder.addCase(logout.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
    builder.addCase(getUser.rejected, () => {
      return authInitialState;
    });
  },
});

export const authReducer = authSlice.reducer;
