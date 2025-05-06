// src/store/slices/authSlice.ts
import { AuthResponse, AuthState, User } from '@/types/auth.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = 'succeeded';
    },
    loginStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = 'succeeded';
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
    logoutSuccess(state) {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
    registerStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    registerSuccess(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = 'succeeded';
      state.error = null;
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
    clearAuthError(state) {
      state.error = null;
    },
  },
});

export const {
  setAuthState,
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutSuccess,
  clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;