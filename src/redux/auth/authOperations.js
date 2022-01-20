import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  register,
  login,
  logout,
  refresh,
  token,
  getUserInfo,
} from '../../services/kapusta-api';

const registerNewUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await register(credentials);
      if (response.data.email) {
        const { data } = await login(credentials);
        token.set(data.accessToken);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await login(credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      token.unset();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

const refreshSession = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedRefreshToken = state.auth.refreshToken;
    const persistedSid = state.auth.sid;
    const sessionId = { sid: persistedSid };

    if (!persistedRefreshToken || !persistedSid) {
      return rejectWithValue();
    }

    token.set(persistedRefreshToken);

    try {
      const { data } = await refresh(sessionId);
      token.set(data.newRefreshToken);
      const userInfo = await getUserInfo();
      const userEmail = userInfo.data.email;
      return { userEmail, ...data };
    } catch (error) {
      token.unset();
      return rejectWithValue(error.response.data.message);
    }
  },
);

// const logInGoogle = createAsyncThunk('auth/google');

export { registerNewUser, logInUser, logOutUser, refreshSession };
