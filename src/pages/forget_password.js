/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { set } from '@heroicons/react/solid';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
 
export default function PasswordForget() {

  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const auth = firebase.auth();

    const [email, setEmail] = useState('');
    const [error, setError] = useState();
    const [onsuccess, setOnsuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.sendPasswordResetEmail(email).then(() => {
        
      });
      setOnsuccess(true);
      setEmail('');
      error('');
      // history.push(ROUTES.LOGIN);
    }
    catch(error) {
        // setOnsuccess(false);
        setError(error);
    };
    
    
  };
 
  const onChange = event => {
    setEmail(event.target.value);
  };
 
    const isInvalid = email === '';
 
    return (
      <>
      <div className="felx flex-col justify-center items-center m-4">
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email address"
          
        />
        
        <button disabled={isInvalid} type="submit"
        className={`mt-2 relative w- flex justify-center ml-7 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-dark hover:bg-indigo-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
         ${isInvalid && 'opacity-70'}`}
        >
          
          Reset My Password
        </button>
        
        {onsuccess && <p className="text-green-light">Check your Gmail</p>}
        {error && <p className="text-red-primary">{error.message}</p>}
      
      </form>
      </div>
      </>
    );
}

// className={`mt-2 relative w- flex justify-center ml-7 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-dark hover:bg-indigo-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
          // ${isInvalid && 'opacity-70'}`}>


         // className="mt-2 text-gray-base w-full px-3 py-1 border border-gray-primary rounded-md tracking-tighter text-sm focus:outline-none"

 