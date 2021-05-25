/* eslint-disable import/named */
import { useState, useEffect, useContext } from 'react';
import { getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      // we need a function that we can call (firebase service ) that get the user data through userId.
      const [response] = await getUserByUserId(userId);
      console.log('singleuser', response);
      setActiveUser(response || {});
    }
    // if there is userID then call the function
    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [user]);

  return { user: activeUser };
}
