/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/user-auth-listener';
import UserContext from './context/user';
// import PasswordForget from './pages/forget_password';


const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const PasswordForget = lazy(() => import('./pages/forget_password'));

const renderLoader = () => <p>Loading...</p>;

export default function App() {
  const user = useAuthListener();
  return (
    <UserContext.Provider value={{user}}>
    <Router>
      <Suspense fallback={renderLoader()}>
        <Switch>
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.LOGIN} component={Login} exact />
          <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
          
          <Route path={ROUTES.PASS_FORGET} component={PasswordForget} exact/>
        </Switch>
      </Suspense>
    </Router>
    </UserContext.Provider>

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
