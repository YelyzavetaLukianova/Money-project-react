const getDate = state => state.currentPeriod.date;
const getMonth = state => state.currentPeriod.date.month;
const getYear = state => state.currentPeriod.date.year;

const getCurrentType = state => state.currentPeriod.currentType;
const getCurrentCategory = state => state.currentPeriod.currentCategory;

const getMonthlyIncome = state => state.currentPeriod.incomes.data;
const getMonthlyExpense = state => state.currentPeriod.expense.data;
const getExpensesTotal = state => state.currentPeriod.expensesTotal;
const getIncomesTotal = state => state.currentPeriod.incomesTotal;

const getcurrentPeriodLoading = state => state.currentPeriod.loading;
const getcurrentPeriodError = state => state.currentPeriod.error;

export {
  getDate,
  getMonth,
  getYear,
  getCurrentType,
  getCurrentCategory,
  getMonthlyIncome,
  getMonthlyExpense,
  getcurrentPeriodLoading,
  getcurrentPeriodError,
  getExpensesTotal,
  getIncomesTotal,
};
