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
