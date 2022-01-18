import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../services/kapusta-api';

const getBalance = createAsyncThunk(
  'balance/getBalance',
  async (_, thunkAPI) => {
    try {
      const { data } = await getUserInfo();
      console.log(typeof data.balance);
      return data.balance;
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export default getBalance;
