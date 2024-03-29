/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from 'react';

import { LoginIcon } from '@heroicons/react/solid';
import { Link, useHistory } from 'react-router-dom';

// eslint-disable-next-line quotes
// eslint-disable-next-line import/named
import { signInWithGoogle, signInWithFacebook } from '../library/firebase.js';
import FirebaseContext from '../context/firebase';

import * as ROUTES from '../constants/routes';

// ==== STYLE for INPUT ====
const Inputs = {
  boxShadow: 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white'
};

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const isInvalid = password === '' || email === '';

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // await firebase
      //   .auth()
      //   .setPersistence(
      //     remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
      //   );
      await firebase.auth().signInWithEmailAndPassword(email, password);

      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Social Media';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
     
      <div className="flex w-3/5 ">
        <img src="/images/landing-photo.png" alt="Social Media" className="" />
      </div>

      <div className="flex flex-col w-2/5">
        <div
          className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded "
          style={{ boxShadow: `14px 14px 20px  #cbced1, -14px -14px 20px white` }}
        >
          <h1 className="flex justify-center w-full ">
            <img
              style={{ boxShadow: '7px 7px 10px #cbced1, -7px -7px 10px white' }}
              src="/images/2.jpg"
              alt="Social Media"
              className="rounded-full mt-2 w-6/12 mb-4"
            />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            {/* <UserAddIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}

            <input
              aria-label="Enter your email address"
              placeholder="Email address"
              className="mt-2 text-gray-base w-full px-3 py-1 border border-gray-primary rounded-md tracking-tighter text-sm focus:outline-none"
              name="email"
              type="text"
              value={email}
              style={Inputs}
              onChange={({ target }) => setEmail(target.value)}
            />

            <input
              placeholder="Password"
              aria-label="Enter your password"
              className="mt-2 mb-2 text-gray-base w-full px-3 py-1 border border-gray-primary rounded-md tracking-tighter text-sm focus:outline-none"
              name="password"
              type="password"
              value={password}
              style={Inputs}
              onChange={({ target }) => setPassword(target.value)}
            />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  onClick={() => setRemember(true)}
                  className="h-4 w-4 text-indigo-dark focus:ring-indigo-dark border-gray-light rounded"
                />
                {/* <label htmlFor="remember_me" className="ml-2 block text-xs text-gray-900">
                  Remember me
                </label> */}
              </div>

              <div className="text-xs">
                <Link
                  to={ROUTES.PASS_FORGET}
                  className="text-indigo-light hover:text-indigo-dark font-bold"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <button
              disabled={isInvalid}
              type="submit"
              style={{ boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white' }}
              className={` relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-dark hover:bg-indigo-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-light
          ${isInvalid && 'opacity-70'}`}
            >
              <span className="absolute left-1 inset-y-0 flex items-center pl-3">
                <LoginIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Log in
            </button>
          </form>

           <div className="mt-6 border-b-1 border-gray-base text-gray-base">or Sign Up Using</div>
          <div className="flex items-center justify-between">
            <button type="submit" className="focus:outline-none" onClick={signInWithFacebook }>
              <img
                src="images/icons/facebooks.png"
                alt="Social Media"
                className="mt-4 mr-3 w-6/12  mb-2 focus:outline-none transform hover:-translate-y-1 hover:scale-110"
              />
            </button>

            <button type="submit" className="focus:outline-none" onClick={signInWithGoogle}>
              <img
                src="images/icons/googles.png"
                alt="Social Media"
                className="transform hover:-translate-y-1 hover:scale-110 mt-4 ml-3 w-6/12 mb-2 focus:outline-none"
              />
            </button>
          </div>
        </div> 

        <div
          className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary"
          style={{ boxShadow: '14px 14px 20px #cbced1, -14px -14px 20px white' }}
        >
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to={ROUTES.SIGN_UP} className="text-indigo-light font-bold">
              Sign up
            </Link>
          </p>
          {/* <PasswordForget/> */}
        </div>
      </div>
    </div>
    
    
  );
}

// transform hover:-translate-y-1 hover:scale-110
