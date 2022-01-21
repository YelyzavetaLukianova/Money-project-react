import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import transExpenseReducer from './transaction/expense/transactionSlice';
import transIncomeReducer from './transaction/incom/transactionIncomeSlice';
import currentPeriodReducer from './currentPeriod/currentPeriod-slice';
import balanceReducer from './balance/balanceSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
];
const persistExpenseConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};
const persistIncomeConfig = {
  key: 'itemsIncome',
  storage,
  whitelist: ['itemsIncome'],
};

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken', 'sid'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    expense: persistReducer(persistExpenseConfig, transExpenseReducer),
    income: persistReducer(persistIncomeConfig, transIncomeReducer),
    currentPeriod: currentPeriodReducer,
    balance: balanceReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
