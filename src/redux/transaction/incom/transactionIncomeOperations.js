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

      return data.incomes;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);
const addIncomeBack = createAsyncThunk(
  'transaction/addIncome',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await postIncome(newContact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

const deleteIncomeExpenseBack = createAsyncThunk(
  'transaction/delete',
  async (id, thunkAPI) => {
    try {
      // await deleteTransaction(id);
      const { data } = await deleteTransaction(id);
      const objDel = {
        id,
        data,
      };
      return objDel;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getIncomeBack, addIncomeBack, deleteIncomeExpenseBack };
