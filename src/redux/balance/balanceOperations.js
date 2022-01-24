import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo, updateUserBalance } from '../../services/kapustaApi';

const getBalance = createAsyncThunk(
  'balance/getBalance',
  async (_, thunkAPI) => {
    try {
      const { data } = await getUserInfo();
      return data.balance;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

const updateBalance = createAsyncThunk(
  'balance/updateBalance',
  async (newBalance, thunkAPI) => {
    try {
      const { data } = await updateUserBalance(newBalance);
      return data.newBalance;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getBalance, updateBalance };
