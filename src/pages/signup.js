/* eslint-disable import/named */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUsernameExists } from '../services/firebase';

const Inputs = {
  boxShadow: 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white'
}

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const [error, setError] = useState('');
  const isInvalid = password === '' || email === '';

  const handleSignup = async (event) => {
    event.preventDefault();
    // console.log('AMan Rathod --->')
    const usernameExists = await doesUsernameExists(username);
    // console.log('usernaemexists',usernameExists)
    if (!usernameExists) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        // authentication
        // -> emailAddress & password & username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username
        });
        console.log('username', username)
        // firebase user collection (create a document)
        await firebase
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: email.toLowerCase(),
            following: ['uSPPkYdUcQfYWcg2txDdgkmicIy1'],
            followers: [],
            dateCreated: Date.now()
          });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName('');
        setEmail('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setUsername('');
      setError('This username is already taken, please try another.');
    }

  };

  useEffect(() => {
    document.title = 'Sign up - Social Media';
  }, []);


  return (
    <div className="container flex mx-auto max-w-screen-md items-center  h-screen">
     
     <div className="flex w-3/5 border-gray-primary">
      <img src="/images/landing-photo.png" alt="Social Media Photo" />
    </div>
      
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded"
          style={{boxShadow: `14px 14px 20px  #cbced1, -14px -14px 20px white`}}>
          <h1 className="flex justify-center w-full">
          <img src="/images/2.jpg" alt="Social Media" className="rounded-full mt-2 w-6/12 mb-4"
            style={{boxShadow: '7px 7px 10px #cbced1, -7px -7px 10px white'}}
          />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignup} method="POST">

          <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              style={Inputs}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 focus:outline-none"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />

            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              style={Inputs}
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 focus:outline-none"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />

            <input 
              aria-label="Enter your email address"
              placeholder="Email address" 
              className="mt-2 text-gray-base w-full  mr-3 py-5 px-4 h-2 border border-gray-primary rounded-md tracking-tighter text-sm focus:outline-none"
              name="email" 
              type="text"
              style={Inputs}
              value={email} 
              onChange={({ target }) => setEmail(target.value)}
            />

            <input 
              placeholder="Password"
              aria-label="Enter your password"
              className="mt-2 mb-3 text-gray-base w-full text-sm  mr-3 py-5 px-4 h-2 border border-gray-primary rounded-md focus:outline-none"
              name="password" 
              type="password"
              style={Inputs}
              value={password} 
              onChange={({ target }) => setPassword(target.value)}
            />

            <button
              disabled={isInvalid}
              type="submit"
              style={{boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white'}}
              className={` relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-dark hover:bg-indigo-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            ${isInvalid && 'opacity-70'}`}
            >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                
            </span>
            Sign Up
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary"
          style={{boxShadow: `14px 14px 20px  #cbced1, -14px -14px 20px white`}}>
          <p className="text-sm">
            Have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
