/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/user-auth-listener';
import UserContext from './context/user';
// import PasswordForget from './pages/forget_password';
import ProtectedRoute from './helpers/protected-route'
import IsUserLoggedIn from './helpers/is-user-logged-in';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'))
const PasswordForget = lazy(() => import('./pages/forgetPassword'));
const NotFound = lazy(() => import('./pages/not-found'))

const renderLoader = () => <p>Loading...</p>;

export default function App() {
  const user = useAuthListener();
  return (
    // it inject user into all component
    <UserContext.Provider value={{user}}> 
    <Router>
      <Suspense fallback={renderLoader()}>
        <Switch>
          
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}  path={ROUTES.LOGIN}>
          <Route path={ROUTES.LOGIN} component={Login} />
          </IsUserLoggedIn>
          
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}  path={ROUTES.SIGN_UP}>
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          </IsUserLoggedIn>

          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.NOT_FOUND} component={NotFound}/>
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD}>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact/>
          </ProtectedRoute>
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
