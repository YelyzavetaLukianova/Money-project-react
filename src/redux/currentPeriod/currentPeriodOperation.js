import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionPeriodData } from '../../services/kapustaApi';

const getPeriodData = createAsyncThunk(
  'currentPeriod/getPeriodData',
  async (date, thunkAPI) => {
    try {
      const { data } = await getTransactionPeriodData(date);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getPeriodData };
