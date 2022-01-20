import { createSlice } from '@reduxjs/toolkit';

import {
  registerNewUser,
  logInUser,
  logOutUser,
  refreshSession,
  logInGoogle,
} from './authOperations';

const initialState = {
  user: { email: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshCurrentUser: false,
  error: null,
  // loadingUser: true,
  // loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerNewUser.pending, state => {
        state.error = null;
      })
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.user.email = action.payload.userData.email;
        state.token = action.payload.accessToken; //???
        state.refreshToken = action.payload.refreshToken; //???
        state.sid = action.payload.sid; //???
        state.isLoggedIn = true;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(logInUser.pending, state => {
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user.email = action.payload.userData.email;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(logOutUser.pending, state => {
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.user = { email: null };
        state.token = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(refreshSession.pending, state => {
        state.isRefreshCurrentUser = true;
        state.error = null;
      })
      .addCase(refreshSession.fulfilled, (state, action) => {
        state.user.email = action.payload.userEmail;
        state.token = action.payload.newAccessToken; //???
        state.refreshToken = action.payload.newRefreshToken; //???
        state.sid = action.payload.newSid; //???
        state.isLoggedIn = true;
        state.isRefreshCurrentUser = false;
      })
      .addCase(refreshSession.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshCurrentUser = false;
        state.token = null; //???
        state.refreshToken = null; //???
        state.sid = null; //???
      })

      .addCase(logInGoogle.pending, state => {
        state.error = null;
      })
      .addCase(logInGoogle.fulfilled, (state, action) => {
        // state.user.email = action.payload.userData.email;
        // state.token = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        // state.sid = action.payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(logInGoogle.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
