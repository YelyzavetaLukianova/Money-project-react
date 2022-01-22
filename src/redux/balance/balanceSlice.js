import { createSlice } from '@reduxjs/toolkit';
import { getBalance, updateBalance } from './balanceOperations';
import {
  addExpenseBack,
  deleteExpenseBack,
} from '../transaction/expense/transactionOperations.js';
import { addIncomeBack } from '../transaction/incom/transactionIncomeOperations.js';

const initialState = {
  balance: '',
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
      })
      .addCase(updateBalance.pending, state => {
        state.error = null;
      })
      .addCase(updateBalance.fulfilled, (state, { payload }) => {
        state.balance = payload;
      })
      .addCase(updateBalance.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addExpenseBack.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(addIncomeBack.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(deleteExpenseBack.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.balance = payload.data.newBalance;
      });
  },
});

export default balanceSlice.reducer;
