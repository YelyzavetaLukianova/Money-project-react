import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  getExpense,
  postExpense,
} from '../../../services/kapusta-api';

const getExpenseBack = createAsyncThunk(
  'transaction/getExpense',
  async (_, thunkAPI) => {
    try {
      const { data } = await getExpense();

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

      return data;
    } catch (error) {
      console.log(`errorget`, error);

      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

const deleteExpenseBack = createAsyncThunk(
  'transaction/delete',
  async (id, thunkAPI) => {
    console.log(`_id Operation`, id);
    try {
      await deleteTransaction(id);

      return id;
    } catch (error) {
      console.log(`errorget`, error);
      return thunkAPI.rejectWithValue('Something wrong :(');
    }
  },
);

export { getExpenseBack, addExpenseBack, deleteExpenseBack };
