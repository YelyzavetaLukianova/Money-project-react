import { configureStore } from '@reduxjs/toolkit';
import currentPeriodReducer from './currentPeriod/currentPeriod-slice';

export const store = configureStore({
  reducer: {
    currentPeriod: currentPeriodReducer,
  },
  //   middleware,
  devTools: process.env.NODE_ENV === 'development',
});
