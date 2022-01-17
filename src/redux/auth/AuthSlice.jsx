import { createSlice } from '@reduxjs/toolkit';
import authOperations from './AuthOperations';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  loadingUser: true,
  error: null,
  loading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      //logOUT
      .addCase(authOperations.logout.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(authOperations.logout.fulfilled, state => {
        state.user = { email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logout.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        state.token = null;
      });
  },
});
export default authSlice.reducer;
