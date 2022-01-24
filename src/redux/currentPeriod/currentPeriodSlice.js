import { createSlice } from '@reduxjs/toolkit';
import { getPeriodData } from './currentPeriodOperation';

const year = String(new Date().getFullYear());
const month = String(new Date().getMonth() + 1);

const initialState = {
  date: { month, year },
  currentType: 'expenses',
  currentCategory: 'incomes',
  incomes: {
    data: {},
  },
  expense: {
    data: {},
  },
  loading: false,
  error: null,
  expensesTotal: 0,
  incomesTotal: 0,
};

const currentPeriodSlice = createSlice({
  name: 'currentPeriod',
  initialState,
  reducers: {
    //   добавить текущий тип
    addCurrentType: (state, action) => {
      state.currentType = action.payload;
    },

    // добавить текущую категорию
    addCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },

    // вернуться на один месяц назад
    goBackOneMonth: (state, action) => {
      if (Number(state.date.month) === 1) {
        state.date.year = Number(state.date.year) - 1;
        state.date.month = 12;
        return;
      }

      state.date.month = Number(state.date.month) - 1;
    },
    // вперед на один месяц
    goForwardOneMonth: (state, action) => {
      if (Number(state.date.month) === 12) {
        state.date.year = Number(state.date.year) + 1;
        state.date.month = 1;
        return;
      }

      state.date.month = Number(state.date.month) + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPeriodData.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPeriodData.fulfilled, (state, { payload }) => {
        state.incomes.data = payload.incomes.incomesData;
        state.expense.data = payload.expenses.expensesData;
        state.expensesTotal = payload.expenses.expenseTotal;
        state.incomesTotal = payload.incomes.incomeTotal;

        state.loading = false;
      })
      .addCase(getPeriodData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message.error;
      });
  },
});

export const {
  addDate,
  addCurrentType,
  addCurrentCategory,
  goBackOneMonth,
  goForwardOneMonth,
} = currentPeriodSlice.actions;

export default currentPeriodSlice.reducer;
