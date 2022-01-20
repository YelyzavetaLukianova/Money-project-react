import { createSlice } from '@reduxjs/toolkit';
import {
  getExpenseBack,
  addExpenseBack,
  deleteExpenseBack,
} from './transactionOperations.js';

const initialState = {
  data: {
    items: [],
    loading: false,
    error: null,
    token: null,
  },
};

const transactionExpenseSlice = createSlice({
  name: 'expense',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getExpenseBack.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getExpenseBack.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items = payload;
      })
      .addCase(getExpenseBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(addExpenseBack.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(addExpenseBack.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items.push(payload.transaction);
      })
      .addCase(addExpenseBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(deleteExpenseBack.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(deleteExpenseBack.fulfilled, (state, { payload }) => {
        console.log(` id payload`, payload);
        state.data.loading = false;
        const indx = state.data.items.findIndex(
          item => item._id === payload.id,
        );
        state.data.items.splice(indx, 1);
      })
      .addCase(deleteExpenseBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });
  },
});

export default transactionExpenseSlice.reducer;
