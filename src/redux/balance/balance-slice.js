import { createSlice } from '@reduxjs/toolkit';
import getBalance from './balanceOperations';

const initialState = {
  balance: null,
  error: null,
};

const balanceSlice = createSlice({
  name: 'expense',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBalance.pending, state => {
        state.error = null;
      })
      .addCase(getBalance.fulfilled, (state, { payload }) => {
        state.balance = payload;
      })
      .addCase(getBalance.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default balanceSlice.reducer;
