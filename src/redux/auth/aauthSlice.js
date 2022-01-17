import { createSlice } from '@reduxjs/toolkit';

import { registerNewUser, logInUser } from './aauthOperations';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  // isRefreshCurrentUser: false,
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
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.error = action.payload;
      });

    // .addCase(logOutUser.pending, state => {state.error = null;})
    // .addCase(logOutUser.fulfilled, (state, action) => {
    //   state.user = { email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // })
    // .addCase(logOutUser.rejected, (state, action) => {state.error = action.payload;});
  },
});

export default authSlice.reducer;
