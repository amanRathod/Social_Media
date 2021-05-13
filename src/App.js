/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));

const renderLoader = () => <p>Loading...</p>;

export default function App() {
  return (
    <Router>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route path={ROUTES.DASHBOARD} component={Login} exact />
          <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>

    // return (
    //   <Router>
    //     <Suspense fallback={<p>Loading...</p>}>
    //       <Switch>
    //         <h1>Hello</h1>
    //         <Route path={ROUTES.LOGIN} component={Login} />
    //       </Switch>
    //     </Suspense>
    //   </Router>
    // );
  );
}
