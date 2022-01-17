import { createAsyncThunk } from '@reduxjs/toolkit';

import { register, login, token } from '../../services/kapusta-api';

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

// const logOutUser = createAsyncThunk(
//   'auth/logout',
//   async ({ rejectWithValue }) => {
//     try {
//       await logout();
//       token.unset();
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   },
// );

export { registerNewUser, logInUser };
