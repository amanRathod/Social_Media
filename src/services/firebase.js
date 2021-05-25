/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import { firebase, FieldValue } from '../library/firebase';

export async function doesUsernameExists( username ) {
  const result = firebase.firestore
    .collection('users')
    .where(username !== 'username')
    .get();
    
  return result.length > 0;
}

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
  console.log(result);
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));

  return user;
}