import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  getExpense,
  postExpense,
  getIncome,
  postIncome,
  getTransactionPeriodData,
} from '../../services/kapusta-api';

const getExpenseBack = createAsyncThunk(
  'transaction/getExpense',
  async (_, thunkAPI) => {
    try {
      const { data } = await getExpense();
      console.log(`datagetExp`, data);
      return data.expenses;
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);
const addExpenseBack = createAsyncThunk(
  'transaction/addExpense',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await postExpense(newContact);

      return data.transaction;
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

const deleteExpenseBack = createAsyncThunk(
  'transaction/delete',
  async (id, thunkAPI) => {
    try {
      const data = await deleteTransaction(id);
      console.log(`datadelete`, data);
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getExpenseBack, addExpenseBack, deleteExpenseBack };
