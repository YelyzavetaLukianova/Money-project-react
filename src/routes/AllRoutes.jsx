import { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoaderB from '../common/Loader/Loader';
// import AuthPage from '../pages/AuthPage/AuthPage';
import AuthRoute from './AuthRoute';
import NotAuthRoute from './NotAuthRoute';
import { publicRoutes, onlyAuthRoutes, onlyNotAuthRoutes } from './index';

// import { lazy } from 'react';

// const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
// const Expense = lazy(() => import('../components/Expense/Expense'));
// const Income = lazy(() => import('../components/Income/Income'));
// const Report = lazy(() => import('report'));
/* webpackChunkName: "AuthPage___page" */
/* webpackChunkName: "Expense___page" */
/* webpackChunkName: "Income___page" */
/* webpackChunkName: "Report___page" */

const routes = {
  AUTH: '/',
  //   HOMEPAGE: '/homepage',
  //   HOMEPAGE_INCOME: '/balanse',
  //   HOMEPAGE_EXPENSE: '/balanse/expense',
  REPORT: '/report',
};
export default routes;
// ================================================================================
// const AllRoutes = () => {
//   return (
//     <Suspense fallback={<LoaderB />}>
//   <Switch>
//     <NotAuthRoute restricted path={routes.AUTH} redirectTo={routes.AUTH}>
//       <AuthPage />
//     </NotAuthRoute>

//     <AuthRoute path={routes.EXPENSE} redirectTo={routes.INCOME}>
//       <Expense />
//     </AuthRoute>

//     <AuthRoute path={routes.INCOME} redirectTo={routes.INCOME}>
//       <Income />
//     </AuthRoute>

//     {/* <AuthRoute path={routes.REPORT} redirectTo={routes.INCOME}>
//       <Report />
//     </AuthRoute> */}

//     <Redirect to={routes.AUTH} />
//   </Switch>
//     </Suspense>
//   );
// };

// export default AllRoutes;
// ================================================================================
// const AllRoutes = () => {
//   return (
//     <Suspense fallback={<LoaderB />}>
//       <Switch>
//         <Route exact path="/" render={() => <Redirect to="/auth/register" />} />
//         {/* PUBLIC */}
//         {publicRoutes.map(({ path, component: Component, exact }) => (
//           <Route
//             key={path}
//             path={path}
//             exact={exact}
//             render={() => <Component />}
//           />
//         ))}

//         {/* ONLY AUTH */}
//         {onlyAuthRoutes.map(
//           ({ path, component: Component, exact, redirectTo }) => (
//             <Route
//               key={path}
//               path={path}
//               exact={exact}
//               render={() => (
//                 <AuthRoute redirectTo={redirectTo}>
//                   <Component />
//                 </AuthRoute>
//               )}
//             />
//           ),
//         )}

//         {/* ONLY NOT AUTH */}
//         {onlyNotAuthRoutes.map(
//           ({ path, component: Component, exact, redirectTo }) => (
//             <Route
//               key={path}
//               path={path}
//               exact={exact}
//               render={() => (
//                 <NotAuthRoute redirectTo={redirectTo}>
//                   <Component />
//                 </NotAuthRoute>
//               )}
//             />
//           ),
//         )}

//         {/* <Route render={() => <AuthPage />} /> */}
//         <Redirect to="/" />
//       </Switch>
//     </Suspense>
//   );
// };

// export default AllRoutes;
