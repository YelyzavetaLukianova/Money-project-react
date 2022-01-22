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

const logInGoogle = createAsyncThunk(
  'auth/google',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await register(credentials);
      console.log(response);
      if (response.data.email) {
        const { data } = await login(credentials);
        token.set(data.accessToken);
        return data;
      }
    } catch (error) {
      if (
        error.response.data.message ===
        `User with ${credentials.email} email already exists`
      ) {
        const { data } = await login(credentials);
        token.set(data.accessToken);
        return data;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

/*Логинизаци через GOOGLE аккаунт без библеотеки*/

// const logInGoogle = createAsyncThunk(
//   'auth/google',
//   async (credentials, { rejectWithValue }) => {
//     const accessToken = credentials.accessToken;
//     const refreshToken = credentials.refreshToken;
//     const sid = credentials.sid;

//     token.set(accessToken);

//     try {
//       const userInfo = await getUserInfo();
//       const userEmail = userInfo.data.email;
//       return { userEmail, accessToken, refreshToken, sid };
//     } catch (error) {
//       token.unset();
//       return rejectWithValue(error.response.data.message);
//     }
//   },
// );

export { registerNewUser, logInUser, logOutUser, refreshSession, logInGoogle };
