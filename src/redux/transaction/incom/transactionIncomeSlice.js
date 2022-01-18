import { createSlice } from '@reduxjs/toolkit';
import {
  getIncomeBack,
  addIncomeBack,
  deleteExpenseBack,
} from './transactionIncomeOperations';

const initialState = {
  data: {
    itemsIncom: [],
    loading: false,
    error: null,
    token: null,
  },
};

const transactionIncomeSlice = createSlice({
  name: 'income',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getIncomeBack.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getIncomeBack.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.itemsIncom = payload;
      })
      .addCase(getIncomeBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(addIncomeBack.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(addIncomeBack.fulfilled, (state, { payload }) => {
        console.log(`payload`, payload);
        state.data.loading = false;
        state.data.itemsIncom.push(payload);
      })
      .addCase(addIncomeBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(deleteExpenseBack.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(deleteExpenseBack.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        const indx = state.data.itemsIncom.findIndex(
          item => item._id === payload,
        );
        state.data.itemsIncom.splice(indx, 1);
      })
      .addCase(deleteExpenseBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });
  },
});

export default transactionIncomeSlice.reducer;
