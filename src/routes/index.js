export { default as AuthRoute } from './AuthRoute';
export { default as NotAuthRoute } from './NotAuthRoute';
// export { default as AllRoutes } from './AllRoutes';
export { default as routes } from './AllRoutes';

// import { lazy } from 'react';

// const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
// /* webpackChunkName: "AuthPage___page" */
// const Expense = lazy(() => import('../components/Expense/Expense'));
// /* webpackChunkName: "Expense___page" */
// const Income = lazy(() => import('../components/Income/Income'));
// /* webpackChunkName: "Income___page" */
// const Report = lazy(() => import('report'));
// /* webpackChunkName: "Report" */

// PUBLIC

// const authPageRoute = {
//   path: '/',
//   component: AuthPage,
//   exact: false,
// };

// // ONLY AUTH

// const expenseRoute = {
//   path: '/transaction/expense',
//   component: Expense,
//   exact: true,
//   redirectTo: '/transaction/income',
// };
// const incomeRoute = {
//   path: '/transaction/income',
//   component: Income,
//   exact: true,
//   redirectTo: '/transaction/income',
// };
// const reportRoute = {
//   path: '/report',
//   component: Income,
//   exact: true,
//   redirectTo: '/transaction/income',
// };

// // ONLY NOT AUTH

// const signUpRoute = {
//   path: '/auth/register',
//   component: AuthPage,
//   exact: true,
//   redirectTo: '/auth/login', //??????????????
// };
// const signInRoute = {
//   path: '/auth/login',
//   component: AuthPage,
//   exact: true,
//   redirectTo: '/auth/login', //??????????????
// };

// export const publicRoutes = [authPageRoute];
// export const onlyAuthRoutes = [expenseRoute, incomeRoute, reportRoute];
// export const onlyNotAuthRoutes = [signUpRoute, signInRoute];

// const allRoutes = [...publicRoutes, ...onlyAuthRoutes, ...onlyNotAuthRoutes];

// export default allRoutes;
