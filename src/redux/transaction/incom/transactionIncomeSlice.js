import { createSlice } from '@reduxjs/toolkit';
import {
  getIncomeBack,
  addIncomeBack,
  deleteIncomeExpenseBack,
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
        state.data.loading = false;
        state.data.itemsIncom.push(payload.transaction);
      })
      .addCase(addIncomeBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(deleteIncomeExpenseBack.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(deleteIncomeExpenseBack.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        const indx = state.data.itemsIncom.findIndex(
          item => item._id === payload.id,
        );
        state.data.itemsIncom.splice(indx, 1);
      })
      .addCase(deleteIncomeExpenseBack.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });
  },
});

export default transactionIncomeSlice.reducer;
