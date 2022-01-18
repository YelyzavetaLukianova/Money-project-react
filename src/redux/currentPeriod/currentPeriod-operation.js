import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionPeriodData } from '../../services/kapusta-api';

const getPeriodData = createAsyncThunk(
  'transaction/getTransactionPeriodData',
  async (_, thunkAPI) => {
    try {
      const { data } = await getTransactionPeriodData();
      return data.expenses;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getPeriodData };
