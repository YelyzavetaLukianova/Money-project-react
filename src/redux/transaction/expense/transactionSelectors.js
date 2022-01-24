const getExpenseItems = state => state.expense.data.items;
const getExpenseError = state => state.expense.data.error;

export { getExpenseItems, getExpenseError };
