import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  getIncome,
  postIncome,
  getTransactionPeriodData,
} from '../../../services/kapusta-api';

const getIncomeBack = createAsyncThunk(
  'transaction/getIncome',
  async (_, thunkAPI) => {
    try {
      const { data } = await getIncome();
      console.log(`datagetIncom`, data);
      return data.incomes;
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);
const addIncomeBack = createAsyncThunk(
  'transaction/addIncome',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await postIncome(newContact);
      console.log(`dataIncome`, data.transaction);
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
      await deleteTransaction(id);

      return id;
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getIncomeBack, addIncomeBack, deleteExpenseBack };
