/* eslint-disable prettier/prettier */
import { useState, useEffect, useContext } from 'react';
import { getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';

export default function useUser() {
  
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
    const [response] = await getUserByUserId(user.uid);
      // console.log('userIddd', response);
      setActiveUser(response || {});
    }

    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
  // console.log('userr',user, activeUser);
  return { user: activeUser };
}
