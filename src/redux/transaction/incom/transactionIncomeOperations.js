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
      return data;
    } catch (error) {
      console.log(`errorget`, error);
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
      // console.error(data)
      const objDel = {
        id,
        data,
      };
      return objDel;
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getIncomeBack, addIncomeBack, deleteIncomeExpenseBack };
