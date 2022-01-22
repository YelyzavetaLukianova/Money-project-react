import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials =>
  axios.post('/auth/register', credentials);

export const login = credentials => axios.post('/auth/login', credentials);

export const logout = () => axios.post(`/auth/logout`);

export const refresh = sessionId => axios.post('auth/refresh', sessionId);

export const postIncome = incomeItem =>
  axios.post('/transaction/income', incomeItem);

export const getIncome = () => axios.get('/transaction/income');

export const postExpense = expenseItem =>
  axios.post('/transaction/expense', expenseItem);

export const getExpense = () => axios.get('/transaction/expense');

export const deleteTransaction = transactionId =>
  axios.delete(`/transaction/${transactionId}`);

export const getIncomeCategories = () =>
  axios.get('/transaction/income-categories');

export const getExpenseCategories = () =>
  axios.get('/transaction/expense-categories');

export const getTransactionPeriodData = date =>
  axios.get(`/transaction/period-data?date=${date}`);

export const updateUserBalance = balance =>
  axios.patch('/user/balance', balance);

export const getUserInfo = () => axios.get('/user');

export const setGoogleToken = () => axios.get('/auth/google'); //GOOGLE??
