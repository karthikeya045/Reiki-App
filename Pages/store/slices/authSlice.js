import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'auth_token';

export const restoreSession = createAsyncThunk('auth/restoreSession', async () => {
  const token = await SecureStore.getItemAsync(TOKEN_KEY, { keychainService: 'reikiapp.auth' });
  if (!token) return { isSignedIn: false };
  return { isSignedIn: true, user: { email: 'persisted@user', token } };
});

export const signInThunk = createAsyncThunk('auth/signIn', async ({ email, password }) => {
  await new Promise(res => setTimeout(res, 400));
  if (email === 'test@example.com' && password === 'password') {
    const token = 'demo-token';
    await SecureStore.setItemAsync(TOKEN_KEY, token, { keychainService: 'reikiapp.auth' });
    return { user: { email, token } };
  }
  const err = new Error('Invalid email or password');
  err.code = 'INVALID_CREDENTIALS';
  throw err;
});

export const signOutThunk = createAsyncThunk('auth/signOut', async () => {
  await SecureStore.deleteItemAsync(TOKEN_KEY, { keychainService: 'reikiapp.auth' });
});

const initialState = {
  isLoading: true,
  isSignedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(restoreSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = action.payload.isSignedIn;
        state.user = action.payload.user || null;
      })
      .addCase(restoreSession.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signInThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = action.payload.user;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || 'Sign in failed';
      })
      .addCase(signOutThunk.fulfilled, (state) => {
        state.isSignedIn = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;

