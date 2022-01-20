import { createSlice } from '@reduxjs/toolkit';
import { getPeriodData } from './currentPeriod-operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [getPeriodData.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getPeriodData.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [getPeriodData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default reportSlice.reducer;
